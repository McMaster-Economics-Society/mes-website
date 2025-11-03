import Image from "next/image";
import Link from "next/link";
import { allEvents } from "@/app/data/events-database.js";
import styles from "./LatestEvent.module.css";

const LatestEvent = () => {
  // Get only the first event (latest upcoming event)
  const latestEvent = allEvents[0];

  // Don't render anything if no events exist
  if (!latestEvent) {
    return null;
  }

  return (
    <section className={styles.eventsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Upcoming Events</h2>

        <div className={styles.eventCard}>
          {/* Only render image container if image exists */}
          {latestEvent.image && (
            <div className={styles.eventImageContainer}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={latestEvent.image}
                  alt={
                    latestEvent.imageAlt || `${latestEvent.title} event image`
                  }
                  width={320}
                  height={240}
                  className={styles.eventImage}
                />
              </div>
            </div>
          )}

          <div className={styles.eventContent}>
            <div className={styles.eventHeader}>
              <h3 className={styles.eventTitle}>{latestEvent.title}</h3>
              {/* Only show RSVP button if rsvpUrl exists */}
              {latestEvent.rsvpUrl && (
                <a
                  href={latestEvent.rsvpUrl}
                  className={styles.rsvpButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOUNCE RSVP
                  <Image
                    src="/bounce-white.svg"
                    alt="Bounce Life logo"
                    width={20}
                    height={20}
                  />
                </a>
              )}
            </div>

            {/* Only render description if it exists */}
            {latestEvent.description && (
              <p className={styles.eventDescription}>
                {latestEvent.description}
              </p>
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
                  <span>{latestEvent.location}</span>
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
                  <span>{latestEvent.date}</span>
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
                  <span>{latestEvent.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Events Button */}
        <div className={styles.viewAllContainer}>
          <Link href="/events" className={styles.viewAllBtn}>
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestEvent;
