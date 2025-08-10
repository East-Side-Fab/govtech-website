import React from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./datenschutz.module.css";
import { ParticleBackground } from "../components/ParticleBackground";

export default function Impressum(): React.ReactElement {
  return (
    <Layout
      title={translate({
        id: "imprint.page.title",
        message: "Impressum | GovTech Hackathon",
        description: "Imprint page title"
      })}
      description={translate({
        id: "imprint.page.description",
        message: "Impressum für den GovTech Hackathon",
        description: "Imprint page description"
      })}
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1>
            <Translate id="imprint.header.title" description="Imprint header">
              Impressum
            </Translate>
          </h1>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.privacyContent}>
          <section className={styles.section}>
            <h2>Seitenbetreiber i.S.d. § 5 TMG</h2>
            
            <div className={styles.contactInfo}>
              <p>
                East Side Fab e.V.
                <br />
                Eschberger Weg 40
                <br />
                66121 Saarbrücken, Deutschland
                <br />
                <br />
                E-Mail: <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a>
                <br />
                Tel.: +49 681 8449170
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}