import React from "react";
import { Button, Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeColor } from "@/utils/constants";

export const StyledCardButton = styled(Button)`
  width: 100%;
  background: #003399;
  color: red;
  :hover {
    box-shadow: 0 0 10px 100px #1882a8 inset;
  }
`;

export const StyledDivWrap = styled("div")`
  height: 65vh;
  width: 80%;
  overflow-y: scroll;
  position: relative;
`;

export const StyledCard = styled("div")`
  border: 1px solid red;
`;

export const StyledScrollBox = styled("div")`
  max-width: 85vw;
  display: flex;
  gap: 16px;
  overflow: auto;
  margin: auto;
  ::-webkit-scrollbar {
    border-radius: 40px;
    margin-top: 4px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 40px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
`;

export const StyledMuiCard = styled(Card)`
  max-width: 14rem;
  min-width: 14rem;
  margin-bottom: 8px;
  boxshadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;

export const StyledBox = styled(Box)`
  // background-image: linear-gradient(
  //   #ffffff,
  //   #ffffff,
  //   #ffffff,
  //   #ffffff,
  //   #404040
  // );
  height: fit-content;
  // display:flex;
  // flex-direction:column;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const styledCard: React.CSSProperties = {
  maxWidth: "13.5rem",
  minWidth: "13.5rem",
  minHeight: "12.3rem",
  // backgroundSize: "220px",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundColor: "white",
  backgroundSize: "contain",
};

export const scrollBackGround: React.CSSProperties = {
  display: "flex",
  margin: "auto",
  width: "92%",
  padding: "0px",
  overflow: "hidden",
};

export const innerScroll: React.CSSProperties = {
  display: "flex",
  margin: "auto",
  width: "100%",
  height: "45%",
  justifyContent: "center",
  // padding: "10px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  // paddingLeft: "2.5rem",
};

export const StyledDiv = styled("div")`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const nameTypography: React.CSSProperties = {
  float: "left",
  width: "70%",
  // color: "black",
  fontSize: "14px",
  fontWeight: "bold",
  opacity: 1,
  // verticalAlign: 'bottom'
  position: "relative",
  color: "white",
};

export const priceTypography: React.CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  float: "right",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  width: "30%",
};

export const StyledCategoryButton = styled(Button)`
  display: box;
  position: relative;
  width: 60px;
  height: 60px;
  background: white;
  // box-shadow: 0 4px 4px ${themeColor};
  border-radius: 50%;
  line-height: 100px;
  text-align: center;
  text-decoration: none;
  color: black;
  border: 0.5px solid ${themeColor};
  :hover {
    background: #e0e0e0;
  }
`;

export const StyledBottomHeader = styled("div")`
  max-width: 100vw;
  min-height: 40px;
  background: #f8f8f8;
  display: flex;
  top: 0;
  // border-top: 2px solid grey;
  // gap: 24px;
  // padding: 16px;
  justify-content: center;
  vertical-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media only screen and (max-width: 860px) {
    /* For mobile phones: */
    padding: 0;
  }
`;

export const content: React.CSSProperties = {
  background: "#F8F8F8",
  padding: "3vh 0",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

export const contentHeading: React.CSSProperties = {
  textAlign: "center",
  background: "#E8E8E8",
};

export const cardBottom: React.CSSProperties = {
  backgroundColor: "white",
  zIndex: 10,
  // marginTop: "4px",
  padding: "4px 8px",
  minHeight: "40px",
};

export const cardWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "8px",
  // boxShadow: " 0 4px 4px rgba(0, 0, 0, .3)",
  cursor: "pointer",
  // maxWidth: "13.5rem"
  boxShadow: "0 4px 4px #777",
  // transform: "rotate(-3deg)",
};

export const viewAllClass: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
  transition: "20s",
  gap: "20px",
  justifyContent: "center",
};

export const viewLessClass: React.CSSProperties = {
  display: "flex",
  transition: "20s",
  gap: "20px",
};

export const columnFlex: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",

  // marginLeft: "10px",
  // paddingLeft: "30px",
};

export const topLeftIconWrap: React.CSSProperties = {
  width: "50%",
  paddingLeft: "5px",
  paddingTop: "5px",
  zIndex: 2,
};

export const topLeftIcondSpan: React.CSSProperties = {
  background: "white",
  float: "left",
  display: "flex",
  opacity: 0.8,
  zIndex: 2,
};

export const icon: React.CSSProperties = {
  width: "14px",
  marginTop: "-2px",
  color: "red",
};

export const topRightIconWrap: React.CSSProperties = {
  width: "50%",
  paddingRight: "5px",
  paddingTop: "5px",
};

export const topRightIcondSpan: React.CSSProperties = {
  background: "white",
  float: "right",
  display: "flex",
  opacity: 0.8,
  fontSize: "8px",
};

export const categoryButtonStyle: React.CSSProperties = {
  padding: "8px 8px",
  borderRadius: "8px",
  // maxWidth: "100px",
  flexFlow: "row wrap",
};
export const categoryButtonText: React.CSSProperties = {
  fontSize: "10px",
  textAlign: "center",
  paddingTop: "4px",
};

export const subCategoryWrap: React.CSSProperties = {
  justifyContent: "center",
  // display: "inline-block",
  marginBottom: "16px",
  marginTop: "4px",
  // flexFlow: "row wrap"
};

export const subCategoryChip: React.CSSProperties = {
  cursor: "pointer",
  background: "#F8F8F8",
  marginBottom: "16px",
};

export const categoryButtonWrap: React.CSSProperties = {
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
};

export const StyledBottomHeader1 = styled("div")`
  .slick-slider {
    text-align: center;
  }

  .slick-slide img {
    display: inline-block;
    max-width: 100%;
    height: 600;
    margin: 0 auto;
  }
`;
