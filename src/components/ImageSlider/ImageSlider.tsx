/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
/* eslint-disable @next/next/link-passhref */
import { Box, Modal } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ImageSliderProps {
  images: string[];
  isOpen: boolean;
  handleClose: () => void;
}

export const ImageSlider = ({
  images,
  isOpen,
  handleClose,
}: ImageSliderProps): JSX.Element => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          maxWidth: "80%",
          maxHeight: "80%",
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Slider
          adaptiveHeight={true}
          dots={true}
          infinite={true}
          speed={1000}
          slidesToScroll={1}
          arrows={true}
          slidesToShow={1}
        >
          {images.map((image, key) => (
            <img key={key} src={image} alt="project" />
          ))}
        </Slider>
      </Box>
    </Modal>
  );
};

export default ImageSlider;
