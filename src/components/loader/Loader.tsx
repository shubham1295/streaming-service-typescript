import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Backdrop
      sx={{
        backgroundColor: "#020d18",
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
