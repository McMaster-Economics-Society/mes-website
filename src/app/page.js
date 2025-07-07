import Link from "next/link";
import styles from "./page.module.css";
import GotQuestions from "@/app/components/GotQuestions";
import HeroCarousel from "@/app/components/HeroCarousel";
import LatestEvent from "@/app/components/LatestEvent"; // Import the LatestEvent component

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section - Now with Carousel */}
      <HeroCarousel />
      {/* Upcoming Events Section - Shows latest event only */}
      <LatestEvent />
      {/* Got Questions Section */}
      <GotQuestions />
    </div>
  );
}
