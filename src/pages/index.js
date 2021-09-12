import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";

const IndexPage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.logo}>Logo</div>
        <div>
          <h1>Raffles Accounting</h1>
          <h5>Expertise. Commitment. Value.</h5>
        </div>
      </section>
      <section className={styles.sectionCompanyProfile}>
        <div>
          <StaticImage
            className={styles.imgCompany}
            alt="office"
            src="../images/tower.jpg"
          />
        </div>
        <div className={styles.companyDetails}>
          <h2 className={styles.wieghtMedium}>Company profile</h2>
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
      <section className={styles.sectionClient}>
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
      </section>
      <section className={styles.sectionOurService}>
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
        <div className={styles.services}>
          <div className={styles.row}>
            <span>01</span>
            <div>
              <h4>Tax Preparation</h4>
              <h5 className={styles.wieghtMedium}>
                We prepare everything you need for your tax return
              </h5>
            </div>
          </div>
          <div className={styles.row}>
            <span>02</span>
            <div>
              <h4>Start-up Package</h4>
              <h5 className={styles.wieghtMedium}>
                We build financial models you can pitch to investors
              </h5>
            </div>
          </div>
          <div className={styles.row}>
            <span>03</span>
            <div>
              <h4>Wealth Management</h4>
              <h5 className={styles.wieghtMedium}>
                We deliver thoughtful investment advisory services
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionCareer}>
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
            <h5>123 Anywhere Road. Any City, CT 12345</h5>
          </div>
          <div className={styles.row}>
            <h4>Phone Number</h4>
            <h5>(010) 774-868123</h5>
          </div>
          <div className={styles.row}>
            <h4>Email Address</h4>
            <h5>hello@samplesite.com</h5>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndexPage;
