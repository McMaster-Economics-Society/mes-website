import Link from "next/link";
import styles from "./GotQuestions.module.css";

export default function GotQuestions() {
  return (
    <section className={styles.gotQuestionsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Got Questions?</h2>
          <p className={styles.subtitle}>
            Don&apos;t hesitate to reach out, we don&apos;t bite!
          </p>
        </div>
        <div className={styles.buttons}>
          <Link href="#" className={styles.faqsBtn}>
            FAQs
          </Link>
          <Link href="/contact" className={styles.contactBtn}>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
