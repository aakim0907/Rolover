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

    const { trainer } = this.props;

    const profile = trainer.images.find(img => img.img_type === 'profile');
    // <img src="http://res.cloudinary.com/rolover/image/upload/v1500614239/dawid-sobolewski-285655_iauvhs.jpg"/>

    return (
      <div className="trainer-detail-container">
        <div className="trainer-header">
          <div className="trainer-header-1"></div>
          <div className="trainer-header-2">
            <div className="trainer-header-2-1">
              <p>img</p>
            </div>
            <div className="trainer-header-2-2">
              <div className="th-profile">
                <div className="th-profile-img">
                  <img src={profile.img_url} />
                </div>
                <div className="th-profile-name">
                  <h2>{trainer.name}</h2>
                </div>
                <div className="th-profile-address">
                  <p>{trainer.city}, {trainer.state} {trainer.zip}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="trainer-header-3"></div>
        </div>

        <div className="trainer-description">
          <h3>About {trainer.name}</h3>
        </div>
      </div>
    );
  }
}

export default TrainerDetail;
