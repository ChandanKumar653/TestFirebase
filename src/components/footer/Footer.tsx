"use client";
import React from "react";
import {
  StyledFooter,
  StyeledBox,
  StyledHeading,
  StyledLink,
} from "./Footer.style";
import Link from "next/link";
import Logo from "../../assets/logo2.png";
import Image from "next/image";
import { Divider, useMediaQuery } from "@mui/material";
// import FaceBook from "../../assets/icons8-facebook-48.png";
// import Instagram from "../../assets/icons8-instagram-48.png";
// import Linkdin from "../../assets/icons8-linkedin-48.png";
// import WhatsApp from "../../assets/icons8-whatsapp-48.png"
// import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Box, Container, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Phone,
  ContactPhoneRounded,
  EmailRounded,
  LocationOnRounded,
} from "@mui/icons-material";

const Callto = ({ phone, children }: any) => {
  return (
    <a
      style={{ textDecoration: "none", color: "black", fontWeight: "600" }}
      href={`tel:${phone}`}
    >
      {children}
    </a>
  );
};
const Footer = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StyledFooter>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* Add your logo here */}
            <Image src={Logo} alt="Logo" width={240} height={95} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight={600}
              fontFamily={"sans-serif"}
              gutterBottom
              borderBottom="1px solid grey"
            >
              Contact Us
            </Typography>
            <Typography mt={1} fontFamily={"Poppins"}>
              <StyledLink
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  cursor: "default",
                }}
              >
                {" "}
                <ContactPhoneRounded
                  style={{
                    fontSize: "20px",
                    color: "blue",
                    fontWeight: "bolder",
                  }}
                />{" "}
                &nbsp; +91 9380854679
              </StyledLink>{" "}
            </Typography>
            <Typography mt={1} fontFamily={"Poppins"}>
              <StyledLink
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  cursor: "default",
                }}
              >
                {" "}
                <EmailRounded
                  style={{
                    fontSize: "22px",
                    color: "red",
                    fontWeight: "bolder",
                  }}
                />{" "}
                &nbsp; support@findbetter.ai
              </StyledLink>{" "}
            </Typography>
            <Typography mt={1} fontFamily={"Poppins"}>
              <StyledLink
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  cursor: "default",
                }}
              >
                {" "}
                <LocationOnRounded
                  style={{
                    fontSize: "24px",
                    color: "red",
                    fontWeight: "bolder",
                    cursor: "none",
                  }}
                />{" "}
                &nbsp; Woodstock Business Centre #1/5, The Twin Oaks Building,
                2nd Floor, Nallurahalli Main Rd, Whitefield, Bengaluru,
                Karnataka 560066
              </StyledLink>{" "}
            </Typography>
            {/* <Typography mt={1} fontFamily={"Poppins"}>
              <span style={{ fontWeight: "bold" }}>Email: </span>{" "}
              support@findbetter.ai
            </Typography> */}

            {/* <Typography mt={1} fontFamily={"Poppins"}>
              <span style={{ fontWeight: "bold" }}>Address: </span> Woodstock
              Business Centre #1/5, The Twin Oaks Building, 2nd Floor,
              Nallurahalli Main Rd, Whitefield, Bengaluru, Karnataka 560066
            </Typography> */}
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              fontWeight={600}
              fontFamily={"sans-serif"}
              gutterBottom
              borderBottom="1px solid grey"
            >
              Other Pages
            </Typography>

            <Typography mt={1}>
              {" "}
              <StyledLink href="/about">Legal</StyledLink>
            </Typography>
            <Typography mt={1}>
              {" "}
              <StyledLink href="/about">Terms & Condition</StyledLink>
            </Typography>
            <Typography mt={1}>
              {" "}
              <StyledLink href="/about">Privacy Policy</StyledLink>
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              fontFamily={"sans-serif"}
              fontWeight={600}
              gutterBottom
              borderBottom="1px solid grey"
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex" }} mt={2}>
              <Link
                href="#"
                style={{ textDecoration: "none", color: "#1877f2" }}
              >
                <FacebookIcon style={{ marginRight: "8px" }} />
              </Link>
              <br />
              <Link
                href="#"
                style={{ textDecoration: "none", color: "#bc2a8d" }}
              >
                <InstagramIcon style={{ marginRight: "8px" }} />
              </Link>
              <br />
              <Link
                href="#"
                style={{ textDecoration: "none", color: "#0077b5" }}
              >
                <LinkedInIcon style={{ marginRight: "8px" }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </StyledFooter>
    </>
  );
};

export default Footer;
