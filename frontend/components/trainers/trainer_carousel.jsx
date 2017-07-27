import React from 'react';
import Carousel from 'nuka-carousel';
import Decorators from '../helper/carousel_decorators';

class TrainerCarousel extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} width={595} initialHeight={600}>
        { images.map(image => {
          return (
            <div key={image.id} className='trainer-carousel-slide'>
              <img className='carousel-img' src={image.img_url} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default TrainerCarousel;
