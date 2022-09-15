import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import "./styles.css";
import { FocusContact, AppBar, Footer } from "./components/index";
import { LandingPage } from "./pages/index";
import { Colors } from "./constants/styles";

export default function App() {
  const { screenSize, setScreenSize, setWideScreenMenu } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: Colors.grey100 }}>
      <BrowserRouter>
        <FocusContact />
        <AppBar />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          {/* Supplier */}
          {/* <Route
            path="/supplier"
            element={
              <SPVRoute>
                <TampilSupplier />
              </SPVRoute>
            }
          /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
