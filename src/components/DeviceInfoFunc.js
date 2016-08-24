/*
 Content: UI Function Link and Modal
 Display: Unordered List and modal used within the DeviceInfo component
 Actions: Calls dispatch-bound action creator fetchDeviceFunction which makes Particle API call to callFunction()
 Events: When list item is clicked, modal opens containing variable info via particle.getVariable
 */
import React from 'react';

export default class DeviceInfoFunc extends React.Component {

  render() {
    const device = this.props.info.id;
    const functions = this.props.info.hasOwnProperty('functions') ? this.props.info.functions : [];
    return (
      <ul>
        {Object.keys(functions).map((item, index) => (
            <li key={index}>
              <div className="modal">
                <label htmlFor={"modal-func-"+device+"-"+functions[item]}>
                  <span className="modal-trigger">{functions[item]}</span>
                </label>
                <input className="modal-state" id={"modal-func-"+device+"-"+functions[item]} type="checkbox"/>
                <div className="modal-fade-screen">
                  <div className="modal-inner">
                    <div
                      className="modal-close"
                      htmlFor={"modal-func-"+device+"-"+functions[item]}
                      onClick={this.onFuncModalClose.bind(this, "modal-func-"+device+"-"+functions[item])}></div>
                    <h3>Function {functions[item]}</h3>
                    <div className="modal-content">
                      <div className="form-group">
                        <input type="text" id={"func-input-"+device+"-"+functions[item]} className="form-control"/>
                        <label htmlFor={"func-input-"+device+"-"+functions[item]}>Argument (up to 63 characters):</label>
                      </div>
                      <button
                        className="btn"
                        onClick={this.onFuncCall.bind(this, device, functions[item], "func-input-"+device+"-"+functions[item])}>
                        Call
                      </button>
                      {this.props.isModalLoading ? (
                        <div className="loading-container modal-loading-container">
                          <p><i className="icon load-icon ion-load-c"></i></p>
                        </div> ) :
                        (
                        <div>
                          {JSON.stringify(this.props.funcResponse)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    )
  }

  onFuncCall(deviceId, funcName, inputId) {
    const funcArg = document.getElementById(inputId).value;
    this.props.actions.fetchDeviceFunction(deviceId, funcName, funcArg);
  }
  onFuncModalClose(modalId) {
    document.getElementById(modalId).checked = false;
  }
}