import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function NovaSoctiaPNP() {
  return (
    <>
      <h1>Nova Scotia PNP</h1>
      <h2>
        Why should you select Nova Scotia PNP Pathways with Canada PR Calling?
      </h2>
      <p>
        Nova Scotia, known for its thriving economy and welcoming communities,
        offers various pathways for individuals seeking Canadian permanent
        residency.
      </p>
      <p>
        At Canada PR Calling, we specialize in guiding you through the Nova
        Scotia Provincial Nominee Program (PNP) with our expert team led by RCIC
        lawyer Kawaljit Shangari.
      </p>
      <h2>What are the different pathways Nova Scotia PNP?</h2>
      <p>
        You can explore the following Nova Scotia PNP streams and select as per
        your case:
      </p>
      {/* <ul>
        <li>
          <b>Nova Scotia Demand: Express Entry: </b>
          Targeting highly skilled individuals, this stream requires either a
          job offer from a Nova Scotia employer or work experience in
          sought-after occupations in the province. Benefit from expedited
          processing through coordination with the Express Entry system.
        </li>
        <li>
          <b>Nova Scotia Experience (Express Entry): </b>
          Designed for skilled individuals intending to reside and work
          permanently in Nova Scotia, this stream mandates at least one year of
          work experience in a high-skilled occupation specified by the
          province.
        </li>
        <li>
          <b>Nova Scotia Skilled Worker: </b>
          Employers in Nova Scotia can recruit foreign workers and international
          students with in-demand skills through this stream. Eligible
          applicants with a job offer from a Nova Scotia employer can simplify
          their immigration process.
        </li>
        <li>
          <b>Nova Scotia Physicians: </b>
          Addressing critical labor needs in the province's public health
          sector, this stream facilitates the nomination of individuals with a
          valid job offer from a Nova Scotia health organization.
        </li>
        <li>
          <b>Nova Scotia Entrepreneur: </b>
          Experienced business owners or senior managers seeking new
          opportunities can invest in a Nova Scotia business under this stream.
          Applicants must demonstrate substantial net worth and business
          management expertise.
        </li>
        <li>
          <b>Nova Scotia International Graduate Entrepreneur: </b>
          Tailored for recent graduates from Nova Scotia universities and
          colleges, this stream requires successfully operating a business in
          the province for at least one year.
        </li>
        <li>
          <b>Nova Scotia Labour Market Priorities: </b>
          Focusing on Express Entry candidates with experience in high-demand
          occupations, this stream is currently accepting applications from
          Early Childhood Educators and Assistants.
        </li>
        <li>
          <b>Nova Scotia Occupations In-Demand: </b>
          Designed for workers with a job offer from a Nova Scotia employer in
          high-demand fields such as nursing, transportation, heavy equipment
          operation, or construction trades.
        </li>
      </ul> */}
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Nova Scotia Demand: Express Entry</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Nova Scotia Demand: Express Entry stream is a pathway for
              skilled workers who have a profile registered in Immigration,
              Refugees and Citizenship Canada's Express Entry system to apply
              for nomination by Nova Scotia.
            </p>
            <h4>Eligibility for Category A:</h4>
            <p>
              Eligibility for Category A includes having a profile registered in
              Express Entry, scoring 67 points or more on the stream’s selection
              factors, having a job offer from a Nova Scotia employer for
              full-time skilled work lasting at least one year, among other
              criteria.
            </p>
            <h4>Eligibility for Category B:</h4>
            <p>
              Category B requires being in one of the target occupations
              identified in the Nova Scotia Demand: Express Entry guide, having
              a profile registered in Express Entry, scoring 67 points or more
              on the selection factors, and meeting other criteria such as
              language proficiency and financial resources.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Nova Scotia Experience: Express Entry Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Nova Scotia Experience: Express Entry stream selects highly
              skilled individuals with at least one year of work experience in
              Nova Scotia to live in the province permanently.
            </p>
            <h4>Eligibility:</h4>
            <p>
              Eligibility criteria include having at least one year of work
              experience in Nova Scotia, being between 21 to 55 years old,
              possessing a Canadian high school credential or equivalent,
              meeting language proficiency requirements, and having a profile
              registered in Express Entry.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Nova Scotia Labour Market Priorities</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Nova Scotia Labour Market Priorities stream selects candidates
              from the federal Express Entry system who meet provincial labour
              market needs and have received a Letter of Interest from the Nova
              Scotia Office of Immigration.
            </p>
            <h4>How can I receive a Letter of Interest for this stream?</h4>
            <p>
              To receive a Letter of Interest, candidates must meet the minimum
              work experience requirements of the Express Entry stream for which
              they have qualified and demonstrate sufficient funds to establish
              themselves in Nova Scotia.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. Physician Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Physician Stream assists Nova Scotia's public health
              authorities in hiring general practitioners, family physicians,
              and specialist physicians to work in the province.
            </p>
            <h4>Requirements:</h4>
            <p>
              Requirements include being a general practitioner, family
              physician, or specialist physician with signed approved
              opportunities from the Nova Scotia Health Authority or the IWK
              Health Centre.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. Entrepreneur Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Entrepreneur Stream is for experienced business owners or
              senior business managers interested in establishing and actively
              managing a business in Nova Scotia.
            </p>
            <h4>Eligibility:</h4>
            <p>
              Eligibility criteria include being 21 years of age or older,
              having a net worth of at least $600,000 CAD, investing at least
              $150,000 CAD in a Nova Scotia business, and having relevant
              business management experience.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>6. International Graduate Entrepreneur Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The International Graduate Entrepreneur Stream is for recent
              graduates of a Nova Scotia university or the Nova Scotia Community
              College who have started or bought a business in the province.
            </p>
            <h4>Requirements:</h4>
            <p>
              Requirements include completing a degree or diploma at a Nova
              Scotia institution, having a valid post-graduation work permit,
              actively managing a Nova Scotia business for at least one year,
              and meeting language proficiency requirements.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>7. Skilled Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Skilled Worker Stream allows employers in Nova Scotia to
              recruit foreign workers and recently graduated international
              students whose skills are needed in the province.
            </p>
            <h4>Requirements:</h4>
            <p>
              Employers must provide a full-time permanent job offer to foreign
              workers, ensure they have the appropriate training and skills for
              the job, and meet other criteria specified by the Nova Scotia
              Office of Immigration.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <p>
        Let Canada PR Calling be your trusted partner in navigating the Nova
        Scotia PNP. Our experienced professionals will provide personalized
        guidance and support throughout your application process, ensuring a
        smooth and successful journey to Canadian permanent residency. Contact
        us today to get started on your path to Nova Scotia!
      </p>
    </>
  );
}

export default NovaSoctiaPNP;
