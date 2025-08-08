import React from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./datenschutz.module.css";
import { ParticleBackground } from "../components/ParticleBackground";

export default function Datenschutz(): React.ReactElement {
  return (
    <Layout
      title={translate({
        id: "privacy.page.title",
        message: "Datenschutzerklärung | GovTech Hackathon",
        description: "Privacy page title"
      })}
      description={translate({
        id: "privacy.page.description",
        message: "Datenschutzerklärung für den GovTech Hackathon",
        description: "Privacy page description"
      })}
    >
      <ParticleBackground />

      <header className={styles.header}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.headerContent}>
          <h1>
            <Translate id="privacy.header.title" description="Privacy header">
              Datenschutzerklärung
            </Translate>
          </h1>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.privacyContent}>
          <p>
            Wir freuen uns über Ihren Besuch auf unserer Internetseite{" "}
            <a href="https://hackathon.govtech.saarland/">
              https://hackathon.govtech.saarland/
            </a>{" "}
            und Ihr Interesse am GovTech Hackathon. Ebenso möchten wir unseren
            Teilnehmenden und interessierten Webseitenbesuchenden den Schutz
            ihrer Daten garantieren.
          </p>

          <p>
            Der Schutz Ihrer personenbezogenen Daten, wie z.B. Geburtsdatum,
            Name, Telefonnummer, Anschrift etc., ist uns ein wichtiges
            Anliegen.
          </p>

          <p>
            Der Zweck dieser Datenschutzerklärung besteht darin, Sie über die
            Verarbeitung Ihrer personenbezogenen Daten zu informieren, die wir
            bei einem Seitenbesuch von Ihnen sammeln. Unsere Datenschutzpraxis
            steht im Einklang mit den gesetzlichen Regelungen der
            Datenschutzgrundverordnung der EU (DSGVO) und dem
            Bundesdatenschutzgesetz (BDSG). Die nachfolgende
            Datenschutzerklärung dient der Erfüllung der sich aus der DSGVO
            ergebenden Informationspflichten. Diese finden sich z.B. in Art. 13
            und Art. 14 ff. DSGVO.
          </p>

          <section className={styles.section}>
            <h2>Abschnitt 1 – Allgemeine Informationen</h2>

            <h3>1.1 Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h3>
            <div className={styles.contactInfo}>
              <p>
                East Side Fab e.V.
                <br />
                Eschberger Weg 40
                <br />
                66121 Saarbrücken
                <br />
                <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a>
              </p>
            </div>

            <h3>1.2 Datenschutzbeauftragte*r (Art. 37 DSGVO)</h3>
            <p>Nicht benannt, weil:</p>
            <ul>
              <li>wir keine Behörde/öffentliche Stelle sind</li>
              <li>
                unsere Kerntätigkeiten keine groß angelegte, regelmäßige und
                systematische Überwachung und keine umfangreiche Verarbeitung
                besonderer Kategorien personenbezogener Daten umfassen (Art. 37
                Abs. 1 lit. b–c DSGVO)
              </li>
              <li>
                weniger als 20 Personen regelmäßig automatisiert
                personenbezogene Daten verarbeiten und
              </li>
              <li>
                keine Verarbeitungen durchgeführt werden, die einer
                Datenschutz-Folgenabschätzung unterliegen oder geschäftsmäßig
                zur Übermittlung/Markt- und Meinungsforschung erfolgen (§ 38
                Abs. 1 BDSG)
              </li>
            </ul>

            <h3>1.3 Bereitstellung der Website & Server-Logfiles</h3>
            <p>
              Bei jedem Aufruf unserer Website werden automatisch technische
              Informationen verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit,
              aufgerufene URL, Referrer, User-Agent). Diese Daten werden in
              Logfiles gespeichert.
            </p>
            <ul>
              <li>
                <strong>Zwecke:</strong> Technische Auslieferung, Stabilität,
                Sicherheit, Fehleranalyse.
              </li>
              <li>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse).
              </li>
              <li>
                <strong>Speicherdauer:</strong> 3 Monate
              </li>
              <li>
                <strong>Empfänger/Hoster:</strong> GitHub Pages (GitHub, Inc.,
                USA) - Die Website wird über GitHub Pages gehostet. GitHub ist
                unter dem EU-US Data Privacy Framework zertifiziert.
              </li>
              <li>
                <strong>Widerspruch:</strong> Sie können gem. Art. 21 DSGVO
                widersprechen; Löschungsansprüche richten sich nach Art. 17
                DSGVO.
              </li>
            </ul>

            <h3>1.4 Allgemeine Hinweise zur Kontaktaufnahme</h3>
            <p>
              Bei unverschlüsselter E-Mail-Kommunikation ist die vollständige
              Datensicherheit auf dem Übertragungsweg nicht gewährleistet. Für
              vertrauliche Informationen empfehlen wir verschlüsselte
              Kommunikation oder den Postweg.
            </p>

            <h3>1.5 Auftragsverarbeiter (Art. 28 DSGVO)</h3>
            <p>
              Wir setzen Dienstleister ein (z. B. Hosting, Newsletter,
              Analyse), die personenbezogene Daten ausschließlich auf Grundlage
              eines Auftragsverarbeitungsvertrags verarbeiten.
            </p>

            <div className={styles.subsection}>
              <h4>HubSpot (CRM, Marketing-Automation, Kommunikation)</h4>
              <p>
                Wir setzen HubSpot zur Verwaltung von Kontakt- und
                Kommunikationsdaten (CRM), zur Bearbeitung von Anfragen sowie
                für Marketing-Automation ein. Auftragsverarbeiter ist – je nach
                Vertrag – HubSpot Germany GmbH (für Kund:innen in der
                DACH-Region) bzw. HubSpot Ireland Limited; verbundene
                Gesellschaften, insbesondere HubSpot, Inc. (USA), können
                unterstützende Leistungen erbringen (siehe
                DPA/Sub-Prozessorenliste).
              </p>
              <ul>
                <li>
                  <strong>Datenkategorien/Zwecke:</strong> Stammdaten und
                  Kommunikationsdaten (z. B. Name, E-Mail, Unternehmen),
                  Interaktions-/Kommunikationsverläufe und ggf.
                  Einwilligungsnachweise – zur Kontaktverwaltung,
                  Anfragebearbeitung und Marketing-Automation.
                </li>
                <li>
                  <strong>Hosting/Region:</strong> Ihr HubSpot-Account ist in
                  der EU/Deutschland gehostet. HubSpot betreibt seine
                  Produktinfrastruktur u. a. in der EU (Deutschland) auf Amazon
                  Web Services (AWS). Die Verarbeitung erfolgt grundsätzlich in
                  der dem Account zugeordneten Region.
                </li>
                <li>
                  <strong>Unterauftragsverarbeiter:</strong> HubSpot setzt
                  Unterauftragsverarbeiter (z. B.
                  Infrastruktur-/Sicherheitsanbieter) ein; die jeweils aktuelle
                  Liste ist öffentlich abrufbar.
                </li>
                <li>
                  <strong>Datenübermittlungen in Drittländer:</strong> Soweit
                  im Einzelfall eine Übermittlung in die USA erforderlich ist,
                  stützt HubSpot diese auf das EU-US Data Privacy Framework
                  (DPF) für HubSpot, Inc. sowie ergänzend auf die im
                  HubSpot-DPA inkorporierten EU-Standardvertragsklauseln (SCC).
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Abschnitt 2 – Besondere Funktionen der Website</h2>

            <h3>2.1 Kontaktformular(e) / allgemeine Kommunikation</h3>
            <ul>
              <li>
                <strong>Datenkategorien:</strong> Eingaben in den
                Formularfeldern (z. B. Name, E-Mail, Nachricht).
              </li>
              <li>
                <strong>Zweck:</strong> Bearbeitung der konkreten Anfrage.
              </li>
              <li>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung)
              </li>
              <li>
                <strong>Speicherdauer:</strong> Löschung nach Abschluss der
                Bearbeitung, sofern keine gesetzlichen Aufbewahrungspflichten
                bestehen.
              </li>
              <li>
                <strong>Pflichtangaben:</strong> Vorname, E-Mail-Adresse
              </li>
            </ul>

            <h3>2.2 Anmeldung zum Hackathon</h3>
            <ul>
              <li>
                <strong>Datenkategorien:</strong> Vorname, Nachname, E-Mail,
                Organisation/Unternehmen
              </li>
              <li>
                <strong>Zweck:</strong> Planung, Organisation und Durchführung
                des Hackathons.
              </li>
              <li>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
                (Durchführung des Vertrags/der Teilnahmebedingungen).
              </li>
              <li>
                <strong>Speicherdauer:</strong> maximal 2 Jahre nach letztem
                Kontakt
              </li>
              <li>
                <strong>Weitergabe an Partner:</strong> Die Daten werden über
                eine API an unseren technischen Dienstleister Fermyon Cloud
                übermittelt, der die Teilnehmerdatenbank hostet.
              </li>
            </ul>

            <h3>2.3 Newsletter / Community-Updates</h3>
            <ul>
              <li>
                <strong>Datenkategorien:</strong> E-Mail-Adresse, Name/Anrede.
              </li>
              <li>
                <strong>Verfahren:</strong> Double-Opt-In; Protokollierung von
                IP, Datum, Uhrzeit.
              </li>
              <li>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung). Widerruf jederzeit möglich.
              </li>
              <li>
                <strong>Dienstleister:</strong> HubSpot (siehe Abschnitt 1.5)
              </li>
            </ul>

            <h3>2.4 Cookies & vergleichbare Technologien (§ 25 TDDDG)</h3>
            <p>
              Wir verwenden nur technisch notwendige Cookies. Diese sind
              erforderlich, um die Grundfunktionen der Website zu
              gewährleisten.
            </p>
            <ul>
              <li>
                <strong>Session-Cookies:</strong> Temporäre Speicherung für die
                Dauer der Browser-Sitzung
              </li>
              <li>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse)
              </li>
            </ul>

            <h3>2.5 Eingebettete Drittinhalte</h3>
            <p>
              Wir binden keine externen Inhalte direkt ein. Links zu externen
              Diensten (Discord, Twitter/X) führen auf die jeweiligen
              Plattformen, wo deren eigene Datenschutzbestimmungen gelten.
            </p>

            <h3>2.6 Foto-/Videoaufnahmen beim Event</h3>
            <ul>
              <li>
                <strong>Zweck:</strong> Dokumentation, Öffentlichkeitsarbeit.
              </li>
              <li>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse) / Einwilligung für
                Nahaufnahmen/Interviews (ggf. KunstUrhG beachten).
              </li>
              <li>
                <strong>Widerspruch/Widerruf:</strong> Bei Widerspruch/Widerruf
                wenden Sie sich bitte am Veranstaltungstag direkt an die
                Mitarbeiter*innen vor Ort oder nachträglich formlos per E-Mail
                oder auf dem Postweg an:
              </li>
            </ul>
            <div className={styles.contactInfo}>
              <p>
                East Side Fab e.V.
                <br />
                Eschberger Weg 40
                <br />
                66121 Saarbrücken
                <br />
                <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a>
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Abschnitt 3 – Rechte der betroffenen Personen</h2>

            <h3>3.1 Auskunft (Art. 15 DSGVO)</h3>
            <p>
              Sie können eine Bestätigung verlangen, ob wir Sie betreffende
              Daten verarbeiten, und Auskunft inkl. Kopie der Daten sowie
              weiterer Informationen (Zwecke, Empfänger, Speicherdauer etc.)
              erhalten. Auskunft ist schriftlich zu richten an:
            </p>
            <div className={styles.contactInfo}>
              <p>
                East Side Fab e.V.
                <br />
                Eschberger Weg 40
                <br />
                66121 Saarbrücken
                <br />
                <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a>
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>
                Identitätsprüfung bei Auskunftsersuchen (Art. 12 Abs. 6, Art.
                15 DSGVO):
              </h4>
              <p>
                Zur Wahrung der Datensicherheit bearbeiten wir
                Auskunftsanfragen grundsätzlich über bestehende Nutzerkonten
                bzw. die im Konto verifizierten Kontaktwege. Bestehen
                begründete Zweifel an der Identität, fordern wir zusätzliche,
                verhältnismäßige Informationen an (z. B. Bestätigungscode an
                die hinterlegte E-Mail/Telefonnummer oder Angaben zu einem
                spezifischen Vorgang). Nur in Ausnahmefällen – insbesondere bei
                Auskünften zu sensiblen Daten – nutzen wir starke Verfahren (z.
                B. PostIdent/VideoIdent) oder akzeptieren redigierte
                Ausweiskopien über einen sicheren Übertragungsweg. Nicht
                erforderliche Daten werden nicht gespeichert; nach der Prüfung
                dokumentieren wir lediglich, dass eine Identitätsprüfung
                erfolgt ist.
              </p>
            </div>

            <h3>3.2 Berichtigung (Art. 16 DSGVO)</h3>
            <p>
              Sie dürfen die Korrektur unrichtiger oder Vervollständigung
              unvollständiger Daten verlangen.
            </p>

            <h3>3.3 Löschung (Art. 17 DSGVO)</h3>
            <p>
              Unter den Voraussetzungen des Art. 17 (z. B. Zweckfortfall,
              Widerruf) können Sie die Löschung Ihrer Daten verlangen;
              gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h3>3.4 Einschränkung (Art. 18 DSGVO)</h3>
            <p>
              Statt Löschung können Sie in bestimmten Fällen die Einschränkung
              der Verarbeitung verlangen (z. B. während einer Prüfung).
            </p>

            <h3>3.5 Datenübertragbarkeit (Art. 20 DSGVO)</h3>
            <p>
              Sie haben das Recht, uns bereitgestellte Daten in einem
              strukturierten, gängigen, maschinenlesbaren Format zu erhalten
              oder – so weit technisch machbar – direkt an einen anderen
              Verantwortlichen übertragen zu lassen.
            </p>

            <h3>3.6 Widerspruch (Art. 21 DSGVO)</h3>
            <p>
              Sie können aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, der Verarbeitung widersprechen; bei Direktwerbung gilt
              ein jederzeitiger Widerspruch ohne Begründung. Sie können Ihre
              Einwilligung jederzeit widersprechen per E-Mail an{" "}
              <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a> oder
              schriftlich per Post.
            </p>

            <h3>3.7 Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO)</h3>
            <p>
              Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für
              die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Verarbeitung bleibt unberührt. Sie können Ihre
              Einwilligung jederzeit widerrufen – formlos per E-Mail an{" "}
              <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a> oder
              schriftlich per Post.
            </p>

            <h3>3.8 Beschwerde (Art. 77 DSGVO)</h3>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
              zu beschweren, insbesondere in Ihrem gewöhnlichen Aufenthaltsort.
            </p>

            <div className={styles.subsection}>
              <h4>Zuständige Aufsichtsbehörde (Saarland):</h4>
              <div className={styles.contactInfo}>
                <p>
                  Unabhängiges Datenschutzzentrum Saarland
                  <br />
                  Fritz-Dobisch-Str. 12
                  <br />
                  66111 Saarbrücken
                  <br />
                  Tel. 0681 94781-0
                  <br />
                  Fax 0681 94781-29
                  <br />
                  <a href="mailto:poststelle@datenschutz.saarland.de">
                    poststelle@datenschutz.saarland.de
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.subsection}>
              <h4>Geltendmachung Ihrer Rechte:</h4>
              <div className={styles.contactInfo}>
                <p>
                  East Side Fab e.V.
                  <br />
                  Eschberger Weg 40
                  <br />
                  66121 Saarbrücken
                  <br />
                  <a href="mailto:info@eastsidefab.de">info@eastsidefab.de</a>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Abschnitt 4 – Drittlandübermittlungen</h2>
            <p>
              Übermittlungen in Länder außerhalb der EU/des EWR erfolgen nur
              bei Vorliegen eines Angemessenheitsbeschlusses (Art. 45 DSGVO) –
              z. B. USA (EU-US Data Privacy Framework), Israel – oder
              geeigneter Garantien (Art. 46 DSGVO, etwa
              EU-Standardvertragsklauseln).
            </p>
            <ul>
              <li>
                <strong>GitHub Pages:</strong> USA, EU-US Data Privacy
                Framework
              </li>
              <li>
                <strong>HubSpot:</strong> USA, EU-US Data Privacy Framework und
                EU-Standardvertragsklauseln
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Abschnitt 5 – Pflicht zur Bereitstellung von Daten</h2>
            <p>
              Für die Anmeldung zur Veranstaltung ist die Angabe von Name und
              E-Mail-Adresse erforderlich (vertragliche Erforderlichkeit); ohne
              diese Angaben ist eine Registrierung und die zur Durchführung
              notwendige Kommunikation nicht möglich.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Abschnitt 6 – Automatisierte Entscheidungsfindung / Profiling</h2>
            <p>Nicht vorhanden.</p>
          </section>

          <section className={styles.section}>
            <h2>Abschnitt 7 – Aktualität / Änderungen</h2>
            <p>
              <strong>Stand: 07.08.2025</strong>
            </p>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um
              sie an geänderte Rechtslagen oder bei Änderungen des Dienstes
              sowie der Datenverarbeitung anzupassen.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}