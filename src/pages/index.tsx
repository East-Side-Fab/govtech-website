import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Translate, { translate } from "@docusaurus/Translate";
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
      title={translate({
        id: "home.page.title",
        message: "GovTech Hackathon",
        description: "Homepage title",
      })}
      description={translate({
        id: "home.page.description",
        message: "Open Government Hackathon – Boost the Public Sector",
        description: "Homepage description",
      })}
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
            <span className={styles.taglineText}>
              <Translate id="home.hero.tagline" description="Hero tagline">
                Boost the Public Sector
              </Translate>
            </span>
            <span className={styles.bracket}>{`}`}</span>
          </div>
          <div className={styles.heroSubtitle}>
            <h2>
              <Translate id="home.hero.subtitle" description="Hero subtitle">
                Der Hackathon am 11. & 12. Oktober 2025 im Saarland
              </Translate>
            </h2>
          </div>
          <CountdownTimer targetDate="2025-10-11T00:00:00" />

          {/* Explanation moved under countdown timer as requested */}
          <div className={styles.heroExplanation}>
            <p className={styles.explanationText}>
              <Translate
                id="home.hero.explanation"
                description="Hero explanation"
              >
                Im Herzen Europas, wo Deutschland, Frankreich und Luxemburg
                aufeinandertreffen, gestalten wir die Zukunft des öffentlichen
                Sektors. Das Saarland als innovativer Technologiestandort und
                Brücke zwischen den Kulturen bietet den perfekten Rahmen für
                unseren GovTech Hackathon – ein intensiver Kreativ- und
                Programmiermarathon, bei dem visionäre Köpfe aus verschiedenen
                Disziplinen in nur 48 Stunden bahnbrechende Lösungen für die
                digitale Verwaltung von morgen entwickeln.
              </Translate>
            </p>
          </div>

          <div className={styles.heroButtons}>
            <a href="anmelden" className={styles.primaryBtn}>
              <span className={styles.btnGlow}></span>
              <span>
                <Translate
                  id="home.hero.registerButton"
                  description="Register button"
                >
                  Jetzt anmelden
                </Translate>
              </span>
            </a>
            <a href="docs/faq" className={styles.secondaryBtn}>
              <span>
                <Translate id="home.hero.infoButton" description="Info button">
                  Mehr Infos
                </Translate>
              </span>
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
            <div className={styles.terminalTitle}>
              <Translate id="home.terminal.title" description="Terminal title">
                Event Details
              </Translate>
            </div>
          </div>
          <div className={styles.terminal}>
            <div className={styles.terminalLine}>
              <span className={styles.comment}>
                <Translate
                  id="home.terminal.comment"
                  description="Terminal comment"
                >
                  # Markiere dir den Termin: Das GovTech-Event des Jahres!
                </Translate>
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.output}>
                <Translate
                  id="home.terminal.output"
                  description="Terminal output"
                >
                  Am 11. Oktober 2025 geht es los: In nur 48 Stunden entwickeln
                  wir gemeinsam neue Lösungen für drängende Herausforderungen im
                  öffentlichen Sektor. Sei dabei, wenn Kreativität und
                  Technologie aufeinandertreffen – und hilf, die Zukunft von
                  morgen zu gestalten.
                </Translate>
              </span>
            </div>
          </div>
        </section>

        {/* "WHERE" Section with Map/Coordinates */}
        <section className={styles.whereSection}>
          <div className={styles.whereContent}>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.where.title"
                description="Where section title"
              >
                Veranstaltungsort
              </Translate>
            </h2>
            <div className={styles.whereData}>
              <div className={styles.whereCoordinates}>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>
                    <Translate
                      id="home.where.location.label"
                      description="Location label"
                    >
                      LOCATION
                    </Translate>
                  </div>
                  <div className={styles.coordValue}>East Side Fab e.V.</div>
                </div>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>
                    <Translate
                      id="home.where.address.label"
                      description="Address label"
                    >
                      ADRESSE
                    </Translate>
                  </div>
                  <div className={styles.coordValue}>
                    Eschberger Weg 40
                    <br />
                    66121 Saarbrücken
                  </div>
                </div>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>
                    <Translate
                      id="home.where.coordinates.label"
                      description="Coordinates label"
                    >
                      KOORDINATEN
                    </Translate>
                  </div>
                  <div className={styles.coordValue}>49.2354° N, 7.0085° E</div>
                </div>
                <div className={styles.coordinateColumn}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=East+Side+Fab+Eschberger+Weg+40+66121+Saarbrücken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapsLink}
                  >
                    <span className={styles.mapsIcon}>📍</span>
                    <Translate
                      id="home.where.navigate"
                      description="Navigate with Google Maps"
                    >
                      Mit Google Maps navigieren
                    </Translate>
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
                    scrolling="no"
                    style={{ pointerEvents: "none" }}
                    title="East Side Fab Location Map"
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
          <h2 className={styles.sectionTitle}>
            <Translate
              id="home.challenges.title"
              description="Challenges section title"
            >
              Herausforderungen
            </Translate>
          </h2>
          {/* Old static cards removed, TopicCarousel added below */}
          <TopicCarousel />
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow}></div>
          <h2 className={styles.ctaTitle}>
            <Translate
              id="home.cta.title"
              description="CTA section title"
            >
              Sei Teil des Wandels
            </Translate>
          </h2>
          <p className={styles.ctaText}>
            <Translate
              id="home.cta.text"
              description="CTA section text"
            >
              Sichere dir jetzt deinen Platz und gestalte die Zukunft des
              öffentlichen Sektors mit
            </Translate>
          </p>
          <div className={styles.ctaButtonContainer}>
            <a href="anmelden" className={styles.ctaButton}>
              <Translate
                id="home.cta.button"
                description="CTA register button"
              >
                Jetzt registrieren
              </Translate>
            </a>
          </div>
        </section>

        {/* Partners Section - Organizers */}
        <section className={styles.partnersSection}>
          <h2 className={styles.sectionTitle}>
            <Translate
              id="home.partners.title"
              description="Partners section title"
            >
              Eine Kooperationsveranstaltung von
            </Translate>
          </h2>
          <div className={styles.partnersLogos}>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/east-side-fab.png"
                alt="East Side Fab"
                className={styles.partnerLogo}
              />
            </div>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/govlab-ten.png"
                alt="GovLab Ten"
                className={styles.partnerLogo}
              />
            </div>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/edih.png"
                alt="EDIH"
                className={styles.partnerLogo}
              />
            </div>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/kleinpublic.png"
                alt="kleinpublic"
                className={`${styles.partnerLogo} ${styles.partnerLogoDark}`}
              />
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className={styles.sponsorsSection}>
          <h2 className={styles.sectionTitle}>
            <Translate
              id="home.sponsors.title"
              description="Sponsors section title"
            >
              Unsere Sponsoren
            </Translate>
          </h2>
          <div className={styles.sponsorsLogos}>
            <div className={styles.sponsorItem}>
              <img
                src="img/logos/MWIDE.png"
                alt="Ministerium für Wirtschaft, Innovation, Digitales und Energie Saarland"
                className={`${styles.sponsorLogo} ${styles.sponsorLogoLight}`}
              />
            </div>
            <div className={styles.sponsorItem}>
              <img
                src="img/logos/kleinpublic.png"
                alt="kleinpublic"
                className={styles.sponsorLogo}
              />
            </div>
            <div className={styles.sponsorItem}>
              <img
                src="img/logos/testfabrik.png"
                alt="testfabrik"
                className={styles.sponsorLogo}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
