import React from "react";
import {
  MainCarousel,
  CompanyCard,
  CategoryProductCard,
  KeunggulanPerusahaan,
  ContactMain
} from "../components/index";
import { Paper, Box, Typography, Button, Card } from "@mui/material";
import { Colors } from "../constants/styles";
import FireBackground from "../assets/img/FireBackground.png";

const LandingPage = () => {
  return (
    <>
      <MainCarousel />
      <CompanyCard />
      <Box sx={productCardContainer}>
        <CategoryProductCard />
      </Box>
      <KeunggulanPerusahaan />
      <ContactMain />
    </>
  );
};

export default LandingPage;

const productCardContainer = {
  backgroundImage: `url(${FireBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingBottom: 1,
  marginTop: 6
};
