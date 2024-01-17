import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: 5,
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export const useLoader = () => {
  const showLoader = (open: boolean) => {
    return <Loader />;
  };

  return {
    showLoader,
  };
};
