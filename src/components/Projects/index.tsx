/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { ProjectEntity } from "../../../graphql/generated";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Modal,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ImageSlider } from "../ImageSlider";

export interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>();
  const slider = useRef(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Grid container xs={12}>
      <ImageList variant="masonry" cols={isDesktop ? 3 : 1} gap={8}>
        {projects.map((project) => {
          const images = project?.attributes?.images.data
            ? project.attributes.images.data.map(
                (image) => image.attributes?.url ?? ""
              )
            : [];

          return (
            <ImageListItem key={project.id} ref={slider}>
              <img
                src={`${
                  project.attributes?.headerImage?.data?.attributes?.url ?? ""
                }?w=248&fit=crop&auto=format`}
                srcSet={`${
                  project.attributes?.headerImage?.data?.attributes?.url ?? ""
                }?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={project.attributes?.title}
                loading="lazy"
                placeholder="empty"
                onClick={() => {
                  setImages(images);
                  handleOpen();
                }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{ zIndex: 9999, backgroundColor: "black" }}
      >
        <Box>
          <Box
            sx={{
              zIndex: 10000,
              position: "absolute",
              top: { xs: "auto", sm: "8px" },
              bottom: { xs: "16px", sm: "auto" },
              left: { xs: "50%", sm: "8px" },
              right: { xs: "50%", sm: "auto" },
              backgroundColor: "black",
            }}
          >
            <CloseIcon
              htmlColor="white"
              onClick={handleClose}
              fontSize="large"
              sx={{
                transform: { xs: "translateX(-50%)", sm: "none" },
              }}
            />
          </Box>
          <ImageSlider images={images ? images : []} />
        </Box>
      </Modal>
    </Grid>
  );
};
