import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthModal from '../auth_modal';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, body: '', trainer_id: this.props.currentTrainerId };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.formType !== nextProps.formType) {
  //     this.props.clearErrors();
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    this.props.createReview(review);
  }

  // renderErrors() {
  //   return(
  //     <ul className='errors'>
  //       {this.props.errors.map( (error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className='review-form-container'>
        <form onSubmit={this.handleSubmit}>
          <label>Rating
            <input type='text'
              value={this.state.rating}
              onChange={this.update('rating')}
              className='review-input'
              />
          </label>

          <label>Review
            <input type='textarea'
              value={this.state.body}
              onChange={this.update('body')}
              className='review-input'
              />

          </label>
          <input type='submit' className='btn green' value='Submit Review' />
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
