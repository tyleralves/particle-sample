/*
  Content: UI Variable Link and Modal
  Display: Unordered List and modal used within the DeviceInfo component
  Actions: Calls dispatch-bound action creator fetchDeviceVariable which makes Particle API call to getVariable()
  Events: When list item is clicked, modal opens containing variable info via particle.getVariable
 */
import React from 'react';

export default class DeviceInfoVar extends React.Component {

  render() {
    const device = this.props.info.id;
    const variables = this.props.info.hasOwnProperty('variables') ? this.props.info.variables : [];
    return (
      <ul>
        {Object.keys(variables).map((item,index) => (
            <li key={index}>
              <div className="modal">
                <label htmlFor={"modal-var-"+device+"-"+variables[item]}>
                  <span className="modal-trigger">{item} ({variables[item]})</span>
                </label>
                <input className="modal-state" id={"modal-var-"+device+"-"+variables[item]} type="checkbox"
                       onChange={this.onVarModalOpen.bind(this, this.props.info.id, item)}/>
                <div className="modal-fade-screen">
                  <div className="modal-inner">
                    <div
                      className="modal-close"
                      htmlFor={"modal-var-"+device+"-"+variables[item]}
                      onClick={this.onVarModalClose.bind(this, "modal-var-"+device+"-"+variables[item])}></div>
                    <h3>Variable {item}</h3>
                    {this.props.isModalLoading ? (
                      <div className="loading-container modal-loading-container">
                        <p><i className="icon load-icon ion-load-c"></i></p>
                      </div> ) :
                      (
                        <div>
                          <p className="modal-content">{JSON.stringify(this.props.deviceVar)}</p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    )
  }

  onVarModalOpen(deviceId, varName) {
    this.props.actions.fetchDeviceVariable(deviceId, varName);
  }
  onVarModalClose(modalId) {
    document.getElementById(modalId).checked = false;
  }
}