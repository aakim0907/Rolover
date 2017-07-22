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
          <div className="trainer-header-1" />
          <div className="trainer-header-2">
            <div className="trainer-header-2-1">
              <img src="http://res.cloudinary.com/rolover/image/upload/v1500614239/dawid-sobolewski-285655_iauvhs.jpg"/>
            </div>
            <div className="trainer-header-2-2">

            </div>
          </div>
          <div className="trainer-header-3" />
        </div>
      </div>
    );
  }
}

export default TrainerDetail;
