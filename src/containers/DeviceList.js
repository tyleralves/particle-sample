/*
 Content: Device List Table
 Display: Table containing table header row and device list subcomponent rows (DeviceItem)
 Events: None
 Data Manipulation: Binds state from store to properties, binds all dispatched action creators to action prop
 ChildComponents: DeviceItem
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DeviceItem from '../components/DeviceItem';
import * as DeviceActions from '../actions/DeviceActions';

export default class DeviceList extends React.Component {

  render() {
    let name, loading, tHead, tBody;

    if(this.props.deviceList.hasOwnProperty('body')){
      const devices = this.props.deviceList;
      const deviceInfo = this.props.deviceInfo;
      // Checks if data received from Particle API. If yes, builds device table rows
      if(devices.hasOwnProperty('body') && devices.body.length){

        tHead = Object.keys(devices.body[0]).map(function(item, index) {
          const capItem = item.charAt(0).toUpperCase() + item.slice(1);
          return <th key={index}><b>{capItem}</b></th>});

        tBody = devices.body.map((item, index) => ([
            <DeviceItem
              key={index}
              actions={this.props.actions}
              item={item}
              info={deviceInfo}
              isModalLoading={this.props.isModalLoading}
              deviceVar={this.props.deviceVar}
              funcResponse={this.props.funcResponse} />
          ])
        );
      }else{
        tBody = <tbody><tr><td><span>You do not have any registered devices.</span></td></tr></tbody>;
      }
    }
    return (
      <div id="dl-container">
        <h3 className="">Device List</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              {tHead}
            </tr>
          </thead>
            {tBody}
        </table>
        {this.props.isLoading ? (
        <div className="loading-container">
          <p><i className="icon load-icon ion-load-c"></i></p>
        </div> ) : null}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    deviceList: state.particle.devices,
    deviceInfo: state.particle.info,
    deviceVar: state.particle.variable,
    funcResponse: state.particle.funcResponse,
    isLoading: state.particle.isLoading,
    isModalLoading: state.particle.isModalLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(DeviceActions, dispatch)};
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(DeviceList);

//export default VisibleDeviceList;