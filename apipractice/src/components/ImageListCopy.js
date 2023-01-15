import "./ImageListCopy.css";
import React from "react";
import ImageShow from "./ImageShow";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function ImageListCopy({ images }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="btnClose"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
            />
          </div>
          <div className="fullScreenImage">
            <img src={images[slideNumber].urls.regular} alt="kep" />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {images &&
          images.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.urls.small} alt={slide.alt_description} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImageListCopy;
