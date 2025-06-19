import Link from "next/link";
import styles from "./page.module.css";
import GotQuestions from "@/app/components/GotQuestions";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroWelcome}>Welcome</span>
            <span className={styles.heroTo}>to</span>
            <span className={styles.heroMain}>McMaster Economics Society</span>
          </h1>
          <Link href="/about" className={styles.heroCta}>
            Learn more
          </Link>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>

          <div className={styles.eventCard}>
            <div className={styles.eventImage}>
              {/* Placeholder for event image */}
            </div>
            <div className={styles.eventDetails}>
              <h3 className={styles.eventTitle}>Study Hall</h3>
              <p className={styles.eventDescription}>
                DESCRIPTION DESCRIPTION LOREM IPSUM
                <br />
                DESCRIPTION DESCRIPTION LOREM IPSUM
                <br />
                DESCRIPTION DESCRIPTION LOREM IPSUM
              </p>
              <div className={styles.eventMeta}>
                <span className={styles.eventLocation}>LRW 3001</span>
                <span className={styles.eventDate}>April 2, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Got Questions Section */}
      <GotQuestions />
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
