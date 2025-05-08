import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quoteImages = ["/quote1.png", "/quote2.png", "/quote3.png"];

function QuoteSection() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {quoteImages.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Quote ${index + 1}`}
                className="w-full h-auto max-w-full rounded-xl shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default QuoteSection;
