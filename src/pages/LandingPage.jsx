import React from "react";
import {
  MainCarousel,
  CompanyCard,
  CategoryProductCard,
  KeunggulanPerusahaan
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
    </>
  );
};

export default LandingPage;
