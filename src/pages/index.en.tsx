import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import styles from "./index.module.css";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";
import { CountdownTimer } from "../components/CountdownTimer";
import TopicCarousel from "../components/TopicCarousel";

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
          <div className={styles.heroSubtitle}>
            <h2>The Hackathon on October 11th & 12th, 2025 in Saarland</h2>
          </div>
          <CountdownTimer targetDate="2025-10-11T00:00:00" />

          {/* Explanation moved under countdown timer as requested */}
          <div className={styles.heroExplanation}>
            <p className={styles.explanationText}>
              In the heart of Europe, where Germany, France, and Luxembourg 
              meet, we're shaping the future of the public sector. Saarland 
              as an innovative technology hub and bridge between cultures 
              provides the perfect setting for our GovTech Hackathon – an 
              intense creative and programming marathon where visionary minds 
              from various disciplines develop groundbreaking solutions for 
              tomorrow's digital administration in just 48 hours.
            </p>
          </div>

          <div className={styles.heroButtons}>
            <a href="anmelden" className={styles.primaryBtn}>
              <span className={styles.btnGlow}></span>
              <span>Register now</span>
            </a>
            <a href="docs/faq" className={styles.secondaryBtn}>
              <span>More Info</span>
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
                # Mark your calendar: The GovTech event of the year!
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.output}>
                Starting October 11th, 2025: In just 48 hours, we'll develop 
                new solutions for pressing challenges in the public sector. 
                Join us when creativity meets technology – and help shape 
                tomorrow's future.
              </span>
            </div>
          </div>
        </section>

        {/* "WHERE" Section with Map/Coordinates */}
        <section className={styles.whereSection}>
          <div className={styles.whereContent}>
            <h2 className={styles.sectionTitle}>Venue</h2>
            <div className={styles.whereData}>
              <div className={styles.whereCoordinates}>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>LOCATION</div>
                  <div className={styles.coordValue}>East Side Fab e.V.</div>
                </div>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>ADDRESS</div>
                  <div className={styles.coordValue}>
                    Eschberger Weg 40
                    <br />
                    66121 Saarbrücken
                  </div>
                </div>
                <div className={styles.coordinateColumn}>
                  <div className={styles.coordLabel}>COORDINATES</div>
                  <div className={styles.coordValue}>49.2354° N, 7.0085° E</div>
                </div>
                <div className={styles.coordinateColumn}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=East+Side+Fab+Eschberger+Weg+40+66121+Saarbrücken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapsLink}
                  >
                    <span className={styles.mapsIcon}>📍</span> Navigate with Google Maps
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
                      View larger map
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
                    <span className={styles.mapLinkText}>Enlarge map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section - NOW WITH CAROUSEL */}
        <section className={styles.challengesSection}>
          <h2 className={styles.sectionTitle}>Challenges</h2>
          {/* Old static cards removed, TopicCarousel added below */}
          <TopicCarousel />
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow}></div>
          <h2 className={styles.ctaTitle}>Be Part of the Change</h2>
          <p className={styles.ctaText}>
            Secure your place now and help shape the future of the public sector
          </p>
          <div className={styles.ctaButtonContainer}>
            <a href="anmelden" className={styles.ctaButton}>
              Register now
            </a>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <h2 className={styles.sectionTitle}>Partners</h2>
          <div className={styles.partnersLogos}>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/partner1.png"
                alt="Partner 1"
                className={styles.partnerLogo}
              />
            </div>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/partner2.png"
                alt="Partner 2"
                className={styles.partnerLogo}
              />
            </div>
            <div className={styles.partnerItem}>
              <img
                src="img/logos/partner3.png"
                alt="Partner 3"
                className={styles.partnerLogo}
              />
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className={styles.sponsorsSection}>
          <h2 className={styles.sectionTitle}>Sponsored by</h2>
          <div className={styles.sponsorsLogos}>
            <div className={styles.sponsorItem}>
              <img
                src="img/logos/sponsor1.png"
                alt="Sponsor 1"
                className={styles.sponsorLogo}
              />
            </div>
            <div className={styles.sponsorItem}>
              <img
                src="img/logos/sponsor2.png"
                alt="Sponsor 2"
                className={styles.sponsorLogo}
              />
            </div>
            <div className={styles.sponsorItem}>
              <img
                src="img/logos/sponsor3.png"
                alt="Sponsor 3"
                className={styles.sponsorLogo}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}