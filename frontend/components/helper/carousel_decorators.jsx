import React from 'react';

const Decorators = [
  {
    component: class LeftArrow extends React.Component {
      render() {
        return (
          <div
            style={this.styleArrow(this.props.currentSlide === 0)}
            onClick={this.props.previousSlide}>
            Previous Slide
          </div>
        );
      }
      shouldComponentUpdate() {
        return this.props.currentSlide === 0;
      }
      styleArrow(disabled) {
        return {
          opacity: disabled ? 0.5 : 1,
          size: 10,
          color: 'white',
          padding: 10,
          fontSize: 17,
          cursor: 'pointer'
        };
      }
    },
    position: 'CenterLeft'
  }, {
    component: class RightArrow extends React.Component {
      render() {
        return (
          <div
            style={this.styleArrow(this.props.currentSlide === this.props.slideCount - 1)}
            onClick={this.props.nextSlide}>
            Next Slide
          </div>
        );
      }
      shouldComponentUpdate() {
        return this.props.currentSlide === this.props.slideCount - 1;
      }
      styleArrow(disabled) {
        return {
          opacity: disabled ? 0.5 : 1,
          size: 10,
          color: 'white',
          padding: 10,
          fontSize: 17,
          cursor: 'pointer'
        };
      }
    },
    position: 'CenterRight'
  }
];

export default Decorators;
