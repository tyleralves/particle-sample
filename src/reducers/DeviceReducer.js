import * as types from '../constants/ActionTypes';

const initialState = {
  devices: [],
  info: {},
  isLoading: false,
  isModalLoading: false
};

let info = {info: {}};

export default function DeviceReducer(state = initialState, action) {


  switch (action.type) {
    /*
      Get Device List
      */
    // Particle API call is about to be made
    case types.GET_DEVICE_LIST:
      return Object.assign({}, state, {
        isLoading: true
      });
    // Particle API device list data ready for use
    case types.RECEIVE_DEVICE_LIST:
      return Object.assign({}, state, {
        devices: action.devices,
        isLoading: false
      });
    /*
      Get Device Information
     */
    case types.GET_DEVICE_INFO:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.RECEIVE_DEVICE_INFO:

      info.info[action.id] = action.info;
      return Object.assign({}, state, info, {
        isLoading: false
      });
    /*
     Get Device Variable
     */
    case types.GET_DEVICE_VARIABLE:
      return Object.assign({}, state, {
        isModalLoading: true
      });
    case types.RECEIVE_DEVICE_VARIABLE:
      return Object.assign({}, state, {
        variable: action.variable,
        isModalLoading: false
      });
    /*
     Post Device Function
     */
    case types.POST_DEVICE_FUNCTION:
      return Object.assign({}, state, {
        isModalLoading: true
      });
    case types.RECEIVE_DEVICE_FUNCTION:
      return Object.assign({}, state, {
        funcResponse: action.funcResponse,
        isModalLoading: false
      });
    // Default
    default:
      return state;
  }
}