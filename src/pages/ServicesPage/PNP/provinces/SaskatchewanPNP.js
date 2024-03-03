import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SaskatchewanPNP() {
  return (
    <>
      <h1>Streams within the Saskatchewan PNP</h1>
      <h2>International Skilled Worker Category</h2>
      <p>
        This category is designed for skilled workers residing outside of
        Saskatchewan who aim to work and live in the province. Applicants must
        meet specific criteria based on their occupation, work experience,
        language proficiency, and educational background. There are five
        sub-categories tailored to different situations, such as having a job
        offer, being in the Express Entry pool, or possessing specialized tech
        skills.
      </p>
      <p>For an applicant, the following criteria must be met:</p>
      <ul>
        <li>
          Score a minimum of 60 points out of 100 on the points assessment grid
        </li>
        <li>
          Have at least 1 year work experience within the past 10 years in the
          occupation that enables you to qualify for SINP
        </li>
        <li>
          Are eligible for licensing in Saskatchewan, if required for your
          occupation
        </li>
      </ul>
      <li>Have scored a minimum CLB 4 on a valid language test</li>
      <p>
        In addition to the general criteria for this category, applicants must
        meet additional criteria for one of the 5 sub-categories below.
      </p>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Employment Offer</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <p>
              As an international skilled worker, you have a job offer, in a
              skilled position (NOC TEER 0, 1, 2 or 3), from an employer in
              Saskatchewan who holds an SINP job approval letter
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Occupation in Demand</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>Your occupation is a NOC TEER 0, 1, 2 or 3 position</li>
              <li>Your occupation is not on the excluded occupations list</li>
              <li>No need for a job offer in Saskatchewan</li>
              <li>
                You have completed the equivalent to a minimum one-year Canadian
                post-secondary credential
              </li>
              <li>You have scored a min CLB 4 on a valid language test</li>
            </ul>
            <p>
              You may submit an Expression of Interest online and may be invited
              to apply based on your overall points total for the SINP skilled
              worker assessment grid
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Saskatchewan Express Entry </h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>You have an active Express Entry profile</li>
              <li>
                You have completed education that's equivalent to a min one-year
                Canadian post-secondary credential
              </li>
              <li>Your occupation is not on the excluded occupations list</li>
              <li>
                You have at least one year of work experience in NOC TEER 0, 1,
                2 or 3 that matches an occupation not on the excluded
                occupations list and is related to your field of education
              </li>
              <li>You have funds to settle successfully in Saskatchewan</li>
              <li>No job offer is needed</li>
            </ul>
            <p>
              You may submit an Expression of Interest online and may be invited
              to apply based on your overall points total for the SINP skilled
              worker assessment grid
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. Tech Talent Pathway</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>
                <p>
                  You need to have a permanent and full-time job offer in the
                  following positions:
                </p>
                <ul>
                  <li>NOC 20012: Computer and information systems managers</li>
                  <li>NOC 21310: Electrical and Electronics engineers</li>
                  <li>
                    NOC 21311: Computer engineers (except software engineers and
                    designers)
                  </li>
                  <li>NOC 21211: Data Scientist</li>
                  <li>NOC 21220: Cybersecurity specialists</li>
                  <li>NOC 21221: Business system specialist</li>
                  <li>NOC 21222: Information System specialist</li>
                  <li>NOC 21233: Web designer</li>
                  <li>NOC 21223: Database analysts and data administrators</li>
                  <li>NOC 21231: Software engineers and designers</li>
                  <li>
                    NOC 21230: Computer systems developers and programmers
                  </li>
                  <li>NOC 21232: Software developers and programmers</li>
                  <li>NOC 21234: Web developers and programmers</li>
                  <li>NOC 22220: Computer network and technicians</li>
                  <li>NOC 22221: User support technicians</li>
                  <li>NOC 22222: Information system testing technicians</li>
                </ul>
              </li>
              <li>
                You have a valid SINP Job Approval Letter from your employer to
                show proof
              </li>
              <li>
                you are eligible for Saskatchewan licensing (if applicable to
                your occupation)
              </li>
              <li>
                you have a post-secondary education that relates to the job
                you've been offered
              </li>
              <li>
                If applying from Saskatchewan: Currently working in Saskatchewan
                and have worked full-time (30+ hours per week) for at least 6
                months for the employer offering you the job; If you have not
                been working for your supporting employer full-time for at least
                6 months, then you must have at least 1 year of work experience
                in your occupation within the last 5 years.
              </li>
              <li>
                If applying from outside of Saskatchewan or Canada: One year of
                high-skilled related work experience in the past five years in
                your intended eligible occupation.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. Hard-to-Fill Skills Pilot</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>

            <ul>
              <li>
                You have a permanent and full-time job offer in an eligible
                occupation
              </li>
              <li>
                You have at least 1 year full-time work experience in the past 3
                years (in your intended occupation); or 6 months full-time
                working in Saskatchewan in the job
              </li>
              <li>
                You have a valid SINP Job Approval Letter from your employer to
                show proof
              </li>
              <li>
                You have completed education that's equivalent to a min one-year
                Canadian post-secondary credential
              </li>
              <li>
                You have scored a min CLB 4 on a valid language test (Note: Some
                employers or regulators may ask for scores that are higher than
                CLB 4)
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>Saskatchewan Experience Category</h2>
      <p>
        The Saskatchewan Experience Category is for foreign nationals who are
        already working and living in Saskatchewan, with a valid work permit.
        You need to be working for an employer that holds a valid SINP job
        approval letter and has made you a permanent job offer. You do not need
        to register in the expression of interest system or receive an
        invitation to apply. Applicants who work in a NOC TEER 4 or 5 occupation
        will need to demonstrate a min language score of CLB 4.
      </p>
      <p>
        Note: The SINP currently has several pilot projects open whereby you can
        apply in this category if you are not presently working in Saskatchewan,
        but you can demonstrate that you previously worked in Saskatchewan in
        certain occupations.
      </p>
      <p>
        The applicant must meet additional requirements in one of the six
        sub-categories below:
      </p>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>1. Skilled worker with existing work permit</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>
                You have been working in SK for at least 6 months with a valid
                work permit
              </li>
              <li>
                You have a permanent job offer from your SK employer in NOC TEER
                0, 1, 2 or 3, or in a designated trade
              </li>
              <li>
                You cannot apply to this category if you are a refugee claimant,
                health professional, food and beverage server or are working on
                a post grad work permit
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>2. Semi-skilled Agriculture worker</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>
                You are currently working, as a Harvest Labourer (NOC 85101),
                Livestock Labourer (NOC 85100) or Nursery and Greenhouse
                Labourer (NOC 85103) for at least 6 months for the employer
                making you the job offer
              </li>
              <li>
                You have a valid work permit in either Seasonal Agricultural
                Worker Program, International Experience Canada or Temporary
                Foreign worker program (LMIA based)
              </li>
              <li>
                You have completed education that is equivalent to a Canadian
                high school diploma
              </li>
            </ul>
            <p>
              Note: There is a current pilot project that you can apply as an
              Agricultural worker even if you are not currently working in
              Saskatchewan, as long as you can prove that you worked in
              Saskatchewan as an Agricultural Worker for at least 6 months in
              the past.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>3. Health Professionals</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>
                You have been working as a Physician, Nurse or other health
                professional for at least 6 months in Saskatchewan, with a valid
                work permit
              </li>
              <li>
                You meet the licensing requirements for your profession in
                Saskatchewan
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>4. Hospitality Sector Project</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>

            <li>
              You have been working as a Food/Beverage server (NOC 65200), Food
              Counter Attendant, Kitchen Helper (NOC 65201) or
              Housekeeping/Cleaning Staff (NOC 65301) for at least 6 months
            </li>
            <li>Your employer has SINP hospitality approval</li>
            <li>Your work permit is based on an LMIA</li>
            <li>You have completed minimum of Grade 12 (or equivalent)</li>
            <p>
              Note: there is a current pilot project that you can apply as a
              Food/Beverage server even if you are not currently working in
              Saskatchewan, as long as you can prove that you worked in
              Saskatchewan as a Food/Beverage server for at least 6 months in
              the past.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>5. Long-Haul Truck Driver Project</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <ul>
              <li>
                You have been working as a long-haul truck driver for a
                Saskatchewan firm for at least 6 months, with an LMIA based work
                permit
              </li>
              <li>You hold a valid Saskatchewan Class 1A driver's license</li>
              <p>
                Note: there is a current pilot project that you can apply as a
                Long-Haul Truck Driver even if you are not currently working in
                Saskatchewan, as long as you can prove that you worked in
                Saskatchewan as a Long-Haul Truck Driver for at least 6 months
                in the past.
              </p>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>6. Students</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Requirement: </h4>
            <li>
              You have graduated from a recognized post-secondary institution in
              Canada
            </li>
            <li>You hold a valid post grad work permit</li>
            <li>
              You have a permanent job offer in Saskatchewan, for a job that is
              in NOC TEER 0, 1, 2 or 3, or a designated trade related to your
              field of study
            </li>
            <li>
              If you graduated from a school in Saskatchewan, you have a
              certificate, diploma or degree plus at least 6 months of paid
              employment (can include work gained while studying)
            </li>
            <li>
              If you graduated from a school in another part of Canada, you have
              worked at least 6 months on your post grad work permit in
              Saskatchewan in a position related to your field of study
            </li>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>Other Steams/Categories:</h2>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Saskatchewan Entrepreneurs</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This category is for qualified entrepreneurs who wish to start,
              purchase or partner in an eligible business and actively manage
              it. Applicants must submit an online expression of interest and
              will be able to apply if they receive an invitation based on the
              points grid. Once invited, you will submit a Business
              Establishment Plan to the SINP. If your plan is approved, you
              enter into a contract with SINP and are given a support letter
              that enables you to apply for a work permit so that you can travel
              to Saskatchewan and establish your business. After 6 months of
              successfully running the business, you are eligible for a
              Provincial nomination.
            </p>
            <h4>Applicant criteria:</h4>
            <ul>
              <li>
                You have a minimum net worth of CAD $500,000 in Net Business and
                Personal Assets
              </li>
              <li>
                You have a min 3 years relevant business management or
                entrepreneurial experience within past 10 years
              </li>
              <li>
                You intend to invest a min CAD $300,000 in Regina and Saskatoon
                or a min of CAD $200,000 in any other Saskatchewan community
              </li>
            </ul>
            <h4>Business criteria:</h4>
            <ul>
              <li>
                You will own at least 1/3 of the equity in the Saskatchewan
                business, unless your total investment is CAD $1 million or
                higher;
              </li>
              <li>
                You will provide active and on-going participation in the day to
                day management of the business
              </li>
              <li>
                You will create 2 new jobs for people who are not related to you
                (only if establishing a new business in Regina or Saskatoon)
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>International Graduate Entrepreneur</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This category is for Saskatchewan graduates with a valid post-grad
              work permit who want to start up or purchase and operate a
              qualifying business in Saskatchewan. Applicants must submit an
              online expression of interest and will be invited to apply based
              on the points grid. Once invited, you will submit a Business
              Establishment Plan to the SINP. If your plan is approved, you
              enter into a contract with SINP and will need to successfully run
              the business for at least one year in order to receive a
              Provincial nomination.
            </p>
            <h4>Applicant criteria:</h4>
            <ul>
              <li>You are at least 21 years of age</li>
              <li>
                You have completed a full-time post-secondary program of at
                least 2 years duration from an eligible Saskatchewan institution
              </li>
              <li>
                You hold a valid post-grad work permit, with at least 24 months
                validity remaining
              </li>
              <li>
                You lived in Saskatchewan while you completed your studies
                (distance-learning and accelerated learning programs are not
                eligible)
              </li>
              <li>You have a min CLB 7 on your language test</li>
              <li>
                You present a viable proposal in an eligible business sector,
                and plan to personally operate the business
              </li>
            </ul>
            <p>There is no application fee in this category</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Farm Owner and Operator Category</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This category is for experienced farmers who plan to buy and
              operate a farm in Saskatchewan in primary agricultural production
              (crops and livestock).
            </p>
            <h4>Applicant criteria:</h4>
            <ul>
              <li>
                You have proven farm experience that will enable you to
                successfully farm in Saskatchewan
              </li>
              <li>You have a min net worth of CAD $500,000</li>
              <li>
                You will make a deposit of CAD $75,000 paid to the SINP, which
                is refunded if you follow all conditions within 2 years of
                arrival to Saskatchewan
              </li>
              <li>
                You must first visit Saskatchewan for a min of 10 business days
                and meet with an SINP representative
              </li>
              <li>
                You must demonstrate that your plans to operate a farming
                operation are viable
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Young Farmer Stream</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h4>Applicant criteria:</h4>
            <ul>
              <li>You have a personal net worth of min CAD $300,000</li>
              <li>You are less than 40 years old at time of application</li>
              <li>
                You have at least 3 years experience in farm ownership,
                management or practical farming experience
              </li>
              <li>
                You will provide a proposal for a commercial farming project
                that will generate at least CAD $10,000 in annual revenue
              </li>
              <li>
                You or spouse must also demonstrate marketable employment skills
                that enables you to supplement your farming income
              </li>
              <li>
                You must make an exploratory visit to SK for at least 10
                business days
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>What is the process of Saskatchewan PNP?</h4>
          </AccordionSummary>
          <AccordionDetails>
            First, you have to complete an Expression of Interest (EOI) online,
            by answering a series of questions to generate a personalized score.
            This is the first step in your Saskatchewan Provincial Nominee
            Program (PNP) journey. The top-scoring candidates receive
            invitations to submit your SINP application. Once nominated, proceed
            to apply directly to the Canadian federal government for permanent
            residency.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Do I require a job offer for the SINP?</h4>
          </AccordionSummary>
          <AccordionDetails>
            Yes and No. Actually, a job offer is typically required for the
            International Skilled Worker and Entrepreneur/Farm streams, certain
            Experience. However, for an Express Entry stream, one may not
            require it.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Is the SINP application process challenging?</h4>
          </AccordionSummary>
          <AccordionDetails>
            Yes and No. Let's understand it this way: the complexity of the
            application process depends on individual circumstances. As
            eligibility criteria include demonstrating a connection to
            Saskatchewan, therefore, graduating from a local educational
            institution, or intending to establish a business, or qualifying for
            the Morden community immigration stream may provide successful
            results. Success is achievable by meeting specific requirements
            aligned with your situation.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>How do I know if I am eligible for the Saskatchewan PNP?</h4>
          </AccordionSummary>
          <AccordionDetails>
            It varies per situation but any connection to the province is
            valuable. It extends to skilled workers abroad, and the skilled
            workers in Saskatchewan, entrepreneurs, and farmers aspiring to
            establish businesses in Canada, and international graduates as well.
            A connection to the province, whether through friends, family, work
            experience, or education, enhances your eligibility.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Which are the popular universities and colleges in Saskatchewan?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            Of all provinces, Saskatchewan too boasts renowned educational
            institutions, including the University of Saskatchewan, the
            University of Regina, Saskatchewan Polytechnic, and many more. These
            institutions provide a diverse academic landscape for students
            pursuing excellence.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Can I apply without a connection to Saskatchewan?</h4>
          </AccordionSummary>
          <AccordionDetails>
            While certain streams require a connection to the province, however,
            others may not. A connection through friends, family, or previous
            work or educational experiences in Saskatchewan enhances your
            chances. Nevertheless, specific streams may offer flexibility in
            this regard.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>How many points are required for the Saskatchewan PNP?</h4>
          </AccordionSummary>
          <AccordionDetails>
            The amazing part of SINP is its Saskatchewan Points Assessment Grid,
            which evaluates candidates out of 100 points. In order to qualify
            for most SINP streams, a minimum of 60 points is essential. To
            attain success in application, supply supporting documentation to
            meet this requirement.
          </AccordionDetails>
        </Accordion>
      </div>
      <p>
        If you're to apply for Saskatchewan PNP successful application as an
        ideal pathway to achieving your Canadian immigration goals, trust us
        with the knowledge of various streams, flexible eligibility criteria,
        and numerous benefits, it offers a promising opportunity for skilled
        workers, entrepreneurs, and international graduates to make Canada your
        home.
      </p>
      <p>
        Own your brighter future with the assistance of Kawaljit Shangari, our
        registered RCIC today!
      </p>
    </>
  );
}

export default SaskatchewanPNP;
