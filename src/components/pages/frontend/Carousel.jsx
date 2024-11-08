import { imgPath } from "@/components/helpers/functions-general.jsx";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
  
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="overflow-x-hidden">
      <Slider {...settings}>
        <img
          src={`${imgPath}/slider-1.webp`}
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <img
          src={`${imgPath}/slider-2.webp`}
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <img
          src={`${imgPath}/slider-3.webp`}
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <img
          src={`${imgPath}/slider-4.webp`}
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <img
          src={`${imgPath}/slider-5.webp`}
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <img
          src={`${imgPath}/slider-6.webp`}
          alt=""
          className="w-full h-[300px] object-cover"
        />
      </Slider>
    </section>
  );
};

export default Carousel;
