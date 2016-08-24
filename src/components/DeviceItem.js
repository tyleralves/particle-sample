/*
 Content: Device Table Row
 Display: Table row containing Particle Device List data
 Actions: Calls fetchDeviceInfo which is a dispatch bound action creator that makes Particle API call to getDevice method
 Events: When list item is clicked, table row drops down showing DeviceInfo component
 */
import React from 'react';
import DeviceInfo from './DeviceInfo';

export default class DeviceItem extends React.Component {

  constructor() {
    super();
    this.state = {
      showDeviceInfo: false
    };
  }

  render(){
    const device = this.props.item;

    // defines each property cell, converts boolean values to strings and returns blank td if value is null
    const deviceTd = Object.keys(device).map((item,index) => (
      <td key={index} className="ditem-data">
        {this.props.item[item] ? this.props.item[item].toString()  : ''}
      </td>
    ));

    return (
      <tbody>
        <tr onClick={this.onClick.bind(this, this.props.item.id)}>
          <td className="ditem-data">
            <span className={this.state.showDeviceInfo?'ion-chevron-down':'ion-chevron-right'}></span>
          </td>
          {deviceTd}
        </tr>

          {this.state.showDeviceInfo ?
            <DeviceInfo
              actions={this.props.actions}
              info={this.props.info[device.id]}
              isModalLoading={this.props.isModalLoading}
              deviceVar={this.props.deviceVar}
              funcResponse={this.props.funcResponse} /> :
            null}
        </tbody>
    );
  }

  onClick(deviceId){
    if(!this.state.showDeviceInfo){
      this.props.actions.fetchDeviceInfo(deviceId);
    }
    //Data being acquired from api,
    this.setState({showDeviceInfo: !this.state.showDeviceInfo});
  }
}