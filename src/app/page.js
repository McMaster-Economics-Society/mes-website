import Head from "next/head";
import styles from "./page.module.css";
import GotQuestions from "@/app/components/GotQuestions";
import HeroCarousel from "@/app/components/HeroCarousel";
import LatestEvent from "@/app/components/LatestEvent"; // Import the LatestEvent component

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | McMaster Economics Society</title>
        <meta
          name="description"
          content="We're the McMaster Economics Society, a collective of student leaders committed to fostering growth within the Faculty of Social Sciences at McMaster University. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homePage}>
        {/* Hero Section - Now with Carousel */}
        <HeroCarousel />
        {/* Upcoming Events Section - Shows latest event only */}
        <LatestEvent />
        {/* Got Questions Section */}
        <GotQuestions />
      </div>
    </>
  );
}
