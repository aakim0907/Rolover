import React from 'react';

const Decorators = [
  {
    component: class LeftArrow extends React.Component {
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            className='fa fa-angle-left'
            aria-hidden='true'
            id='leftButton'
            onClick={this.handleClick}>
          </button>
        );
      }
      handleClick(e) {
        e.preventDefault();
        this.props.previousSlide();
      }
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
        };
      }
    },
    position: 'CenterLeft'
  },
  {
    component: class RightArrow extends React.Component {
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            className='fa fa-angle-right'
            aria-hidden='true'
            id='rightButton'
            onClick={this.handleClick}>
          </button>
        );
      }
      handleClick(e) {
        e.preventDefault();
        this.props.nextSlide();
      }
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
        };
      }
    },
    position: 'CenterRight'
  }
  // {
  //   component: class Index extends React.Component {
  //     render() {
  //       const self = this;
  //       const indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
  //       return (
  //         <ul style={self.getListStyles()}>
  //           {
  //             indexes.map(function(index) {
  //               return (
  //                 <li style={self.getListItemStyles()} key={index}>
  //                   <button
  //                     style={self.getButtonStyles(self.props.currentSlide === index)}
  //                     onClick={self.props.goToSlide.bind(null, index)}>
  //                     &bull;
  //                   </button>
  //                 </li>
  //               );
  //             })
  //           }
  //         </ul>
  //       );
  //     }
  //     getIndexes(count, inc) {
  //       const arr = [];
  //       for (let i = 0; i < count; i += inc) {
  //         arr.push(i);
  //       }
  //       return arr;
  //     }
  //     getListStyles() {
  //       return {
  //         // position: 'absolute',
  //         // margin: 0,
  //         // top: -10,
  //         // padding: 0
  //         display: 'flex',
  //         width: '300',
  //         height: '300'
  //       };
  //     }
  //     getListItemStyles() {
  //       return ({
  //         // listStyleType: 'none'
  //         // display: 'flex'
  //       });
  //     }
  //     getButtonStyles(active) {
  //       return {
  //         border: 0,
  //         background: 'transparent',
  //         // color: 'black',
  //         cursor: 'pointer',
  //         padding: 10,
  //         outline: 0,
  //         fontSize: 24,
  //         opacity: active ? 1 : 0.5
  //       };
  //     }
  //   },
  //   position: 'CenterCenter'
  // }
];

export default Decorators;
