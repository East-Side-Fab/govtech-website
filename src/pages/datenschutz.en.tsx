import React from "react";
import Layout from "@theme/Layout";
import styles from "./datenschutz.module.css";

export default function PrivacyPolicyPage(): React.ReactElement {
  return (
    <Layout
      title="Privacy Policy | GovTech Hackathon"
      description="Privacy Policy for the GovTech Hackathon"
    >
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last updated: January 2025</p>
          </header>

          <section className={styles.section}>
            <h2>1. Data Controller</h2>
            <p>
              East Side Fab e.V.<br />
              Eschberger Weg 40<br />
              66121 Saarbrücken, Germany<br />
              Email: info@eastsidefab.de
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Data Collection and Processing</h2>
            <p>
              We collect and process the following personal data when you register for the GovTech Hackathon:
            </p>
            <ul>
              <li>First name and last name</li>
              <li>Email address</li>
              <li>Organization (optional)</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Purpose of Data Processing</h2>
            <p>We process your data for the following purposes:</p>
            <ul>
              <li>Registration and management of hackathon participants</li>
              <li>Communication about the event and related activities</li>
              <li>Sending newsletters (only with your consent)</li>
              <li>Event feedback and follow-up surveys (only with your consent)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Legal Basis</h2>
            <p>
              The processing of your personal data is based on:
            </p>
            <ul>
              <li>Your consent (Article 6(1)(a) GDPR) for newsletters and event updates</li>
              <li>Legitimate interests (Article 6(1)(f) GDPR) for event organization</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Data Sharing</h2>
            <p>
              We do not share your personal data with third parties except:
            </p>
            <ul>
              <li>When required by law</li>
              <li>With your explicit consent</li>
              <li>With our technical service providers under data processing agreements</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes 
              mentioned above or as required by law. Event registration data is 
              typically deleted within one year after the event.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Your Rights</h2>
            <p>Under the GDPR, you have the following rights:</p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to rectification of incorrect data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us at info@eastsidefab.de
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies and Website Analytics</h2>
            <p>
              This website uses minimal cookies necessary for functionality. 
              We do not use tracking or analytics cookies without your consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. 
              Any changes will be posted on this page with an updated date.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact</h2>
            <p>
              If you have any questions about this privacy policy or our 
              data processing practices, please contact us at:
            </p>
            <p>
              Email: info@eastsidefab.de<br />
              Phone: +49 (0)681 XXX XXXX
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}