import React from 'react';
import { Link } from 'react-router-dom';

import TrainerListItem from './trainer_list_item';
import SearchContainer from '../search/search_container';

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
        <section className="trainer-container">
          <SearchContainer where='trainerlist' />
          { trainers.map(trainer => (
            <Link key={trainer.id} to={`/trainers/${trainer.id}`}>
              <TrainerListItem trainer={trainer} />
            </Link>
          ))}
        </section>
      );
    }
  }
}

export default TrainerList;
