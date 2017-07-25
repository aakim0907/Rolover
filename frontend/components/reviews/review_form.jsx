import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthModal from '../auth_modal';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser } = this.props;
    console.log(currentUser);
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

  // <input type='text'
  //   value={this.state.rating}
  //   onChange={this.update('rating')}
  //   className='review-input'
  //   />
  render() {

    return (
      <div className='review-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='review-form-container-1'>
            <div className='review-form-rating'>
              <label>Rating
                <input type='radio' id='rate1' onChange={this.update('rating')} value='1' />
                <input type='radio' id='rate2' onChange={this.update('rating')} value='2' />
                <input type='radio' id='rate3' onChange={this.update('rating')} value='3' />
                <input type='radio' id='rate4' onChange={this.update('rating')} value='4' />
                <input type='radio' id='rate5' onChange={this.update('rating')} value='5' />
              </label>
            </div>

            <div className='review-form-body'>
              <label>Review
                <br/>
                <textarea
                  rows='3'
                  cols='55'
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
  }
}

export default withRouter(ReviewForm);
