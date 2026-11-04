import Image from "next/image";
import Link from "next/link";
import styles from "./HomeSections.module.css";

// Edit the four mission cards here
const missionItems = [
  {
    icon: "/academic-icon.jpg",
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

const MissionItem = ({ icon, title, description }) => (
  <div className={styles.missionItem}>
    <div className={styles.missionIcon}>
      <Image
        src={icon}
        alt={title}
        width={200}
        height={165.5}
        style={{ objectFit: "cover" }}
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

export default function OurMission() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Mission</h2>
      <div className={styles.card}>
        <p className={styles.missionIntro}>
          We aim to bring students together through a variety of engaging events
          throughout the academic year. Our mission centers around:
        </p>
        <div className={styles.missionGrid}>
          {missionItems.map((item, index) => (
            <MissionItem key={index} {...item} />
          ))}
        </div>
        <div className={styles.callToAction}>
          <p>
            To fulfill these objectives, we host various events and initiatives
            throughout the term.
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
  );
}
