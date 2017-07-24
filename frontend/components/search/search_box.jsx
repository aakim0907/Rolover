import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obedience: false, behavior: false, advanced: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    const newSearch = merge({}, this.state);
    newSearch[field] = !this.state[field];
    this.setState(newSearch);
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state;
    this.props.fetchTrainers(search).then(() => this.props.history.push('/trainers'));
  }

  render() {
    const obedience = ( this.state['obedience'] ? 'search-training-selected' : 'search-training');
    const behavior = ( this.state['behavior'] ? 'search-training-selected' : 'search-training');
    const advanced = ( this.state['advanced'] ? 'search-training-selected' : 'search-training');

    return (
      <div className='search-box-container'>

        <form onSubmit={this.handleSubmit}>
          <div className='search-box-1'>
            <div className='search-box-1-1'>
              <p>Select types of training you would like</p>
            </div>

            <div className='search-box-1-2'>
              <div className={obedience} onClick={() => this.update('obedience')}>
                <div className='search-icon'>
                  <img src={window.images.obedience} alt='obedience-icon'/>
                </div>
                <div className='search-text'>Obedience</div>
              </div>

              <div className={behavior} onClick={() => this.update('behavior')}>
                <div className='search-icon'>
                  <img src={window.images.behavior} alt='behavior-icon'/>
                </div>
                <div className='search-text'>Behavior</div>
              </div>

              <div className={advanced} onClick={() => this.update('advanced')}>
                <div className='search-icon'>
                  <img src={window.images.advanced} alt='advanced-icon'/>
                </div>
                <div className='search-text'>Advanced</div>
              </div>
            </div>
          </div>

          <div className='search-box-2'>
            <div className='search-box-2-1'>
              <p>Where are you? (coming soon!)</p>
            </div>

            <div className='search-box-2-2'>
              <input type='text' placeholder='Enter your zipcode'></input>
            </div>

            <div className='search-box-2-3'>
              <button className='btn green' onClick={this.handleSubmit}>Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBox);
