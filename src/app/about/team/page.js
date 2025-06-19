import Image from "next/image";
import styles from "./MeetOurTeamPage.module.css";

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
      name: "Aryan Vasanis",
      position: "President",
      background:
        "Honours Economics Specialist Option, Minor in Finance & Government, Certificate in Applied Social Sciences Research",
      avatar: "/IMG_7622.jpg",
    },
    {
      name: "Laraib Saleem",
      position: "VP of Communications",
      background: "Honours Economics Co-op",
      avatar: "/LaraibS.jpg",
    },
    {
      name: "Imudia Alexander",
      position: "VP of Operations",
      background:
        "Honours Economics, Minor in Sociology & Business Studies Certificate",
      avatar: "/ImudiaA.jpg",
    },
    {
      name: "Dui Davidsson",
      position: "VP of Academics",
      background: "Honours Economics & Philosophy",
      avatar: "/DuiD.jpg",
    },
  ];

  const academicTeam = [
    {
      name: "Aliza Raza",
      position: "Academic Executive",
      background: "Honours Economics, Minor in Business",
      avatar: "/AlizaR.jpg",
    },
    {
      name: "Afrah Khan",
      position: "First-Year Representative",
      background: "Economics I",
      avatar: "/AfrahK.jpg",
    },
    {
      name: "Kunal Rai",
      position: "First-Year Representative",
      background: "Economics I",
      avatar: "/KunalR.jpg",
    },
  ];

  const marketingTeam = [
    {
      name: "Rebecca Adiyiah",
      position: "Director of Marketing",
      background: "Honours Economics Co-op, Minor in Finance",
      avatar: "/RebeccaA.jpg",
    },
    {
      name: "Marissa Manikavasagar",
      position: "Marketing Executive",
      background: "Honours Economics Co-op, Minor in Finance",
      avatar: "/MarissaM.jpg",
    },
    {
      name: "Winnie Tang",
      position: "Marketing Executive",
      background:
        "Honours Economics Co-op, Environmental Sustainability Certificate",
      avatar: "/WinnieT.jpg",
    },
    {
      name: "Ethan Edwards",
      position: "Marketing Executive",
      background:
        "Honours Economics Co-op, Minor in Finance & Political Science",
      avatar: "/MES_black.png",
    },
    {
      name: "Roland Lightbourn",
      position: "Marketing Executive",
      background: "BA Economics, Minor in Business",
      avatar: "/MES_black.png",
    },
  ];

  const eventsTeam = [
    {
      name: "Haya Mohamed",
      position: "Director of Events",
      background:
        "Honours Economics Specialist Option, Business Studies Certificate",
      avatar: "/HayaM.jpg",
    },
    {
      name: "Fola Olusanya",
      position: "Events Executive",
      background: "Combined Honours Economics & Kinesiology",
      avatar: "/FolaO.jpg",
    },
    {
      name: "Chloe Wentzell",
      position: "Events Executive",
      background: "Combined Honours Economics & English",
      avatar: "/ChloeW.jpg",
    },
    {
      name: "Hridi Paul",
      position: "Events Executive",
      background:
        "Honours Economics & Computer Science, Minor in Religious Studies, Health & Wellbeing",
      avatar: "/HridiP.jpg",
    },
  ];

  const financeTeam = [
    {
      name: "Karim Abi Nahed",
      position: "Director of Finance",
      background: "Honours Economics Specialist Option, Minor in Business",
      avatar: "/KarimN.jpg",
    },
    {
      name: "Eden Andoni",
      position: "Finance Executive",
      background: "BA Economics II",
      avatar: "/EdenA.jpg",
    },
    {
      name: "Izehinosen Iyambo",
      position: "Finance Executive",
      background: "Honours Economics Co-op",
      avatar: "/IzzyI.jpg",
    },
  ];

  return (
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
        <TeamSection
          title="Academic Team & First Year Representatives"
          members={academicTeam}
        />
        <TeamSection title="Marketing Team" members={marketingTeam} />
        <TeamSection title="Events Team" members={eventsTeam} />
        <TeamSection title="Finance Team" members={financeTeam} />
      </div>
    </div>
  );
}
