import React from "react";

import "./styles.css";

function Services() {
  return (
    <section className="section home-service">
      <h1>Our Immigration Services</h1>
      <div className="grid">
        <div className="service-card">
          <span className="header">Express Entry</span>
          <span className="description">
            Navigate the streamlined path to Canadian permanent residence with
            our Express Entry expertise. We guide you through the points system,
            profile creation, and submission process, ensuring your journey to
            Canada is swift and successful.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Work in Canada</span>
          <span className="description">
            Embark on a fulfilling career in Canada with our comprehensive Work
            in Canada services. From job search assistance to work permit
            applications, we pave the way for your professional success in one
            of the world's most welcoming and dynamic job markets.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Provincial Nominee Program</span>
          <span className="description">
            Explore the diverse opportunities offered by Canada's provinces
            through our PNP services. Tailored to your skills and aspirations,
            our experts assist you in securing a provincial nomination,
            fast-tracking your pathway to Canadian permanent residency.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Study In Canada</span>
          <span className="description">
            Unlock the doors to world-class education in Canada with our
            dedicated Study in Canada services. From university admissions to
            visa applications, we support your academic journey, ensuring you
            experience the enriching culture and quality education Canada has to
            offer.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Immigration for French Speakers</span>
          <span className="description">
            Bienvenue! Streamline your Canadian immigration journey with Canada
            PR Calling. We offer anywhere from tailored French exam coaching, to
            Express Entry Applications for our Francophone individuals seeking a
            new home in Canada.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Business Investor Visa</span>
          <span className="description">
            Unlock economic opportunities with Canada PR Calling. Our experts
            simplify the Business Investor Visa process, guiding you through
            investments and applications. Propel your business forward in Canada
            with our specialized services.
          </span>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
