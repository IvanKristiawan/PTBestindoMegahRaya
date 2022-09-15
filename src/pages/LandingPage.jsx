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

const LandingPage = () => {
  return (
    <>
      <MainCarousel />
      <CompanyCard />
      <CategoryProductCard />
      <KeunggulanPerusahaan />
      <ContactMain />
    </>
  );
};

export default LandingPage;
