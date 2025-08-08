import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./anmelden.module.css";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";

// Registration form component
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [eventUpdates, setEventUpdates] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setMessage("");

    if (!email || !firstName) {
      setFormError("Please fill out all required fields");
      return;
    }

    try {
      setStatus("sending");

      // Prepare data for the API
      const formData = {
        mail: email,
        first_name: firstName,
        last_name: lastName || "",
        organisation: organization || "",
        event_updates: eventUpdates,
        newsletter: newsletter
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
        "Registration successful! We have registered you in our participant database.",
      );
    } catch (error) {
      console.error("Registration error:", error);
      setStatus("error");
      setMessage(
        error.message ||
          "Registration failed. Please try again later.",
      );
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Registration Form</h3>
      </div>

      <div className={styles.formContent}>
        {status === "sending" && (
          <div className={styles.formStatus}>
            <div className={styles.loader}></div>
            <span>Your registration is being processed...</span>
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
            <h3>Registration Successful!</h3>
            <p>
              We have registered you in our participant database and
              will inform you about the next steps.
            </p>
          </div>
        )}

        {status !== "success" ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>First Name</span>
                  <span className={styles.requiredMark}>*</span>
                </label>
                <div className={styles.inputWrapper}>
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
                  <span className={styles.fieldName}>Last Name</span>
                </label>
                <div className={styles.inputWrapper}>
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
                <span className={styles.fieldName}>Email</span>
                <span className={styles.requiredMark}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>Organization</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Your Organization"
                />
              </div>
            </div>

            <div className={styles.checkboxGroup}>
              <div className={styles.checkboxField}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={eventUpdates}
                    onChange={(e) => setEventUpdates(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    Yes, I would like to receive information about similar 
                    events after the event and participate in the feedback 
                    survey. (Can be revoked at any time)
                  </span>
                </label>
              </div>

              <div className={styles.checkboxField}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    Yes, I subscribe to the East Side Fab newsletter to receive 
                    information about other exciting events and updates.
                    Information about{" "}
                    <Link to="/datenschutz" className={styles.privacyLink}>
                      data protection
                    </Link>{" "}
                    and revocation have been read.
                  </span>
                </label>
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
                Register now
              </button>
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
      description="Register for the GovTech Hackathon and help shape the public sector"
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1>Registration</h1>
          <div className={styles.headerDescription}>
            <span className={styles.descriptionText}>
              Be part of the initiative to modernize the public sector
            </span>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.registrationSection}>
          <p className={styles.sectionText}>
            Register for the GovTech Hackathon and become part of our
            community. We will inform you about upcoming events,
            challenges and important updates.
          </p>

          <RegistrationForm />
        </section>
      </main>
    </Layout>
  );
}