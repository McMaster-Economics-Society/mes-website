"use client";
import { useEffect, useState } from "react";
import styles from "./SponsorshipPage.module.css";

export default function SponsorshipPage() {
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
        <h1 className={styles.pageTitle}>
          Sponsor the McMaster Economics Society
        </h1>
        <div className={styles.loadingContainer}>
          <p>Loading PDF viewer...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className={styles.pageTitle}>
        Sponsor the McMaster Economics Society
      </h1>

      {/* PDF Viewer Container */}
      <div className={styles.pdfContainer}>
        {!pdfError ? (
          <object
            data="/MES Sponsorship Package.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
            type="application/pdf"
            className={styles.pdfObject}
            onError={handlePdfError}
          >
            {/* Fallback iframe for browsers that don't support object */}
            <iframe
              src="/MES Sponsorship Package.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
              className={styles.responsiveIframe}
              title="MES Sponsorship Package"
              onError={handlePdfError}
            />
          </object>
        ) : (
          /* Try iframe as final fallback */
          <iframe
            src="/MES Sponsorship Package.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1"
            className={styles.responsiveIframe}
            title="MES Sponsorship Package"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        )}
      </div>
    </div>
  );
}
