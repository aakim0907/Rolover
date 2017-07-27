import React from 'react';
import Carousel from 'nuka-carousel';
import Decorators from '../helper/carousel_decorators';

class TrainerCarousel extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} width={600} initialHeight={600}>
        { images.map(image => {
          return (
            <img className='carousel-img' src={image.img_url} />
          );
        })}
      </Carousel>
    );
  }
}

export default TrainerCarousel;
