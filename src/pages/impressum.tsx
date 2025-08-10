import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./datenschutz.module.css";
import { ParticleBackground } from "../components/ParticleBackground";

export default function Impressum(): React.ReactElement {
  return (
    <Layout
      title="Impressum | GovTech Hackathon"
      description="Impressum für den GovTech Hackathon Saarland"
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1>Impressum</h1>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.privacyContent}>
          <section className={styles.section}>
            <h2>Angaben gemäß § 5 TMG</h2>
            
            <div className={styles.contactInfo}>
              <p>
                <strong>East Side Fab e.V.</strong>
                <br />
                Eschberger Weg 40
                <br />
                66121 Saarbrücken
                <br />
                Deutschland
              </p>
            </div>

            <h3>Kontakt</h3>
            <div className={styles.contactInfo}>
              <p>
                Telefon: +49 681 8449170
                <br />
                E-Mail: <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a>
                <br />
                Webseite: <a href="https://eastsidefab.de" target="_blank" rel="noopener noreferrer">https://eastsidefab.de</a>
              </p>
            </div>

            <h3>Vertretungsberechtigt</h3>
            <p>
              Der Verein wird vertreten durch den Vorstand nach § 26 BGB:
            </p>
            <ul>
              <li><strong>1. Vorsitzender:</strong> ZENNER International GmbH & Co. KG</li>
              <li><strong>2. Vorsitzender:</strong> Villeroy & Boch AG</li>
              <li><strong>Schatzmeister:</strong> thyssenkrupp Automotive Body Solutions GmbH</li>
              <li><strong>Beisitzer:</strong> Rote Robben GmbH</li>
              <li><strong>Beisitzer:</strong> Deutsches Forschungszentrum für Künstliche Intelligenz GmbH (DFKI)</li>
            </ul>
            
            <h3>Geschäftsführerin</h3>
            <p>
              Anna Lawera
            </p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Vereinsregister
              <br />
              Registergericht: Amtsgericht Saarbrücken
              <br />
              Registernummer: HRA 5682
            </p>

            <h3>Umsatzsteuer-Identifikationsnummer</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE 327690932
            </p>

            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <div className={styles.contactInfo}>
              <p>
                Anna Lawera
                <br />
                East Side Fab e.V.
                <br />
                Eschberger Weg 40
                <br />
                66121 Saarbrücken
                <br />
                Deutschland
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Kooperationspartner</h2>
            <p>
              Der GovTech Hackathon wird in Zusammenarbeit mit folgenden Partnern durchgeführt:
            </p>
            <ul>
              <li><strong>Ministerium für Wirtschaft, Innovation, Digitales und Energie des Saarlandes</strong></li>
              <li><strong>European Digital Innovation Hub (EDIH) Saarland</strong></li>
              <li><strong>GovLab10°</strong></li>
              <li><strong>KleinPublic</strong></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Förderhinweis</h2>
            <p>
              Das Projekt "East Side Fab 2.0" wird gefördert durch das Ministerium für Wirtschaft, Innovation, 
              Digitales und Energie des Saarlandes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Haftungsausschluss</h2>
            
            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Links umgehend entfernen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Datenschutz</h2>
            <p>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf 
              unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben 
              werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre 
              ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p>
              Weitere Informationen zum Datenschutz finden Sie in unserer ausführlichen{" "}
              <Link to="/datenschutz">Datenschutzerklärung</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Streitschlichtung</h2>
            
            <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>{" "}
              finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Technische Umsetzung</h2>
            
            <h3>Hosting</h3>
            <p>
              Diese Website wird gehostet auf GitHub Pages:
              <br />
              GitHub, Inc.
              <br />
              88 Colin P Kelly Jr St
              <br />
              San Francisco, CA 94107
              <br />
              United States
            </p>
            
            <h3>Website-Entwicklung</h3>
            <p>
              Die Website wurde entwickelt von East Side Fab e.V. in Zusammenarbeit mit den Projektpartnern.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Bildnachweise</h2>
            <p>
              Die auf dieser Website verwendeten Bilder, Logos und Grafiken unterliegen dem Urheberrecht der 
              jeweiligen Rechteinhaber:
            </p>
            <ul>
              <li>Logos der Partnerorganisationen: © jeweilige Organisation</li>
              <li>Event-Fotografien: © East Side Fab e.V.</li>
              <li>Icons und Illustrationen: Eigene Erstellung oder lizenzfrei</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Hinweis zur Abmahnung</h2>
            <p>
              Keine Abmahnung ohne vorherigen Kontakt! Sollte der Inhalt oder die Aufmachung dieser Seiten fremde 
              Rechte Dritter oder gesetzliche Bestimmungen verletzen, so bitten wir um eine entsprechende Nachricht 
              ohne Kostennote. Wir garantieren, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, 
              ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen 
              ohne vorherige Kontaktaufnahme ausgelöste Kosten werden wir vollumfänglich zurückweisen und gegebenenfalls 
              Gegenklage wegen Verletzung vorgenannter Bestimmungen einreichen.
            </p>
          </section>

          <section className={styles.section}>
            <p>
              <strong>Stand: Januar 2025</strong>
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}