import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Colors } from "../../constants/styles";

const ContactMain = () => {
  return (
    <Box sx={container}>
      <Paper sx={wrapper}>
        <Box>
          <Typography variant="h5" style={textStyle}>
            UNTUK PELAYANAN SILAHKAN HUBUNGI KAMI
          </Typography>
          <Typography sx={[textStyle, addMarginTop]}>
            Best Fire Protection Service Company
          </Typography>
          <Button variant="contained" sx={addMarginTop}>
            <span>Kontak Kami</span>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactMain;

const container = {
  display: "flex",
  justifyContent: "center"
};

const wrapper = {
  width: "100%",
  marginTop: 5,
  paddingTop: 5,
  paddingBottom: 5,
  backgroundColor: Colors.red700
};

const textStyle = {
  fontWeight: "600",
  color: "white"
};

const addMarginTop = {
  marginTop: 1
};
