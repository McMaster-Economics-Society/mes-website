import Head from "next/head";
import styles from "./page.module.css";
import GotQuestions from "@/app/components/GotQuestions";
import HeroCarousel from "@/app/components/HeroCarousel";
import OurMission from "@/app/components/OurMission";
import OurImpact from "@/app/components/OurImpact";
import sectionStyles from "@/app/components/HomeSections.module.css";

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
        {/* Our Mission + Our Impact (moved from the About MES page) */}
        <div className={sectionStyles.wrapper}>
          <div className={sectionStyles.contentWrapper}>
            <OurMission />
            <OurImpact />
          </div>
        </div>
        {/* Upcoming Events Section - Shows latest event only */}
        {/* Upcoming Events hidden on the homepage for now (shown on the Events page only).
            To bring it back, re-add `import LatestEvent from "@/app/components/LatestEvent";`
            at the top and put <LatestEvent /> here. */}
        {/* Got Questions Section */}
        <GotQuestions />
      </div>
    </>
  );
}
