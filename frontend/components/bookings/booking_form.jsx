import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUserId, currentTrainer } = this.props;
    this.state = { training_type: '', start_date: '', end_date: '', dog_id: '', message: '', trainer_id: currentTrainer, user_id: currentUserId };
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
    this.props.createBooking(booking);
  }

  render() {
    const { currentTrainer } = this.props;

    console.log(this.state);

    return (
      <div className='booking-form-container'>
        <h3>Contact this trainer</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='booking-form-training'>

          </div>

          <div className='booking-form-date'>

          </div>

          <div className='booking-form-dog'>

          </div>

          <div className='booking-form-msg'>
            <label>Message
              <br/>
              <textarea
                rows='5'
                cols='70'
                value={this.state.message}
                onChange={this.update('message')}
                className='booking-input'
              ></textarea>
            </label>
          </div>

          <div className='booking-form-button'>
            <input type='submit' className='btn green' value='Send Request'/>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
