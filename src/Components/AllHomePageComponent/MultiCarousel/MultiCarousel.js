import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import caro1 from "../../../images/carousel-1.png";
import caro2 from "../../../images/carousel-2.png";
import caro3 from "../../../images/carousel-3.png";
import caro4 from "../../../images/carousel-4.png";
import caro5 from "../../../images/carousel-5.png";

const MultiCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img height="200px" src={caro1} />
      </div>
      <div>
        <img height="200px" src={caro2} />
      </div>

      <div>
        <img height="200px" src={caro4} />
      </div>
      <div>
        <img height="200px" src={caro5} />
      </div>
      <div>
        <img height="200px" src={caro3} />
      </div>
      <div>
        <img height="200px" src={caro1} />
      </div>
      <div>
        <img height="200px" src={caro2} />
      </div>

      <div>
        <img height="200px" src={caro4} />
      </div>
      <div>
        <img height="200px" src={caro5} />
      </div>
      <div>
        <img height="200px" src={caro3} />
      </div>
    </Carousel>
  );
};

export default MultiCarousel;
