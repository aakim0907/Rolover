import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SessionFormContainer from './session_form/session_form_container';

const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
};

class AuthModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  displayModal(formType) {
    const modalName = (
      formType === 'login' ? "Log In" : "Sign Up"
    );
    return (
      <div>
        <button className="session-btn" onClick={this.openModal}>{modalName}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="modal">
          <button onClick={this.closeModal}>X</button>
          <SessionFormContainer formType={formType} />
        </Modal>
      </div>
    );
  }

  render() {
    const formType = this.props.formType;
    return (
      <div>
        {this.displayModal(formType)}
      </div>
    );
  }
}

export default AuthModal;
