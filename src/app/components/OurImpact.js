"use client";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./HomeSections.module.css";

const ImpactStat = ({ number, label, suffix = "", duration = 2000 }) => (
  <div className={styles.impactStat}>
    <div className={styles.impactNumber}>
      <AnimatedCounter
        endValue={number}
        duration={duration}
        suffix={suffix}
        className={styles.animatedNumber}
      />
    </div>
    <div className={styles.impactLabel}>{label}</div>
  </div>
);

export default function OurImpact() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Impact</h2>
      <div className={styles.card}>
        <p className={styles.impactDescription}>
          Through careful planning and a focus on purposeful events, our society
          has seen tremendous growth in recent years:
        </p>
        {/* Edit the impact numbers here */}
        <div className={styles.impactStats}>
          <ImpactStat
            number={100}
            suffix="+"
            label="Students at our larger events"
            duration={1500}
          />
          <ImpactStat
            number={50}
            suffix="+"
            label="Students at academic discussions"
            duration={1500}
          />
        </div>
      </div>
    </section>
  );
}
