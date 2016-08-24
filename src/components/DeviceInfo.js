/*
 Content: UI Variable Link and Modal
 Display: Table rows containing device information from Particle getDevice()
 Actions: None
 Events: None
 Subcomponents: DeviceInfoFunc, DeviceInfoVar
 */
import React from 'react';
import DeviceInfoVar from './DeviceInfoVar';
import DeviceInfoFunc from './DeviceInfoFunc';

export default class DeviceInfo extends React.Component {
  render() {
    let info = [], variables = [], functions = [];
    const id = this.props.id;
    if(this.props.info && this.props.info.hasOwnProperty('body')){
      info = this.props.info.body;
    }

    return (
      <tr>
        <td colSpan="5" className="dinfo-data">
          <h6>Info:</h6>
          <ul>
            {Object.keys(info).map(item => ((item !== 'variables' && item !== 'functions') ?
              <li key={item}>{item}: {info[item]}</li> :
              null))}
          </ul>
        </td>
        <td colSpan="3" className="dinfo-data">
          <h6>Variables</h6>
          <DeviceInfoVar
            actions={this.props.actions}
            info={info}
            isModalLoading={this.props.isModalLoading}
            deviceVar={this.props.deviceVar}/>
        </td>
        <td colSpan="3" className="dinfo-data">
          <h6>Functions</h6>
          <DeviceInfoFunc
            actions={this.props.actions}
            info={info}
            isModalLoading={this.props.isModalLoading}
            funcResponse={this.props.funcResponse} />
        </td>
      </tr>
    );
  }

}