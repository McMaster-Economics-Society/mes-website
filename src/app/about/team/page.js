import Image from "next/image";
import styles from "./MeetOurTeamPage.module.css";
import Head from "next/head";
const TeamMember = ({ name, position, background, avatar }) => (
  <div className={styles.teamMember}>
    <div className={styles.avatarContainer}>
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={120}
          height={120}
          className={styles.avatar}
        />
      ) : (
        <div className={styles.placeholderAvatar}></div>
      )}
    </div>
    <h3 className={styles.position}>{position}</h3>
    <h4 className={styles.name}>{name}</h4>
    <p className={styles.background}>{background}</p>
  </div>
);

const TeamSection = ({ title, members }) => (
  <div className={styles.teamSection}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.membersContainer}>
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  </div>
);

export default function TeamPage() {
  const executiveLeadership = [
    {
      name: "Laraib Saleem",
      position: "President",
      background: "Honours Economics Co-op",
      avatar: "/team-avatars/LaraibS.jpg",
    },
    {
      name: "Rebecca Adiyiah",
      position: "VP of Communications",
      background: "Honours Economics Co-op, Minor in Finance",
      avatar: "/team-avatars/RebeccaA.jpg",
    },
    {
      name: "Izehinosen Iyamabo",
      position: "VP of Operations",
      background: "Honours Economics Co-op",
      avatar: "/team-avatars/IzzyI.jpg",
    },
    {
      name: "Aliza Raza",
      position: "VP of Academics",
      background: "Honours Economics, Minor in Business",
      avatar: "/MES_black.png",
    },
  ];

  const academicTeam = [
    {
      name: "Nathan Lahey",
      position: "Academic Executive",
      background: "Honours Economics",
      avatar: "/team-avatars/NathanL.jpg",
    },
    {
      name: "Seoa Mo",
      position: "Academic Executive",
      background: "Honours Political Science, Minor in Economics",
      avatar: "/MES_black.png",
    },
  ];

  const marketingTeam = [
    {
      name: "Ethan Edwards",
      position: "Director of Marketing",
      background:
        "Honours Economics Co-op, Minor in Finance & Political Science",
      avatar: "/team-avatars/EthanE.png",
    },
    {
      name: "Marissa Manikavasagar",
      position: "Marketing Executive",
      background: "Honours Economics Co-op, Minor in Finance",
      avatar: "/team-avatars/MarissaM.jpg",
    },
    {
      name: "Roland Lightbourn",
      position: "Marketing Executive",
      background: "BA Economics, Minor in Business",
      avatar: "/team-avatars/RolandL.jpg",
    },
    {
      name: "Kunal Rai",
      position: "Marketing Executive",
      background: "Honours Economics Co-op",
      avatar: "/MES_black.png",
    },
    {
      name: "Krystal Bui",
      position: "Marketing Executive",
      background: "Honours Economics Co-op, Minor in Law",
      avatar: "/team-avatars/KrystalB.jpg",
    },
    {
      name: "Mohammad Shafi Asif",
      position: "Marketing Executive",
      background: "Honours Commerce",
      avatar: "/MES_black.png",
    },
    {
      name: "Beny Fernando",
      position: "Marketing Executive",
      background: "Honours Commerce",
      avatar: "/team-avatars/BenyF.png",
    },
  ];

  const eventsTeam = [
    {
      name: "Chloe Wentzell",
      position: "Director of Events",
      background: "Combined Honours Economics & English",
      avatar: "/team-avatars/ChloeW.jpg",
    },
    {
      name: "Fola Olusanya",
      position: "Events Executive",
      background: "Combined Honours Economics & Kinesiology",
      avatar: "/team-avatars/FolaO.jpg",
    },
    {
      name: "Laiba Imtiaz",
      position: "Events Executive",
      background: "Honours Economics",
      avatar: "/MES_black.png",
    },
    {
      name: "Mayra Gupta",
      position: "Events Executive",
      background: "Honours Commerce",
      avatar: "/team-avatars/MayraG.jpg",
    },
    {
      name: "Lavinia Banica",
      position: "Events Executive",
      background: "Honours Commerce, Minor in Economics",
      avatar: "/MES_black.png",
    },
  ];
  const outreachTeam = [
    {
      name: "Winnie Tang",
      position: "Director of Outreach & Partnerships",
      background:
        "Honours Economics Co-op, Environmental Sustainability Concurrent Certificate",
      avatar: "/team-avatars/WinnieT.jpg",
    },
  ];
  const financeTeam = [
    {
      name: "Eden Andoni",
      position: "Director of Finance",
      background: "BA Economics II",
      avatar: "/MES_black.png",
    },
    {
      name: "Chizam Nkechika",
      position: "Finance Executive",
      background: "Honours Economics Specialist",
      avatar: "/team-avatars/ChizamN.jpg",
    },
    {
      name: "Myles Whale",
      position: "Finance Executive",
      background: "Honours Commerce with Internship",
      avatar: "/team-avatars/MylesW.jpg",
    },
  ];

  const otherTeam = [
    {
      name: "Afrah Khan",
      position: "Internal Coordinator",
      background: "Honors Economics Co-op",
      avatar: "/MES_black.png",
    },
    {
      name: "Siham Hussein",
      position: "First Year Representative",
      background: "Honours Commerce",
      avatar: "/MES_black.png",
    },
    {
      name: "Adam Veall",
      position: "First Year Representative",
      background: "Honours Economics",
      avatar: "/MES_black.png",
    },
  ];

  const magazineTeam = [
    {
      name: "Hridi Paul",
      position: "Magazine Editor-In-Chief",
      background:
        "Honours Economics & Computer Science, Minor in Religious Studies, Health & Wellbeing",
      avatar: "/MES_black.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Meet Our Team | McMaster Economics Society</title>
        <meta
          name="description"
          content="Learn about the McMaster Economics Society - our mission, values, and impact on student life."
        />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Meet our Team</h1>
            <p className={styles.pageSubtitle}>
              Let&apos;s get to know the people leading the way at MES!
            </p>
          </div>

          {/* Team Sections */}
          <TeamSection
            title="Executive Leadership"
            members={executiveLeadership}
          />
          <TeamSection title="Marketing Team" members={marketingTeam} />
          <TeamSection title="Outreach Team" members={outreachTeam} />
          <TeamSection title="Events Team" members={eventsTeam} />
          <TeamSection title="Academic Team" members={academicTeam} />
          <TeamSection title="Finance Team" members={financeTeam} />
          <TeamSection title="Magazine Team" members={magazineTeam} />
          <TeamSection title="Other Team" members={otherTeam} />
        </div>
      </div>
    </>
  );
}
