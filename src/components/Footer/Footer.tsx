/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Grid, styled, Link as MuiLink, Divider } from "@mui/material";
import Link from "next/link";
import Contact from "../Contact/Contact";
import { Contact as ContactType } from "../../../graphql/generated";
const LinkButton = styled(MuiLink)({
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  // padding: "0 30px",
  cursor: "pointer",
});

const StyledFooter = styled("footer")(({ theme: { spacing } }) => ({
  width: "100%",
  padding: `${spacing(4)} 0 ${spacing(8)} 0`,
}));

interface FooterProps {
  contactData: ContactType;
}

export default function Footer({ contactData }: FooterProps) {
  return (
    <StyledFooter>
      <Divider sx={{ marginBottom: 4 }} />
      <Grid container item xs={12} className="italic" alignContent="end">
        <Grid item xs={12} paddingBottom={7}>
          <Contact
            headline={contactData.headline}
            email={contactData.emailAdress}
            contactDetails={contactData.contactDetails ?? ""}
          />
        </Grid>

        <Grid item textAlign="end" sx={{ marginRight: 4 }}>
          <LinkButton
            target="_blank"
            href="https://www.instagram.com/driem.works"
            rel="noreferrer"
          >
            Instagram
          </LinkButton>
        </Grid>
        <Grid item textAlign="end">
          <Link href="/imprint">
            <LinkButton>Impressum</LinkButton>
          </Link>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}
