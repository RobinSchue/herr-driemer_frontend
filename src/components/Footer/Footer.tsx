/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Grid, styled, Link as MuiLink, Divider } from "@mui/material";
import Link from "next/link";
import Contact from "../Contact/Contact";
import { Contact as ContactType } from "../../../graphql/generated";

const StyledFooter = styled("footer")(({ theme: { spacing } }) => ({
  width: "100%",
  paddingTop: `${spacing(10)}`,
}));

interface FooterProps {
  contactData?: ContactType;
}

export default function Footer({ contactData }: FooterProps) {
  return (
    <StyledFooter>
      <Grid container item xs={12}>
        <Grid item xs={12} paddingBottom={7}>
          <Contact
            headline="Kontakt"
            email="hallo@herrdriemer.de"
            contactDetails={""}
          />
        </Grid>

        <Grid item>
          <Link href="/imprint" scroll>
            <MuiLink color={"inherit"} variant="h6" underline="hover">
              Impressum
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}
