/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Grid, Link, Typography } from "@mui/material";

export interface ContactProps {
  headline: string;
  email: string;
  phoneNumber: string;
  instagramName: string;
  instagramUrl: string;
}

export default function Contact({
  headline,
  email,
  phoneNumber,

  instagramName,
  instagramUrl,
}: ContactProps) {
  return (
    <Grid container item xs={12} columnGap={4} rowGap={3}>
      {/* <Grid item xs={12} paddingBottom={3}>
        <Typography variant="h5" paragraph marginBottom={4}>
          {headline}
        </Typography>
      </Grid> */}
      <Grid item xs paddingBottom={3}>
        <Typography variant="h6">E-Mail</Typography>
        <Typography variant="h5">{email}</Typography>
      </Grid>
      <Grid item xs paddingBottom={3}>
        <Typography variant="h6">Phone</Typography>
        <Typography variant="h5">{phoneNumber}</Typography>
      </Grid>
      <Grid item xs paddingBottom={3}>
        <Typography variant="h6">Instagram</Typography>

        <Link
          href={instagramUrl}
          underline="hover"
          variant="h5"
          color={"inherit"}
          target="_blank"
          rel="noreferrer"
        >
          {instagramName}
        </Link>
      </Grid>
    </Grid>
  );
}

// +49 176 303 214 99
