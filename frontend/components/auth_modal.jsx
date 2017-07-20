import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SessionFormContainer from './session_form/session_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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

  render() {
    return (
      <div>
        {
        this.props.formType === 'signup' ?
          <div>
            <button onClick={this.openModal}>Sign Up</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}>
              <button onClick={this.closeModal}>X</button>
              <SessionFormContainer formType='signup' />
            </Modal>
          </div> : <div>
            <button onClick={this.openModal}>Log In</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}>
              <button onClick={this.closeModal}>X</button>
              <SessionFormContainer formType='login' />
            </Modal>
          </div>
        }
      </div>
    );
  }
}

export default AuthModal;

// START DOC
// <button onClick={this.openModal}>Open Modal</button>
// <Modal
//   isOpen={this.state.modalIsOpen}
//   onAfterOpen={this.afterOpenModal}
//   onRequestClose={this.closeModal}
//   style={customStyles}
//   contentLabel="Example Modal"
// >
//
//   <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
//   <button onClick={this.closeModal}>close</button>
//   <div>I am a modal</div>
//   <form>
//     <input />
//     <button>tab navigation</button>
//     <button>stays</button>
//     <button>inside</button>
//     <button>the modal</button>
//   </form>
// </Modal>
// END OF DOC
