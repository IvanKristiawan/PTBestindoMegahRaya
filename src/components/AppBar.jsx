import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Typography } from "@mui/material";
import { Colors } from "../constants/styles";

const AppBar = () => {
  return (
    <Navbar expand="lg" variant="dark" style={navbarColor}>
      <Container>
        <Navbar.Brand href="#home">
          <Typography variant="h6" style={textColorWhite}>
            BESTINDO
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home" style={textColorWhite}>
              Home
            </Nav.Link>
            <NavDropdown
              title={<span style={textColorWhite}>Tentang Perusahaan</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Profile Perusahaan
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Visi Misi Perusahaan
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Nilai-nilai Perusahaan
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span style={textColorWhite}>Produk & Layanan</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Fire Extinguisher
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Fire Hydrant & Sprinkler
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Fire Alarm System
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Fire Suppression
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={textColorWhite}>
              Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;

const navbarColor = {
  backgroundColor: Colors.red600
};

const textColorWhite = {
  color: "white"
};
