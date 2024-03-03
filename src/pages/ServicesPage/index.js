import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.css";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import WhatIsPNP from "./PNP/WhatIsPNP";
import Eligibility from "./PNP/Eligibility";
import HowDoesItOperate from "./PNP/HowDoesItOperate";
import FrancophoneBoom from "./Francophone/FrancophoneBoom";
import TCFExamCoaching from "./Francophone/TCFExamCoaching";
import WhyWorkInCanada from "./Work/WhyWorkInCanada";
import CategoriesOfWorkPermit from "./Work/CategoriesOfWorkPermit";
import AboutExpressEntry from "./ExpressEntry/AboutExpressEntry";
import AboutStudyPermit from "./Study/AboutStudyPermit";
import AboutBusinessInvestorVisa from "./Business/AboutBusinessInvestorVisa";
import AlbertaPNP from "./PNP/provinces/AlbertaPNP";
import BritishColumbiaPNP from "./PNP/provinces/BritishColumbiaPNP";
import TCFAndTEF from "./Francophone/TCFAndTEF";
import NovaSoctiaPNP from "./PNP/provinces/NovaSoctiaPNP";
import OntarioPNP from "./PNP/provinces/OntarioPNP";
import NewBrunswickPNP from "./PNP/provinces/NewBrunswickPNP";
import SaskatchewanPNP from "./PNP/provinces/SaskatchewanPNP";
import PrinceEdwardPNP from "./PNP/provinces/PrinceEdwardPNP";
import YukonPNP from "./PNP/provinces/YukonPNP";
import ManitobaPNP from "./PNP/provinces/ManitobaPNP";

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
            <Accordion className="provinces">
              <AccordionSummary
                className="provinces-header"
                expandIcon={<ExpandMoreIcon />}
              >
                Provinces
              </AccordionSummary>
              <AccordionDetails className="provinces-links">
                <NavLink to="/services/pnp/province/alberta">
                  Alberta PNP
                </NavLink>
                <NavLink to="/services/pnp/province/british-columbia">
                  British Columbia PNP
                </NavLink>
                <NavLink to="/services/pnp/province/nova-scotia">
                  Nova Scotia PNP
                </NavLink>
                <NavLink to="/services/pnp/province/ontario">
                  Ontario PNP
                </NavLink>
                <NavLink to="/services/pnp/province/new-brunswick">
                  New Brunswick PNP
                </NavLink>
                <NavLink to="/services/pnp/province/saskatchewan">
                  Saskatchewan PNP
                </NavLink>
                <NavLink to="/services/pnp/province/prince-edward">
                  Prince Edward Island PNP
                </NavLink>
                <NavLink to="/services/pnp/province/yukon">Yukon PNP</NavLink>
                <NavLink to="/services/pnp/province/manitoba">
                  Manitoba PNP
                </NavLink>
              </AccordionDetails>
            </Accordion>
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
          <AccordionDetails className="sub-link">
            <NavLink to="/services/study/about">About Study Permit</NavLink>
          </AccordionDetails>
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
            <NavLink to="/services/francophone/tcf-and-tef">
              TCF And TEF
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
          <AccordionDetails className="sub-link">
            <NavLink to="/services/business/about">
              About Business Investor Visa
            </NavLink>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/services/express-entry/about" />}
          />
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
          <Route path="/pnp/province/alberta" element={<AlbertaPNP />} />
          <Route
            path="/pnp/province/british-columbia"
            element={<BritishColumbiaPNP />}
          />
          <Route path="/pnp/province/nova-scotia" element={<NovaSoctiaPNP />} />
          <Route path="/pnp/province/ontario" element={<OntarioPNP />} />
          <Route
            path="/pnp/province/new-brunswick"
            element={<NewBrunswickPNP />}
          />
          <Route
            path="/pnp/province/saskatchewan"
            element={<SaskatchewanPNP />}
          />
          <Route
            path="/pnp/province/prince-edward"
            element={<PrinceEdwardPNP />}
          />
          <Route path="/pnp/province/yukon" element={<YukonPNP />} />
          <Route path="/pnp/province/manitoba" element={<ManitobaPNP />} />

          {/* ------------------Study-------------------- */}
          <Route path="/study/about" element={<AboutStudyPermit />} />
          {/* ---------------francophone-------------- */}
          <Route
            path="/francophone/francophone-boom"
            element={<FrancophoneBoom />}
          />
          <Route path="/francophone/tcf-and-tef" element={<TCFAndTEF />} />
          <Route
            path="/francophone/tcf-exam-coaching"
            element={<TCFExamCoaching />}
          />
          {/* -------------Business-------------------- */}
          <Route
            path="/business/about"
            element={<AboutBusinessInvestorVisa />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default ServicesPage;
