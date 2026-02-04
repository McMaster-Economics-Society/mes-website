"use client";
import { useEffect, useCallback, useState } from "react";
import Head from "next/head";

import styles from "./MagazinePage.module.css";
import Image from "next/image";
const MagazinePage = () => {
  const [pdfError, setPdfError] = useState(false);

  const handlePdfError = useCallback(() => {
    setPdfError(true);
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
          <Image
            src="/trc-magazine-logo.png"
            alt="The Ratinal Choice Magazine Logo"
            className={styles.logo}
            width={400}
            height={400}
          />
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
