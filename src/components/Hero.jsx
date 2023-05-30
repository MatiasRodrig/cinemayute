import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/663.png";
import image2 from "./assets/684.png";
import image3 from "./assets/686.png";
import image4 from "./assets/687.png";
import image5 from "./assets/688.png";
import image6 from "./assets/691.png";
const items = [
  {
    src: image1,
    alt: "Image 1",
    caption: "Slide 1",
  },
  {
    src: image2,
    alt: "Image 2",
    caption: "Slide 2",
  },
  {
    src: image3,
    alt: "Image 3",
    caption: "Slide 3",
  },
  {
    src: image4,
    alt: "Image 3",
    caption: "Slide 3",
  },
  {
    src: image5,
    alt: "Image 3",
    caption: "Slide 3",
  },
  {
    src: image6,
    alt: "Image 3",
    caption: "Slide 3",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Intervalo de tiempo en milisegundos
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.src}>
          <img src={item.src} alt={item.alt} width='100%' />
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
