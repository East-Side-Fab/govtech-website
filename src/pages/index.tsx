import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Hackathon(): JSX.Element {
  return (
    <Layout
      title="GovTech Hackathon"
      description="Open Government Hackathon – Boost the Public Sector"
    >
      {/* 1) Full-Width Header Image */}
      <header className={styles.header}>
        <img
          src="/img/hero-image.jpg"
          alt="GovTech Hackathon"
          className={styles.headerImage}
        />
        <div className={styles.headerOverlay}>
          <h1>GovTech Hackathon</h1>
          <p>Boost the Public Sector</p>
        </div>
      </header>

      <main>
        {/* 2) "WANN" Section */}
        <section className={styles.sectionWhen}>
          <div className={styles.sectionContent}>
            <h2>WANN!</h2>
            <h3>Markiere dir den Termin: [Datum] – Das GovTech-Event des Jahres!</h3>
            <p>
              Am [Datum] geht es los: In nur 48 Stunden entwickeln wir gemeinsam
              neue Lösungen für drängende Herausforderungen im öffentlichen Sektor.
              Sei dabei, wenn Kreativität und Technologie aufeinandertreffen – und
              hilf, die Zukunft von morgen zu gestalten.
            </p>
          </div>
          <div className={styles.sectionImage}>
            {/* Replace placeholder.png with your actual image */}
            <img src="/img/placeholder.png" alt="Wann Section" />
          </div>
        </section>

        {/* 3) Mirrored Section */}
        <section className={styles.sectionMirrored}>
          <div className={styles.sectionImage}>
            {/* Replace placeholder2.png with your actual image */}
            <img src="/img/placeholder2.png" alt="Mirrored Section" />
          </div>
          <div className={styles.sectionContent}>
            <h2>WAS?</h2>
            <h3>Gemeinsam ﻿digitale Innovation vorantreiben und den öffentlichen Sektor neu denken!</h3>
            <p>
              Ein Hackathon ist ein intensiver Kreativ- und Programmiermarathon, bei dem Menschen aus unterschiedlichen Fachrichtungen innerhalb weniger Stunden oder Tage zusammenarbeiten, um neue Lösungen zu entwickeln. Unser GovTech Hackathon legt dabei den Schwerpunkt auf den öffentlichen Sektor: Entwicklerinnen, Designerinnen, Studierende und Verwaltungs-Expertinnen schließen sich in interdisziplinären Teams zusammen, um digitale Tools, Prototypen und Anwendungen zu entwickeln, die Behörden und Bürgerinnen gleichermaßen zugutekommen.
            </p>
            <p>Hier treffen Tatendrang, Know-how und frische Ideen aufeinander – mit dem gemeinsamen Ziel, nachhaltige Innovationen für den Staat von morgen zu schaffen. An nur einem Wochenende entstehen erste funktionale Prototypen, spannende Konzepte und zukunftsweisende Projektideen, die die Grundlage für echte Veränderungen bilden können. Als Teilnehmer*in erlebst du hautnah, wie kollaboratives Arbeiten in Rekordzeit echte Ergebnisse hervorbringt und wertvolle Impulse für den digitalen Wandel im öffentlichen Sektor setzt.</p>
          </div>
        </section>

        {/* 2) "WANN" Section */}
        <section className={styles.sectionWhen}>
          <div className={styles.sectionContent}>
            <h2>WO?</h2>
            <h3>Innovation trifft auf Tradition: [Ort/Veranst﻿altungsort]</h3>
            <p>
              Ob vor Ort in Saarbücken oder virtuell zugeschaltet – wir schaffen den Raum, in dem du deine Ideen realisieren kannst. Der Flair der Location bietet dabei die Verbindung zu modernen Technologien und agilen Arbeitsmethoden. Wähle die Teilnahmeform, die zu dir passt, und mach dich bereit für Networking, Inspiration und ein einmaliges Event-Erlebnis.
            </p>
          </div>
          <div className={styles.sectionImage}>
            {/* Replace placeholder.png with your actual image */}
            <img src="/img/placeholder.png" alt="Wann Section" />
          </div>
        </section>

        {/* 5) CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Jetzt anmelden und Zukunft gestalten!</h2>
          <p>
            Sei Teil der Veränderung! Sichere dir jetzt deinen Platz und arbeite mit
            anderen Vordenkern, Entwicklern und Kreativen an innovativen Lösungen
            für die öffentliche Hand.
          </p>
          <button className={styles.ctaButton}>Jetzt Anmelden</button>
        </section>
      </main>
    </Layout>
  );
}
