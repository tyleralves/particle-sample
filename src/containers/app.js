/*
 Content: Data entry point
 Display: None
 Events: None
 Data Manipulation: Creates store and provides it to VisibleDeviceList component. Dispatches action fetchDeviceList to
  get Particle deviceList data
 ChildComponents: VisibleDeviceList (from DeviceList.js)
 */
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { bindActionCreators, combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import DeviceReducer from '../reducers/DeviceReducer';
import * as deviceActions from '../actions/DeviceActions';

import VisibleDeviceList from './DeviceList';
import '../styles/main.scss';


const reducer = combineReducers({particle: DeviceReducer});
const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension()));


export default class App extends React.Component {

  componentDidMount() {
    store.dispatch(deviceActions.fetchDeviceList());
  }

  render() {

    return (
      <div>
        <Provider store={ store }>
          <VisibleDeviceList />
        </Provider>
      </div>

    );
  }
}