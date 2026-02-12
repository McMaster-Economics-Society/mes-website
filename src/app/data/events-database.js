const allEvents = [
  {
    id: 1,
    title: "The Rational Choice's Magazine Launch Party",
    description:
      "Please join us at the launch party for the 1st issue of The Rational Choice!!",
    location: "LRW 1003",
    date: "February 2, 2026",
    eventDate: "2026-02-02",
    time: "6:00PM - 8:00PM",
    image: "/event-images/launch_party_event.png",
    imageAlt: "Career fair with students and employers",
    link: "https://forms.gle/9V5fZqBJ3xrPxxZ68",
    buttonType: "rsvp",
    closed: true,
  },
  {
    id: 2,
    title: "MES X WSO Q&A Session",
    description:
      "Join an exclusive Q&A with Wall Street Oasis founder Patrick Curtis and gain insider access to game-changing career resources! Limited to just 50 seats, RSVP now!",
    location: "Exclusive Zoom Session",
    date: "February 5, 2026",
    eventDate: "2026-02-05",
    time: "2:00PM",
    image: "/event-images/wso-event.png",
    imageAlt: "Q&A session with Wall Street Oasis founder",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfT9Bqi_bzficpWx31VMl5Eegru6R8B8jryjQgH-Hc-FwAQMA/viewform",
    buttonType: "rsvp",
    closed: true,
  },
  {
    id: 3,
    title: "Case Study Competition",
    description:
      "❗Applications are due by February 15th at 11:59 PM EST. We review and accept on a rolling basis. APPLYING EARLIER IS BETTER! \n\nThe 2026 Case Study Competition will take place on March 13th, 2026, in Toronto, with this year's presenting sponsor: RBC PH&N Investment Council. \n\nThis event is open to undergraduate students from any university or program who have an interest in economics, public policy, consulting, or data-driven problem solving. \n\n Participants will act as policy analysts, receiving the full case package on the day of the competition. Teams will work under time pressure to analyze real economic data, develop recommendations, and present their solutions to a panel of high-profile judges, including industry professionals and academic experts. The competition also features panels, networking opportunities, and direct interaction with practitioners from economics, finance, and related fields. \n\nIn preparation for the competition, MES will host a series of training workshops covering key frameworks, presentation skills, and mock cases. These workshops are optional for non-McMaster students but will be available to all accepted participants. This event provides students with hands-on experience in economic problem-solving, public policy evaluation, and professional presentation skills in a competitive, supportive environment.",
    location: "TBD",
    date: "March 13, 2026",
    eventDate: "2026-03-13",
    time: "11:00AM - 3:00PM",
    image: "/event-images/case-study-event.png",
    imageAlt: "Case Study Competition",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeW8pu3X9oiqctkzPZAhRUEe1i4JY6f-LYQ86u2REcln3-KzQ/viewform",
    buttonType: "apply",
    closed: false,
  },
];

// Filter events at build time based on the current date
const today = new Date();
today.setHours(0, 0, 0, 0);

export const upcomingEvents = allEvents.filter(
  (event) => new Date(event.eventDate + "T23:59:59") >= today,
);

export const pastEvents = allEvents.filter(
  (event) => new Date(event.eventDate + "T23:59:59") < today,
);

export { allEvents };
