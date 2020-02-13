import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import "./Carousel.scss"

function Carousel({ position, total, handleClick, children }) {
  return (
    <div className="carousel">
      <div className="carousel-children">
        {children}
        <div className="carousel-arrows v-center" style={{ zIndex: "2" }}>
          <button
            className="carousel-arrow-left"
            onClick={handleClick}
            data-position={position - 1}
          >
            <i className="fa fa-angle-left" />
          </button>
          <button
            className="carousel-arrow-right"
            onClick={handleClick}
            data-position={position + 1}
          >
            <i className="fa fa-angle-right" />
          </button>
        </div>
      </div>
      <div className="carousel-dots">
        {Array(...Array(total)).map((val, index) => (
          <button
            className="carousel-dot"
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            {index === position ? "● " : "○ "}
          </button>
        ))}
      </div>
    </div>
  )
}

export default makeCarousel(Carousel)
