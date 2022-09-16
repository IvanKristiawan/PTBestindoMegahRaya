import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Colors } from "../../constants/styles";
import CustomerService from "../../assets/img/CustomerService.png";

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
          <img src={CustomerService} alt="CustomerService" style={imgStyle} />
          <Box>
            <Button variant="contained" sx={addMarginTop}>
              <span>Kontak Kami</span>
            </Button>
          </Box>
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

const imgStyle = {
  width: "100px"
};
