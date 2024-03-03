import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function NewBrunswickPNP() {
  return (
    <>
      <h1>New Brunswick PNP</h1>
      <p>
        Welcome to Canada PR Calling, your trusted partner for achieving
        Canadian permanent residency through the New Brunswick Provincial
        Nominee Program (NBPNP), led by RCIC lawyer Kawaljit Shangari.
      </p>
      <p>
        At Canada PR Calling, we simplify the immigration process for
        individuals looking to settle in New Brunswick, providing expert
        guidance and support every step of the way.
      </p>
      <h2>What are the pathways in NBPNP?</h2>
      <p>Let's explore the pathways offered by the NBPNP:</p>
      {/* <ul>
        <li>
          <b>New Brunswick Skilled Worker Stream: </b>
          Designed for foreign nationals with the skills and experience needed
          to contribute to New Brunswick's economy, this stream requires a
          genuine offer of employment from a New Brunswick employer and the
          intent to live and work in the province on a permanent basis.
        </li>
        <li>
          <b>New Brunswick Express Entry Labour Market Stream: </b>For skilled
          workers registered in the federal Express Entry pool, this stream
          offers an expedited pathway to permanent residence in New Brunswick.
          Candidates must secure a job offer from an eligible New Brunswick
          employer.
        </li>
        <li>
          <b>New Brunswick Entrepreneurial Stream: </b>Entrepreneurs and
          business owners seeking to establish new ventures in New Brunswick can
          thrive in this stream. Priority is given to businesses significantly
          contributing to the local economy or introducing innovative products.
        </li>
      </ul> */}
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Skilled Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <b>Please note: </b>Starting May 20, 2022, New Brunswick has
              temporarily halted the acceptance of applications across all
              immigration streams for the following NOC occupations: Food
              Service Supervisor (NOC 6311), Food Counter Attendant (NOC 6711),
              and Food and Beverage Servers (NOC 6513).
            </p>
            <p>
              The New Brunswick Skilled Worker stream mandates a permanent
              full-time job offer from a New Brunswick employer. Eligibility
              extends to all NOC 0, A, and B occupations, with select NOC C and
              D roles also qualifying.
            </p>
            <h4>Eligibility Criteria: </h4>
            <ul>
              <li>
                Attainment of 60 points (out of 100) on the New Brunswick
                skilled worker stream's selection factors.
              </li>
              <li>Age requirement between 19 and 55.</li>
              <li>
                Securing an eligible employer willing to support the nomination
                and demonstrate genuine labor shortages.
              </li>
              <li>
                Acceptance of a permanent full-time job offer within specified
                NOC skill levels: TEER 0, 1, 2 (high-skilled); TEER 3
                (semi-skilled); TEER 4 or 5 (low-skilled) (Note: Post-Graduate
                Work Permit holders are ineligible under NOC TEER 4 or 5).
              </li>
              <li>
                No work experience needed for international graduates; others
                require at least one year of qualifying work experience in a
                related NOC.
              </li>
              <li>
                Language proficiency meeting the minimum CLB 4 requirement.
              </li>
              <li>
                Possession of a minimum high school diploma (Canadian
                equivalent).
              </li>
              <li>
                Demonstrated attachment to New Brunswick (work, study, family,
                visits, etc.).
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. New Brunswick Transport Truck Driver Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream ensures New Brunswick's transportation industry can
              recruit and retain well-qualified truck drivers. The NBPNP has
              developed a dedicated pathway specific to NOC 73300: Transport
              Truck Driver to aid employers in supporting new drivers.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>
                Receipt and acceptance of a permanent, full-time, year-round job
                offer within NOC 73300.
              </li>
              <li>
                Accumulation of 24 months of work experience in NOC 73300:
                Transport Truck Driver within the past 5 years, including at
                least 6 months of continuous employment in New Brunswick.
              </li>
              <li>Possession of a New Brunswick Driver's License.</li>
              <li>
                Valid work permit while working as a Transport Truck Driver
                before the application date.
              </li>
            </ul>
            <p>
              *Note: The supporting employer for the application need not be the
              same as the one providing the required 6 months of experience.*
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Express Entry Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <b>
                Commencing May 20, 2022, New Brunswick has temporarily paused
                the New Brunswick Express Entry Stream.
              </b>
            </p>
            <p>
              The New Brunswick Express Entry stream is designed for individuals
              with an Express Entry profile and an eligible connection to New
              Brunswick.
            </p>
            <h4>Eligibility Criteria: </h4>
            <ul>
              <li>Presence of a profile in the federal Express Entry pool.</li>
              <li>One of the following eligible connections to NB:</li>
              <li>Selected by NB PNP from the federal pool to apply to NB.</li>
              <li>
                Current full-time employment in NB in a TEER 0, 1, or 2
                position, or enrollment in an eligible post-secondary program in
                NB, or graduation within the last 6 months with continued
                residence and job search in NB.
              </li>
              <li>
                Eligibility for Post-Graduate Work Permit (PGWP) holders,
                provided they have a job offer in a related NOC field.
              </li>
              <li>
                Minimum of 67 points on the New Brunswick Express Entry
                selection factors.
              </li>
              <li>
                Adequate financial resources for settlement in New Brunswick.
              </li>
              <li>Minimum CLB 7 in all language skills.</li>
              <li>
                Education equivalent to at least a Canadian high school diploma.
              </li>
              <li>
                Demonstrated genuine attachment to New Brunswick (work, study,
                family, visits, etc.).
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. Business Immigration Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The New Brunswick entrepreneur stream offers immigration
              opportunities to experienced entrepreneurs ready to establish and
              operate businesses while residing in New Brunswick. Applicants
              undergo assessment against a points grid to determine invitation
              eligibility.
            </p>
            <h4>Applicant Criteria: </h4>
            <ul>
              <li>Minimum personal net worth of CAD $500,000.</li>
              <li>Minimum investment of CAD $150,000 in the business.</li>
              <li>
                Business ownership or senior management experience in a
                for-profit entity for at least 3 of the past 5 years.
              </li>
              <li>
                Completion of at least a Canadian high school diploma or
                equivalent.
              </li>
              <li>Attainment of a minimum CLB 5 on a valid language test.</li>
              <li>Age between 21 and 59.</li>
              <li>Minimum score of 65 on the selection criteria.</li>
            </ul>
            <h4>Business Criteria:</h4>
            <ul>
              <li>
                Ownership of at least 1/3 of the business with active, daily
                management.
              </li>
              <li>
                Establishment of a new entity or purchase of an existing one.
              </li>
              <li>
                Existing business ownership by the same principals for the past
                3 years, with net profit in at least 2 out of 3 previous years
                if purchasing an existing business.
              </li>
              <li>
                Creation of at least 1 full-time job for non-relative Canadians.
              </li>
              <li>
                Business operation for at least 12 consecutive months for
                nominee receipt.
              </li>
              <li>Refer to NB PNP for a list of ineligible businesses.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. Strategic Initiative Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The NB Strategic Initiative stream caters to French-speaking
              workers with skills, education, and work experience beneficial to
              New Brunswick's economy, intending to settle and work in the
              province permanently.
            </p>
            <h4>Applicant Criteria: </h4>
            <ul>
              <li>
                NCLC score of at least 5 in all four French language skills.
              </li>
              <li>Minimum score of 65 points on the selection grid.</li>
              <li>Age between 19 and 55.</li>
              <li>Minimum Canadian high school diploma or equivalent.</li>
              <li>
                Eligible connection to NB through an exploratory visit,
                qualifying job offer (TEER 0 - 5), or direct invitation from the
                province.
              </li>
              <li>Settlement funds availability.</li>
              <li>Submission of a viable settlement plan.</li>
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

export default NewBrunswickPNP;
