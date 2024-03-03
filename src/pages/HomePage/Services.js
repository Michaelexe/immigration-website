import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animate, useInView, stagger } from "framer-motion";

import "./styles.css";

function Services() {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  });

  useEffect(() => {
    if (inView) {
      animate(
        ".service-card",
        { opacity: 1, transform: "translateY(0)" },
        {
          delay: stagger(0.2),
          type: "spring",
          duration: 0.5,
        }
      );
    }
  }, [inView]);

  return (
    <section className="section home-service">
      <h1>Our Immigration Services</h1>
      <div className="grid" ref={ref}>
        <div
          className="service-card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <span className="header">Express Entry</span>
          <div className="hidden-content">
            <span className="hidden-header">Express Entry</span>
            <span className="description">
              Navigate the streamlined path to Canadian permanent residence with
              our Express Entry expertise. We guide you through the points
              system, profile creation, and submission process, ensuring your
              journey to Canada is swift and successful.
            </span>
            <Link className="read-more" to="/services/express-entry/about">
              Read More
            </Link>
          </div>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <span className="header">Work in Canada</span>
          <div className="hidden-content">
            <span className="hidden-header">Work in Canada</span>
            <span className="description">
              Embark on a fulfilling career in Canada with our comprehensive
              Work in Canada services. From job search assistance to work permit
              applications, we pave the way for your professional success in one
              of the world's most welcoming and dynamic job markets.
            </span>
            <Link className="read-more" to="/services/work/why-work-in-canada">
              Read More
            </Link>
          </div>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578924825042-31d14cf13c35?q=80&w=1839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <span className="header">Provincial Nominee Program</span>
          <div className="hidden-content">
            <span className="hidden-header">Provincial Nominee Program</span>
            <span className="description">
              Explore the diverse opportunities offered by Canada's provinces
              through our PNP services. Tailored to your skills and aspirations,
              our experts assist you in securing a provincial nomination,
              fast-tracking your pathway to Canadian permanent residency.
            </span>
            <Link className="read-more" to="/services/pnp/what-is-pnp">
              Read More
            </Link>
          </div>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <span className="header">Study In Canada</span>
          <div className="hidden-content">
            <span className="hidden-header">Study In Canada</span>
            <span className="description">
              Unlock the doors to world-class education in Canada with our
              dedicated Study in Canada services. From university admissions to
              visa applications, we support your academic journey, ensuring you
              experience the enriching culture and quality education Canada has
              to offer.
            </span>
            <Link className="read-more" to="/services/study/about">
              Read More
            </Link>
          </div>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551866442-64e75e911c23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <span className="header">Immigration for French Speakers</span>
          <div className="hidden-content">
            <span className="hidden-header">
              Immigration for French Speakers
            </span>
            <span className="description">
              Bienvenue! Streamline your Canadian immigration journey with
              Canada PR Calling. We offer anywhere from tailored French exam
              coaching, to Express Entry Applications for our Francophone
              individuals seeking a new home in Canada.
            </span>
            <Link
              className="read-more"
              to="/services/francophone/francophone-boom"
            >
              Read More
            </Link>
          </div>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <span className="header">Business Investor Visa</span>
          <div className="hidden-content">
            <span className="hidden-header">Business Investor Visa</span>

            <span className="description">
              Unlock economic opportunities with Canada PR Calling. Our experts
              simplify the Business Investor Visa process, guiding you through
              investments and applications. Propel your business forward in
              Canada with our specialized services.
            </span>
            <Link className="read-more" to="/services/business/about">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
