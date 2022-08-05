// The component name must finish with .client.[jsx/tsx]
import React from "react";
import Slider from "@ant-design/react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <div className="container">
      <h2>Slick Slider With Hydrogen App.</h2>
      <Slider {...settings}>
        <img src="/images/1.jpg" width="500px" height="400px" />
        <img src="/images/2.jpg" width="500px" height="400px" />
        <img src="/images/3.jpg" width="500px" height="400px" />
        <img src="/images/4.jpg" width="500px" height="400px" />
        <img src="/images/5.jpeg" width="500px" height="400px" />
      </Slider>
    </div>
  );
}
