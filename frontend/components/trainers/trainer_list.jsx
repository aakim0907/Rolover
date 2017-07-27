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
      return (<div>No Results</div>);
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
