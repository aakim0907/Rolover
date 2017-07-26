import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUserId, currentTrainerId } = this.props;
    this.state = { training_type: '', start_date: '', end_date: '', dog_id: 1, message: '', trainer_id: currentTrainerId, user_id: currentUserId };

    this.currentDate = (new Date()).toJSON().slice(0, 10);
    this.toggleTraining = this.toggleTraining.bind(this);
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
    this.props.createBooking(booking).then(() =>
      this.props.history.push('/profile'));
  }

  toggleTraining(type) {
    this.setState({
      ['training_type']: type
    });
  }

  renderDogForm() {
    // if (this.props.currentUser.dogs.length !== 0) {
      return (
        <div className='booking-form-dog'>
          <div className='dog-form-1'>
            <div className='df-1-1'>
              <label>Name
                <br/>
                <input type='text' className='booking-input'></input>
              </label>
            </div>
            <div className='df-1-2'>
              <label>Weight (lbs.)
                <br/>
                <input type='text' className='booking-input'></input>
              </label>
            </div>
          </div>

          <div className='dog-form-2'>
            <label>Breeds
              <br/>
              <input type='text' className='booking-input'></input>
            </label>
          </div>

          <div className='dog-form-3'>
            <div className='df-3-1'>
              <label>Age (years)
                <br/>
                <input type='text' className='booking-input'></input>
              </label>
            </div>
            <div className='df-3-2'>
              <label>Age (months)
                <br/>
                <input type='text' className='booking-input'></input>
              </label>
            </div>
            <div className='df-3-3'>
              <label>Sex
                <br/>
                <input type='radio' value='Male'/>Male
                <input type='radio' value='Female'/>Female
              </label>
            </div>
          </div>
        </div>
      );
    // } else {
    //   return (
    //     <div className='booking-form-dog'>
    //
    //     </div>
    //   );
    // }
  }

  render() {
    console.log(this.state);

    return (
      <div className='booking-form-container'>
        <h3>Contact Trainer</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='booking-form-question'>
            <p>Which training type would you like? (Select one)</p>
          </div>

          <div className='booking-form-training'>
            <div className={this.state['training_type'] === 'obedience' ? 'booking-training-selected' : 'booking-training' } onClick={() => this.toggleTraining('obedience')}>
              <div className='booking-icon'>
                <img src={window.images.obedience} alt='obedience-icon'/>
              </div>
              <div className='search-text'>Obedience</div>
            </div>

            <div className={this.state['training_type'] === 'behavior' ? 'booking-training-selected' : 'booking-training' } onClick={() => this.toggleTraining('behavior')}>
              <div className='booking-icon'>
                <img src={window.images.behavior} alt='behavior-icon'/>
              </div>
              <div className='search-text'>Behavior</div>
            </div>

            <div className={this.state['training_type'] === 'advanced' ? 'booking-training-selected' : 'booking-training' } onClick={() => this.toggleTraining('advanced')}>
              <div className='booking-icon'>
                <img src={window.images.advanced} alt='advanced-icon'/>
              </div>
              <div className='search-text'>Advanced</div>
            </div>
          </div>

          <div className='booking-form-question'>
            <p>Select preferred date range for the training session</p>
          </div>

          <div className='booking-form-date'>
            <div className='bfd-1'>
              <span>Start: </span>
              <input type='date' name='start_date' value={this.state.start_date} onChange={this.update('start_date')} min={this.currentDate} />
            </div>
            <div className='bfd-2'>
              <span>End: </span>
              <input type='date' name='end_date' value={this.state.end_date} onChange={this.update('end_date')} min={this.currentDate} />
            </div>
          </div>

          <div className='booking-form-question'>
            <h4>Dogs</h4>
          </div>

          {this.renderDogForm()}

          <div className='booking-form-question'>
            <h4>Message</h4>
          </div>

          <div className='booking-form-msg'>
            <textarea
              rows='4'
              cols='70'
              value={this.state.message}
              onChange={this.update('message')}
            ></textarea>
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
