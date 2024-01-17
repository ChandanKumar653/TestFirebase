"use client";
import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  nameTypography,
  priceTypography,
  cardWrap,
  topLeftIconWrap,
  topLeftIcondSpan,
  icon,
} from "./content.style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { themeColor } from "@/utils/constants";
import variables from "../variables.module.scss";
import { log } from "console";

export default function AlgoliaCard({ type = "ii", v }: any) {
  const router = useRouter();
  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up("sm"));
  const mdMatches = useMediaQuery(theme.breakpoints.up("md"));
  const lgMatches = useMediaQuery(theme.breakpoints.up("lg"));
  const xsMatches = useMediaQuery(theme.breakpoints.up("xs"));

  const styleForImage = {
    height: "50%",
    width: "inherit",
    display: "block",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    position: "absolute",
    top: 0,
  };
  // console.log(smMatches);
  // console.log(mdMatches);
  // console.log(lgMatches);
  // console.log(xsMatches);
  // if (xsMatches) {
  //   styleForImage.height = "8vh";
  // } else if (smMatches) {
  //   styleForImage.height = "15vh";
  // } else if (mdMatches) {
  //   styleForImage.height = "19vh";
  // } else if (lgMatches) {
  //   styleForImage.height = "26vh";
  // }
  if (mdMatches) {
    styleForImage.height = "65%";
  } else if (lgMatches) {
    styleForImage.height = "70%";
  }
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const createQueryString = (name: any, value: any) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  const handleClick = () => {
    // router.push(`/productDetail/detail${v?.ref?.id}`);
    router.push(
      "/productDetail/detail" + "?" + createQueryString("id", v?.itemId)
    );
    // router.push({
    //   pathname:'/productDetail/detail',
    //   query:{
    //     id:v?.ref?.id
    //   }
    // })
  };

  return (
    <>
      <div
        style={{
          ...cardWrap,
          border:
            type == "New @ Findbetter"
              ? `0.3px solid ${themeColor}`
              : `0.3px solid ${themeColor}`,
          borderRadius: "8px",
          boxShadow: isHovered ? "0 4px 4px #777" : "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={variables.styledCard}
          style={{
            // backgroundImage: `url(${v?.itemVariants?.[0]?.media?.[0]?.url})`,
            borderRadius: "7px",
            height: "96%",

            width: "100%",
            position: "relative",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
          onClick={handleClick}
        >
          <img
            src={v?.photoUrl}
            style={styleForImage}
            // className="h-20vh md:h-30vh"
          />
          {/* <br /> */}
          <div
            style={{
              margin: 6,
              position: "absolute",
              bottom: 0,
              height: "73px",
              width: "97%",
              overflow: "auto",
              color: "gray",
              // marginTop: -30,
              // paddingTop: 35,
              // textAlign: "center",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <LocationOnIcon
              sx={icon}
              style={{ marginBottom: -5, marginLeft: -3 }}
            />
            <span
              className={variables.cityName}
              style={{ fontWeight: "bold", paddingTop: 2, fontSize: "11px" }}
            >
              {v?.address?.city}
            </span>
            <br />

            <Typography
              variant="caption"
              style={{ fontWeight: "bold", fontSize: "12px", color: "black" }}
              // sx={nameTypography}
              // style={{
              //   position: "absolute",
              //   bottom: 0,
              //   left: 0,
              //   color: "white",
              // }}
            >
              {v?.name?.split("").slice(0, 17).join("")}
            </Typography>
            <br />
            <Typography variant="caption" style={{ color: "black" }}>
              <span style={{ textDecoration: "line-through" }}>
                {v?.price ? "₹" : ""} {v?.price}
              </span>
              &nbsp; &nbsp;
              <span> ₹{v?.discountedPrice}</span>
            </Typography>
          </div>
          {/* <div
            style={{
              backgroundImage: `url(${v?.itemVariants?.[0]?.media?.[0]?.url})`,
              borderRadius: "8px",
              height: "35vh",
              width: "10vw",
              margin: "6px",
            }}
          ></div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={topLeftIconWrap}>
              <span style={topLeftIcondSpan}>
                <LocationOnIcon sx={icon} />
                <span className={variables.cityName}>
                  {v?.queryAttrs?.address?.city}
                </span>
              </span>
            </div>
          </div>
          <div className={variables.cardBottom}>
            <Typography sx={nameTypography}>
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                }}
              >
                {v?.name?.split("").slice(0, 32).join("")}
              </span>
            </Typography>

            <Typography sx={priceTypography}>
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <div style={{ textDecoration: "line-through" }}>
                  ₹{v?.queryAttrs?.price}
                </div>
                <div>₹{v?.queryAttrs?.discountedPrice}</div>
              </div>
            </Typography> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
