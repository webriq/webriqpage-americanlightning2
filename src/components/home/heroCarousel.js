import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import "./heroCarousel.css"

function Carousel({ position, total, handleClick, children }) {
  return (
    <div className="carousel">
      <div className="carousel-children">
        {children}

        <div className="atf-nav v-center" style={{ zIndex: "2" }}>
          <div
            className="atf-nav-left"
            onClick={handleClick}
            data-position={position - 1}
          >
            <i className="fa fa-angle-left" />
          </div>
          <div
            className="atf-nav-right"
            onClick={handleClick}
            data-position={position + 1}
          >
            <i className="fa fa-angle-right" />
          </div>
        </div>
      </div>
      <div className="carousel-dots">
        {Array(...Array(total)).map((val, index) => (
          <span
            className="carousel-dot"
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            {index === position ? "● " : "○ "}
          </span>
        ))}
      </div>
    </div>
  )
}

export default makeCarousel(Carousel)
