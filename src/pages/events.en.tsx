import React from "react";
import Layout from "@theme/Layout";
import styles from "./events.module.css";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";

export default function EventsPage(): React.ReactElement {
  return (
    <Layout
      title="Events | GovTech Hackathon"
      description="Upcoming events and activities for the GovTech Hackathon"
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <GlitchText text="Events" element="h1" />
          <div className={styles.headerDescription}>
            <span className={styles.descriptionText}>
              Upcoming activities and events
            </span>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.eventsSection}>
          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.month}>Oct</span>
              <span className={styles.day}>11-12</span>
              <span className={styles.year}>2025</span>
            </div>
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>GovTech Hackathon</h2>
              <p className={styles.eventDescription}>
                Main hackathon event where teams will work on challenges 
                to improve public sector services and digital governance.
              </p>
              <div className={styles.eventLocation}>
                📍 East Side Fab e.V., Saarbrücken
              </div>
            </div>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.month}>Sep</span>
              <span className={styles.day}>TBD</span>
              <span className={styles.year}>2025</span>
            </div>
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>Pre-Event Meetup</h2>
              <p className={styles.eventDescription}>
                Meet fellow participants, learn about the challenges, 
                and start forming teams before the main event.
              </p>
              <div className={styles.eventLocation}>
                📍 Location to be announced
              </div>
            </div>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.month}>Nov</span>
              <span className={styles.day}>TBD</span>
              <span className={styles.year}>2025</span>
            </div>
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>Demo Day & Awards</h2>
              <p className={styles.eventDescription}>
                Present your solutions to the public and celebrate 
                the best projects from the hackathon.
              </p>
              <div className={styles.eventLocation}>
                📍 Location to be announced
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Stay Updated</h2>
          <p className={styles.ctaText}>
            Register now to receive updates about all events and activities
          </p>
          <div className={styles.ctaButtonContainer}>
            <a href="/anmelden" className={styles.ctaButton}>
              Register for Updates
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}