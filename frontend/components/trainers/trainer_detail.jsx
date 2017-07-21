import React from 'react';
import { Route, Link } from 'react-router-dom';
// import renderStars from '../helper/star';

// should have review & booking container!!!
class TrainerDetail extends React.Component {
  componentDidMount() {
    // this.props.fetchTrainer(this.props.trainerID);
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <p>hi {this.props.trainer.name}</p>

      </div>
    );
  }
}

export default TrainerDetail;
