import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./anmelden.module.css";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";

// Custom form that uses the Fermyon API
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setMessage("");

    if (!email || !firstName) {
      setFormError("Please fill in the required fields");
      return;
    }

    try {
      setStatus("sending");

      // Prepare data for the API
      const formData = {
        mail: email,
        first_name: firstName,
        last_name: lastName || "",
        // Include organization if needed in your API
        // organization: organization
      };

      // Send data to the Fermyon API
      const response = await fetch(
        "https://participants-pp4aag1w.fermyon.app/participants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
      }

      const data = await response.json();
      setStatus("success");
      setMessage(
        "Registration successful! You've been added to our hacker database.",
      );
    } catch (error) {
      console.error("Registration error:", error);
      setStatus("error");
      setMessage(
        error.message || "Registration failed. Please try again later.",
      );
    }
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
            <span>Sending registration data...</span>
          </div>
        )}

        {status === "error" && (
          <div className={styles.formError}>
            <span className={styles.errorIcon}>!</span>
            <div>{message}</div>
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
            <pre className={styles.successCode}>
              {`curl -X POST -d '{"mail":"${email}", "first_name":"${firstName}","last_name":"${lastName}"}' "https://participants-pp4aag1w.fermyon.app/participants" --verbose`}
            </pre>
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

          <RegistrationForm />

          <div className={styles.sectionOutro}>
            <h2 className={styles.sectionTitle}>{`}`}</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
