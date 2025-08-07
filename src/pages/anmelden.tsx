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
      setFormError("Bitte fülle alle erforderlichen Felder aus");
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
        "Anmeldung erfolgreich! Wir haben dich in unserer Teilnehmerdatenbank registriert.",
      );
    } catch (error) {
      console.error("Registration error:", error);
      setStatus("error");
      setMessage(
        error.message ||
          "Anmeldung fehlgeschlagen. Bitte versuche es später erneut.",
      );
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Anmeldeformular</h3>
      </div>

      <div className={styles.formContent}>
        {status === "sending" && (
          <div className={styles.formStatus}>
            <div className={styles.loader}></div>
            <span>Deine Anmeldung wird verarbeitet...</span>
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
            <h3>Anmeldung erfolgreich!</h3>
            <p>
              Wir haben dich in unserer Teilnehmerdatenbank registriert und
              werden dich über die nächsten Schritte informieren.
            </p>
          </div>
        )}

        {status !== "success" ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>Vorname</span>
                  <span className={styles.requiredMark}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Max"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>Nachname</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Mustermann"
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>E-Mail</span>
                <span className={styles.requiredMark}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine.email@beispiel.de"
                  required
                />
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>Organisation</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Deine Organisation"
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
                    Ja, ich möchte nach dem Event Informationen zu ähnlichen
                    Veranstaltungen erhalten und an der Feedback-Umfrage
                    teilnehmen. (Widerruf jederzeit möglich)
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
                    Ja, ich abonniere den Newsletter des East Side Fabs um über
                    weitere spannende Events und Informationen zu erhalten.
                    Hinweise zum{" "}
                    <Link to="/datenschutz" className={styles.privacyLink}>
                      Datenschutz
                    </Link>{" "}
                    und Widerruf habe ich gelesen.
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
                Jetzt anmelden
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
      title="Anmelden | GovTech Hackathon"
      description="Melde dich für den GovTech Hackathon an und gestalte den öffentlichen Sektor mit"
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1>Anmeldung</h1>
          <div className={styles.headerDescription}>
            <span className={styles.descriptionText}>
              Sei Teil der Initiative zur Modernisierung des öffentlichen
              Sektors
            </span>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.registrationSection}>
          <p className={styles.sectionText}>
            Melde dich für den GovTech Hackathon an und werde Teil unserer
            Community. Wir informieren dich über kommende Veranstaltungen,
            Challenges und wichtige Updates.
          </p>

          <RegistrationForm />
        </section>
      </main>
    </Layout>
  );
}
