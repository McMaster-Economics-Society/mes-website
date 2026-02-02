"use client";
import { useEffect, useCallback, useState } from "react";
import Head from "next/head";
import confetti from "canvas-confetti";
import styles from "./MagazinePage.module.css";

const CONFETTI_KEY = "mes-magazine-confetti-shown";

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
  const [pdfError, setPdfError] = useState(false);

  const handlePdfError = useCallback(() => {
    setPdfError(true);
  }, []);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(CONFETTI_KEY);
    if (!alreadyShown) {
      fireConfetti();
      localStorage.setItem(CONFETTI_KEY, "true");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Magazine | McMaster Economics Society</title>
        <meta
          name="description"
          content="The Rational Choice - McMaster Economics Society's student magazine."
        />
      </Head>
      <section className={styles.sectionLaunched}>
        <div className={styles.containerWide}>
          <h1 className={styles.pageTitle}>The Rational Choice</h1>
          <p className={styles.subtitle}>MES Student Magazine</p>
          <div className={styles.divider}></div>
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
        </div>
      </section>
    </>
  );
};

export default MagazinePage;
