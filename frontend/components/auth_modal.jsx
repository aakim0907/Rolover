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
    height      : '450px',
    border      : '1px solid $green'
  }
};

class AuthModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      formtype: 'login'
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(formType) {
    this.setState({
      modalIsOpen: true,
      formType
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  // renderButton() {
  //   if (this.props.redirect === 'true') {
  //     return (
  //       <button className="login" onClick={this.openModal.bind(this, 'login')}>Log In</button>
  //       <button className="signup" onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>
  //     );
  //   } else {
  //     const { buttonClass, formType } = this.props;
  //     return (
  //       <button className={buttonClass} onClick={this.openModal.bind(this, formType)}>{formType}</button>
  //     )
  //   }
  // }

  displayModal(formType) {
    const modalName = (
      formType === 'login' ? "Log In" : "Sign Up"
    );

    return (
      <div>
        <button className="login" onClick={this.openModal.bind(this, 'login')}>Log In</button>
        <button className="signup" onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>

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
    const formType = this.state.formType;
    return (
      <div>
        {this.displayModal(formType)}
      </div>
    );
  }
}

export default AuthModal;

          // <button className="btn" onClick={this.closeModal}>X</button>
