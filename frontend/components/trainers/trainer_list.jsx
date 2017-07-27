import React from 'react';
import { Link } from 'react-router-dom';

import TrainerListItem from './trainer_list_item';
import SearchContainer from '../search/search_container';
import Map from '../map';

class TrainerList extends React.Component {
  componentDidMount() {
    if (this.props.trainers.length === 0) {
      this.props.fetchTrainers();
    }
  }

  render() {
    const { trainers } = this.props;

    if (trainers.length === 0) {
      return (
        <div className='redirect-page'>
          <div className='redirect-1'>
            <Link to={'/'}>
              <img src='http://res.cloudinary.com/rolover/image/upload/v1501127206/sim-dog2_aq1qcv.png' className='img-redirect'></img>
            </Link>
          </div>
          <div className='redirect-2'>
            <p>No Matching Results! Try again? Click on the dog!</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='index-page'>
          <SearchContainer where='trainerlist' />
          <div className='trainer-container'>
            <div className='trainer-list'>
              { trainers.map(trainer => (
                <Link key={trainer.id} to={`/trainers/${trainer.id}`}>
                  <TrainerListItem trainer={trainer} />
                </Link>
              ))}
            </div>
            <Map />
          </div>
        </div>
      );
    }
  }
}

export default TrainerList;
