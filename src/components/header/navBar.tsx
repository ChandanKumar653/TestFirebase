"use client";
import React from "react";
import {
  StyledButton,
  StyledDownloadButton,
  StyledHeader,
  StyledLogo,
} from "./NavBar.style";
import { Box, useMediaQuery } from "@mui/material";
import Logo from "../../assets/logo.png";
import PlayStore from "../../assets/icons8-google-play-store-48.png";
import AppleStore from "../../assets/icons8-app-store-96.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import SearchBar from "../content/productHome/searchBar";
import SearchBar from "../content/productHome/serchBarnew";

const MainNavBar = (props: any) => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:860px)");
  return (
    <>
      {!matches ? (
        <StyledHeader sx={{ display: "flex", width: "100%" }}>
          <StyledLogo
            onClick={() => router.push("/")}
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <Box
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                marginLeft: "8px",
                // fontStyle: "oblique",
              }}
            >
              find
              <br />
              better
            </Box>
          </StyledLogo>

          <div
            style={{
              right: 12,
              position: "absolute",
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              top: ".5em",
              gap: "24px",
            }}
          >
            <SearchBar />
            <div
              style={{
                display: "flex",
              }}
            >
              <StyledButton sx={{ top: "-2px", right: "1em" }}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href={`https://qwiklyfluttertest.web.app/home`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Login
                </Link>
              </StyledButton>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "2px",
                }}
                href={`https://play.google.com/store/apps/details?id=ai.findbetter.fbapp`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={PlayStore}
                  width={36}
                  height={36}
                  alt="Picture of the author"
                />
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "2px",
                  marginLeft: "12px",
                }}
                href={`https://apps.apple.com/in/app/findbetter/id1625039512`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={AppleStore}
                  width={36}
                  height={36}
                  alt="Picture of the author"
                />
              </Link>
            </div>
          </div>
        </StyledHeader>
      ) : (
        <StyledHeader>
          {matches && (
            <StyledLogo
              sx={{
                width: "50%",
                background: "#faf2e4",
                display: "flex",
              }}
              onClick={() => router.push("/")}
            >
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="Picture of the author"
              />

              <Box
                sx={{
                  color: "#1B1212",
                  fontSize: "37px",
                  marginLeft: "8px",
                  marginTop: "4px",
                }}
              >
                find better
              </Box>
            </StyledLogo>
          )}
          {/* <StyledHeaderTop>
          <div
          onFocus={()=>      router.push(`/searchPage`)}
           className={variables.searchBar}>
            <HomePage />
          </div>
        </StyledHeaderTop> */}
          {matches && (
            <StyledDownloadButton sx={{ width: "50%", position: "relative" }}>
              <div
                style={{
                  right: 12,
                  position: "absolute",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  top: ".5em",
                  gap: "24px",
                }}
              >
                <SearchBar />
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <StyledButton sx={{ top: "-2px", right: "1em" }}>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      href={`https://qwiklyfluttertest.web.app/home`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Login
                    </Link>
                  </StyledButton>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      paddingTop: "2px",
                    }}
                    href={`https://play.google.com/store/apps/details?id=ai.findbetter.fbapp`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={PlayStore}
                      width={43}
                      height={43}
                      alt="Picture of the author"
                    />
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    href={`https://apps.apple.com/in/app/findbetter/id1625039512`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={AppleStore}
                      width={47}
                      height={47}
                      alt="Picture of the author"
                    />
                  </Link>
                </div>
              </div>
            </StyledDownloadButton>
          )}
        </StyledHeader>
      )}
    </>
  );
};

export default MainNavBar;
