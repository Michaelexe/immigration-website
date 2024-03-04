import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/*" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
