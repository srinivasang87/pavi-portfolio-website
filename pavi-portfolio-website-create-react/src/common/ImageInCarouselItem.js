import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const ImageInCarouselItem = (children) => {
  const imageObj = children.imageObj;

  return (<Carousel.Item>
    <img
      className="img-fluid"
      src={imageObj}
      alt="First slide"
    />              
  </Carousel.Item>);
};

export default ImageInCarouselItem;