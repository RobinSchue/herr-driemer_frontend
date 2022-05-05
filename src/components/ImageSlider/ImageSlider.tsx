/* eslint-disable react/display-name */
/* eslint-disable @next/next/link-passhref */
import { Box, Modal } from "@mui/material";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SimpleImageSlider from "react-simple-image-slider";

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
  const style = {
    position: "absolute" as "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxheight: "70vh",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </Box>
    </Modal>
  );
};

export default ImageSlider;
