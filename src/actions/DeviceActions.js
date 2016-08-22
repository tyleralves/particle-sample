
import * as types from '../constants/ActionTypes';
import Particle from 'particle-api-js';

export function getDeviceList(token) {
  return {
    type: types.GET_DEVICE_LIST,
    token,
  };
}

export function receiveDeviceList(json) {
  return {
    type: types.RECEIVE_DEVICE_LIST,
    devices: json//json.data.children.map(child => child.data)
  };
}

export function getDeviceInfo(deviceId, token) {
  return {
    type: types.GET_DEVICE_INFO,
    deviceId,
    token
  };
}

export function getDeviceVariable(deviceId, deviceName, token) {
  return {
    type: types.GET_DEVICE_VARIABLE,
  };
}

export function postDeviceFunction(deviceId, deviceName, deviceArg, token) {
  return {
    type: types.POST_DEVICE_FUNCTION,
    deviceId,
    deviceName,
    deviceArg,
    token
  };
}

export function fetchDeviceList(token) {
  const particle = new Particle();
  return dispatch => {
    dispatch(getDeviceList(token));
    /*
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
    */
    var devicesPr = particle.listDevices({auth: token});
    devicesPr.then(
      function(response) {
        dispatch(receiveDeviceList(response));
      },
      (err) => {
        dispatch(receiveDeviceList(["Error_Device_Query"]))
      }
    );
      //.then(json => dispatch(receiveDeviceList(json)));

  }
}

/*
particle(method){
  var particle = new Particle();

  var token = 'd6576383889e1526c95853391923584b508071c4'; // provided by Jeff Eiden
  var deviceId = '2a002c000a47343232363230';
  var deviceName = 'test-b';
  var deviceArgument = 'D0:HIGH';
  var devicesPr;

  switch (method) {
    case 'listDevices':
      devicesPr = particle.listDevices({auth: token});
      break;
    case 'getDeviceInfo':
      devicesPr = particle.getDevice({deviceId: deviceId, auth: token});
      break;
    case 'getDeviceVariable':
      devicesPr = particle.getVariable({deviceId: deviceId, name: deviceName, auth: token});
      break;
    case 'callDeviceFunction':
      devicesPr = particle.callFunction({
        deviceId: deviceId,
        name: deviceName,
        argument: deviceArgument,
        auth: token
      });
      break;
    default:
      console.log('DEFAULT');
      break;
  }
  */