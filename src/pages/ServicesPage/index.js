import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.css";
import { NavLink, useLocation } from "react-router-dom";

function ServicesPage() {
  const location = useLocation();
  const currentService = location.pathname.split("/")[2];
  const [open, setOpen] = useState(null);

  console.log(currentService);
  return (
    <div className="service-container">
      <div className="quick-links">
        <Accordion
          expanded={
            currentService == "express-entry" || open == "express-entry"
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Expresss Entry
          </AccordionSummary>
        </Accordion>
        <Accordion expanded={currentService == "work" || open == "work"}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Work In Canada
          </AccordionSummary>
        </Accordion>
        <Accordion
          className="accord"
          expanded={currentService == "pnp" || open == "pnp"}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accord-title"
          >
            Provincial Nominee Program (PNP)
          </AccordionSummary>
          <AccordionDetails className="sub-link">
            <NavLink to="/services/pnp/what-is-pnp">What is PNP?</NavLink>
            <NavLink to="/services/pnp/eligibility">Eligibility</NavLink>
            <NavLink to="/services/pnp/how-does-it-operate">
              How does it operate
            </NavLink>
            <NavLink to="/services/pnp/alberta-pnp">Alberta PNP</NavLink>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={currentService == "study" || open == "study"}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Study In Canada
          </AccordionSummary>
        </Accordion>
        <Accordion
          expanded={currentService == "business" || open == "business"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Business Investor
          </AccordionSummary>
        </Accordion>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default ServicesPage;
