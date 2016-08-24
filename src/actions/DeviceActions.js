
import * as types from '../constants/ActionTypes';
import Particle from 'particle-api-js';

const particle = new Particle();
// #### Constant for testing, remove for production!! ####
const token = 'd6576383889e1526c95853391923584b508071c4'; // provided by Jeff Eiden

// Get Device List
export function getDeviceList() {
  return {
    type: types.GET_DEVICE_LIST
  };
}
export function receiveDeviceList(json) {
  return {
    type: types.RECEIVE_DEVICE_LIST,
    devices: json
  };
}

// Get Device Information
export function getDeviceInfo() {
  return {
    type: types.GET_DEVICE_INFO
  };
}

export function receiveDeviceInfo(json, deviceId) {
  return {
    type: types.RECEIVE_DEVICE_INFO,
    id: deviceId,
    info: json
  };
}

// Get Device Variable
export function getDeviceVariable() {
  return {
    type: types.GET_DEVICE_VARIABLE
  };
}

export function receiveDeviceVariable(json) {
  return {
    type: types.RECEIVE_DEVICE_VARIABLE,
    variable: json
  };
}

// Post Device Function
export function postDeviceFunction() {
  return {
    type: types.POST_DEVICE_FUNCTION
  };
}

export function receiveDeviceFunction(json) {
  return {
    type: types.RECEIVE_DEVICE_FUNCTION,
    funcResponse: json
  };
}

// Gets Particle API 'List Devices' and sends response to receiveDeviceList action
export function fetchDeviceList() {
  return dispatch => {
    const devicesPr = particle.listDevices({auth: token});
    dispatch(getDeviceList(token));
    devicesPr.then(
      function(response) {
        dispatch(receiveDeviceList(response));
      },
      (err) => {
        dispatch(receiveDeviceList(["Error_Device_List"]))
      }
    );
  }
}

// Gets Particle API 'Get Device Information' and sends response to receiveDeviceInfo action
export function fetchDeviceInfo(deviceId) {
  return dispatch => {
    const devicesPr = particle.getDevice({deviceId: deviceId, auth: token});
    dispatch(getDeviceInfo(token));
    devicesPr.then(
      function(response) {
        dispatch(receiveDeviceInfo(response, deviceId));
      },
      (err) => {
        dispatch(receiveDeviceInfo(["Error_Device_Info"]))
      }
    );
  }
}

// Gets Particle API 'Get A Variable Value' and sends response to receiveDeviceVariable action
export function fetchDeviceVariable(deviceId, varName) {
  return dispatch => {
    const devicesPr = particle.getVariable({deviceId: deviceId, name: varName, auth: token});
    dispatch(getDeviceVariable());
    devicesPr.then(
      function(response) {
        dispatch(receiveDeviceVariable(response, deviceId));
      },
      (err) => {
        dispatch(receiveDeviceVariable(["Error_Device_varInfo"]))
      }
    );
  }
}

// Posts to Particle API 'Call A Function' and sends response to receiveDeviceFunction action
export function fetchDeviceFunction(deviceId, funcName, funcArg) {
  return dispatch => {
    let devicesPr = particle.callFunction({
      deviceId: deviceId,
      name: funcName,
      argument: funcArg,
      auth: token
    });
    dispatch(postDeviceFunction());
    devicesPr.then(
      function(response) {
        dispatch(receiveDeviceFunction(response));
      },
      (err) => {
        dispatch(receiveDeviceFunction(["Error_Device_Function"]))
      }
    );
  }
}
