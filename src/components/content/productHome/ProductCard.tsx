"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Box, IconButton, List, useMediaQuery } from "@mui/material";
import {
  StyledDiv,
  cardBottom,
  innerScroll,
  nameTypography,
  priceTypography,
  scrollBackGround,
  styledCard,
  cardWrap,
  viewAllClass,
  viewLessClass,
  columnFlex,
  topLeftIconWrap,
  topLeftIcondSpan,
  topRightIconWrap,
  topRightIcondSpan,
  icon,
} from "./content.style";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { Visibility } from "@mui/icons-material";
import { themeColor } from "@/utils/constants";
import variables from "../variables.module.scss";
import SingleCard from "./singleCard";

const Cards: any = [1, 2, 3, 4, 5, 6, 7, 8, 4, 4, 5, 4, 5, 5, 5, 5];

type ProductCard = {
  type: string;
  allProduct: {}[];
  loading: boolean;
};

function ProductCard({ type, allProduct = [], loading }: ProductCard) {
  const [viewAll, setViewAll] = React.useState(true); // make it false
  const router = useRouter();
  let line1: any = React.useRef(null);
  const matches = useMediaQuery("(min-width:600px)");

  function arrayRotate(arr: any, reverse: any) {
    if (reverse) {
      line1.current.scrollLeft = line1.current.scrollLeft - 600;
    } else {
      line1.current.scrollLeft = line1.current.scrollLeft + 600;
    }
    return arr;
  }
  const handleTransition = (reverse: any) => {
    arrayRotate(Cards, reverse);
  };

  return (
    <div style={columnFlex}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: themeColor,
            fontWeight: "bold",
          }}
        >
          {!loading && allProduct.length > 0
            ? "Our Products"
            : "No Product Found!"}
        </div>
      </div>
      <div
        style={
          !viewAll
            ? { ...scrollBackGround }
            : { ...scrollBackGround, width: "100%" }
        }
      >
        {!viewAll && (
          <IconButton
            aria-label="delete"
            sx={{ margin: "auto" }}
            onClick={() => handleTransition(true)}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}

        <StyledDiv style={{ ...innerScroll }} ref={line1}>
          <List
            className={
              viewAll ? variables.viewAllClass : variables.viewLessClass
            }
          >
            {/* {console.log()} */}
            {allProduct.map((v: any, i: number) => (
              <SingleCard key={i} v={v} />
            ))}
          </List>
        </StyledDiv>
        {!viewAll && (
          <IconButton
            aria-label="delete"
            sx={{ margin: "auto" }}
            onClick={() => handleTransition(false)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
