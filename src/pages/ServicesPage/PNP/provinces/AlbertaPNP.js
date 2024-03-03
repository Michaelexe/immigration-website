import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AlbertaPNP() {
  return (
    <>
      <h1>Alberta Advantage Immigration Program (AAIP)</h1>
      <p>
        The Alberta Advantage Immigration Program (AAIP) is a provincial
        initiative designed to facilitate settlement in Alberta. The program
        welcomes immigrants who meet specific criteria, possess skills, and have
        experience that contributes to Alberta's economic growth. Successful
        applicants receive a nomination certificate through the Alberta PNP,
        enabling them to apply for Express Entry through the federal government.
      </p>
      <h2>Different streams in AAIP</h2>
      {/* <ul>
        <li>Alberta Advantage Immigration Program (AAIP)</li>
        <li>AAIP Rural Renewal Stream </li>
        <li>Economic Mobility Pathways Pilot (EMPP)</li>
        <li>Dedicated Healthcare Pathway</li>
        <li>Rural Entrepreneur Stream</li>
        <li>Foreign Graduate Entrepreneur Stream</li>
        <li>Graduate Entrepreneur Stream</li>
        <li>Alberta Farm Stream</li>
        <li>
          Alberta Opportunity Stream <b>(Paused)</b>
        </li>
        <li>Alberta Tourism And Hospitality Stream</li>
      </ul> */}
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Alberta Opportunity Stream (Paused)</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <b>This stream has been paused in February 2024.</b>
            </p>
            <p>
              The Alberta Opportunity Stream is a pathway for individuals
              already employed by an Alberta employer with a valid work permit
              to apply for permanent residency.
            </p>
            <h4>Eligibility Criteria: </h4>
            <ul>
              <li>
                <b>Immigration status: </b>Applicants must hold specific types
                of work permits at the time of application, including those
                based on Labour Market Impact Assessments (LMIAs), international
                trade agreements, intra-company transfers, International
                Experience Canada permits, post-graduation permits from Alberta
                institutions, and others listed in the eligibility criteria.
              </li>
              <li>
                <b>Duration of employment: </b>Applicants must have a full-time
                job offer for at least one year to continue working in their
                current occupation in Alberta.
              </li>
              <li>
                <b>Exceptions: </b>Certain types of work permits, such as open
                permits for spouses of students or skilled workers, are not
                eligible for this stream. Refer to the eligibility criteria for
                details.
              </li>
              <li>
                <b>Other considerations: </b>Individuals with post-graduation
                work permits must have graduated from an Alberta institution to
                be eligible under this stream.
              </li>
            </ul>
            <p>
              Review the eligibility criteria carefully to ensure qualification,
              gather necessary documentation, and follow the application process
              outlined by the Alberta Opportunity Stream.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Alberta Express Entry Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            The Alberta Express Entry stream caters to individuals with an
            active Express Entry profile in the federal Express Entry Pool, who
            have a connection to Alberta. Alberta extends invitations to
            selected candidates from the pool; there's no direct application
            option to the AAIP for this program.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Tech Worker Consideration: Accelerated Tech Pathway</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Tech workers may qualify for expedited processing through the
              Accelerated Tech Pathway.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Valid Express Entry profile with a CRS score above 300.</li>
              <li>
                Full-time employment in Alberta or a job offer for full-time
                employment based in Alberta (minimum of 30 hours per week).
              </li>
              <li>Occupations eligible under the Accelerated Tech Pathway.</li>
              <li>
                Employment with an employer part of the Alberta tech industry,
                as defined by the AAIP list of eligible NAICS codes.
              </li>
              <li>
                Primary occupation in the Express Entry profile matches current
                Alberta employment or job offer.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. Rural Renewal Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Rural Renewal Stream aims to address existing labor shortages
              and skill gaps in rural communities across Alberta. This
              community-driven initiative requires communities to seek
              designation from the Government of Alberta to participate.
            </p>
            <p>This stream follows a two-step process:</p>
            <ol>
              <li>
                <b>Community Designation Process: </b>Communities actively
                recruit newcomers to fulfill labor needs and issue an
                Endorsement of Candidate letter.
              </li>
              <li>
                <b>Application Submission: </b>Candidates endorsed by their
                communities then submit their applications to the Alberta
                Advantage Immigration Program (AAIP).
              </li>
            </ol>
            <p>
              Under the AAIP, rural Alberta communities are defined as those
              outside the Calgary and Edmonton Census Metropolitan Areas (CMAs)
              with populations under 100,000.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>
                Possession of an Endorsement of Candidate letter from the
                designated community.
              </li>
              <li>
                Intent and ability to reside and work in the designated
                community.
              </li>
              <li>
                Full-time job offer or employment contract from an Alberta
                employer in an eligible occupation within the designated
                community (most NOC Tier 0, 1, 2, 3, 4, or 5 occupations are
                eligible).
              </li>
              <li>Employment duration of at least 12 months.</li>
              <li>
                Minimum of 12 months full-time work experience in an eligible
                occupation within the last 18 months, which can include
                experience gained in Alberta, elsewhere in Canada, or abroad.
              </li>
              <li>
                Language proficiency meeting CLB 5 for NOC Tier 0, 1, 2, or 3,
                and CLB 4 for NOC Tier 4 or 5.
              </li>
              <li>
                High school education equivalent to the Canadian standard.
              </li>
              <li>
                Fulfillment of settlement requirements for candidates not
                currently residing or working in Canada.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. Rural Entrepreneur Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              If you're considering starting or purchasing a business in a rural
              Alberta community, you can take advantage of the Rural
              Entrepreneur Stream by submitting an Expression of Interest.
            </p>
            <p>
              According to the AAIP, rural Alberta communities are those with
              populations of less than 100,000, located outside the Calgary and
              Edmonton Census Metropolitan Areas.
            </p>
            <p>
              Interested candidates should connect with the designated community
              contact person to discuss their business proposals and arrange an
              exploratory visit. Each community has its own process for
              scheduling such visits, and they reserve the right to meet only
              with potential entrepreneurs they consider suitable.
            </p>
            <p>
              To apply through this stream, you'll need a Community Support
              Letter from a participating rural Alberta community.
            </p>
            <h4>Eligibility Criteria: </h4>
            <ul>
              <li>
                Minimum of 3 years' experience as an active business
                owner/manager or minimum of 4 years' experience as a senior
                manager within the past 10 years.
              </li>
              <li>
                High school education equivalent to the Canadian standard,
                confirmed by an Education Credential Assessment (ECA).
              </li>
              <li>
                English language proficiency at CLB level 4 for each language
                skill.
              </li>
              <li>Minimum net worth of $300,000.</li>
              <li>
                Minimum investment of $100,000 from the candidate's own equity
                (and/or spouse/common-law partner).
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>6. Graduate Entrepreneur Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Graduate Entrepreneur Stream welcomes applications from
              Alberta post-secondary graduates aiming to establish or manage a
              profit-making business in Alberta, contributing to job
              opportunities for Canadians and permanent residents. You're not
              required to establish the proposed business until your Business
              Application is approved.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>
                <b>Immigration Status:</b> Possession of a valid post-graduate
                work permit at the time of submitting your Expression of
                Interest.
              </li>
              <li>
                <b>Business Requirements:</b>
                <ul>
                  <li>Ownership of at least 34% of the business.</li>
                  <li>
                    Business partners must be Canadian citizens or permanent
                    residents.
                  </li>
                  <li>
                    Business type must not be on the list of ineligible
                    businesses.
                  </li>
                  <li>
                    Residency in Alberta and active management of day-to-day
                    business operations.
                  </li>
                </ul>
              </li>
              <li>
                <b>Language Skills in English or French: </b>Minimum CLB 7
                proficiency in each language skill.
              </li>
              <li>
                <b>Education: </b>Completion of at least two years of full-time
                study resulting in a degree or diploma from a publicly-funded
                post-secondary institution in Alberta.
              </li>
              <li>
                <h4>Adaptability:</h4>
                <p>
                  While not mandatory, the following factors enhance the
                  likelihood of invitation to submit a Business Application:
                </p>
                <ul>
                  <li>
                    Minimum 6 months of related full-time work experience before
                    Expression of Interest submission, which may be acquired
                    through business ownership or management, business
                    incubator/accelerator experience, or eligible
                    entrepreneurship courses.
                  </li>
                  <li>Age between 21-49 years.</li>
                  <li>
                    Economic benefits provided by the business to Alberta,
                    including location, economic sector, investment amount, job
                    creation, support from business incubators, etc.
                  </li>
                  <li>
                    Spouse/common-law partner possessing 1 year of work
                    experience or 2 years of study in Alberta, or CLB 5 language
                    scores.
                  </li>
                  <li>
                    Close relatives living in Alberta: father, step-father,
                    mother, step-mother, child, step-child, sister, step-sister,
                    brother, step-brother.
                  </li>
                  <li>
                    High ranking on a selection grid considering factors such as
                    business experience, job creation, language proficiency
                    exceeding minimum requirements, etc.
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>7. Farm Stream </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The self-employed farmer stream caters to entrepreneurs possessing
              the financial means and farm management expertise to either
              establish a new farm or acquire an existing one in Alberta.
            </p>
            <h4>Application Process:</h4>
            <p>
              Candidates are required to submit their application, accompanied
              by a proposed business plan, to AAIP for evaluation. AAIP
              collaborates with Alberta Agriculture, Forestry, and Rural
              Economic Development to assess the feasibility, viability, and
              alignment with the needs of Alberta's agriculture sector.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Demonstration of farm management skills.</li>
              <li>
                Ability to invest a minimum of CDN $500,000 of equity in a
                primary production farming business in Alberta.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>8. Tourism and Hospitality Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Alberta's tourism and hospitality sector endured significant
              challenges due to COVID-19 and is still grappling with labor
              shortages hindering industry resurgence. In response, the Alberta
              Advantage Immigration Program is crafting a specialized
              immigration stream tailored for the tourism and hospitality
              sector. This initiative aims to offer a swift pathway to permanent
              residence for industry professionals.
            </p>
            <p>
              The Alberta government is actively developing this new stream,
              with further information expected in the near future. It will
              complement the Alberta Express Entry Stream selections in 2023,
              focusing on priority sectors.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>Frequently Asked Questions</h2>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>What is AINP and how does it work?</h4>
          </AccordionSummary>
          <AccordionDetails>
            AINP, or Alberta Immigrant Nominee Program, is an economic
            immigration initiative targeting skilled individuals or aspiring
            entrepreneurs. Successful nominees can apply for permanent residence
            in Alberta.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>What are the primary streams under AINP?</h4>
          </AccordionSummary>
          <AccordionDetails>
            AINP comprises streams like Alberta Opportunity Stream, Alberta
            Express Entry Stream, International Graduate Entrepreneur
            Immigration Stream, and Self-Employed Farmer Stream.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              What are the eligibility criteria for the Alberta Express Entry
              Stream?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            Express Entry Stream candidates must have an active profile in the
            federal Express Entry pool, meet federal immigration program
            criteria, plan to reside in Alberta, work in a favored occupation,
            and achieve a CRS score of at least 300.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              What are the prerequisites for the Alberta Foreign Graduate
              Entrepreneur Immigration Stream?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            Candidates need a PGWP, a CLB level of 7 in each English language
            skill, and must establish a new or purchase an existing business in
            Alberta.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>What are the newest pathways to AAIP?</h4>
          </AccordionSummary>
          <AccordionDetails>
            The AAIP is launching a new immigration stream on March 1, 2024, to
            help the province's tourism and hospitality industry address labour
            gaps and challenges.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>How does the Self-Employed Farmer Stream work?</h4>
          </AccordionSummary>
          <AccordionDetails>
            This pathway is designed for entrepreneurs possessing both the
            financial means and farm management expertise necessary to either
            establish a new farm or acquire an existing one in Alberta. You are
            required to submit their applications, along with a detailed
            business proposal, to the Alberta Advantage Immigration Program
            (AAIP) for evaluation. The AAIP will collaborate with Alberta
            Agriculture and Irrigation to review the feasibility and viability
            of the business plan, ensuring alignment with the requirements of
            Alberta's agricultural sector.
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default AlbertaPNP;
