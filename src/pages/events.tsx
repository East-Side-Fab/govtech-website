import React from "react";
import Layout from "@theme/Layout";
import styles from "./events.module.css";
import { ParticleBackground } from "../components/ParticleBackground";

export default function EventsPage(): JSX.Element {
  return (
    <Layout
      title="Veranstaltungen | GovTech Hackathon"
      description="Entdecke unsere Veranstaltungen im Vorfeld des GovTech Hackathons"
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Veranstaltungen</h1>
          <p className={styles.headerDescription}>
            Bereite dich auf den Hackathon vor und vernetze dich mit
            Gleichgesinnten
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.eventsSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.introText}>
              Der GovTech Hackathon wird von verschiedenen Veranstaltungen
              begleitet, die dir helfen, dich optimal vorzubereiten und andere
              Teilnehmer kennenzulernen.
            </p>
          </div>

          <div className={styles.comingSoonSection}>
            <div className={styles.comingSoonCard}>
              <h2 className={styles.comingSoonTitle}>More information coming soon</h2>
              <p className={styles.comingSoonText}>
                Wir arbeiten gerade an einem spannenden Veranstaltungsprogramm für dich.
                Schau bald wieder vorbei oder melde dich an, um Updates zu erhalten.
              </p>
            </div>
            
            <div className={styles.hackathonDateCard}>
              <h3 className={styles.saveTheDate}>Save the Date</h3>
              <div className={styles.hackathonTitle}>GovTech Hackathon</div>
              <div className={styles.hackathonDate}>11. & 12. Oktober 2025</div>
              <div className={styles.hackathonLocation}>East Side Fab e.V., Saarbrücken</div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Werde Teil des GovTech Ökosystems</h2>
            <p>
              Melde dich jetzt an und sei als Erste*r dabei, wenn wir neue
              Events ankündigen. Die Teilnahme an den
              Vorbereitungsveranstaltungen ist kostenlos.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/anmelden" className={styles.primaryButton}>
                Zur Anmeldung
              </a>
              <a href="/docs/faq" className={styles.secondaryButton}>
                FAQ
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}