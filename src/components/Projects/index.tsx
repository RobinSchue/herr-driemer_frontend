/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { ProjectEntity } from "../../../graphql/generated";

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
  const handleClose = () => setIsOpen(false);

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
                  setImages(images), handleOpen();
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
      >
        <ImageSlider images={images ? images : []} />
      </Modal>
    </Grid>
  );
};
