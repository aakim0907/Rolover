import React from 'react';

const Decorators = [
  {
    component: class LeftArrow extends React.Component {
      render() {
        return (
          <div
            style={this.styleArrow()}
            onClick={this.props.previousSlide}>
            &lt;
          </div>
        );
      }
      shouldComponentUpdate() {
        return this.props.currentSlide === 0;
      }
      styleArrow() {
        return {
          size: 9,
          color: 'white',
          padding: 15,
          fontSize: 40,
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.2)'
        };
      }
    },
    position: 'CenterLeft'
  }, {
    component: class RightArrow extends React.Component {
      render() {
        return (
          <div
            style={this.styleArrow()}
            onClick={this.props.nextSlide}>
            &gt;
          </div>
        );
      }
      shouldComponentUpdate() {
        return this.props.currentSlide === this.props.slideCount - 1;
      }
      styleArrow() {
        return {
          size: 9,
          color: 'white',
          padding: 15,
          fontSize: 40,
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.2)'
        };
      }
    },
    position: 'CenterRight'
  }
];

export default Decorators;
