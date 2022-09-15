import React from "react";
import { MainCarousel, CompanyCard } from "../components/index";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Colors } from "../constants/styles";

const LandingPage = () => {
  return (
    <>
      <MainCarousel />
      <CompanyCard />
    </>
  );
};

export default LandingPage;
