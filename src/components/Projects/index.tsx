/* eslint-disable @next/next/no-img-element */
import { Grid, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { ProjectEntity } from "../../../graphql/generated";
import { buildUrl } from "cloudinary-build-url";
import Image from "next/image";

export interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <Grid container xs={12}>
      <ImageList variant="masonry" gap={8} cols={3}>
        {projects.map((project: ProjectEntity) => {
          const url = buildUrl(
            project.attributes?.headerImage?.data?.attributes?.url || "",
            {
              cloud: {
                cloudName: "rosccloudinary",
              },
              transformations: {
                width: 1000,
              },
            }
          );
          const cloudinaryUrl =
            project.attributes?.headerImage.data?.attributes?.url || "";

          const getInfoUrl =
            cloudinaryUrl.slice(0, 55) + "w_600/" + cloudinaryUrl.slice(55);

          console.log(getInfoUrl);

          return (
            <ImageListItem key={project.id}>
              <img
                src={url}
                srcSet={url}
                alt={project.attributes?.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Grid>
  );
};
