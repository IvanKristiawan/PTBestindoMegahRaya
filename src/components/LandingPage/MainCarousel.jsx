import Carousel from "react-bootstrap/Carousel";
import MainCarouselImg1 from "../../assets/img/MainCarouselImg1.png";
import MainCarouselImg2 from "../../assets/img/MainCarouselImg2.png";
import MainCarouselImg3 from "../../assets/img/MainCarouselImg3.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { Paper } from "@mui/material";
import { Colors } from "../../constants/styles";

function MainCarousel() {
  const { screenSize } = useStateContext();

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MainCarouselImg1}
          alt="First slide"
        />
        {screenSize >= 650 && (
          <Carousel.Caption>
            <Paper elevation={3} sx={paperContainer}>
              <h3 style={titleStyle}>Fire Protection Terbaik</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Paper>
          </Carousel.Caption>
        )}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MainCarouselImg2}
          alt="Second slide"
        />
        {screenSize >= 650 && (
          <Carousel.Caption>
            <Paper elevation={3} sx={paperContainer}>
              <h3 style={titleStyle}>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Paper>
          </Carousel.Caption>
        )}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MainCarouselImg3}
          alt="Third slide"
        />
        {screenSize >= 650 && (
          <Carousel.Caption>
            <Paper elevation={3} sx={paperContainer}>
              <h3 style={titleStyle}>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Paper>
          </Carousel.Caption>
        )}
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;

const paperContainer = {
  backgroundColor: Colors.grey400,
  opacity: "0.8"
};

const titleStyle = {
  fontWeight: "600"
};
