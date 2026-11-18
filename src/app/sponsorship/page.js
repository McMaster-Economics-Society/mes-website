import Image from "next/image";
import { Roboto_Condensed, Montserrat } from "next/font/google";
import styles from "./SponsorshipPage.module.css";

// Fonts used in the sponsorship package design
const headingFont = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sponsor-heading",
});
const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sponsor-body",
});

export const metadata = {
  title: "Sponsor Us | McMaster Economics Society",
  description:
    "2026-27 sponsorship package for the McMaster Economics Society: our reach, main events, and Gold, Silver and Bronze partnership packages.",
  keywords:
    "sponsorship, McMaster Economics Society, economics, McMaster University, partners, recruitment",
};

/* =========================================================
   CONTENT — edit this section each year
   ========================================================= */

const YEAR = "2026-27";
const CONTACT_EMAIL = "econsoc@mcmaster.ca";
const PDF_DOWNLOAD = "/MES-Sponsorship-Package-2026-27.pdf";

const reachStats = [
  { before: "Attracted ", bold: "400+ attendees", after: "" },
  {
    before: "Connected students with ",
    bold: "50+ industry professionals",
    after: "",
  },
  {
    before: "Built a community of ",
    bold: "1,500+ followers",
    after: " across Instagram and LinkedIn",
  },
];

const mainEvents = [
  {
    title: "Case Study Competition",
    image: "/sponsorship/event-case-comp.jpg",
    alt: "Students shaking hands with judges at the MES Case Study Competition",
    text: "Our Case Study Competition gives students the chance to apply what they have learned to a real-world business challenge and present their solutions to industry professionals. Sponsorship helps us provide the resources that make the competition possible, while giving your organization the opportunity to play a direct role in the experience.",
  },
  {
    title: "Alumni Networking",
    image: "/sponsorship/event-networking.jpg",
    alt: "Students working together at an MES event",
    text: "Alumni Networking creates a space for students to meet McMaster alumni working across different industries and build lasting connections. Sponsorship helps us bring more students and alumni together while giving your organization a meaningful presence in the connections being formed.",
  },
  {
    title: "Economics Pathways",
    note: "Rebranded from Econ Talks",
    text: "Economics Pathways helps students explore the academic and career opportunities available through an economics degree. With sponsor support, we can introduce students to a wider range of industries while giving your organization the chance to connect with students early in degree.",
  },
];

const partnerReasons = [
  {
    title: "Make an Impact",
    text: "Help us create valuable student experiences while showing students that your organization is invested in their growth.",
    image: "/sponsorship/partner-impact.jpg",
    alt: "A professional speaking with students at an MES event",
  },
  {
    title: "Access Talent",
    text: "Connect with McMaster students, build relationships, and access the MES resume book to support your future recruitment efforts.",
    image: "/sponsorship/partner-talent.jpg",
    alt: "MES students with representatives at a sponsor booth",
  },
  {
    title: "Engage Directly",
    text: "Go beyond logo placement through opportunities such as event booths, opening remarks, and panel participation.",
    image: "/sponsorship/partner-engage.jpg",
    alt: "A speaker addressing students at an MES event",
  },
];

const tiers = [
  { name: "Gold", price: "$1500", className: "gold" },
  { name: "Silver", price: "$1000", className: "silver" },
  { name: "Bronze", price: "$500", className: "bronze" },
];

// true = included in [Gold, Silver, Bronze]
const benefits = [
  { label: "Social Media Recognition (1,500+ followers)", tiers: [true, true, true] },
  { label: "Newsletter & Website Recognition", tiers: [true, true, true] },
  { label: "Booth or Product Activation", tiers: [true, true, true] },
  { label: "Logo Placement on Event Materials", tiers: [true, true, false] },
  { label: "Event Giveaway Inclusion", tiers: [true, true, false] },
  { label: "Speaking, Judging or Panel Role", tiers: [true, false, false] },
  { label: "Resume Book Access", tiers: [true, false, false] },
];

const signatories = [
  {
    name: "Laraib Saleem",
    role: "Co-President",
    photo: "/sponsorship/laraib.jpg",
    signature: "/sponsorship/sig-laraib.png",
  },
  {
    name: "Izehinosen Iyamabo",
    role: "Co-President",
    photo: "/sponsorship/izzy.jpg",
    signature: "/sponsorship/sig-izzy.png",
  },
];

/* ========================================================= */

const SectionHeader = ({ title, variant = "maroon" }) => (
  <div
    className={`${styles.sectionHeader} ${
      variant === "light" ? styles.sectionHeaderLight : ""
    }`}
  >
    <h2>{title}</h2>
    <Image
      src={
        variant === "light"
          ? "/web-app-manifest-512x512.png"
          : "/sponsorship/logo-white.png"
      }
      alt=""
      width={72}
      height={72}
      className={styles.headerLogo}
    />
  </div>
);

const Check = () => (
  <span className={styles.check} aria-label="Included">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5l4.2 4.2L19 7" />
    </svg>
  </span>
);

export default function SponsorshipPage() {
  return (
    <div className={`${headingFont.variable} ${bodyFont.variable} ${styles.page}`}>
      {/* ---------- Cover ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroWave} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.heroYear}>
              <span>{YEAR.slice(0, 2)}</span>
              <span>{YEAR.slice(2)}</span>
            </p>
            <h1 className={styles.heroTitle}>
              McMaster
              <br />
              Economics Society
            </h1>
            <p className={styles.heroSubtitle}>Sponsorship Package</p>
            <div className={styles.heroButtons}>
              <a href="#packages" className={styles.primaryButton}>
                View Packages
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Contact Us
              </a>
            </div>
            <p className={styles.download}>
              Downloadable link:{" "}
              <a href={PDF_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                {YEAR} Sponsorship Package (PDF)
              </a>
            </p>
          </div>
          <div className={styles.heroCircles}>
            <div className={`${styles.circle} ${styles.circleLarge}`}>
              <Image src="/sponsorship/cover-2.jpg" alt="MES members at an event" fill sizes="340px" priority />
            </div>
            <div className={`${styles.circle} ${styles.circleTop}`}>
              <Image src="/sponsorship/cover-1.jpg" alt="An MES member smiling" fill sizes="190px" priority />
            </div>
            <div className={`${styles.circle} ${styles.circleBottom}`}>
              <Image src="/sponsorship/cover-3.jpg" alt="A speaker at an MES event" fill sizes="170px" priority />
            </div>
          </div>
        </div>
        <div className={styles.heroBand} aria-hidden="true">
          <span className={styles.heroBandLine} />
          <Image src="/sponsorship/logo-white.png" alt="" width={84} height={84} />
        </div>
      </section>

      {/* ---------- About Us ---------- */}
      <section className={styles.section}>
        <SectionHeader title="About Us" />
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 className={styles.subheading}>What We Do</h3>
            <p>
              The McMaster Economics Society (MES) is a student-led organization
              passionate about connecting students through economics. We welcome
              students from all programs to engage in events that foster shared
              interests, academic growth, and professional development. Our
              events give sponsors a direct way to engage with student talent
              and build a visible presence within the McMaster community.
            </p>
            <h3 className={styles.subheading}>Our Reach</h3>
            <p>
              Through our events, social media platforms, website, and
              newsletter, we are connecting with more students and creating more
              opportunities for organizations to engage with the McMaster
              community. Over the past year, MES has:
            </p>
            <ul className={styles.reachList}>
              {reachStats.map((s) => (
                <li key={s.bold}>
                  {s.before}
                  <strong>{s.bold}</strong>
                  {s.after}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.aboutPhotos}>
            <div className={styles.photo}>
              <Image src="/sponsorship/about-1.jpg" alt="MES members presenting with a microphone" fill sizes="(max-width: 900px) 100vw, 480px" />
            </div>
            <div className={styles.photo}>
              <Image src="/sponsorship/about-2.jpg" alt="Students attending an MES discussion" fill sizes="(max-width: 900px) 100vw, 480px" />
            </div>
          </div>
        </div>
        <div className={`${styles.photo} ${styles.widePhoto} ${styles.teamPhoto}`}>
          <Image src="/sponsorship/about-team.jpg" alt="The MES executive team" fill sizes="(max-width: 1200px) 100vw, 1200px" />
        </div>
      </section>

      {/* ---------- Main Events ---------- */}
      <section className={styles.section}>
        <SectionHeader title="Main Events" variant="light" />
        <div className={styles.eventsGrid}>
          <div className={styles.eventsPhotos}>
            {mainEvents
              .filter((e) => e.image)
              .map((e) => (
                <div className={styles.photo} key={e.title}>
                  <Image src={e.image} alt={e.alt} fill sizes="(max-width: 900px) 100vw, 400px" />
                </div>
              ))}
          </div>
          <div className={styles.eventsPanel}>
            {mainEvents.map((e) => (
              <div className={styles.eventItem} key={e.title}>
                <h3>{e.title}</h3>
                {e.note && <p className={styles.eventNote}>{e.note}</p>}
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.photo} ${styles.widePhoto} ${styles.eventsWidePhoto}`}>
          <Image src="/sponsorship/event-pathways.jpg" alt="Students at MES Economics Pathways" fill sizes="(max-width: 1200px) 100vw, 1200px" />
        </div>
      </section>

      {/* ---------- Partner With Us ---------- */}
      <section className={styles.section}>
        <SectionHeader title="Partner With Us" />
        <div className={styles.partnerGrid}>
          {partnerReasons.map((r, i) => (
            <div
              className={`${styles.partnerRow} ${i % 2 === 1 ? styles.partnerRowReverse : ""}`}
              key={r.title}
            >
              <div className={styles.partnerText}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
              <div className={styles.photo}>
                <Image src={r.image} alt={r.alt} fill sizes="(max-width: 900px) 100vw, 600px" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Packages ---------- */}
      <section className={styles.section} id="packages">
        <SectionHeader title="Packages" variant="light" />
        <div className={styles.packagesPanel}>
          <div className={styles.tableWrap}>
            <table className={styles.packagesTable}>
              <thead>
                <tr>
                  <th className={styles.benefitHead}>
                    <span className={styles.srOnly}>Benefit</span>
                  </th>
                  {tiers.map((t) => (
                    <th key={t.name} className={`${styles.tierHead} ${styles[t.className]}`}>
                      <span className={styles.tierName}>{t.name}</span>
                      <span className={styles.tierPrice}>{t.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {benefits.map((b) => (
                  <tr key={b.label}>
                    <th scope="row" className={styles.benefitLabel}>
                      {b.label}
                    </th>
                    {b.tiers.map((included, i) => (
                      <td key={tiers[i].name}>{included ? <Check /> : null}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Tailored%20MES%20Sponsorship%20Package`} className={styles.tailoredBadge}>
            Contact us
            <br />
            for tailored
            <br />
            packages!
          </a>
        </div>
      </section>

      {/* ---------- Contact Us ---------- */}
      <section className={styles.section} id="contact">
        <SectionHeader title="Contact Us" />
        <div className={styles.contactBody}>
          <p>
            Each sponsorship helps us create events where students can learn,
            make connections, and explore opportunities beyond their degree. We
            would be proud to give your organization a meaningful role in those
            experiences. We welcome financial and in-kind contributions,
            including food, products, services, and are happy to tailor a
            partnership that fits your needs.
          </p>
          <p>
            On behalf of our executive team, we thank you for considering this
            opportunity. We look forward to discussing how we can collaborate.
          </p>
          <p>Sincerely,</p>

          <div className={styles.signatories}>
            {signatories.map((s) => (
              <div className={styles.signatory} key={s.name}>
                <Image src={s.signature} alt={`${s.name}'s signature`} width={220} height={110} className={styles.signature} />
                <div className={styles.headshot}>
                  <Image src={s.photo} alt={s.name} fill sizes="220px" />
                </div>
                <p className={styles.signName}>{s.name}</p>
                <p className={styles.signRole}>
                  {s.role}
                  <br />
                  McMaster Economics Society
                </p>
              </div>
            ))}
          </div>

          <div className={styles.contactRow}>
            <a href="https://www.instagram.com/mcmasterecon/" target="_blank" rel="noopener noreferrer">
              <Image src="/square-instagram-brands.svg" alt="" width={22} height={22} />
              @mcmasterecon
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Image src="/email-icon.svg" alt="" width={22} height={22} />
              {CONTACT_EMAIL}
            </a>
            <a href="https://www.maceconsociety.ca">
              <Image src="/globe.svg" alt="" width={22} height={22} />
              www.maceconsociety.ca
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
