import React from 'react';
import { Route, Link } from 'react-router-dom';
// import renderStars from '../helper/star';

// should have review & booking container!!!

//trainer.images.filter(img => img.img_type === 'main')
class TrainerDetail extends React.Component {
  render() {
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
