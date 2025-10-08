// pages/get-involved.js
import Head from "next/head";
import Image from "next/image";
import styles from "./GetInvolved.module.css";

export default function GetInvolved() {
  const opportunities = [
    {
      id: "mentor-program",
      title: "Mentorship Program 2025-2206",
      description:
        "Designed to connect upper-year Economics students (mentors) with first-year and second-year students (mentees) to foster guidance, academic support, and community within our department.",
      icon: "🤝",
      applicationLink:
        "https://docs.google.com/forms/d/1qa8C8fwnL5KeRJYGaN4W4VvB4ZxfwxPU6TYSOHl4hV0/viewform?edit_requested=true",
      requirements: null,
      responsibilities: null,
      idealTraits: null,
    },
    {
      id: "general-members",
      title: "General Members",
      description:
        "Want to engage with MES without taking on an executive role",
      icon: "👥",
      applicationLink: null,
      requirements: [
        "Signup via Google form at Club Fest at linktree",
        "Attend 1+ event/month or volunteer twice per term",
      ],
      responsibilities: [
        "Receive general event announcements via email",
        "Submit to MES Magazine or attend writing workshops",
        "Participate in mentorship or site visits",
        "Join internal learning sessions (e.g. networking 101, LinkedIn clinics)",
        "Help with event setup, logistics, tabling",
      ],
      idealTraits: [
        "Sociable and organized",
        "Passionate about creating community",
        "Interested in future exec involvement",
      ],
    },
    {
      id: "first-year-rep",
      title: "First Year Representative Program",
      description:
        "Introduce passionate new students to the society's structure, values, and initiatives. Reps shadow teams, participate in planning, and grow into execs in future years",
      icon: "📚",
      applicationLink: null,
      requirements: [
        "Attend monthly team meetings or sit in on team-specific planning sessions",
        "Shadow one or more teams based on interest",
        "Supports all teams",
        "Submit one passion project idea and execute with support",
      ],
      responsibilities: [
        "Support general events through tabling, classroom speaking, or setup/tear-down",
        "Receive mentorship and career support through MES internal programming",
        "Co-lead at least one small event or initiative by Winter term, with mentorship from an exec",
      ],
      benefits: [
        "Priority consideration for next year's exec roles",
        "Opportunities to meet upper-years and faculty",
      ],
      idealTraits: [
        "Enthusiastic and eager to learn",
        "Curious about economics, leadership, and teamwork",
        "Reliable, communicative, and coachable",
      ],
    },
    {
      id: "academic-exec",
      title: "Academic Executive (1-2 positions)",
      description:
        "Bring MES's educational and professional events to life. Own and execute programming that helps students thrive. For anyone interested in teaching, research, policy, or grad school",
      icon: "🎓",
      applicationLink: null,
      requirements: [
        "Reports to VP Academics",
        "Works with Marketing Team, Director of Events",
      ],
      responsibilities: [
        "Plan and lead study groups (especially for first-year econ courses)",
        "Organize EconTalks, workshops, or peer mentorship sessions",
        "Liaise with profs or TAs if needed",
        "Work with VP Academics to brainstorm new initiatives",
        "Co-host site visit or department-facing events",
        "Coordinate logistics with the Events team and marketing with VP Communications",
      ],
      idealTraits: [
        "Passionate about economics and helping others learn",
        "Organized and reliable",
      ],
    },
    {
      id: "events-exec",
      title: "Events Executive (2-4 positions)",
      description:
        "The backbone of MES programming, responsible for helping ideate, plan, and execute events both large and small. This role requires initiative, ownership, and proactive follow-through. Not 'helpers', but 'co-organizers'",
      icon: "📅",
      applicationLink: null,
      requirements: [
        "Reports to Director of Events",
        "Works with VP Operations, Finance Team, Marketing Team",
      ],
      responsibilities: [
        "Take point on at least 1 major event or 2–3 smaller initiatives",
        "Lead planning meetings, build event briefs, and assign tasks",
        "Handle space bookings, A/V requests, forms, catering, and setup/cleanup",
        "Create run-of-show documents to keep events smooth",
        "Provide timely info to marketing team (event titles, dates, RSVP links)",
        "Work with Finance Team to draft event budgets and respect them",
        "Track assigned tasks and deadlines using shared tools",
        "Draft General Member Email Content for upcoming events",
        "Ensure events include wellness considerations (timing, accessibility, content load)",
      ],
      idealTraits: [
        "Highly organized and takes initiative without waiting to be asked",
        "Strong communicator and calm under pressure",
        "Enjoys collaboration and community building",
      ],
    },
    {
      id: "finance-exec",
      title: "Finance Executive (2 Positions)",
      description:
        "The 'hands-on financial stewards' of MES, working closely with Director of Finance to manage records, assist with event budgeting, and track sponsorship-related deliverables. Ensure every dollar is accounted for and well-spent",
      icon: "💰",
      applicationLink: null,
      requirements: [
        "Reports to Director of Finance",
        "Works with VP Operations, Events Team, Sponsorship Outreach",
      ],
      responsibilities: [
        "Assist with building budgets for events in collaboration with the Events team",
        "Compare projected vs. actual spending after events and note variances",
        "Log expenses, upload receipts, and keep files organized",
        "Help prepare summaries for year-end financial reports",
        "Join meetings with sponsors or funding partners as needed",
        "Ensure deliverables (e.g. logo placement, social shoutouts) are documented and executed",
        "Step in to help other teams if a financial perspective is needed",
      ],
      idealTraits: [
        "Detail-oriented with basic financial literacy",
        "Enjoys clear documentation and process",
        "Proactive and deadline-driven",
      ],
    },
    {
      id: "marketing-exec",
      title: "Marketing Executive (2-4 positions)",
      description:
        "The 'creative engines' behind MES's public presence. Design posts, write captions, help manage social media platforms, and shape how we connect with students. Ideal for someone who wants to build a portfolio in communications, design, or digital media",
      icon: "📢",
      applicationLink: null,
      requirements: [
        "Reports to Director of Marketing",
        "Works with Media Design Coordinators, VP Communications",
      ],
      responsibilities: [
        "Create graphics and stories using Canva or other tools",
        "Draft engaging, on-brand captions tailored to our audience",
        "Help schedule and post content on Instagram and LinkedIn",
        "Submit final designs for approval to the Director of Marketing before posting",
        "Work with the Events and Academic teams to gather info for event promotions",
        "Assist with photography or live coverage during MES events",
        "Follow MES brand guidelines to ensure cohesive visual style",
        "Flag any off-brand content or communications for revision",
      ],
      idealTraits: [
        "Creative and responsive",
        "Comfortable with Canva and social media tools",
        "Strong attention to visual detail",
      ],
    },
    {
      id: "magazine-committee",
      title: "MES Magazine Committee",
      description:
        "Produces a student-led, editorial-style publication that blends economic commentary, research, opinion, and visual storytelling. This is a chance to uplift student voices, highlight faculty or alumni interviews, and spark curiosity beyond the classroom. Semi-autonomous, guided by Editor-in-Chief",
      icon: "✍️",
      applicationLink: null,
      requirements: [
        "Led by Editor-in-Chief",
        "Reports to VP Academics (for content alignment), VP Communications (for design/brand)",
      ],
      responsibilities: [
        "Submit 1–2 articles per term on economic topics, op-eds, interviews, or policy analyses",
        "Conduct basic research and cite sources responsibly",
        "Collaborate with Director of Marketing to format content using Adobe InDesign or Canva",
        "Ensure visuals are MES-branded and professional",
        "Prepare both digital and printable versions of each issue",
        "Help secure interviews with professors, alumni, or professionals",
        "Promote calls for submission and help expand readership",
      ],
      idealTraits: [
        "Passion for writing and economic storytelling",
        "Eye for editing and quality",
        "Excited about showcasing ideas in new formats",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Get Involved | McMaster Economics Society</title>
        <meta
          name="description"
          content="Join the McMaster Economics Society and become part of a vibrant community dedicated to economic education and professional development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Get Involved</h1>
            <p className={styles.subtitle}>
              Join the McMaster Economics Society and become part of a vibrant
              community dedicated to economic education, professional
              development, and meaningful connections.
            </p>
          </div>
        </header>

        {/* Alert Banner */}
        <div className={styles.alertBanner}>
          <div className={styles.alertContent}>
            <div className={styles.alertIcon}>❗❗</div>
            {/* ⚠️ for not hiring symbol */}
            <div className={styles.alertText}>
              <p>Please check out the current job openings at MES!</p>
              {/*We are not hiring at the moment, but please stay informed by
              following our social media: */}
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/mcmasterecon"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/mcmastereconomicssociety/"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className={styles.main}>
          <div className={styles.mainHeader}>
            <h2 className={styles.mainTitle}>
              Here are some of the opportunities available
            </h2>
            <p className={styles.mainSubtitle}>
              Whether you&apos;re looking to develop leadership skills, gain
              hands-on experience, or simply connect with like-minded peers,
              there&apos;s a place for you in MES.
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className={styles.opportunitiesGrid}>
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className={`${styles.opportunityCard} ${styles[opportunity.id]}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>{opportunity.icon}</div>
                  <div className={styles.cardTitleSection}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{opportunity.title}</h3>
                      {opportunity.applicationLink && (
                        <span className={styles.hiringLabel}>HIRING!</span>
                      )}
                    </div>
                    <p className={styles.cardDescription}>
                      {opportunity.description}
                    </p>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  {opportunity.requirements && (
                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>
                        <span className={styles.bullet}></span>
                        Requirements
                      </h4>
                      <ul className={styles.sectionList}>
                        {opportunity.requirements.map((req, idx) => (
                          <li key={idx} className={styles.listItem}>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {opportunity.responsibilities && (
                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>
                        <span className={styles.bullet}></span>
                        Key Responsibilities
                      </h4>
                      <ul className={styles.sectionList}>
                        {opportunity.responsibilities.map((resp, idx) => (
                          <li key={idx} className={styles.listItem}>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {opportunity.benefits && (
                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>
                        <span className={styles.bullet}></span>
                        Benefits
                      </h4>
                      <ul className={styles.sectionList}>
                        {opportunity.benefits.map((benefit, idx) => (
                          <li key={idx} className={styles.listItem}>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {opportunity.idealTraits && (
                    <div className={styles.section}>
                      <h4 className={styles.sectionTitle}>
                        <span className={styles.bullet}></span>
                        Ideal Traits
                      </h4>
                      <ul className={styles.sectionList}>
                        {opportunity.idealTraits.map((trait, idx) => (
                          <li key={idx} className={styles.listItem}>
                            {trait}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  {opportunity.applicationLink ? (
                    <a
                      href={opportunity.applicationLink}
                      className={styles.applyButtonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  ) : (
                    <button className={styles.applyButton} disabled>
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={styles.callToAction}>
            <h3 className={styles.ctaTitle}>Stay Connected</h3>
            <p className={styles.ctaDescription}>
              Don&apos;t miss out on future opportunities! Follow us on social
              media to stay updated on upcoming events, application periods, and
              exciting initiatives.
            </p>

            <div className={styles.ctaButtons}>
              <a
                href="https://instagram.com/mcmasterecon"
                className={styles.ctaButton + " " + styles.instagram}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/mcmastereconomicssociety/"
                className={styles.ctaButton + " " + styles.linkedin}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
