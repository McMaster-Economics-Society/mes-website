"use client";
import { useEffect, useState } from "react";
import styles from "./ResourcePage.module.css";
import Head from "next/head";
export default function ResourcePage() {
  const [isClient, setIsClient] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePdfError = () => {
    setPdfError(true);
  };

  // Prevent hydration issues
  if (!isClient) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className={styles.pageTitle}>First Years&apos;Survivial Guide</h1>
        <div className={styles.loadingContainer}>
          <p>Loading PDF viewer...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Resources | McMaster Economics Society</title>
        <meta name="description" content="First Years' Survival Guide" />
      </Head>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className={styles.pageTitle}>First Years&apos;Survivial Guide</h1>

        {/* PDF Viewer Container */}
        <div className={styles.pdfContainer}>
          {!pdfError ? (
            <object
              data="/MES First Years Survival Guide.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
              type="application/pdf"
              className={styles.pdfObject}
              onError={handlePdfError}
            >
              {/* Fallback iframe for browsers that don't support object */}
              <iframe
                src="/MES First Years Survival Guide.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
                className={styles.responsiveIframe}
                title="FIrst Years'Survivial Guide"
                onError={handlePdfError}
              />
            </object>
          ) : (
            /* Try iframe as final fallback */
            <iframe
              src="/MES First Years Survival Guide.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1"
              className={styles.responsiveIframe}
              title="First Years'Survivial Guide"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          )}
        </div>
      </div>
    </>
  );
}
