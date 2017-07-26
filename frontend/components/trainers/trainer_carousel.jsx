import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

class TrainerCarousel extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>
        { images.map(image => {
          return (
            <div className='trainer-carousel-slide'>
              <img src={image.img_url} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default TrainerCarousel;


// <div className="project-carousel-slide">
//   <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_1080/v1495216601/Stock/Splash_emwijn.jpg" />
// </div>
