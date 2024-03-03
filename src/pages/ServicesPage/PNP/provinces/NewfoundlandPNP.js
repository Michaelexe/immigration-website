import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function NewfoundlandPNP() {
  return (
    <>
      <h1>Newfoundland and Labrador PNP </h1>
      <p>
        The Newfoundland and Labrador Provincial Nominee Program (NLPNP) is an
        economic immigration initiative designed for:
      </p>
      <ul>
        <li>
          Employers in Newfoundland and Labrador facing labor market challenges.
        </li>
        <li>
          Skilled workers, international graduates, and entrepreneurs seeking to
          establish themselves in Newfoundland and Labrador.
        </li>
      </ul>
      <p>
        The NLPNP aims to attract individuals who can contribute positively to
        the province's economy and are committed to settling permanently with
        their families. Successful applicants have the opportunity to become
        permanent residents of Canada.
      </p>
      <h2>Different Streams/Category for NLPNP</h2>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Express Entry Skilled Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream is tailored for individuals with a valid Express Entry
              profile and a job offer or employment opportunity from an employer
              in Newfoundland and Labrador.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>
                Valid Express Entry profile expressing interest in residing in
                Newfoundland.
              </li>
              <li>
                Post-Graduate Work Permit holders eligible if accepted into the
                Express Entry pool.
              </li>
              <li>
                Valid Work Permit with at least 4 months validity or eligibility
                to apply for one.
              </li>
              <li>
                Job offer for a NOC TEER 0, 1, 2, or 3 position from a NL
                employer for a minimum of 2 years (no LMIA required).
              </li>
              <li>Scored a minimum of 67 points on the PNP assessment grid.</li>
              <li>
                Possess a minimum of 1-year post-secondary educational
                credential.
              </li>
              <li>Adequate funds to establish in Newfoundland.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Skilled Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream targets individuals with a job offer from an eligible
              employer in Newfoundland and Labrador.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Age between 21 to 59 years.</li>
              <li>
                Job offer from an eligible NL employer for at least 2 years (no
                LMIA required).
              </li>
              <li>
                Valid work permit with at least 4 months validity remaining
                (post-grad work permit holders cannot apply).
              </li>
              <li>
                Possess necessary skills, education, and accreditations for the
                job.
              </li>
              <li>
                Sufficient financial resources for successful establishment.
              </li>
              <li>Language skills suitable for the offered position.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. International Graduate Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream is designed for foreign students who completed
              post-secondary studies in Canada and have a job offer from an
              employer in Newfoundland and Labrador.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Age between 21 and 59 years.</li>
              <li>
                Completion of at least half of post-secondary studies in Canada.
              </li>
              <li>
                Graduation from an eligible Canadian college or university.
              </li>
              <li>
                Possess a valid post-graduate work permit for at least 4 months.
              </li>
              <li>
                Job offer related to the field of study (no LMIA required).
              </li>
              <li>Skills and education matching the job requirements.</li>
              <li>Sufficient financial resources for establishment.</li>
              <li>Language skills adequate for the position.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. International Entrepreneur Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This category welcomes experienced business owners or senior
              managers intending to start or purchase a business in Newfoundland
              and operate it while residing there.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Age between 21 and 59 years.</li>
              <li>Verified net worth of $600,000 CAD.</li>
              <li>
                Willingness to invest at least $200,000 CAD in the business.
              </li>
              <li>Actively participate in business management in NL.</li>
              <li>Minimum Canadian high school diploma or equivalent.</li>
              <li>
                Experience in managing or owning a business in the last 5 years.
              </li>
              <li>Minimum CLB 5 on a language test.</li>
              <li>Ownership of a minimum 1/3 equity in the business.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. International Graduate Entrepreneur Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream targets recent graduates of Memorial University or the
              College of the North Atlantic who wish to settle in the province
              while owning and operating a viable business.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Age at least 21 years.</li>
              <li>Minimum CLB 7 on a language test.</li>
              <li>Graduation from MU or CNA with a degree or diploma.</li>
              <li>Valid post-graduate work permit.</li>
              <li>
                Actively owned and managed the business for at least one
                continuous year.
              </li>
              <li>Ownership of a minimum 1/3 equity in the business.</li>
              <li>
                Ability to create at least one full-time equivalent job for
                local residents.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>6. Priority Skills NL</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This category aims at individuals with high education and language
              ability to meet skill shortages in various in-demand occupations.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>
                <b>In-demand Academic:</b> Completed PhD or Masters degree from
                Memorial University in specific specialities within the past 3
                years.
              </li>
              <li>
                <b>In-demand Worker:</b> Worked in a specialized, highly skilled
                occupation on the in-demand list for at least one year in the
                past 10 years.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>Why Choose Canada PR Calling for NBPNP?</h2>
      <ul>
        <li>Expert guidance from RCIC lawyer Kawaljit Shangari.</li>
        <li>Simplified process tailored to your needs.</li>
        <li>Comprehensive support throughout the immigration journey.</li>
      </ul>
      <h2>How to Get Started?</h2>
      <ol>
        <li>Contact Canada PR Calling to schedule an initial consultation.</li>
        <li>Determine your eligibility for the NBPNP streams.</li>
        <li>
          Receive personalized guidance and support to submit your application.
        </li>
      </ol>
      <p>
        Embark on your Canadian journey with Canada PR Calling and achieve your
        dream of permanent residency in New Brunswick. Contact us today to get
        started!
      </p>
    </>
  );
}

export default NewfoundlandPNP;
