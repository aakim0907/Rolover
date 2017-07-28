import React from 'react';
import { merge } from 'lodash';

class DogForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser } = this.props;
    this.state = { user_id: currentUser.id, name: '', age_year: '', age_month: '', weight: '', breed: '', sex: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser } = this.props;
    const dog = this.state;
    this.props.createDog(dog).then(
      () => {
        if (this.props.errors.length === 0) {
          this.setState({
            user_id: currentUser.id,
            name: '',
            age_year: '',
            age_month: '',
            weight: '',
            breed: '',
            sex: ''
          });
        }
      }
    );
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='df-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='df-1'>
            <label>Name
              <br/>
              <input type='text' value={this.state.name} onChange={this.update('name')}></input>
            </label>
          </div>
          <div className='df-2'>
            <label>Breed
              <br/>
              <input type='text' value={this.state.breed} onChange={this.update('breed')}></input>
            </label>
          </div>
          <div className='df-3'>
            <div className='df-3-1'>
              <label>Weight (lbs)
                <br/>
                <input type='text' value={this.state.weight} onChange={this.update('weight')}></input>
              </label>
            </div>
            <div className='df-3-2'>
              <label>Sex
                <br/>
                <input type='radio' value='M' onChange={this.update('sex')}/>Male
                <input type='radio' value='F' onChange={this.update('sex')}/>Female
              </label>
            </div>
          </div>

          <div className='df-4'>
            <div className='df-4-1'>
              <label>Age (years)
                <br/>
                <input type='text' value={this.state.age_year} onChange={this.update('age_year')}></input>
              </label>
            </div>
            <div className='df-4-2'>
              <label>Age (months)
                <br/>
                <input type='text' value={this.state.age_month} onChange={this.update('age_month')}></input>
              </label>
            </div>
          </div>

          {this.renderErrors()}

          <div className='df-5'>
            <button className='btn green' onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DogForm;
