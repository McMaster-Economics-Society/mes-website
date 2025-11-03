import Image from "next/image";
import { allEvents } from "@/app/data/events-database.js";
import styles from "./EventsPage.module.css";
import Head from "next/head";

const EventsPage = () => {
  const EventCard = ({ event }) => (
    <div className={styles.eventCard}>
      {event.image && (
        <div className={styles.eventImageContainer}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={event.image}
              alt={event.imageAlt || `${event.title} event image`}
              width={500}
              height={300}
              className={styles.eventImage}
            />
          </div>
        </div>
      )}

      <div className={styles.eventContent}>
        <div className={styles.eventHeader}>
          <h3 className={styles.eventTitle}>{event.title}</h3>
          {/* Only show RSVP button if rsvpUrl exists */}
          {event.rsvpUrl && (
            <a
              href={event.rsvpUrl}
              className={styles.rsvpButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/bounce-white.svg"
                alt="Bounce logo"
                width={20}
                height={20}
              />
              RSVP
            </a>
          )}
        </div>

        {event.description && (
          <p className={styles.eventDescription}>{event.description}</p>
        )}

        <div className={styles.eventMeta}>
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <div className={styles.metaIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5 7 1 12 1S21 5 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>{event.location}</span>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>{event.date}</span>
            </div>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <div className={styles.metaIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="12,6 12,12 16,14"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Events | McMaster Economics Society</title>
        <meta
          name="description"
          content="Discover all upcoming events organized by the McMaster Economics Society!"
        />
      </Head>
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>All Events</h1>
          <p className={styles.pageDescription}>
            Discover all upcoming events organized by the McMaster Economics
            Society. From study sessions to guest speakers, we have something
            for everyone!
          </p>

          <div className={styles.eventsGrid}>
            {allEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
