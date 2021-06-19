import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./Collage.css";

const Collage = ({ slides, setShowCollage }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        left
      </button>
      <button onClick={() => setShowCollage(false)}>X</button>
      <button className="right-arrow" onClick={nextSlide}>
        right
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travelimage" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Collage;
