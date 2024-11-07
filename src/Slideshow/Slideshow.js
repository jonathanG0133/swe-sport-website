import React, { useState } from "react";
import "./slideShow.css";
import fotbollSlide from "./fotbollSlide.png";
import hockeySlide from "./ishockeySlide.png";
import innebandySlide from "./innebandySlide.png";

function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="carousel"
      className="carousel slide container-fluid"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li
          className={activeIndex === 0 ? "item active" : "item"}
          onClick={() => handleIndicatorClick(0)}
          data-bs-target="#carousel"
          data-bs-slide-to="0"
        ></li>
        <li
          className={activeIndex === 1 ? "item active" : "item"}
          onClick={() => handleIndicatorClick(1)}
          data-bs-target="#carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          className={activeIndex === 2 ? "item active" : "item"}
          onClick={() => handleIndicatorClick(2)}
          data-bs-target="#carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>

      {/* Slides */}
      <div className="carousel-inner">
        <div
          className={
            activeIndex === 0 ? "carousel-item active" : "carousel-item"
          }
        >
          <img src={fotbollSlide} alt="Slide 1" className="d-block w-100" />
        </div>
        <div
          className={
            activeIndex === 1 ? "carousel-item active" : "carousel-item"
          }
        >
          <img src={hockeySlide} alt="Slide 2" className="d-block w-100" />
        </div>
        <div
          className={
            activeIndex === 2 ? "carousel-item active" : "carousel-item"
          }
        >
          <img src={innebandySlide} alt="Slide 3" className="d-block w-100" />
        </div>
      </div>

      {/* Controls */}
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Slideshow;
