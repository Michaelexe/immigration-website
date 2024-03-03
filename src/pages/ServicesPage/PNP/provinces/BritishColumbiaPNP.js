import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BritishColumbiaPNP() {
  return (
    <>
      <h1>British Columbia Provincial Nominee Program (BC PNP) </h1>
      <p>
        Let's delve into the British Columbia Provincial Nominee Program (BC
        PNP) Skills Immigration, designed to pave the way for workers and recent
        graduates with the skills sought by B.C. employers to settle permanently
        in the province.
      </p>
      <h2>What are the possible streams open for BC PNP immigration?</h2>
      <p>
        We provide comprehensive guidance on each stream's eligibility criteria,
        ensuring you choose the most suitable pathway. The following streams are
        open in 2024:
      </p>
      {/* <ul>
        <li>
          <b>Skilled Worker: </b>Assistance for experienced professionals to
          secure permanent residence by meeting job offer requirements and NOC
          classification criteria.
        </li>
        <li>
          <b>Health Authority: </b>Support for healthcare professionals working
          in B.C. health authorities, including physicians, midwives, and nurse
          practitioners.
        </li>
        <li>
          <b>Entry Level and Semi-Skilled (ELSS): </b>Guidance for workers in
          select sectors like tourism/hospitality and food processing to obtain
          permanent residence.
        </li>
        <li>
          <b>International Graduate: </b>Assistance for recent graduates from
          Canadian post-secondary institutions to transition to permanent
          residency.
        </li>
        <li>
          <b>International Post-Graduate: </b>Support for recent graduates with
          eligible master's or doctoral degrees from B.C. post-secondary
          institutions.
        </li>
      </ul> */}
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Skilled Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Skilled Worker stream is designed for experienced workers in
              various occupations to obtain permanent residence in British
              Columbia.
            </p>
            <h4>Eligibility:</h4>
            <p>
              To qualify, applicants must have an indeterminate, full-time job
              offer from a BC employer classified as NOC TEER 0, 1, 2, or 3,
              along with other criteria such as work experience, language
              proficiency, and meeting BC wage rates.
            </p>
            <p>
              This stream also offers an Express Entry BC option for eligible
              candidates.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Health Authority Stream:</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Health Authority stream provides a pathway to permanent
              residence for individuals working for a health authority in
              British Columbia, including physicians, nurse practitioners, and
              midwives.
            </p>
            <h4>Eligibility:</h4>
            <p>
              Applicants must have an indeterminate, full-time job offer from a
              BC public health authority or a confirmation letter from a health
              authority or midwife practice group. They must also meet
              education, training, and experience requirements outlined by the
              public health authority.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Entry Level and Semi-Skilled Stream:</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream is for workers in select occupations in the
              tourism/hospitality or food processing sectors who seek permanent
              residence in BC.
            </p>
            <h4>Eligibility:</h4>
            <p>
              Applicants must have an indeterminate, full-time job offer from a
              BC employer in an eligible occupation, work experience, language
              proficiency, and wage offer aligned with BC standards.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. International Graduate Stream:</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Recent graduates with a degree, diploma, or certificate from an
              eligible Canadian post-secondary institution can utilize this
              stream to obtain permanent residence in BC.
            </p>
            <h4>Eligibility:</h4>
            <p>
              Eligible candidates must have completed their education in the
              past three years, secured an indeterminate, full-time job offer
              from a BC employer, and meet other criteria including language
              proficiency and wage offer.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. International Post-Graduate Stream:</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream caters to recent graduates of eligible B.C.
              post-secondary institutions with master's or doctoral degrees or
              PhD candidates at a public B.C. post-secondary institution.
            </p>
            <h4>Eligibility:</h4>
            <p>
              Eligible education must be obtained from an eligible program of
              study at a B.C. post-secondary institution within the last three
              years, and applicants must demonstrate the intent to live, work,
              and establish economically in BC.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>What are the Program Priorities in British Columbia?</h2>
      <p>
        There are various priority occupations in BC, which provide nominations
        to targeted professions. Currently, they are:
      </p>
      <ul>
        <li>
          <b>
            Childcare, Construction, Healthcare, Technology, Veterinary Care:{" "}
          </b>
          We provide insights into priority occupations and additional criteria
          supporting strategic initiatives, ensuring applicants are
          well-informed.
        </li>
        <li>
          <b>Pilot Programs: </b>Guidance on special pilot programs like the
          Economic Mobility Pathways Pilot (EMPP), offering economic pathways
          for skilled refugees.
        </li>
      </ul>
      <h2>How does Canada PR Calling assist you in obtaining PR?</h2>
      <ul>
        <li>
          <b>Process Guidance:</b> Step-by-step assistance throughout the BC PNP
          process, ensuring adherence to program requirements.
        </li>
        <li>
          <b>Application Support: </b>Comprehensive support in preparing and
          submitting applications, including ensuring all necessary documents
          are in order.
        </li>
        <li>
          <b>Nomination Process: </b>Expert guidance on the nomination process,
          including navigating through the BC PNP nomination package.
        </li>
        <li>
          <b>Permanent Residence: </b>Assistance in the transition to permanent
          residency, ensuring compliance with all IRCC requirements.
        </li>
      </ul>
    </>
  );
}

export default BritishColumbiaPNP;
