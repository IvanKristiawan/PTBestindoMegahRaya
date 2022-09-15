import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Colors } from "../../constants/styles";

const CompanyCard = () => {
  return (
    <Box sx={container}>
      <Paper sx={wrapper}>
        <Box>
          <Typography variant="h5" style={textStyle}>
            PT BESTINDO MEGAH RAYA
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

export default CompanyCard;

const container = {
  display: "flex",
  justifyContent: "center"
};

const wrapper = {
  width: "400px",
  marginTop: 5,
  paddingTop: 5,
  paddingBottom: 2,
  backgroundColor: Colors.red600,
  transition: "0.6s",
  "&:hover": {
    width: "500px"
  }
};

const textStyle = {
  fontWeight: "600",
  color: "white"
};

const addMarginTop = {
  marginTop: 1
};
