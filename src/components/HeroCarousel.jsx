import React, { useState } from "react";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showNav, setShowNav] = useState(false);

  const slides = [slide1, slide2, slide3];
  const controlOptions = () => {
    if (currentSlide < 0) {
      return setCurrentSlide(slides.length - 1);
    } else if (currentSlide > slides.length - 1) {
      return setCurrentSlide(0);
    } else {
      return setCurrentSlide(currentSlide);
    }
  };

  const prevSlide = () => {
    controlOptions();
    setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    controlOptions();
    setCurrentSlide(currentSlide + 1);
  };

  const handleShowNav = ()=>{
    setShowNav(!showNav)
  }

  return (
    <div className="carousel">
      <div className="slides">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>
      <div className="carousel_container" onMouseOver={handleShowNav} onMouseLeave={()=>setShowNav(false)}>
        {showNav && (
          <>
            <div className="prev" onClick={prevSlide}>
              <TfiAngleLeft className="nav-icon text-primary-light-8" />
            </div>
            <div className="next" onClick={nextSlide}>
              <TfiAngleRight className="nav-icon text-primary-light-8" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroCarousel;
