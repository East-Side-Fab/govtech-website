import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
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
      setFormError(translate({
        id: "registration.form.error.required",
        message: "Bitte fülle alle erforderlichen Felder aus",
        description: "Error message when required fields are missing"
      }));
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
        translate({
          id: "registration.form.success",
          message: "Anmeldung erfolgreich! Wir haben dich in unserer Teilnehmerdatenbank registriert.",
          description: "Success message after registration"
        }),
      );
    } catch (error) {
      console.error("Registration error:", error);
      setStatus("error");
      setMessage(
        error.message ||
          translate({
            id: "registration.form.error.failed",
            message: "Anmeldung fehlgeschlagen. Bitte versuche es später erneut.",
            description: "Error message when registration fails"
          }),
      );
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>
          <Translate id="registration.form.title" description="Registration form title">
            Anmeldeformular
          </Translate>
        </h3>
      </div>

      <div className={styles.formContent}>
        {status === "sending" && (
          <div className={styles.formStatus}>
            <div className={styles.loader}></div>
            <span>
              <Translate id="registration.form.processing" description="Processing registration message">
                Deine Anmeldung wird verarbeitet...
              </Translate>
            </span>
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
            <h3>
              <Translate id="registration.form.success.title" description="Success title">
                Anmeldung erfolgreich!
              </Translate>
            </h3>
            <p>
              <Translate id="registration.form.success.details" description="Success details">
                Wir haben dich in unserer Teilnehmerdatenbank registriert und
                werden dich über die nächsten Schritte informieren.
              </Translate>
            </p>
          </div>
        )}

        {status !== "success" ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>
                    <Translate id="registration.form.firstName" description="First name field label">
                      Vorname
                    </Translate>
                  </span>
                  <span className={styles.requiredMark}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={translate({
                    id: "registration.form.firstName.placeholder",
                    message: "Max",
                    description: "First name placeholder"
                  })}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputField}>
                <label>
                  <span className={styles.fieldName}>
                    <Translate id="registration.form.lastName" description="Last name field label">
                      Nachname
                    </Translate>
                  </span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={translate({
                      id: "registration.form.lastName.placeholder",
                      message: "Mustermann",
                      description: "Last name placeholder"
                    })}
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>
                  <Translate id="registration.form.email" description="Email field label">
                    E-Mail
                  </Translate>
                </span>
                <span className={styles.requiredMark}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={translate({
                    id: "registration.form.email.placeholder",
                    message: "deine.email@beispiel.de",
                    description: "Email placeholder"
                  })}
                  required
                />
              </div>
            </div>

            <div className={styles.inputField}>
              <label>
                <span className={styles.fieldName}>
                  <Translate id="registration.form.organization" description="Organization field label">
                    Organisation
                  </Translate>
                </span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder={translate({
                    id: "registration.form.organization.placeholder",
                    message: "Deine Organisation",
                    description: "Organization placeholder"
                  })}
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
                    <Translate id="registration.form.eventUpdates" description="Event updates checkbox">
                      Ja, ich möchte nach dem Event Informationen zu ähnlichen
                      Veranstaltungen erhalten und an der Feedback-Umfrage
                      teilnehmen. (Widerruf jederzeit möglich)
                    </Translate>
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
                    Hiermit stimme ich zu, dass der East Side Fab e.V. im Rahmen des European Digital Innovation Hubs (EDIH Saarland) als Kooperationspartner der Veranstaltung "GovTech Hackathon Saarland" meine E-Mail-Adresse zum Versand von Werbung für ähnliche Waren / Dienstleistungen verwenden darf. Sie können Ihre Einwilligung jederzeit gegenüber dem East Side Fab e.V. widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird. Ich habe diesen Hinweis und die{" "}
                    <Link to="/datenschutz" className={styles.privacyLink}>
                      Datenschutzerklärung
                    </Link>{" "}
                    zur Kenntnis genommen.
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
                <Translate id="registration.form.submit" description="Submit button">
                  Jetzt anmelden
                </Translate>
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
      title={translate({
        id: "registration.page.title",
        message: "Anmelden | GovTech Hackathon",
        description: "Registration page title"
      })}
      description={translate({
        id: "registration.page.description",
        message: "Melde dich für den GovTech Hackathon an und gestalte den öffentlichen Sektor mit",
        description: "Registration page description"
      })}
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1>
            <Translate id="registration.header.title" description="Registration header">
              Anmeldung
            </Translate>
          </h1>
          <div className={styles.headerDescription}>
            <span className={styles.descriptionText}>
              <Translate id="registration.header.description" description="Registration header description">
                Sei Teil der Initiative zur Modernisierung des öffentlichen
                Sektors
              </Translate>
            </span>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.registrationSection}>
          <p className={styles.sectionText}>
            <Translate id="registration.section.description" description="Registration section description">
              Melde dich für den GovTech Hackathon an und werde Teil unserer
              Community. Wir informieren dich über kommende Veranstaltungen,
              Challenges und wichtige Updates.
            </Translate>
          </p>

          <RegistrationForm />
        </section>
      </main>
    </Layout>
  );
}
