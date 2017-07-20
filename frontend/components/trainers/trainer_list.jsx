import React from 'react';
import { Link } from 'react-router-dom';

import TrainerListItem from './trainer_list_item';

class TrainerList extends React.Component {
  componentDidMount() {
    this.props.fetchTrainers();
  }

  render() {
    const { trainers } = this.props;
    const trainerItems = trainers.map(trainer => <TrainerListItem key={trainer.id} trainer={trainer} />);

    if (trainers.length === 0) {
      return (<div>No Results</div>);
    } else {
      return (
        <section className="trainer-index">
          <ul>
            { trainerItems }
          </ul>
        </section>
      );
    }
  }
}

export default TrainerList;
