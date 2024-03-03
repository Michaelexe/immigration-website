import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

function About() {
  return (
    <section className="section home-about">
      <motion.div
        className="container"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="text">
          <h1>About Us</h1>
          <p>
            Welcome to Canada PR Calling - your premier Canadian immigration
            partner. We specialize in turning aspirations into realities.
          </p>
          <p>
            With a team of experienced professionals, we navigate the
            intricacies of Canadian immigration to ensure a smooth journey for
            our clients.
          </p>
          <p>
            Whether you're pursuing Express Entry, studying, working, or
            exploring Provincial Nominee Programs, we tailor our services to
            your unique needs.
          </p>
          <p>
            Choose Canada PR Calling for a trusted, personalized, and efficient
            pathway to your Canadian dream
          </p>
        </div>
        <div className="image"></div>
      </motion.div>
    </section>
  );
}

export default About;
