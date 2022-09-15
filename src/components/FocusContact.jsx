import React from "react";
import { Box, Typography } from "@mui/material";

const FocusContact = () => {
  return (
    <Box sx={container}>
      <Box>
        <Typography>OFFICE: 02744334319</Typography>
      </Box>
      <Box sx={wrapper}>
        <Typography>PHONE: 082137237222</Typography>
      </Box>
      <Box sx={wrapper}>
        <Typography>EMAIL: Bestindomegahraya@gmail.com</Typography>
      </Box>
    </Box>
  );
};

export default FocusContact;

const container = {
  display: {
    sm: "flex"
  },
  justifyContent: "center"
};

const wrapper = {
  marginLeft: {
    sm: 4
  }
};
