import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ManitobaPNP() {
  return (
    <>
      <h1>Manitoba PNP</h1>
      <p>
        Manitoba's Provincial Nominee Program (PNP) offers pathways for skilled
        workers, entrepreneurs, and international graduates to immigrate to the
        province. Through various streams, individuals with the right
        qualifications and connections to Manitoba can obtain a provincial
        nomination, which expedites the immigration process to Canada.
      </p>
      <h2>Different streams for Manitoba PNP:</h2>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Skilled Workers in Manitoba</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Manitoba Skilled Worker Category is tailored for foreign
              nationals already residing and employed in Manitoba who seek to
              continue working for their current employer.
            </p>
            <h4>Eligibility criteria:</h4>
            <ul>
              <li>
                you have been working in Manitoba, on a valid work permit, for
                at least 6 months
              </li>
              <li>
                your employer has offered you a long-term, full-time job offer
              </li>
              <li>your employment can be in any NOC TEER 0, 1, 2, 3, 4 or 5</li>
              <li>self-employed applications are not eligible</li>
              <li>
                if you are an international student with a post grad work permit
                who graduated from a post-secondary institution in Manitoba, you
                can apply after working in Manitoba for at least 6 months
              </li>
              <li>
                if you are an international student with a post grad work permit
                who graduated from a post-secondary institution elsewhere in
                Canada, you can apply after working in Manitoba for at least 1
                year
              </li>
              <li>
                you have sufficient finances to settle successfully in Manitoba
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Skilled Workers Overseas</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Manitoba Skilled Worker Overseas Category is designed for
              individuals living outside Manitoba but with connections to the
              province, such as family or friends, previous education or work
              experience, or an invitation from the Manitoba Provincial Nominee
              Program (MPNP) through a Strategic Recruitment initiative.{" "}
            </p>
            <h4>Eligibility criteria:</h4>
            <ul>
              <li>
                You have scored at least 60 points on the Manitoba Points
                Assessment grid
              </li>
              <li>
                You have an established connection to Manitoba, either because
                you have a friend or relative who lives in Manitoba; or you have
                previously worked or studied in Manitoba; or you are invited by
                Manitoba on the basis of your skills.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Business Investor Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Under the Business Investor Stream, experienced business
              individuals can establish or purchase a business in Manitoba. This
              pathway includes the Entrepreneur Pathway for general business
              investments and the Farm Investor Pathway for those interested in
              agricultural ventures. Applicants must meet financial,
              educational, and language proficiency requirements and the
              proposed business must meet eligibility criteria set by the MPNP.
            </p>
            <h4>Eligibility criteria:</h4>
            <ul>
              <li>
                You have a min CAD $500,000 in Net Business and Personal Assets
              </li>
              <li>
                You have a min 3 years within past 5 years of active business
                ownership or in the role of senior management
              </li>
              <li>You score a min CLB 5 Language test results</li>
              <li>
                You hold a min education equivalent to a Canadian High School
                diploma
              </li>
              <li>
                You intend to invest a min $250,000 CAD in Winnipeg or
                surrounding area or a min of $150,000 CAD in any other Manitoba
                community
              </li>
            </ul>
            <h4>Business criteria:</h4>
            <ul>
              <li>
                You will own at least 1/3 of the equity in the Manitoba business
              </li>
              <li>
                You will provide active and on-going participation in the day to
                day management of the business
              </li>
              <li>
                You will create or maintain 1 job for someone who is not related
                to you
              </li>
              <li>The business must be deemed eligible by MPNP</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. The Farm Investor Pathway (FIP)</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The Farm Investor Pathway is for experienced farmers who plan to
              buy and operate a farm in Manitoba
            </p>
            <h4>Eligibility criteria:</h4>
            <ul>
              <li>
                You have a min CAD $500,000 in Net Business and Personal Assets
              </li>
              <li>
                You have a min 3 years farm ownership and operation experience
              </li>
              <li>
                You can demonstrate practical farming skills, technical
                knowledge and experience in farming practices similar to those
                in Manitoba
              </li>
              <li>You will conduct a research visit to Manitoba</li>
              <li>
                You are able to conduct a formal interview in either English or
                French
              </li>
            </ul>
            <h4>Business criteria:</h4>
            <ul>
              <li>
                You will own at least 1/3 of the equity in the Manitoba business
              </li>
              <li>
                You will invest at least CAD $300,000 to establish the operation
              </li>
              <li>
                You will live on the farm and provide active and on-going
                participation in the day to day management of the farm
              </li>
              <li>
                You will create or maintain 1 job for someone who is not related
                to you{" "}
              </li>
              <li>The business must be deemed eligible by MPNP</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. International Education</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The International Education stream facilitates nominations for
              Manitoba graduates with skills required in the local job market.
              There are three pathways available for Manitoba graduates: Career
              Employment, Graduate Internship, and International Student
              Entrepreneur Pilot. Each pathway has specific criteria related to
              residence in Manitoba, education, language proficiency, and
              settlement funds, aiming to retain skilled graduates in the
              province and encourage entrepreneurship.
            </p>
            <p>
              This stream permits the fast-tracking of nominations for Manitoba
              graduates with specific skills desired in the Manitoba economy.
              (Graduates from other provinces must qualify under the Skilled
              Worker in Manitoba stream).
            </p>
            <p>There are 3 pathways for Manitoba graduates:</p>
            <div>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h4>Career Employment Pathway</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    For this pathway, you need to meet the following criteria:
                  </p>
                  <ul>
                    <li>
                      You reside in Manitoba and are working full time in
                      Manitoba
                    </li>
                    <li>
                      You graduated in the past 3 years from a designated
                      post-secondary institution in Manitoba from a full-time
                      course of at least 1 year duration
                    </li>
                    <li>You demonstrate a min CLB 7 on a language test </li>
                    <li>
                      You have a full-time job offer from an eligible Manitoba
                      employer for a minimum of one year, the position is NOC
                      TEER 0, 1, 2 or 3 and on the list of In-Demand
                      Occupations, and is related to your program of studies
                    </li>
                    <li>
                      You can show settlement funds for 6 months unless employed
                      full-time in long-term job
                    </li>
                    <li>
                      You will submit a career plan demonstrating opportunities
                      for a successful career in Manitoba
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h4>Graduate Internship Pathway</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    For this pathway, you need to meet the following criteria:
                  </p>
                  <ul>
                    <li>
                      You reside in Manitoba and are working full time in
                      Manitoba
                    </li>
                    <li>
                      You graduated in the past 3 years from a designated
                      post-secondary institution in Manitoba from a full-time
                      course of at least 1 year duration
                    </li>
                    <li>You demonstrate a min CLB 7 on a language test </li>
                    <li>
                      You have a full-time job offer from an eligible Manitoba
                      employer for a minimum of one year, the position is NOC
                      TEER 0, 1, 2 or 3 and on the list of In-Demand
                      Occupations, and is related to your program of studies
                    </li>
                    <li>
                      You can show settlement funds for 6 months unless employed
                      full-time in long-term job
                    </li>
                    <li>
                      You will submit a career plan demonstrating opportunities
                      for a successful career in Manitoba
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h4>International Student Entrepreneur Pilot</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    A small number of Manitoba graduates (20 per year) will be
                    invited to apply for nomination through entrepreneurship.
                    You must submit an expression of interest based on the
                    Manitoba Points Assessment grid. If invited to apply and
                    your application is accepted, you enter into a contract with
                    MPNP and commence your business. Once you have operated the
                    business successfully for 6 months, you can receive a
                    provincial nomination.
                  </p>
                  <h4>Eligibility criteria:</h4>
                  <ul>
                    <li>You are between the age of 21-35</li>
                    <li>
                      You completed a full-time post-secondary program in
                      Manitoba that is at least 2 years in duration (distance
                      learning or compressed academic programs are not eligible)
                    </li>
                    <li>You have a valid post-grad work permit</li>
                    <li>
                      You have continuously resided in Manitoba since graduation{" "}
                    </li>
                    <li>You score a minimum CLB 7 on a language test </li>
                    <li>
                      A minimum net worth is not required, but your net worth
                      will be verified and considered in evaluating your
                      business plan
                    </li>
                    <li>You will own at least 51% equity in the business</li>
                    <li>
                      You can show settlement funds for a period of 12 months{" "}
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>Application Process</h2>
      <p>
        The application process for the Manitoba PNP involves several steps,
        including submitting an Expression of Interest (EOI), receiving an
        invitation to apply, and providing supporting documentation. Applicants
        must ensure they meet all requirements and follow the instructions
        carefully to maximize their chances of success.
      </p>
      <h2>Benefits of Manitoba PNP</h2>
      <p>
        Obtaining a provincial nomination through the Manitoba PNP offers
        several benefits, including faster processing times for permanent
        residency applications and priority processing for certain streams.
        Additionally, successful applicants can enjoy the opportunity to live
        and work in Manitoba, a province known for its vibrant communities and
        diverse economic opportunities.
      </p>
      <h2>How Can Canada PR Calling Assist You?</h2>
      <p>
        Our team at Canada PR Calling has aided numerous individuals in their
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

export default ManitobaPNP;
