import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { training_type: '', start_date: '', end_date: '', dog_id: '', message: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = this.state;
    // this.props.registerBooking(booking);
  }

  render() {
    return (
      <div className='booking-form-container'>
        <h3>Contact 'trainer'</h3>

          <form onSubmit={this.handleSubmit}>
            <div className='booking-form-box'>
              
            <input type='submit' className='btn green' value='Send Request'/>
          </div>
        </form>

      </div>
    );
  }
}

export default BookingForm;
