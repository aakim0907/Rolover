import React from 'react';
import { Route, Link } from 'react-router-dom';
// import renderStars from '../helper/star';

// should have review & booking container!!!
//trainer.images.filter(img => img.img_type === 'main')

class TrainerDetail extends React.Component {
  componentDidMount() {
    this.props.fetchTrainer(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchTrainer(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.trainer) {
      return null;
    } 
    return (
      <div className="trainer-detail-container">
        <div className="trainer-header">
          <p>hi {this.props.trainer.name}</p>
        </div>
      </div>
    );
  }
}

export default TrainerDetail;
