import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PrinceEdwardPNP() {
  return (
    <>
      <h1>Prince Edward Island PNP</h1>
      <p>
        The Prince Edward Island PNP is designed to invite skilled workers,
        entrepreneurs, and their families to settle in the province. Through the
        PEI PNP, the province nominates individuals who fulfill the
        requirements.
      </p>
      <h2>Why should I apply for Prince Edward Island PNP ?</h2>
      <p>
        By participating in the PEI PNP, you can enjoy various advantages,
        including expedited processing times and additional support throughout
        the immigration process.
      </p>
      <h2>What are the different Streams and Categories in PEI PNP?</h2>
      <p>
        The Prince Edward Island PNP offers various streams and categories
        tailored to different profiles and immigration goals. Let's explore the
        three main streams under the program:
      </p>
      <ul>
        <li>Express Entry Stream</li>
        <li>Labour Impact Category</li>
        <li>Business Impact Category</li>
      </ul>
      <h2>Express Entry Stream</h2>
      <p>
        The PEI Express Entry Category is tailored for individuals holding a
        valid Express Entry profile and expressing an interest in residing in
        PEI. While a job offer isn't mandatory, PEI gives preference to
        applicants already residing and working in PEI with a continuing job
        offer.
      </p>
      <h3>Applicant Criteria:</h3>
      <ul>
        <li>Possession of a valid profile in the Express Entry System.</li>
        <li>
          Indication in the Express Entry profile of an interest in living in
          PEI.
        </li>
        <li>
          Reception of an invitation to apply from PEI based on the Expression
          of Interest.
        </li>
        <li>
          PGWP holders in this stream require 9 months of work experience with
          the supporting PEI employer if they graduated from an institution
          outside PEI or have less than 4 months remaining on their work permit.
        </li>
      </ul>
      <h2>Labour Impact Category</h2>
      <p>
        The Labour Impact Category is designed for individuals with a valid job
        offer from a PEI employer. This is broadly divided into three
        subcategories:
      </p>
      {/* <ul>
        <li>
          <b>Skilled Worker Stream: </b>This stream targets to attract
          applicants with a valid job offer in a skilled occupation.
        </li>
        <li>
          <b>Critical Worker Stream: </b>Aims to address labor market shortages
          by inviting individuals with relevant work experience in specific
          occupations that are in demand in PEI.
        </li>
        <li>
          <b>International Graduate Stream: </b>This stream is caters the
          international students who have graduated from a recognized PEI
          post-secondary institution and have a valid job offer from a PEI
          employer.
        </li>
      </ul> */}
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Skilled Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream empowers employers to fill skilled positions with
              workers from within or outside Canada.
            </p>
            <h4>Applicant Criteria:</h4>
            <ul>
              <li>
                Acquisition of a full-time, non-seasonal (permanent or minimum
                of two years) job offer from an eligible PEI employer in a NOC
                TEER 0, 1, 2, or 3 position.
              </li>
              <li>
                Accumulation of at least 2 years of full-time work experience in
                the past 5 years.
              </li>
              <li>Holding a valid work permit if working in Canada.</li>
              <li>
                If residing outside Canada, possessing legal status in the
                country of residence, and authorization from the PEI Office of
                Immigration for the job offer.
              </li>
              <li>
                Completion of a minimum 2-year post-secondary education
                credential.
              </li>
              <li>
                Demonstrated language proficiency to perform the offered job.
              </li>
              <li>
                Reception of an invitation to apply from PEI based on the
                Expression of Interest.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Critical Worker Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Critical Worker Stream of the PEI PNP program enables PEI
              employers to permanently fill certain semi-skilled positions (NOC
              C and D) with their existing workers if they cannot fill the
              positions through the local job market.
            </p>
            <h4>Applicant Criteria:</h4>
            <ul>
              <li>Age between 18 and 59.</li>
              <li>
                Receipt of a full-time, non-seasonal (permanent or at least 2
                years) job offer from an eligible PEI employer in a semi-skilled
                position (NOC TEER 4 or 5).
              </li>
              <li>
                Accumulation of at least 6 months of full-time work for the PEI
                employer.
              </li>
              <li>Holding a valid work permit in Canada.</li>
              <li>
                Completion of education equivalent to at least a Canadian high
                school diploma.
              </li>
              <li>
                Accumulation of a minimum of 2 years of full-time work
                experience or relevant education in the past 5 years.
              </li>
              <li>Attainment of a minimum CLB 4 on a language test.</li>
              <li>
                Possession of settlement funds to successfully establish in PEI.
              </li>
              <li>
                Reception of an invitation to apply from PEI based on the
                Expression of Interest.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. International Graduate Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The PEI International Graduate Stream caters to graduates from a
              PEI post-secondary institution with a job offer from a PEI
              employer.
            </p>
            <h4>Applicant Criteria:</h4>
            <ul>
              <li>Age between 18 and 59.</li>
              <li>
                Completion of a post-secondary degree or diploma from a
                publicly-funded PEI institution.
              </li>
              <li>Possession of a valid post-grad work permit.</li>
              <li>
                Reception of a full-time, non-seasonal (permanent or at least 2
                years) job offer from a PEI employer.
              </li>
              <li>Demonstrated language ability to perform the offered job.</li>
              <li>
                Reception of an invitation to apply from PEI based on the
                Expression of Interest.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <p>
        Applicants in the Labour Impact Category must meet the specific
        requirements of the stream under which they are applying.
      </p>
      <h2>Business Impact Category</h2>
      <p>
        The Business Impact Category individuals who wish to establish or invest
        in a business in Prince Edward Island. This is divided into two streams:
      </p>
      {/* <ul>
        <li>
          <b>Work Permit Stream: </b>It is created to invite individuals who
          wish to establish a business in PEI.
        </li>
        <li>
          <b>Entrepreneur Stream: </b>This stream is caters the individuals who
          wish to establish or purchase and actively manage a business in PEI.
        </li>
      </ul> */}
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Work Permit Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This stream is for foreign nationals with business ownership or
              extensive management experience who would like to move to PEI to
              start their business, and eventually become a permanent resident.
            </p>
            <h4>Eligibility: </h4>
            <li>
              Have a minimum verifiable personal net worth of $600,000 which has
              been accumulated through legal and legitimate sources in your own
              right
            </li>
            <li>Have a minimum education of secondary school equivalent</li>
            <li>Be within 21-59 years of age at the time of application</li>
            <li>
              Have transferable management skills and past employment or
              business ownership experience
            </li>
            <li>
              Meet minimum language requirements equivalent to a CLB/NCLC 4
            </li>
            <li>
              Intend to live and work in PEI while providing day-to-day active
              and ongoing management of your PEI-based company
            </li>
            <li>
              Attend an interview with staff from the Office of Immigration.
            </li>
            <li>
              Meet the terms and conditions of the Performance Agreement signed
              with the Office of Immigration.
            </li>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Entrepreneur Stream</h4>
          </AccordionSummary>
          {/* <AccordionDetails>
            AINP, or Alberta Immigrant Nominee Program, is an economic
            immigration initiative targeting skilled individuals or aspiring
            entrepreneurs. Successful nominees can apply for permanent residence
            in Alberta.
          </AccordionDetails> */}
        </Accordion>
      </div>
      <p>
        Applicants in the Business Impact Category must submit a comprehensive
        business plan demonstrating their intent and ability to invest in a
        viable business that will contribute to the economic growth of Prince
        Edward Island.
      </p>
      <h2>What is the process of Application?</h2>
      <p>
        To submit your EOI, one is required to abide by the following process:
      </p>
      <ul>
        <li>Determine your eligibility</li>
        <li>Submit an Expression of Interest (EOI)</li>
        <li>Receive an Invitation to Apply (ITA)</li>
        <li>Submit a complete application</li>
        <li>Application review and assessment</li>
        <li>Nomination</li>
        <li>Apply for permanent residency</li>
        <li>Obtain permanent residency</li>
      </ul>
      <p>
        By meeting the eligibility criteria, submitting a strong application,
        and embracing the benefits of the program, you can increase your chances
        of receiving a provincial nomination and ultimately obtaining Canadian
        permanent residency.
      </p>
      <p>
        The application process may vary depending on the stream and category
        one selects. To start the application process, consult our RCIC lawyer
        Kawaljit Shangari, to help you navigate the intricacies.
      </p>
    </>
  );
}

export default PrinceEdwardPNP;
