import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { customStyles } from './helper/auth_modal_style';
import SessionFormContainer from './session_form/session_form_container';

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
    this.props.clearErrors();
    this.setState({ modalIsOpen: false });
  }

  displayModal(formType) {
    const modalName = (
      formType === 'login' ? 'Log In' : 'Sign Up'
    );

    return (
      <div>
        <button className='login' onClick={this.openModal.bind(this, 'login')}>Log In</button>
        <button className='signup' onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='modal'>
          <SessionFormContainer formType={formType} openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </div>
    );
  }

  render() {
    const formType = this.state.formType;
    if (this.props.loc === 'detail') {
      this.openModal('login');
    } else {
      return (
        <div>
          {this.displayModal(formType)}
        </div>
      );
    }
  }
}

export default AuthModal;
