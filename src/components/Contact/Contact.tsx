/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Grid, Typography } from "@mui/material";

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
    <Grid container item xs={12} alignContent="center">
      <Grid item xs={12} paddingBottom={7}>
        <Typography variant="h5" textAlign="center" paragraph>
          {headline}
        </Typography>
        <Typography variant="h4" textAlign="center">
          {email}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {contactDetails}
        </Typography>
      </Grid>
    </Grid>
  );
}
