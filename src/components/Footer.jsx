import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../constants/styles";

const Footer = () => {
  return (
    <Box sx={container}>
      <Box sx={[wrapper, textLeft]}>
        <Typography variant="h6" sx={titleText}>
          PT. BESTINDO MEGAH RAYA
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite, detailPaddingTop]}>
          PT. Bestindo Megah Raya merupakan perusahaan yang berfokus pada sistem
          proteksi kebakaran. Sebagai perusahaan yang bergerak dalam
          perlindungan terhadap bencana kebakaran dengan menghadirkan produk dan
          teknologi terkini untuk berbagai sektor. Kami berkomitmen dalam
          penyediaan barang dan jasa serta pelayanan yang inovaf dengan mengiku
          pengembangan kualitas terbaik.
        </Typography>
      </Box>
      <Box sx={[wrapper, contentWrapper, secondWrapper]}>
        <Typography variant="h6" sx={titleText}>
          Produk & Layanan
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite, detailPaddingTop]}>
          Fire Extinguisher
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite]}>
          Fire Hydrant & Sprinkler
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite]}>
          Fire Alarm System
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite]}>
          Fire Suppression
        </Typography>
      </Box>
      <Box sx={[wrapper, contentWrapper]}>
        <Typography variant="h6" sx={titleText}>
          Info
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite, detailPaddingTop]}>
          Alamat: Jl. Solo KM. 8,5 Dsn. Kalongan RT. 003/RW. 27, Maguwoharjo,
          Depok, Sleman, Daerah Istimewa Yogyakarta
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite]}>
          Phone: 082137237222, 02744334319
        </Typography>
        <Typography variant="subtitle2" sx={[textWhite]}>
          Email: Bestindomegahraya@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const container = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row"
  },
  backgroundColor: Colors.red700,
  padding: 2,
  marginTop: 10
};

const wrapper = {
  flex: 1
};

const contentWrapper = {
  paddingTop: 5,
  textAlign: "left"
};

const secondWrapper = {
  paddingLeft: {
    sm: 28
  }
};

const titleText = {
  color: "#2196f3",
  fontWeight: "600"
};

const textLeft = {
  textAlign: "left"
};

const textWhite = {
  color: "white"
};

const detailPaddingTop = {
  paddingTop: 2
};
