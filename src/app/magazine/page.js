"use client";
import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import confetti from "canvas-confetti";
import { allEvents } from "@/app/data/events-database.js";
import styles from "./MagazinePage.module.css";

const LAUNCH_DATE = new Date("2026-02-02T18:00:00-05:00"); // Feb 2, 2026 6:00PM EST
const CONFETTI_KEY = "mes-magazine-confetti-shown";

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    launched: false,
  };
}

function fireConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ["#89303d", "#1a1a1a", "#ffffff", "#f8f8f8"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ["#89303d", "#1a1a1a", "#ffffff", "#f8f8f8"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}

const MagazinePage = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  const handlePdfError = useCallback(() => {
    setPdfError(true);
  }, []);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!timeLeft?.launched) return;

    const alreadyShown = localStorage.getItem(CONFETTI_KEY);
    if (!alreadyShown) {
      fireConfetti();
      localStorage.setItem(CONFETTI_KEY, "true");
    }
  }, [timeLeft?.launched]);

  const pad = (n) => String(n).padStart(2, "0");

  const isLaunched = timeLeft?.launched;

  return (
    <>
      <Head>
        <title>Magazine | McMaster Economics Society</title>
        <meta
          name="description"
          content="The Rational Choice - McMaster Economics Society's student magazine."
        />
      </Head>
      <section className={isLaunched ? styles.sectionLaunched : styles.section}>
        <div className={isLaunched ? styles.containerWide : styles.container}>
          <h1 className={styles.pageTitle}>The Rational Choice</h1>
          <p className={styles.subtitle}>MES Student Magazine</p>
          <div className={styles.divider}></div>

          {!isLaunched && (
            <>
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
                We&apos;re working on bringing you the first issue of The
                Rational Choice. Stay tuned for articles, insights, and
                perspectives from McMaster economics students.
              </p>
            </>
          )}

          {isLaunched && (
            <>
              <p className={styles.launchedText}>Issue 1 is here!</p>
              <div className={styles.pdfContainer}>
                {!pdfError ? (
                  <object
                    data="/The Rational Choice Issue 1.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
                    type="application/pdf"
                    className={styles.pdfObject}
                    onError={handlePdfError}
                  >
                    <iframe
                      src="/The Rational Choice Issue 1.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
                      className={styles.responsiveIframe}
                      title="The Rational Choice Issue 1"
                      onError={handlePdfError}
                    />
                  </object>
                ) : (
                  <iframe
                    src="/The Rational Choice Issue 1.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1"
                    className={styles.responsiveIframe}
                    title="The Rational Choice Issue 1"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MagazinePage;
