import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/*" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
