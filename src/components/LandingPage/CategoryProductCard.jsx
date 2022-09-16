import React from "react";
import {
  Paper,
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from "@mui/material";
import FireExtinguisher from "../../assets/img/FireExtinguisher.png";
import FireHydrantSprinkler from "../../assets/img/FireHydrantSprinkler.png";
import FireAlarmSystem from "../../assets/img/FireAlarmSystem.png";
import FireSuppression from "../../assets/img/FireSuppression.png";
import { Colors } from "../../constants/styles";

const CategoryProductCard = () => {
  return (
    <Box sx={container}>
      <Typography variant="h4" sx={mainTitle}>
        Kategori Produk
      </Typography>
      <Box sx={cardContainer}>
        <Box sx={boxCard}>
          <Card sx={cardWrapper} elevation={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={FireExtinguisher}
                alt="FireExtinguisher"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={textWhite}
                >
                  Fire Extinguisher
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={textWhite}
                >
                  Fire extinguisher adalah alat yang digunakan untuk memadamkan
                  api atau mengendalikan kebakaran kecil.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={[cardWrapper, secondCard]} elevation={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={FireHydrantSprinkler}
                alt="FireHydrantSprinkler"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={textWhite}
                >
                  Fire Hydrant & Sprinkler
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={textWhite}
                >
                  Fire hydrant adalah sebuah sistem pemasok air yang berfungsi
                  untuk proteksi kebakaran.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
      <Box sx={[cardContainer, { marginTop: 2 }]}>
        <Box sx={boxCard}>
          <Card sx={[cardWrapper]} elevation={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={FireAlarmSystem}
                alt="FireAlarmSystem"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={textWhite}
                >
                  Fire Alarm System
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={textWhite}
                >
                  Fire alarm system adalah suatu sistem terintegrasi yang
                  didesain dan dibangun untuk mendeteksi adanya gejala kebakaran
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={[cardWrapper, secondCard]} elevation={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={FireSuppression}
                alt="FireSuppression"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={textWhite}
                >
                  Fire Suppression
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={textWhite}
                >
                  Fire Suppression System merupakan kombinasi dari perangkat
                  detector dengan perangkat sistem penindakan langsung.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryProductCard;

const container = {
  margin: 4,
  paddingTop: 4
};

const mainTitle = {
  fontWeight: "600",
  marginBottom: 4
};

const cardContainer = {
  display: "flex",
  justifyContent: "center"
};

const boxCard = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row"
  }
};

const cardWrapper = {
  maxWidth: 345,
  backgroundColor: Colors.grey900,
  transition: "0.6s",
  "&:hover": {
    backgroundColor: Colors.grey800
  }
};

const secondCard = {
  marginLeft: {
    sm: 2
  },
  marginTop: {
    xs: 2,
    sm: 0
  }
};

const textWhite = {
  color: "white"
};
