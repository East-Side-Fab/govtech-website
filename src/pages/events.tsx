import React from "react";
import Layout from "@theme/Layout";
import styles from "./events.module.css";
import { ParticleBackground } from "../components/ParticleBackground";

// Event data structure
type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "workshop" | "meetup" | "talk" | "info";
  registrationLink?: string;
};

// Sample event data - replace with your actual events
const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "GovTech Info Session",
    date: "10.11.2025",
    time: "19:00 - 21:00",
    location: "East Side Fab e.V., Eschberger Weg 40, Saarbrücken",
    description:
      "Erfahre mehr über den kommenden GovTech Hackathon, lerne das Team kennen und stelle deine Fragen. Wir geben einen Überblick über die Challenges und Technologien.",
    type: "info",
    registrationLink: "/anmelden",
  },
  {
    id: 2,
    title: "Open Data Workshop",
    date: "25.11.2025",
    time: "10:00 - 16:00",
    location: "East Side Fab e.V., Eschberger Weg 40, Saarbrücken",
    description:
      "In diesem Workshop lernst du, wie du mit öffentlichen Daten arbeiten kannst. Wir zeigen dir die wichtigsten Quellen und Tools für den Umgang mit Open Government Data.",
    type: "workshop",
    registrationLink: "/anmelden",
  },
  {
    id: 3,
    title: "GovTech Meetup: Digitales Bürgerzentrum",
    date: "05.12.2025",
    time: "18:30 - 20:30",
    location: "Online (Zoom)",
    description:
      "Ein Experten-Talk zum Thema digitale Bürgerdienste. Was funktioniert bereits gut und wo gibt es noch Verbesserungspotential?",
    type: "meetup",
    registrationLink: "/anmelden",
  },
  {
    id: 4,
    title: "API-Workshop: Schnittstellen im öffentlichen Sektor",
    date: "15.12.2025",
    time: "14:00 - 17:00",
    location: "East Side Fab e.V., Eschberger Weg 40, Saarbrücken",
    description:
      "Diese Session führt dich in die API-Landschaft des öffentlichen Sektors ein. Lerne, wie du vorhandene Schnittstellen nutzen und eigene entwickeln kannst.",
    type: "workshop",
    registrationLink: "/anmelden",
  },
];

// Event card component
const EventCard = ({ event }: { event: EventItem }) => {
  return (
    <div className={`${styles.eventCard} ${styles[`eventType${event.type}`]}`}>
      <div className={styles.eventMeta}>
        <div className={styles.eventDate}>
          <div className={styles.eventDay}>{event.date}</div>
          <div className={styles.eventTime}>{event.time}</div>
        </div>
        <div className={styles.eventTypeLabel}>
          {getEventTypeLabel(event.type)}
        </div>
      </div>

      <div className={styles.eventContent}>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <div className={styles.eventLocation}>
          <span className={styles.locationIcon}>📍</span> {event.location}
        </div>
        <p className={styles.eventDescription}>{event.description}</p>
        {event.registrationLink && (
          <div className={styles.eventActions}>
            <a href={event.registrationLink} className={styles.registerButton}>
              Anmelden
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get human-readable event type labels
const getEventTypeLabel = (type: EventItem["type"]): string => {
  const labels = {
    workshop: "Workshop",
    meetup: "Meetup",
    talk: "Vortrag",
    info: "Info Session",
  };
  return labels[type];
};

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
              Teilnehmer kennenzulernen. Hier findest du alle kommenden Events.
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            <div className={styles.eventsContainer}>
              {EVENTS.map((event) => (
                <div className={styles.timelineEvent} key={event.id}>
                  <div className={styles.timelineDot}></div>
                  <EventCard event={event} />
                </div>
              ))}
              <div className={styles.timelineFinalEvent}>
                <div className={styles.finalEventDot}></div>
                <div className={styles.finalEventCard}>
                  <h3>Hackathon</h3>
                  <div className={styles.finalEventDate}>11. & 12. Oktober 2025</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Werde Teil des GovTech Ökosystems</h2>
            <p>
              Melde dich jetzt für unsere Events an und bereite dich optimal auf
              den Hackathon vor. Die Teilnahme an den
              Vorbereitungsveranstaltungen ist kostenlos.
            </p>
            <div className={styles.ctaButtons}>
              <a href=" anmelden" className={styles.primaryButton}>
                Zur Anmeldung
              </a>
              <a href="docs/faq" className={styles.secondaryButton}>
                FAQ
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
