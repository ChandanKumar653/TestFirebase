import { themeColor } from "@/utils/constants";
import { Autocomplete, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const StyledHeader = styled("div")`
  max-width: 100vw;
  min-height: 40px;
  // background: #888888;
  background: #f8f8f8;
  display: flex;
  vertical-align: center;
  top: 0;
  // padding:0 8px;
  color: white;
  margin: 0 0;
  background: #faf2e4;

  @media only screen and (max-width: 860px) {
    margin: 0 0vw;
    background: #303030;
  }
`;

export const StyledHeaderTop = styled("div")`
  width: 100vw;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledDownloadButton = styled("div")`
  // float: right;
  // right: 0;
  // margin: auto 10px;
  // display: flex;
  flex-direction: row;
  cursor: pointer;
  // gap:8px;
`;

export const StyledLogo = styled("div")`
  float: left;
  left: 0;
  display: flex;
  margin: 8px 12px;
  background: #f8f8f8;
  cursor: pointer;
  color: black;
`;

export const StyledAutoComplete = styled(Autocomplete)`
  // min-width: 200px;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  background: white;
  min-width: 400px;
  @media only screen and (max-width: 860px) {
    /* For mobile phones: */
    min-width: 240px;
  }

  .MuiOutlinedInput-root {
    padding: 16px;
    border-radius: 0px;
  }
  ,
  .MuiAutocomplete-input {
    padding: 0 !important;
  }
`;

export const StyledButton = styled(Button)`
  margin: auto 0;
  border: 0.5px solid #d74c51;
  color: white;
  background: #d74c51;

  :hover {
    box-shadow: 0 0 10px 100px #d74c51 inset;
    color: #d74c51;
  }
`;

export const searchDropDown: React.CSSProperties = {
  position: "absolute",
  // background:'white',
  // opacity:1,
  // zIndex:100,
  maxHeight: "70vh",
  overflow: "auto",
  width: "-webkit-fill-available",
  // width:'100vw',
  // border: '1px solid grey',
  // padding:'8px 0'
};
