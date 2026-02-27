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
    title: "Case Competition Foundations: Final Session",
    description:
      "Our final session focuses on strengthening your case pitch delivery through effective presentation, communication, and slide design strategies. \nCome prepared with questions: this session includes dedicated time for Q&A.",
    date: "February 25, 2026",
    eventDate: "2026-02-25",
    location:
      "LRW 5001 + Google Meets (Meeting link provided to all general members)",
    time: "5:30PM - 7:30PM",
    image: "/event-images/case-comp-final-session.png",
    imageAlt: "Case Competition Foundations: Final Session",
    link: "",
    buttonType: "rsvp",
    closed: true,
  },
  {
    id: 3,
    title: "Meet The Profs",
    description:
      "Our annual Meet the Profs is back! Come connect with the Economics faculty beyond your lectures. Whether you are exploring courses, careers, or just curious, this is your chance to chat, learn, and network in a relaxed setting.\n\n",
    date: "March 2, 2026",
    location: "MUSC 311",
    eventDate: "2026-03-02",
    time: "2:30PM - 4:00PM",
    image: "/event-images/recurring-events/Meet-the-prof.jpg",
    imageAlt: "Meet the Profs event",
    link: "https://www.bouncelife.com/events/699dd9fd972b00c9ae7ba0e4",
    buttonType: "bounce",
    closed: false,
  },
  {
    id: 5,
    title: "Case Study Competition",
    description:
      "❗Applications are due by February 15th at 11:59 PM EST. We review and accept on a rolling basis. APPLYING EARLIER IS BETTER! \n\nThe 2026 Case Study Competition will take place on March 13th, 2026, in Toronto, with this year's presenting sponsor: RBC PH&N Investment Council. \n\nThis event is open to undergraduate students from any university or program who have an interest in economics, public policy, consulting, or data-driven problem solving. \n\n Participants will act as policy analysts, receiving the full case package on the day of the competition. Teams will work under time pressure to analyze real economic data, develop recommendations, and present their solutions to a panel of high-profile judges, including industry professionals and academic experts. The competition also features panels, networking opportunities, and direct interaction with practitioners from economics, finance, and related fields. \n\nIn preparation for the competition, MES will host a series of training workshops covering key frameworks, presentation skills, and mock cases. These workshops are optional for non-McMaster students but will be available to all accepted participants. This event provides students with hands-on experience in economic problem-solving, public policy evaluation, and professional presentation skills in a competitive, supportive environment.",
    location: "TBD",
    date: "March 13, 2026",
    eventDate: "2026-03-13",
    time: "11:00AM - 3:00PM",
    image: "/event-images/CSC Horizontal Version.png",
    imageAlt: "Case Study Competition",
    link: "",
    buttonType: "apply",
    closed: false,
  },
  {
    id: 4,
    title: "Behavioural Economics Game Day with Prof Tasos",
    description: "N/A",
    location: "TBD",
    date: "March 24, 2026",
    eventDate: "2026-03-24",
    time: "6:00PM",
    image: "/MES_black.png",
    imageAlt: "Behavioural Economics Game Day with Prof Tasos",
    link: "",
    buttonType: "rsvp",
    closed: true,
  },
];

export function getUpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return allEvents.filter(
    (event) => new Date(event.eventDate + "T23:59:59") >= today,
  );
}

export function getPastEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return allEvents.filter(
    (event) => new Date(event.eventDate + "T23:59:59") < today,
  );
}

export { allEvents };
