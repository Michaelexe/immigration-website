import React, { useEffect, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { animate, useInView, stagger } from "framer-motion";

function FAQ() {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  });

  useEffect(() => {
    if (inView) {
      animate(
        ".faq-accordion",
        { opacity: [0, 1], transform: "translateY(0)" },
        {
          delay: stagger(0.1),
          type: "spring",
          duration: 0.5,
        }
      );
    }
  }, [inView]);

  return (
    <section className="section home-faq" id="FAQ">
      <h1>Frequently Asked Questions</h1>
      <div className="container" ref={ref}>
        <Accordion className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Why should I hire an immigration consultant?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Hiring an immigration consultant can streamline the application
              process, reduce errors, and increase the chances of success.
              Consultants stay updated on immigration laws and procedures,
              providing valuable expertise.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>
              Do I need an immigration consultant for simple applications?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              While not required for all cases, a consultant can still provide
              valuable guidance, especially when dealing with complex
              immigration laws. Simple applications may benefit from their
              expertise in ensuring accuracy.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>What happens if my application is rejected?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Consultants can help assess the reasons for rejection and explore
              options for appeal or reapplication. They may provide guidance on
              addressing any issues that led to the rejection.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Are there any guarantees of success?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              No immigration consultant can guarantee success, as the final
              decision lies with immigration authorities. However, a reputable
              consultant increases the likelihood of a successful application
              through careful preparation and adherence to legal requirements.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>
              What information and documents do I need to provide to my
              consultant?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Immigration consultants will require information such as personal
              details, educational and work history, family information, and
              relevant documents. Clear communication about your background is
              crucial for a successful application.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>
              How do you ensure ethical standards in your immigration services?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We uphold the highest ethical standards in all aspects of our
              work. Our team, led by RCIC lawyer Kawaljit Shangari, operates
              with integrity, transparency, and professionalism at every step of
              the process. We strictly adhere to the rules and regulations set
              forth by the Immigration Consultants of Canada Regulatory Council
              (ICCRC) to ensure the ethical conduct of our services.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
