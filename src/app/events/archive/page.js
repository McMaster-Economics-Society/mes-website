import Image from "next/image";
import Link from "next/link";
import { pastEvents } from "@/app/data/events-database.js";
import styles from "../EventsPage.module.css";
import Head from "next/head";
import ExpandableDescription from "../ExpandableDescription";

const ArchivePage = () => {
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
        </div>

        {event.description && (
          <ExpandableDescription description={event.description} />
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
        <title>Past Events | McMaster Economics Society</title>
        <meta
          name="description"
          content="Browse past events organized by the McMaster Economics Society."
        />
      </Head>
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Past Events</h1>
          <p className={styles.pageDescription}>
            A look back at previous events hosted by the McMaster Economics
            Society.
          </p>

          <div className={styles.eventsGrid}>
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <p className={styles.noEvents}>No past events yet.</p>
            )}
          </div>

          <div className={styles.viewPastContainer}>
            <Link href="/events" className={styles.viewPastLink}>
              ← Back to Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchivePage;
