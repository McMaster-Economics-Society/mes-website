"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMesPage.module.css";
import { AnimatedCounter } from "../../components/AnimatedCounter";

const MissionItem = ({ icon, title, description }) => (
  <div className={styles.missionItem}>
    <div className={styles.missionIcon}>
      <Image
        src={icon}
        alt={title}
        width={200}
        height={165.5}
        objectFit="cover"
      />
    </div>
    <div className={styles.missionTitle}>
      <h3>{title}</h3>
    </div>
    <div className={styles.missionDescription}>
      <p>{description}</p>
    </div>
  </div>
);

const ValueItem = ({ title, description, color }) => (
  <div className={styles.valueItem}>
    <h3 className={styles.valueTitle} style={{ color }}>
      {title}
    </h3>
    <p className={styles.valueDescription}>{description}</p>
  </div>
);

// Updated ImpactStat component with animation
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

const ForwardItem = ({ icon, title, description }) => (
  <div className={styles.forwardItem}>
    <div className={styles.forwardIcon}>
      <Image src={icon} alt={title} width={80} height={80} />
    </div>
    <h3 className={styles.forwardTitle}>{title}</h3>
    <p className={styles.forwardDescription}>{description}</p>
  </div>
);

export default function AboutMesPage() {
  const missionItems = [
    {
      icon: "/academic-icon.jpg", // You'll need to add these icons
      title: "Academic Growth",
      description:
        "Provide valuable insight on academic opportunities & career paths after graduation",
    },
    {
      icon: "/promotion-icon.jpg",
      title: "Department Promotion",
      description:
        "Enhance awareness of the Economics department and enrich student experience",
    },
    {
      icon: "/network-icon.jpg",
      title: "Network Building",
      description:
        "Help students connect with Economics Department scholars and industry professionals",
    },
    {
      icon: "/discussion-icon.jpg",
      title: "Meaningful Discussion",
      description:
        "Create spaces for exploration of economic issues among like-minded peers",
    },
  ];

  const values = [
    {
      title: "Cooperation and Communication",
      description: "We value open dialogue and teamwork",
      color: "#3B82F6",
    },
    {
      title: "Purposeful Planning",
      description:
        "We approach our events with enthusiasm and clear intentions",
      color: "#10B981",
    },
    {
      title: "Inclusivity",
      description: "We create welcoming environments for all",
      color: "#8B5CF6",
    },
    {
      title: "Thoughtful Discourse",
      description: "We encourage meaningful discussions about economics",
      color: "#F59E0B",
    },
  ];

  const forwardItems = [
    {
      icon: "/magazine-icon.png", // You'll need to add these icons
      title: "Economics Magazine",
      description:
        "McMaster's first student-led economics publication featuring articles, commentary, and creative content",
    },
    {
      icon: "/trophy-icon.png",
      title: "Case Study Competition",
      description:
        "An opportunity for students to apply analytical skills to economics related topics",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Who We Are Section */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Who We Are</h1>
          <div className={styles.card}>
            {/* Group Photo */}
            <div className={styles.groupPhotoContainer}>
              <Image
                src="/mes-exec-team-2025.jpg" // Replace with your actual group photo path
                alt="McMaster Economics Society Executive Team 2024-2025"
                width={800}
                height={500}
                className={styles.groupPhoto}
                priority
              />
              <div className={styles.photoCaption}>
                The 2024-2025 McMaster Economics Society Executive Team
              </div>
            </div>

            <p className={styles.description}>
              The McMaster Economics Society (MES) is a passionate student-led
              organization that welcomes students from all programs who share an
              interest in Economics and its interdisciplinary fields.
            </p>
            <blockquote className={styles.quote}>
              &quot;Our society provides students with a welcoming, enriching
              environment for them to connect and discuss economic issues that
              are important to them with other like-minded peers.&quot;
            </blockquote>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.card}>
            <p className={styles.missionIntro}>
              We aim to bring students together through a variety of engaging
              events throughout the academic year. Our mission centers around:
            </p>
            <div className={styles.missionGrid}>
              {missionItems.map((item, index) => (
                <MissionItem key={index} {...item} />
              ))}
            </div>
            <div className={styles.callToAction}>
              <p>
                To fulfill these objectives, we host various events and
                initiatives throughout the term.
              </p>
              <p>
                Visit our{" "}
                <Link href="/events" className={styles.link}>
                  Events
                </Link>{" "}
                page to learn more!
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.card}>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <ValueItem key={index} {...value} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Section with Animated Counters */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.card}>
            <p className={styles.impactDescription}>
              Through careful planning and a focus on purposeful events, our
              society has seen tremendous growth in recent years:
            </p>
            <div className={styles.impactStats}>
              <ImpactStat
                number={50}
                suffix="+"
                label="Students at our larger events"
                duration={1500}
              />
              <ImpactStat
                number={20}
                suffix="+"
                label="Students at academic discussions"
                duration={1500}
              />
            </div>
          </div>
        </section>

        {/* Looking Forward Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Looking Forward</h2>
          <div className={styles.card}>
            <div className={styles.forwardGrid}>
              {forwardItems.map((item, index) => (
                <ForwardItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
