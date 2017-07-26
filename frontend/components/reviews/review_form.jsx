import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthModal from '../auth_modal';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser } = this.props;
    if ( currentUser ) {
      this.state = { user_id: currentUser.id, trainer_id: this.props.currentTrainerId, rating: '', body: '' };
    } else {
      this.state = { user_id: null, trainer_id: this.props.currentTrainerId, rating: '', body: '' };
    }

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
    this.setState({ rating: '', body: '' });
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
    if ( this.props.currentUser ) {
      return (
        <div className='review-form-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='review-form-container-1'>
              <div className='review-form-rating'>
                <label>Rating
                  <input type='radio' className='radio-star'  onClick={this.update('rating')} checked={parseInt(this.state.rating) >= 1} value='1' />
                  <input type='radio' className='radio-star'  onClick={this.update('rating')} checked={parseInt(this.state.rating) >= 2} value='2' />
                  <input type='radio' className='radio-star'  onClick={this.update('rating')} checked={parseInt(this.state.rating) >= 3} value='3' />
                  <input type='radio' className='radio-star'  onClick={this.update('rating')} checked={parseInt(this.state.rating) >= 4} value='4' />
                  <input type='radio' className='radio-star'  onClick={this.update('rating')} checked={parseInt(this.state.rating) >= 5} value='5' />
                </label>
              </div>

              <div className='review-form-body'>
                <label>Review
                  <br/>
                  <textarea
                    rows='2'
                    cols='60'
                    value={this.state.body}
                    onChange={this.update('body')}
                    className='review-input'
                    ></textarea>
                </label>
              </div>
            </div>

            <div className='review-form-container-2'>
              <input type='submit' className='btn green' value='Submit' />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className='review-form-container'>
          <p>( Log in to leave a review )</p>
        </div>
      );
    }
  }
}

export default withRouter(ReviewForm);
