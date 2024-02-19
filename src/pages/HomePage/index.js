import React from "react";
import Services from "./Services";
import Intro from "./Intro";
import About from "./About";
import Reviews from "./Reviews";
import FAQ from "./FAQ";

function HomePage() {
  return (
    <>
      <Intro />
      <About />
      <Services />
      {/* <Reviews /> */}
      {/* <FAQ /> */}
    </>
  );
}

export default HomePage;
