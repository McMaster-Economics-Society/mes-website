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
      avatar: "/team-avatars/AlizaR.jpg",
    },
  ];

  // const academicTeam = [
  //   {
  //     name: "Aliza Raza",
  //     position: "Academic Executive",
  //     background: "Honours Economics, Minor in Business",
  //     avatar: "/AlizaR.jpg",
  //   },
  //   {
  //     name: "Afrah Khan",
  //     position: "First-Year Representative",
  //     background: "Economics I",
  //     avatar: "/AfrahK.jpg",
  //   },
  //   {
  //     name: "Kunal Rai",
  //     position: "First-Year Representative",
  //     background: "Economics I",
  //     avatar: "/KunalR.jpg",
  //   },
  // ];

  const marketingTeam = [
    {
      name: "Ethan Edwards",
      position: "Director of Marketing",
      background:
        "Honours Economics Co-op, Minor in Finance & Political Science",
      avatar: "/team-avatars/EthanE.jpeg",
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
      position: "First-Year Representative",
      background: "Economics I",
      avatar: "/team-avatars/KunalR.jpg",
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
      avatar: "/team-avatars/EdenA.jpg",
    },
  ];

  const otherTeam = [
    {
      name: "Afrah Khan",
      position: "Internal Coordinator",
      background: "Honors Economics Co-op",
      avatar: "/team-avatars/AfrahK.jpg",
    },
  ];

  const magazineTeam = [
    {
      name: "Hridi Paul",
      position: "Magazine Editor-In-Chief",
      background:
        "Honours Economics & Computer Science, Minor in Religious Studies, Health & Wellbeing",
      avatar: "/team-avatars/HridiP.jpg",
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
          <TeamSection title="Events Team" members={eventsTeam} />
          <TeamSection title="Outreach Team" members={outreachTeam} />
          <TeamSection title="Finance Team" members={financeTeam} />
          <TeamSection title="Coordinators" members={otherTeam} />
          <TeamSection title="Magazine Team" members={magazineTeam} />
        </div>
      </div>
    </>
  );
}
