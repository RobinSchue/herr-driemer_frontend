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
    <Grid container item xs={12} rowGap={3}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">E-Mail</Typography>
        <Typography variant="h5">{email}</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">Phone</Typography>
        <Typography variant="h5">{phoneNumber}</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
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
