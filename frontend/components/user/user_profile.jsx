import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id);
    this.props.fetchDogs(this.props.currentUser.id);
  }

  constructor(props) {
    super(props);

    const { currentUser } = this.props;
    this.state = {
      formOpen: true,
      dog: { user_id: currentUser.id, name: '', age_year: '', age_month: '', weight: '', breed: '', sex: '' }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dog } = this.state;
    const { currentUser } = this.props;
    this.props.createDog(dog);
    this.setState({
      formOpen: false,
      dog: { user_id: currentUser.id, name: '', age_year: '', age_month: '', weight: '', breed: '', sex: '' }
    });
  }

  renderDogs() {
    const { currentUser, dogs } = this.props;
    if (dogs.length === 0) {
      return (
        <span className='empty-span'>( You don't have any dogs saved )</span>
      );
    } else {
      return (
        <ul>
          { dogs.map(dog => (
            <li key={dog.id}>{dog.name} ({dog.sex}) - {dog.breed}
            </li>
          ))}
        </ul>
      );
    }
  }

  update(field) {
    return e => this.setState({
      dog: {
        [field]: e.currentTarget.value
      }
    });
  }

  renderDogForm() {
    if (this.state.formOpen) {
      const { dog } = this.state;
      return (
        <div className='df-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='df-1'>
              <label>Name
                <br/>
                <input type='text' value={dog.name} onChange={this.update('name')}></input>
              </label>
            </div>
            <div className='df-2'>
              <label>Breed
                <br/>
                <input type='text' value={dog.breed} onChange={this.update('breed')}></input>
              </label>
            </div>
            <div className='df-3'>
              <div className='df-3-1'>
                <label>Weight (lbs)
                  <br/>
                  <input type='text' value={dog.weight} onChange={this.update('weight')}></input>
                </label>
              </div>
              <div className='df-3-2'>
                <label>Sex
                  <br/>
                  <input type='radio' value='Male'/>Male
                  <input type='radio' value='Female'/>Female
                </label>
              </div>
            </div>

            <div className='df-4'>
              <div className='df-4-1'>
                <label>Age (years)
                  <br/>
                  <input type='text' value={dog.age_year} onChange={this.update('age_year')}></input>
                </label>
              </div>
              <div className='df-4-2'>
                <label>Age (months)
                  <br/>
                  <input type='text' value={dog.age_month} onChange={this.update('age_month')}></input>
                </label>
              </div>
            </div>

            <div className='df-5'>
              <button className='btn green' onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <button className='btn green' onClick={() => this.setState({ formOpen: true })}>Add Dog</button>
      );
    }
  }

  renderStatus(status) {
    let className;
    if (status === 'APPROVED') {
      className = 'approved';
    } else if (status === 'PENDING') {
      className = 'pending';
    } else {
      className = 'denied';
    }

    return (
      <p className={className}>{status}</p>
    );
  }

  renderBookings() {
    const { bookings } = this.props;
    if (bookings.length === 0) {
      return (
        <span className='empty-span'>( You don't have any booking records )</span>
      );
    } else {
      return (
        <div className='booking-list'>
          { bookings.map(booking => (
            <div className='booking-list-item' key={booking.id}>
              <div className='bl-1'>
                <p>{booking.training_type.toUpperCase()} training with {booking.trainer_name}</p>
              </div>
              <div className='bl-2'>
                {this.renderStatus(booking.status)}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className='user-profile-container'>
        <div className='up-1'>
          <div className='up-1-1'>
            <div className='up-profile'>
              <img className='up-profile-img' src={currentUser.profile_img_url}></img>
            </div>
            <div className='up-name'>
              <h4>{currentUser.email}</h4>
            </div>
          </div>
          <div className='up-1-2'>
            <h4 className='up-header'>Dogs</h4>
            {this.renderDogs()}
            {this.renderDogForm()}
          </div>
        </div>

        <div className='up-2'>
          <div className='up-2-1'>
            <h4 className='up-header'>Your Bookings</h4>
            {this.renderBookings()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
