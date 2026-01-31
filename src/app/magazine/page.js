"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { allEvents } from "@/app/data/events-database.js";
import styles from "./MagazinePage.module.css";

const LAUNCH_DATE = new Date("2026-02-02T18:00:00-05:00"); // Feb 2, 2026 6:00PM EST

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const MagazinePage = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <>
      <Head>
        <title>Magazine | McMaster Economics Society</title>
        <meta
          name="description"
          content="The Rational Choice - McMaster Economics Society's student magazine. Coming soon!"
        />
      </Head>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>The Rational Choice</h1>
          <p className={styles.subtitle}>MES Student Magazine</p>
          <div className={styles.divider}></div>
          <p className={styles.comingSoon}>Coming Soon</p>

          {timeLeft && (
            <div className={styles.countdown}>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNumber}>
                  {pad(timeLeft.days)}
                </span>
                <span className={styles.countdownLabel}>Days</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNumber}>
                  {pad(timeLeft.hours)}
                </span>
                <span className={styles.countdownLabel}>Hours</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNumber}>
                  {pad(timeLeft.minutes)}
                </span>
                <span className={styles.countdownLabel}>Minutes</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNumber}>
                  {pad(timeLeft.seconds)}
                </span>
                <span className={styles.countdownLabel}>Seconds</span>
              </div>
            </div>
          )}

          {allEvents[0]?.rsvpUrl && (
            <a
              href={allEvents[0].rsvpUrl}
              className={styles.rsvpButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP for Launch Party
            </a>
          )}

          <p className={styles.description}>
            We&apos;re working on bringing you the first issue of The Rational
            Choice. Stay tuned for articles, insights, and perspectives from
            McMaster economics students.
          </p>
        </div>
      </section>
    </>
  );
};

export default MagazinePage;
