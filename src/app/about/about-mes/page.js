"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMesPage.module.css";
import { AnimatedCounter } from "../../components/AnimatedCounter";

const MissionItem = ({ icon, title, link, description }) => (
  <div className={styles.missionItem}>
    <div className={styles.missionIcon}>
      <Image
        src={icon}
        alt={title}
        href={link}
        width={200}
        height={165.5}
        style={{ objectFit: "cover" }}
        priority
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

const ForwardItem = ({ icon, title, description, link }) => {
  const content = (
    <>
      <div className={styles.forwardIcon}>
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className={styles.forwardTitle}>{title}</h3>
      <p className={styles.forwardDescription}>{description}</p>
    </>
  );

  // If a link is provided, wrap the content in a Link component
  if (link) {
    return (
      <Link
        href={link}
        className={styles.forwardItem}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </Link>
    );
  }

  // Otherwise, render as a regular div
  return <div className={styles.forwardItem}>{content}</div>;
};

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
      title: "The Rational Choice",
      description:
        "McMaster's first student-led economics publication featuring articles, commentary, and creative content",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf3hysUSUIak0yNoKVK8b8GIHuZ5yBq_VImUu6gXnPEKjrpEA/viewform",
    },
    {
      icon: "/trophy-icon.png",
      title: "Case Study Competition",
      description:
        "An opportunity for students to apply analytical skills to economics related topics",
    },
  ];

  return (
    <>
      <Head>
        <title>About MES | McMaster Economics Society</title>
        <meta
          name="description"
          content="Learn about the McMaster Economics Society - our mission, values, and impact on student life."
        />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          {/* Who We Are Section */}
          <section className={styles.section}>
            <h1 className={styles.sectionTitle}>Who We Are</h1>
            <div className={styles.card}>
              {/* Group Photo - This is the critical image that should load instantly */}
              <div className={styles.groupPhotoContainer}>
                <Image
                  src="/mes-exec-team-2026.jpg" // Replace with your actual group photo path
                  alt="McMaster Economics Society Executive Team 2024-2025"
                  width={800}
                  height={500}
                  className={styles.groupPhoto}
                  priority // This tells Next.js to preload this critical image
                  placeholder="blur" // Optional: shows a blur while loading
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className={styles.photoCaption}>
                  The 2025-2026 McMaster Economics Society Executive Team
                </div>
              </div>

              <p className={styles.description}>
                The McMaster Economics Society (MES) is a passionate student-led
                organization that welcomes students from all programs who share
                an interest in Economics and its interdisciplinary fields.
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
    </>
  );
}
