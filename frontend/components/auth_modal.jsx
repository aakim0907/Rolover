import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SessionFormContainer from './session_form/session_form_container';

const customStyles = {
  overlay : {
    backgroundColor : 'rgba(0, 0, 0, 0.7)'
  },
  content : {
    top         : '45%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)',
    height      : '500px',
    border      : '1px solid $green'
  }
};

class AuthModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
      // formtype
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // button onclick=(this.openModal.bind(this, 'login'))

  openModal() { //arg
    this.setState({modalIsOpen: true});
    // formtype
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  displayModal(formType) {
    const modalName = (
      formType === 'login' ? "Log In" : "Sign Up"
    );

    return (
      <div>
        <button className={this.props.formType} onClick={this.openModal}>{modalName}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="modal">
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

          // <button className="btn" onClick={this.closeModal}>X</button>
