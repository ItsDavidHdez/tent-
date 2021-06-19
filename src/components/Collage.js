import React, { useState, Suspense, lazy } from "react";
import { SliderData } from "./SliderData";
import "./Collage.css";

const Image = lazy(() => {
  SliderData.map((pic) => pic.image);
});

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
    <section className="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-gray-300 bg-opacity-10 left-0 right-0 top-0 bottom-0">
      <button className="left-arrow" onClick={prevSlide}>
        <i className="fas fa-chevron-circle-left"></i>
      </button>
      <button
        className="close text-black text-4xl absolute right-16"
        style={{ top: "15px", right: "25px" }}
        onClick={() => setShowCollage(false)}
      >
        <i className="fas fa-times-circle text-black"></i>
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <i className="fas fa-chevron-circle-right"></i>
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "relative"}
            key={index}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              {index === current && (
                <img
                  src={slide.image}
                  alt="travelimage"
                  style={{ width: "450px" }}
                />
              )}
            </Suspense>
          </div>
        );
      })}
    </section>
  );
};

export default Collage;
