/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../Footer/Footer";

const StyledImageContainer = styled("footer")(({ theme: { spacing } }) => ({
  // width: "20px",
}));

export interface AboutProps {
  headline: string;
  text: string;
}

export default function About({ headline, text }: AboutProps) {
  return (
    <Grid container item xs={12}>
      {/* <Grid item xs={12}>
        <Typography variant="h4" paragraph>
          {headline}
        </Typography>
      </Grid> */}
      <Grid container item xs={12} columnGap={2}>
        <Grid item xs={12} sm={4} paddingBottom={7}>
          <StyledImageContainer>
            <Image
              src="/luke-portrait.jpg"
              alt="Lukas Portrait"
              width={2200}
              height={1467}
              layout="responsive"
            />
          </StyledImageContainer>
        </Grid>
        <Grid item xs={12} sm={4} paddingBottom={7}>
          <Typography variant="body1">{text}</Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
