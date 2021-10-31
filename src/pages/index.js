import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Fund Formation & Structuring",
    content: (
      <>
        <h5>Assistance and advice on fund structure and setup</h5>
        <h5>Review of fund documentation, agreements and procedures</h5>
        <h5>
          Liaison with investors and assistance with anti-money laundering
          requirements
        </h5>
        <h5>Formation of required entities in Asia</h5>
        <h5>Assistance with appointment of non-executive directors</h5>
      </>
    ),
  },
  {
    title: "Fund Accounting & Financing Reporting",
    content: (
      <>
        <h5 className={styles.wieghtMedium}>
          Bookkeeping & maintenance of accounting records
        </h5>
        <h5>Coordination with auditors on statutory audit</h5>
        <h5>Distribution calculations</h5>
        <h5>Calculation of carried interest</h5>
        <h5>
          Preparation of monthly, quarterly and annual unaudited fund accounts
        </h5>
        <h5>Capital draw down calculations</h5>
        <h5>Local tax filings</h5>
      </>
    ),
  },
  {
    title: "Fund Secretarial & Compliance",
    content: (
      <>
        <h5>Provision of company secretary</h5>
        <h5>Provision of registered office</h5>
        <h5>Filing of annual returns</h5>
        <h5>Maintenance of statutory registers</h5>
        <h5>Maintenance of minute books and statutory returns</h5>
        <h5>Other statutory compliance</h5>
      </>
    ),
  },
  {
    title: "Fund Investor Relations",
    content: (
      <>
        <h5>Maintenance of Investor Registers</h5>
        <h5>Issue of capital call and distribution notices</h5>
        <h5>Distribution of quarterly investor reports</h5>
        <h5>Preparation and distribution of capital statements</h5>
        <h5>Attending to investor queries and requests</h5>
      </>
    ),
  },
  {
    title: "Fund Cash Flow Monitoring & Reporting",
    content: (
      <>
        <h5>Monitoring of bank accounts</h5>
        <h5>Processing of capital calls and distributions</h5>
        <h5>Processing of fund expenses</h5>
        <h5>Performance of bank reconciliations</h5>
        <h5>Provision of authorized bank signatories</h5>
      </>
    ),
  },
  {
    title: "And More",
    content: (
      <>
        <h5>Payroll processing</h5>
        <h5>Assistance with work permit application</h5>
      </>
    ),
  },
];

const renderServices = () => {
  return (
    <div className={styles.services}>
      {services.map((service, index) => (
        <div className={styles.row} key={`service_${index}`}>
          <div>
            <h4 className={styles.serviceTitle}>{service.title}</h4>
            <div className={styles.serviceContent}>{service.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
const IndexPage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.logo}>
          <StaticImage
            className={styles.imgLogo}
            alt="raffles"
            src="../images/logo.png"
          />
        </div>
        <div>
          <h1>Raffles Fund Services</h1>
          <h5>Expertise. Commitment. Value.</h5>
        </div>
      </section>
      <section
        className={`${styles.sectionCompanyProfile} ${styles.limitScreenSize}`}
      >
        <div>
          <StaticImage
            className={styles.imgCompany}
            alt="office"
            src="../images/tower.jpg"
          />
        </div>
        <div className={styles.companyDetails}>
          <h2 className={styles.wieghtMedium}>
            Raffles Fund Services Pte. Ltd.
          </h2>
          <h5 className={styles.wieghtMedium}>
            Established in 1992, Stratford Accounting is a full-service firm
            offering affordable accounting solutions to individuals and local
            and international businesses.
          </h5>
          <button className={`${styles.effect} ${styles.effect5}`}>
            Learn More
          </button>
        </div>
      </section>
      {/* <section className={styles.sectionClient}>
        <div className={styles.titleClient}>
          <h3>Our Client Roster</h3>
          <h5 className={styles.wieghtMedium}>
            From our early days, we've been providing reliable service to our
            clientele. We've had the honor being the firm of choice of the
            following corporations:
          </h5>
        </div>
        <div>
          <div>
            <div className={styles.cards}>
              <div>
                <StaticImage alt="team" src="../images/team.jpeg" />
                <h5>sample company</h5>
              </div>
              <div>
                <StaticImage alt="team" src="../images/team.jpeg" />
                <h5>sample company</h5>
              </div>
              <div>
                <StaticImage alt="team" src="../images/team.jpeg" />
                <h5>sample company</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className={`${styles.sectionOurService} ${styles.limitScreenSize}`}
      >
        <div className={styles.titleService}>
          <h2>Our Services</h2>
          <div>
            <StaticImage
              className={styles.imgService}
              alt="service"
              src="../images/pen.jpeg"
            />
          </div>
        </div>
        <div>
          <p>
            Investments using hard-earned money require a highly experienced and
            trusted fund manager, whereby your investments will earn your
            aspired returns as well as secured and hassle-free. We strongly
            believe in creating and nurturing a long-term relationship with our
            clients based on mutual trust and a win-win outcome. Towards this
            end, we are committed to maintaining regular communication with
            regards to providing sound advice on market trends and performance
            so that our clients will be able to make informed decisions on their
            investments.
          </p>
          <br />
          <p>
            To complement our market intelligence and advice, we have a team of
            qualified accounting personnel who will present your investment
            portfolios and performance in accordance with the market benchmark
            on accounting practices. Every task entrusted to us will be managed
            and reported with the highest level of professionalism and
            transparency. Our company offers a full range of investments,
            company incorporation and secretarial services, taxation and
            accounting services, as follows:
          </p>
        </div>
        <div className={styles.servicesQuestion}>
          <h3>What does Raffles offer?</h3>
        </div>
        {renderServices()}
      </section>
      <section className={`${styles.sectionCareer} ${styles.limitScreenSize}`}>
        <div className={styles.titleCareer}>
          <h3>Let's work together.</h3>
          <div>
            <StaticImage
              className={styles.imgCareer}
              alt="service"
              src="../images/shakehand.jpeg"
            />
          </div>
        </div>
        <div className={styles.careerInfo}>
          <div className={styles.row}>
            <h4>Mailing Address</h4>
            <h5>2 Havelock Road, #05-22 Havelock II, Singapore 059763</h5>
          </div>
          <div className={styles.row}>
            <h4>Phone Number</h4>
            <h5>+65 6221 4030</h5>
          </div>
          <div className={styles.row}>
            <h4>Email Address</h4>
            <h5>enquiry@rafflesfundservices.com</h5>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default IndexPage;
