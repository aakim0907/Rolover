import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.setState({ search: newSearch });
    // this.state[field] = !this.state[field];
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    this.props.fetchTrainers(search).then(() => this.props.history.push('/trainers'));
  }

  render() {
    const buttonClass = 'search-training';
    return (
      <div className='search-box-container'>
        <div className='search-box-header'>
          <p>Select types of training you would like</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='search-box'>
            <div className={buttonClass} onClick={() => this.update('obedience')}>
              <div className='search-icon'>
                <img src={window.images.obedience} alt='obedience-icon'/>
              </div>
              <div className='search-text'>Obedience</div>
            </div>

            <div className={buttonClass} onClick={() => this.update('behavior')}>
              <div className='search-icon'>
                <img src={window.images.behavior} alt='behavior-icon'/>
              </div>
              <div className='search-text'>Behavior</div>
            </div>

            <div className={buttonClass} onClick={() => this.update('advanced')}>
              <div className='search-icon'>
                <img src={window.images.advanced} alt='advanced-icon'/>
              </div>
              <div className='search-text'>Advanced</div>
            </div>
          </div>

          <button className='btn green' onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

// <Link to={`/trainers/${this.state.search}`}>
//   <button className='btn green'>Search</button>
// </Link>
export default withRouter(SearchBox);
