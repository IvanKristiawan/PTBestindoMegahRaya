import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Paper, Box, Typography, Button, Card } from "@mui/material";
import KeunggulanImg from "../../assets/img/KeunggulanImg.png";
import KeunggulanImg2 from "../../assets/img/KeunggulanImg2.jpeg";
import { Colors } from "../../constants/styles";

const KeunggulanPerusahaan = () => {
  const { screenSize } = useStateContext();
  return (
    <Box sx={contained}>
      <Box sx={container}>
        <Typography variant="h6" sx={mainTitle}>
          KEUNGGULAN PERUSAHAAN
        </Typography>
        <Box sx={contentContainer}>
          {screenSize <= 650 && (
            <Box sx={secondContent}>
              <img src={KeunggulanImg2} alt="KeunggulanImg2" style={smallImg} />
            </Box>
          )}
          <Box sx={firstContent}>
            <Paper elevation={3} sx={contentWrapper}>
              <Typography sx={contentTitle}>
                1. Mitra Terbaik untuk Segala Sektor
              </Typography>
            </Paper>
            <Box sx={contentDetail}>
              <Typography sx={detail}>
                PT. Bestindo Megah Raya telah berkomitmen untuk menjadi bagian
                penting dari bidang proteksi kebakaran di berbagai sektor.
              </Typography>
            </Box>
            <Paper elevation={3} sx={[contentWrapper, moreContentWrapper]}>
              <Typography sx={contentTitle}>
                2. Mampu Melakukan Supply Nasional
              </Typography>
            </Paper>
            <Box sx={contentDetail}>
              <Typography sx={detail}>
                Komitmen kami adalah dapat memberikan layanan terbaik dan
                menjawab kebutuhan pasar di seluruh wilayah di Indonesia.
              </Typography>
            </Box>
            <Paper elevation={3} sx={[contentWrapper, moreContentWrapper]}>
              <Typography sx={contentTitle}>
                3. Produk dan Layanan Bermutu
              </Typography>
            </Paper>
            <Box sx={contentDetail}>
              <Typography sx={detail}>
                Kami bertujuan untuk memenuhi kebutuhan pelanggan akan produk
                dan layanan terbaik di bidang proteksi kebakaran.
              </Typography>
            </Box>
            <Paper elevation={3} sx={[contentWrapper, moreContentWrapper]}>
              <Typography sx={contentTitle}>
                4. Selalu Berinovasi dan Mengikuti Perkembangan
              </Typography>
            </Paper>
            <Box sx={contentDetail}>
              <Typography sx={detail}>
                Kami selalu melakukan inovasi untuk perbaikan serta pembaruan
                produk dan layanan dari segi kualitas dan teknologi dari waktu
                ke waktu.
              </Typography>
            </Box>
          </Box>
          {screenSize >= 650 && (
            <Box sx={secondContent}>
              <img src={KeunggulanImg} alt="KeunggulanImg" />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default KeunggulanPerusahaan;

const contained = {
  display: "flex",
  justifyContent: "center"
};

const container = {
  margin: 4,
  marginTop: 10,
  width: "850px"
};

const mainTitle = {
  textAlign: "left",
  fontWeight: "600",
  marginBottom: 2
};

const contentContainer = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row"
  }
};

const firstContent = {
  flex: 3,
  marginTop: {
    xs: 4
  }
};
const secondContent = {
  flex: 1
};

const contentWrapper = {
  padding: 1,
  width: {
    xs: "320px",
    sm: "500px"
  },
  backgroundColor: Colors.blue900,
  transition: "0.6s",
  "&:hover": {
    width: {
      sm: "550px"
    }
  }
};

const moreContentWrapper = {
  marginTop: 2
};

const contentTitle = {
  textAlign: "left",
  fontWeight: "600",
  color: "white"
};

const contentDetail = {
  padding: 1,
  marginTop: 1,
  marginLeft: {
    xs: 0,
    sm: 6
  },
  width: {
    xs: "320px",
    sm: "500px"
  },
  backgroundColor: Colors.blue100
};

const detail = {
  textAlign: "left"
};

const smallImg = {
  width: "300px"
};
