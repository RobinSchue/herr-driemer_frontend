/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { ProjectEntity } from "../../../graphql/generated";
import ImageSlider from "../ImageSlider/ImageSlider";
import {
  Grid,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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
      {images && (
        <ImageSlider
          images={images}
          isOpen={isOpen}
          handleClose={handleClose}
        />
      )}
    </Grid>
  );
};
