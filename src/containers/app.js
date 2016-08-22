import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import DeviceReducer from '../reducers/DeviceReducer';
import * as deviceActions from '../actions/DeviceActions';

import VisibleParticleApp from './ParticleApp';
import '../styles/main.scss';
import 'bourbon';
import 'bourbon-neat';
import '../styles/_shared-styles.scss';


const reducer = combineReducers({devicelist: DeviceReducer});
const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension()));

store.dispatch(deviceActions.fetchDeviceList('d6576383889e1526c95853391923584b508071c4'));

//store.dispatch(deviceActions.getDeviceList());
export default class App extends React.Component {



  render() {
    return (
      <div>
        <Provider store={store}>
          <VisibleParticleApp />
        </Provider>
      </div>
    );
  }
}