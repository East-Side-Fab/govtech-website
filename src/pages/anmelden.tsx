import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./anmelden.module.css"; // Using a dedicated CSS module
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";

// Mailchimp URL - replace with your actual URL
const MAILCHIMP_URL =
  "https://yourdomain.us7.list-manage.com/subscribe/post?u=XXXXX&id=XXXXXX";

// Custom form that works with Mailchimp
const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!email || !firstName) {
      setFormError("Please fill in the required fields");
      return;
    }

    onValidated({
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
      ORGANIZATION: organization,
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalControls}>
          <span className={styles.terminalCircle}></span>
          <span className={styles.terminalCircle}></span>
          <span className={styles.terminalCircle}></span>
        </div>
        <div className={styles.terminalTitle}>registration.sh</div>
      </div>

      <div className={styles.formContent}>
        {status === "sending" && (
          <div className={styles.formStatus}>
            <div className={styles.loader}></div>
            <span>Sending...</span>
          </div>
        )}

        {status === "error" && (
          <div className={styles.formError}>
            <span className={styles.errorIcon}>!</span>
            <div dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        )}

        {status === "success" && (
          <div className={styles.formSuccess}>
            <div className={styles.successAnimation}>
              <span className={styles.checkmark}>✓</span>
            </div>
            <h3>Registration Successful</h3>
            <p>
              You've been added to our hacker database. We'll transmit further
              instructions soon.
            </p>
          </div>
        )}

        {status !== "success" ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>FIRST_NAME</span>
                  <span className={styles.requiredMark}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputPrefix}>&gt;</span>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>LAST_NAME</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputPrefix}>&gt;</span>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>EMAIL</span>
                <span className={styles.requiredMark}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputPrefix}>&gt;</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>ORGANIZATION</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputPrefix}>&gt;</span>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Your organization"
                />
              </div>
            </div>

            {formError && (
              <div className={styles.formError}>
                <span className={styles.errorIcon}>!</span>
                <span>{formError}</span>
              </div>
            )}

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                ./register.sh
              </button>
              <div className={styles.buttonNote}>
                <span className={styles.codeComment}>
                  // Hit Enter to Execute
                </span>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default function RegistrationPage(): React.ReactElement {
  return (
    <Layout
      title="Register | GovTech Hackathon"
      description="Register for the GovTech Hackathon – Boost the Public Sector"
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <GlitchText text="Registration Portal" element="h1" />
          <div className={styles.headerDescription}>
            <span className={styles.bracket}>{`{`}</span>
            <span className={styles.descriptionText}>
              Join the Public Sector Transformation
            </span>
            <span className={styles.bracket}>{`}`}</span>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.registrationSection}>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.codeFunction}>function</span>{" "}
              joinHackathon() {`{`}
            </h2>
            <p className={styles.sectionText}>
              Register for the GovTech Hackathon and become part of our hacker
              community. We'll notify you about upcoming events, challenges, and
              important information.
            </p>
          </div>

          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />

          <div className={styles.sectionOutro}>
            <h2 className={styles.sectionTitle}>{`}`}</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
