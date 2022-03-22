/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Grid, Link, Typography } from "@mui/material";

export interface ContactProps {
  headline: string;
  email: string;
  contactDetails: string;
}

export default function Contact({
  headline,
  email,
  contactDetails,
}: ContactProps) {
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} paddingBottom={4}>
        <Typography variant="h4" paragraph marginBottom={4}>
          {headline}
        </Typography>
      </Grid>
      <Grid item xs paddingBottom={7}>
        <Typography variant="h6">E-Mail</Typography>
        <Typography variant="h4">{email}</Typography>
      </Grid>
      <Grid item xs paddingBottom={7}>
        <Typography variant="h6">Phone</Typography>

        <Link
          href="https://www.instagram.com/driem.works/"
          underline="hover"
          variant="h4"
          color={"inherit"}
          target="_blank"
          rel="noreferrer"
        >
          +49 176 303 214 99
        </Link>
      </Grid>
      <Grid item xs paddingBottom={7}>
        <Typography variant="h6">Instagram</Typography>

        <Link
          href="https://www.instagram.com/driem.works/"
          underline="hover"
          variant="h4"
          color={"inherit"}
          target="_blank"
          rel="noreferrer"
        >
          @driem.works
        </Link>
      </Grid>
      <Grid item xs paddingBottom={7}>
        <Typography variant="body1">{contactDetails}</Typography>
      </Grid>
    </Grid>
  );
}
