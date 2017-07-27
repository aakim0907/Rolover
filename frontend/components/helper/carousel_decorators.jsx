import React from 'react';

export default [{
  component: class LeftArrow {
    render() {
      console.log('rendering arrow left');
        return (
            <div
              style={this.styleArrow(this.props.currentSlide === 0)}
              onClick={this.props.previousSlide}>
              <i className='icon-chevron-left'></i>
            </div>
        );
    }
    shouldComponentUpdate() { return this.props.currentSlide === 0; }
    styleArrow(disabled) { return { opacity: disabled ? 0 : 1 }; }
  },
  position: 'CenterLeft'
},
{
  component: class RightArrow {
    render() {
      console.log('rendering arrow right');
      return (
        <div
          style={this.styleArrow(this.props.currentSlide === this.props.slideCount - 1)}
          onClick={this.props.nextSlide}>
          <i className='icon-chevron-right'></i>
        </div>
      );
    }
    shouldComponentUpdate() { return this.props.currentSlide === this.props.slideCount - 1; }
    styleArrow(disabled) { return { opacity: disabled ? 0 : 1 }; }
  },
  position: 'CenterRight'
}];
