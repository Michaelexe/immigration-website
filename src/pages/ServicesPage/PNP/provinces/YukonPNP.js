import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function YukonPNP() {
  return (
    <>
      <h1>Yukon PNP</h1>
      <p>
        The Yukon Nominee Program (YNP) facilitates the hiring of skilled
        workers to fill job vacancies in the territory. To manage the high
        volume of applications effectively and ensure the continuity of
        essential business operations, the Immigration Branch has established
        priority criteria for application processing.
      </p>
      <p>
        Applications are categorized into four groups, with priority given to
        each group in the following order:
      </p>
      <ol>
        <li>Current work permit holders with imminent expiration dates.</li>
        <li>Visitor visa holders already residing in Canada.</li>
        <li>
          Current work permit holders whose permits will expire within a year.
        </li>
        <li>Individuals currently residing outside Canada.</li>
      </ol>
      <p>
        It's important to note that meeting these criteria does not guarantee an
        expedited decision before a foreign national's legal status expires. The
        standard processing time is typically 12 to 14 weeks but may vary based
        on application volume and priority criteria.
      </p>
      <h2>Program Streams</h2>
      <p>The YNP comprises four program streams:</p>
      <ul>
        <li>Critical Impact Worker</li>
        <li>Skilled Worker</li>
        <li>Express Entry</li>
        <li>Yukon Community Program</li>
      </ul>
      <p>
        Each stream has specific eligibility requirements and application
        procedures outlined on their respective pages.
      </p>
      <h2>Process Overview</h2>
      <ol>
        <li>
          Eligible employers advertise job positions locally and nationally. If
          no qualified Canadian or permanent resident applies, the employer may
          utilize the YNP to fill the vacancy.
        </li>
        <li>
          If no qualified Canadian or permanent resident applies, the employer
          reviews the criteria for each YNP stream and selects the appropriate
          one.
        </li>
        <li>
          The employer extends a full-time, permanent job offer to an eligible
          foreign national.
        </li>
        <li>
          Both the employer and the foreign national complete all necessary YNP
          forms.
        </li>
        <li>
          The employer submits the completed application to the YNP, ensuring
          all required documents are attached.
        </li>
        <li>
          Once approved, the employer submits the compliance fee and the letter
          of offer to Immigration, Refugees and Citizenship Canada (IRCC).
        </li>
        <li>Upon approval, the foreign national becomes a nominee.</li>
        <li>
          If the nominee is outside Canada, they must adhere to IRCC's visa
          requirements.
        </li>
        <li>
          If the nominee is in Canada under a temporary permit, they may
          continue working until permit renewal.
        </li>
        <li>
          The employer and nominee sign a Tri-Partite Agreement (TPA) with the
          Government of Yukon.
        </li>
        <li>
          Within six months of signing the TPA, the nominee applies to IRCC for
          permanent residency.
        </li>
        <li>
          The nominee works under a temporary work permit while the permanent
          residency application is processed.
        </li>
        <li> The nominee undergoes admissibility checks.</li>
        <li>
          Upon approval, the nominee becomes a permanent resident of Canada.
        </li>
      </ol>
      <p>
        Please note that IRCC independently assesses each nominee's eligibility,
        and decisions regarding permits or permanent residency cannot be
        appealed through the YNP or the Government of Yukon.
      </p>
      <h2>Frequently Asked Question</h2>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>How does the Yukon Canada Express Entry stream work?</h4>
          </AccordionSummary>
          <AccordionDetails>
            The Yukon Canada Express Entry stream is aligned with the federal
            Express Entry system. To be eligible, candidates must be in the
            Express Entry pool and have a valid job offer from a Yukon employer.
            This stream offers a pathway to permanent residence for skilled
            workers who intend to settle in Yukon.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>What are the requirements for the Business Program stream?</h4>
          </AccordionSummary>
          <AccordionDetails>
            The Business Program stream includes two categories: Entrepreneur
            and Professional Self-Employed. Entrepreneurs must invest a minimum
            of $150,000 CDN equity into starting or buying a business, while
            Professional Self-Employed individuals must meet certification
            requirements for their profession and submit a detailed business
            plan.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Who is eligible for the Skilled Worker Program stream?</h4>
          </AccordionSummary>
          <AccordionDetails>
            The Skilled Worker Program stream is divided into Skilled Worker and
            Critical Impact Worker categories. Skilled Workers must have a
            permanent full-time job offer from a Yukon employer in an NOC A, B,
            or 0 occupation, while Critical Impact Workers require a job offer
            in an NOC C or D occupation and have worked in the position for six
            months.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>How long does the Yukon PNP application process take?</h4>
          </AccordionSummary>
          <AccordionDetails>
            The processing time for Yukon PNP applications varies depending on
            the stream and individual circumstances. Generally, applicants can
            expect the process to take several months from the initial
            submission to visa issuance.
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>How Can Sky White North Immigration Assist You?</h2>
      <p>
        Our team at Sky White North has aided numerous individuals in their
        Canada PR applications. With the guidance of our RCIC lawyer, Kawaljit
        Shangari, we will navigate you through your application process and
        identify the right pathway to Canada. Leveraging our extensive
        experience in the burgeoning immigration sector, we have carved a niche
        in the industry with our stellar reputation and wealth of goodwill,
        consistently aiding aspiring immigrants seeking settlement in Canada.
      </p>
    </>
  );
}

export default YukonPNP;
