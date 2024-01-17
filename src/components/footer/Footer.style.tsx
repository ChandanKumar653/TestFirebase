import { Autocomplete, TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
export const StyledFooter = styled("div")`
  bottom: 0;
  min-height: 40px;
  background: #fbf6ed;
  max-width: 100vw;
  padding: 12px 48px;
  display: flex;
  gap: 24px;
  color: black;
  @media only screen and (max-width: 860px) {
    margin: 0 0vw;
  }
`;

export const StyeledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 24%;
  margin: auto;
`;

export const StyledHeading = styled("h2")`
  margin-bottom: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #343434;
`;
export const StyledLink = styled("a")`
  text-decoration: none;
  color: black;
  font-family: "Poppins", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;
