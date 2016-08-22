import React from 'react';
import { connect } from 'react-redux';
import * as deviceActions from '../actions/DeviceActions';


export default class ParticleApp extends React.Component {

  render() {
    let name;
    let loading;

    if(this.props.isLoading){
      loading = "loading.....";
    }else{
      loading = '';
    }

    if(this.props.deviceList.hasOwnProperty('devices')){
      name = this.props.deviceList.devices.body.map(item => (<p key={item.id}>{item.name}</p>));
    }
    return (
      <div>
        <button className="btn">Particle Button</button>
        <p id="test">{loading}</p>
        <b>{name}</b>
      </div>
    );
  }
}

let VisibleParticleApp = connect(state => ({deviceList: state.devicelist.devices, isLoading:state.devicelist.isLoading}))(ParticleApp);
export default VisibleParticleApp;
//state.default.devices.body
