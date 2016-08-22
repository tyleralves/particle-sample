import * as types from '../constants/ActionTypes';

const initialState = {
  devices: [],
  isLoading: false
};

export default function DeviceReducer(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_DEVICE_LIST:
      return Object.assign({}, state, {
        devices: action,
        isLoading: false
      });
    case types.GET_DEVICE_LIST:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
  }
}