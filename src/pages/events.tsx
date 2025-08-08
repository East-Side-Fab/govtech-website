import React from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./events.module.css";
import { ParticleBackground } from "../components/ParticleBackground";

export default function EventsPage(): JSX.Element {
  return (
    <Layout
      title={translate({
        id: "events.page.title",
        message: "Veranstaltungen | GovTech Hackathon",
        description: "Events page title"
      })}
      description={translate({
        id: "events.page.description",
        message: "Entdecke unsere Veranstaltungen im Vorfeld des GovTech Hackathons",
        description: "Events page description"
      })}
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>
            <Translate id="events.header.title" description="Events header title">
              Veranstaltungen
            </Translate>
          </h1>
          <p className={styles.headerDescription}>
            <Translate id="events.header.description" description="Events header description">
              Bereite dich auf den Hackathon vor und vernetze dich mit
              Gleichgesinnten
            </Translate>
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.eventsSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.introText}>
              <Translate id="events.intro.text" description="Events intro text">
                Der GovTech Hackathon wird von verschiedenen Veranstaltungen
                begleitet, die dir helfen, dich optimal vorzubereiten und andere
                Teilnehmer kennenzulernen.
              </Translate>
            </p>
          </div>

          <div className={styles.comingSoonSection}>
            <div className={styles.comingSoonCard}>
              <h2 className={styles.comingSoonTitle}>
                <Translate id="events.comingSoon.title" description="Coming soon title">
                  More information coming soon
                </Translate>
              </h2>
              <p className={styles.comingSoonText}>
                <Translate id="events.comingSoon.text" description="Coming soon text">
                  Wir arbeiten gerade an einem spannenden Veranstaltungsprogramm für dich.
                  Schau bald wieder vorbei oder melde dich an, um Updates zu erhalten.
                </Translate>
              </p>
            </div>
            
            <div className={styles.hackathonDateCard}>
              <h3 className={styles.saveTheDate}>
                <Translate id="events.saveDate" description="Save the date">
                  Save the Date
                </Translate>
              </h3>
              <div className={styles.hackathonTitle}>
                <Translate id="events.hackathon.name" description="Hackathon name">
                  GovTech Hackathon
                </Translate>
              </div>
              <div className={styles.hackathonDate}>
                <Translate id="events.hackathon.date" description="Hackathon date">
                  11. & 12. Oktober 2025
                </Translate>
              </div>
              <div className={styles.hackathonLocation}>
                <Translate id="events.hackathon.location" description="Hackathon location">
                  East Side Fab e.V., Saarbrücken
                </Translate>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>
              <Translate id="events.cta.title" description="CTA title">
                Werde Teil des GovTech Ökosystems
              </Translate>
            </h2>
            <p>
              <Translate id="events.cta.text" description="CTA text">
                Melde dich jetzt an und sei als Erste*r dabei, wenn wir neue
                Events ankündigen. Die Teilnahme an den
                Vorbereitungsveranstaltungen ist kostenlos.
              </Translate>
            </p>
            <div className={styles.ctaButtons}>
              <a href="/anmelden" className={styles.primaryButton}>
                <Translate id="events.cta.register" description="Register button">
                  Zur Anmeldung
                </Translate>
              </a>
              <a href="/docs/faq" className={styles.secondaryButton}>
                <Translate id="events.cta.faq" description="FAQ button">
                  FAQ
                </Translate>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}