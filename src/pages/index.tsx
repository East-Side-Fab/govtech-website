import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import styles from "./index.module.css";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";
import { CountdownTimer } from "../components/CountdownTimer";
import TopicCarousel from "../components/TopicCarousel"; // Added import

export default function Hackathon(): JSX.Element {
  // Typing effect for terminal section
  useEffect(() => {
    const terminalLines = document.querySelectorAll(`.${styles.terminalLine}`);
    terminalLines.forEach((line, index) => {
      setTimeout(
        () => {
          line.classList.add(styles.visible);
        },
        300 * (index + 1),
      );
    });
  }, []);

  return (
    <Layout
      title="GovTech Hackathon"
      description="Open Government Hackathon – Boost the Public Sector"
    >
      {/* Interactive Particle Background */}
      <ParticleBackground />

      {/* Hero Section with Glitch Effect */}
      <header className={styles.hero}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.heroContent}>
          <GlitchText text="GovTech Hackathon" element="h1" />
          <div className={styles.heroTagline}>
            <span className={styles.bracket}>{`{`}</span>
            <span className={styles.taglineText}>Boost the Public Sector</span>
            <span className={styles.bracket}>{`}`}</span>
          </div>
          <CountdownTimer targetDate="2025-10-10T00:00:00" />

          {/* Explanation moved under countdown timer as requested */}
          <div className={styles.heroExplanation}>
            <p className={styles.explanationText}>
              Ein Hackathon ist ein intensiver Kreativ- und Programmiermarathon,
              bei dem Menschen aus unterschiedlichen Fachrichtungen innerhalb
              weniger Stunden oder Tage zusammenarbeiten, um neue Lösungen zu
              entwickeln. Unser GovTech Hackathon legt dabei den Schwerpunkt auf
              den öffentlichen Sektor.
            </p>
          </div>

          <div className={styles.heroButtons}>
            <a href="anmelden" className={styles.primaryBtn}>
              <span className={styles.btnGlow}></span>
              <span>Jetzt anmelden</span>
            </a>
            <a href="docs/faq" className={styles.secondaryBtn}>
              <span>Mehr Infos</span>
            </a>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Timeline Section */}
        <section className={styles.terminalSection}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalControls}>
              <span className={styles.terminalCircle}></span>
              <span className={styles.terminalCircle}></span>
              <span className={styles.terminalCircle}></span>
            </div>
            <div className={styles.terminalTitle}>Event Details</div>
          </div>
          <div className={styles.terminal}>
            <div className={styles.terminalLine}>
              <span className={styles.comment}>
                # Markiere dir den Termin: Das GovTech-Event des Jahres!
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.output}>
                Am 10. Oktober 2025 geht es los: In nur 48 Stunden entwickeln
                wir gemeinsam neue Lösungen für drängende Herausforderungen im
                öffentlichen Sektor. Sei dabei, wenn Kreativität und Technologie
                aufeinandertreffen – und hilf, die Zukunft von morgen zu
                gestalten.
              </span>
            </div>
          </div>
        </section>

        {/* "WHERE" Section with Map/Coordinates */}
        <section className={styles.whereSection}>
          <div className={styles.whereContent}>
            <h2 className={styles.sectionTitle}>Veranstaltungsort</h2>
            <div className={styles.whereData}>
              <div className={styles.whereCoordinates}>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>LOCATION</div>
                  <div className={styles.coordValue}>East Side Fab e.V.</div>
                </div>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>ADRESSE</div>
                  <div className={styles.coordValue}>
                    Eschberger Weg 40
                    <br />
                    66121 Saarbrücken
                  </div>
                </div>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>KOORDINATEN</div>
                  <div className={styles.coordValue}>49.2354° N, 7.0085° E</div>
                </div>
                <div className={styles.coordinateColumn}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=East+Side+Fab+Eschberger+Weg+40+66121+Saarbrücken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapsLink}
                  >
                    <span className={styles.mapsIcon}>📍</span> Mit Google Maps
                    navigieren
                  </a>
                </div>
              </div>

              <div className={styles.whereMap}>
                <div className={styles.mapContainer}>
                  <div className={styles.mapGrid}></div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=7.02902913093567%2C49.227831153236366%2C7.033041715621949%2C49.22910631917016&amp;layer=mapnik"
                  ></iframe>
                  <br />
                  <small>
                    <a href="https://www.openstreetmap.org/node/7473709615">
                      Größere Karte anzeigen
                    </a>
                  </small>
                  <div className={styles.mapPulse}></div>
                  <div className={styles.mapOverlay}></div>

                  {/* Venue Name Label */}
                  <div className={styles.mapVenueLabel}>
                    <span className={styles.mapVenueName}>
                      East Side Fab e.V.
                    </span>
                  </div>

                  <a
                    href="https://www.openstreetmap.org/node/7473709615"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLinkOverlay}
                  >
                    <span className={styles.mapLinkText}>Karte vergrößern</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section - NOW WITH CAROUSEL */}
        <section className={styles.challengesSection}>
          <h2 className={styles.sectionTitle}>Herausforderungen</h2>
          {/* Old static cards removed, TopicCarousel added below */}
          <TopicCarousel />
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow}></div>
          <h2 className={styles.ctaTitle}>Sei Teil des Wandels</h2>
          <p className={styles.ctaText}>
            Sichere dir jetzt deinen Platz und gestalte die Zukunft des
            öffentlichen Sektors mit
          </p>
          <div className={styles.ctaButtonContainer}>
            <a href="anmelden" className={styles.ctaButton}>
              Jetzt registrieren
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
