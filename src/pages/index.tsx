import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import styles from "./index.module.css";
import { GlitchText } from "../components/GlitchText";
import { ParticleBackground } from "../components/ParticleBackground";
import { CountdownTimer } from "../components/CountdownTimer";

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
            <span className={styles.bracket}>[</span>
            <span className={styles.taglineText}>Hack the Public Sector</span>
            <span className={styles.bracket}>]</span>
          </div>
          <CountdownTimer targetDate="2025-12-31T00:00:00" />
          <div className={styles.heroButtons}>
            <a href="/anmelden" className={styles.primaryBtn}>
              <span className={styles.btnGlow}></span>
              <span>REGISTER.exe</span>
            </a>
            <a href="/docs/faq" className={styles.secondaryBtn}>
              <span>INFO.sh</span>
            </a>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Terminal-like "WHEN" Section */}
        <section className={styles.terminalSection}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalControls}>
              <span className={styles.terminalCircle}></span>
              <span className={styles.terminalCircle}></span>
              <span className={styles.terminalCircle}></span>
            </div>
            <div className={styles.terminalTitle}>when.sh</div>
          </div>
          <div className={styles.terminal}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span> ./get_event_date
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.comment}>
                # Markiere dir den Termin: Das GovTech-Event des Jahres!
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span> cat event_details.txt
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.output}>
                Am [31.12.2023] geht es los: In nur 48 Stunden entwickeln wir
                gemeinsam neue Lösungen für drängende Herausforderungen im
                öffentlichen Sektor. Sei dabei, wenn Kreativität und Technologie
                aufeinandertreffen – und hilf, die Zukunft von morgen zu
                gestalten.
              </span>
            </div>
          </div>
        </section>

        {/* "WHAT" Section with Code Snippet */}
        <section className={styles.codeSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.codeComment}>// WAS?</span>
            </h2>
            <h3 className={styles.sectionSubtitle}>
              Gemeinsam ﻿digitale Innovation vorantreiben
            </h3>

            <div className={styles.codeSnippetContainer}>
              <CodeBlock language="typescript" title="hackathon.ts">
                {`interface Hackathon {
  duration: number; // in hours
  participants: Developer[];
  challenges: Challenge[];
  goal: string;
}

const govTechHackathon: Hackathon = {
  duration: 48,
  participants: [
    "developers", "designers",
    "students", "public_officials"
  ],
  challenges: getPublicSectorChallenges(),
  goal: "Create innovative solutions for tomorrow's government"
};

// Join us to execute this code!`}
              </CodeBlock>
            </div>

            <p className={styles.sectionText}>
              Ein Hackathon ist ein intensiver Kreativ- und Programmiermarathon,
              bei dem Menschen aus unterschiedlichen Fachrichtungen innerhalb
              weniger Stunden oder Tage zusammenarbeiten, um neue Lösungen zu
              entwickeln. Unser GovTech Hackathon legt dabei den Schwerpunkt auf
              den öffentlichen Sektor.
            </p>
            <p className={styles.sectionText}>
              Hier treffen Tatendrang, Know-how und frische Ideen aufeinander –
              mit dem gemeinsamen Ziel, nachhaltige Innovationen für den Staat
              von morgen zu schaffen.
            </p>
          </div>
        </section>

        {/* "WHERE" Section with Map/Coordinates */}
        <section className={styles.whereSection}>
          <div className={styles.whereContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.codeFunction}>function</span>{" "}
              getLocation() {`{`}
            </h2>
            <div className={styles.whereData}>
              <div className={styles.whereCoordinates}>
                <div className={styles.coordinate}>
                  <span className={styles.coordLabel}>LAT:</span>
                  <span className={styles.coordValue}>49.2354° N</span>
                </div>
                <div className={styles.coordinate}>
                  <span className={styles.coordLabel}>LNG:</span>
                  <span className={styles.coordValue}>7.0085° E</span>
                </div>
                <div className={styles.coordinateName}>
                  <span className={styles.coordLabel}>LOCATION:</span>
                  <span className={styles.coordValue}>
                    Saarbrücken, Germany
                  </span>
                </div>
              </div>

              <div className={styles.whereMap}>
                <div className={styles.mapPlaceholder}>
                  {/* We'd use a real map API here in production */}
                  <div className={styles.mapGrid}></div>
                  <div className={styles.mapPin}></div>
                </div>
              </div>
            </div>
            <p className={styles.sectionText}>
              Ob vor Ort in Saarbrücken oder virtuell zugeschaltet – wir
              schaffen den Raum, in dem du deine Ideen realisieren kannst. Der
              Flair der Location bietet dabei die Verbindung zu modernen
              Technologien und agilen Arbeitsmethoden.
            </p>
            <h2 className={styles.sectionTitle}>{`}`}</h2>
          </div>
        </section>

        {/* Challenges Section as Cards */}
        <section className={styles.challengesSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.codeFunction}>import</span> {"{"} Challenges{" "}
            {"}"} <span className={styles.codeFunction}>from</span>{" "}
            <span className={styles.stringValue}>'./govtech-problems'</span>
          </h2>

          <div className={styles.challengeCards}>
            <div className={styles.challengeCard}>
              <div className={styles.cardIcon}>🔒</div>
              <h3>Cybersecurity</h3>
              <p>
                Develop solutions to protect government data and citizens'
                privacy
              </p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.cardIcon}>📱</div>
              <h3>Digital Services</h3>
              <p>Create intuitive interfaces for public sector applications</p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.cardIcon}>🌍</div>
              <h3>Sustainability</h3>
              <p>Leverage technology to help governments meet climate goals</p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.cardIcon}>📊</div>
              <h3>Open Data</h3>
              <p>Build tools that make government data accessible and useful</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow}></div>
          <h2 className={styles.ctaTitle}>
            <span className={styles.codeFunction}>function</span>{" "}
            joinHackathon() {`{`}
          </h2>
          <p className={styles.ctaText}>
            <span className={styles.codeComment}>
              // Sei Teil der Veränderung! Sichere dir jetzt deinen Platz
            </span>
          </p>
          <div className={styles.ctaButtonContainer}>
            <a href="/anmelden" className={styles.ctaButton}>
              <span className={styles.btnIcon}>&gt;</span>
              register_now()
            </a>
          </div>
          <h2 className={styles.ctaTitle}>{`}`}</h2>
        </section>
      </main>
    </Layout>
  );
}
