import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.css";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import WhatIsPNP from "./PNP/WhatIsPNP";
import Eligibility from "./PNP/Eligibility";
import HowDoesItOperate from "./PNP/HowDoesItOperate";
import FrancophoneBoom from "./Francophone/FrancophoneBoom";
import TCFExamCoaching from "./Francophone/TCFExamCoaching";
import WhyWorkInCanada from "./Work/WhyWorkInCanada";
import CategoriesOfWorkPermit from "./Work/CategoriesOfWorkPermit";
import AboutExpressEntry from "./ExpressEntry/AboutExpressEntry";

function ServicesPage() {
  const location = useLocation();
  const currentService = location.pathname.split("/")[2];
  const [open, setOpen] = useState(null);

  const changeHandler = (value) => {
    if (open === value) {
      setOpen(null);
    } else {
      setOpen(value);
    }
  };

  console.log(currentService);
  return (
    <div className="service-container">
      <div className="quick-links">
        <Accordion
          expanded={
            currentService === "express-entry" || open === "express-entry"
          }
          onChange={() => {
            changeHandler("express-entry");
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Expresss Entry
          </AccordionSummary>
          <AccordionDetails className="sub-link">
            <NavLink to="/services/express-entry/about">
              About Express Entry
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={currentService === "work" || open === "work"}
          onChange={() => {
            changeHandler("work");
          }}
          className="accord"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Work In Canada
          </AccordionSummary>
          <AccordionDetails className="sub-link">
            <NavLink to="/services/work/why-work-in-canada">
              Why Work In Canada?
            </NavLink>
            <NavLink to="/services/work/categories-of-work-permit">
              Categories Of Work Permit
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accord"
          expanded={currentService === "pnp" || open === "pnp"}
          onChange={() => {
            changeHandler("pnp");
          }}
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
        <Accordion
          expanded={currentService === "study" || open === "study"}
          onChange={() => {
            changeHandler("study");
          }}
          className="accord"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accord-title"
          >
            Study In Canada
          </AccordionSummary>
        </Accordion>
        <Accordion
          expanded={currentService === "francophone" || open === "francophone"}
          onChange={() => {
            changeHandler("francophone");
          }}
          className="accord"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accord-title"
          >
            Immigration for French Speakers
          </AccordionSummary>
          <AccordionDetails className="sub-link">
            <NavLink to="/services/francophone/francophone-boom">
              Francophone Boom
            </NavLink>
            <NavLink to="/services/francophone/tcf-exam-coaching">
              TCF Exam Coaching
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={currentService === "business" || open === "business"}
          onChange={() => {
            changeHandler("business");
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Business Investor
          </AccordionSummary>
        </Accordion>
      </div>
      <div className="content">
        <Routes>
          {/* -----------------------Express Entry--------------- */}
          <Route path="/express-entry/about" element={<AboutExpressEntry />} />
          {/* ----------------------Work------------------ */}
          <Route
            path="/work/why-work-in-canada"
            element={<WhyWorkInCanada />}
          />
          <Route
            path="/work/categories-of-work-permit"
            element={<CategoriesOfWorkPermit />}
          />

          {/* ------------PNP------------- */}
          <Route path="/pnp/what-is-pnp" element={<WhatIsPNP />} />
          <Route path="/pnp/eligibility" element={<Eligibility />} />
          <Route
            path="/pnp/how-does-it-operate"
            element={<HowDoesItOperate />}
          />
          {/* ---------------francophone-------------- */}
          <Route
            path="/francophone/francophone-boom"
            element={<FrancophoneBoom />}
          />
          <Route
            path="/francophone/tcf-exam-coaching"
            element={<TCFExamCoaching />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default ServicesPage;
