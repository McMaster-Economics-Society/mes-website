"use client";
import { useEffect, useState } from "react";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    // Load the OpnForm script
    const script = document.createElement("script");
    script.src = "https://opnform.com/widgets/iframe.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      // Initialize the embedded form when script loads
      if (window.initEmbed) {
        window.initEmbed("contact-form-x3g55v");
      }
    };
    document.head.appendChild(script);
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I join the McMaster Economics Society?",
      answer:
        "Anyone interested in economics can join! We welcome both Economics majors and students from other programs. Check out our Get Involved page or contact us through the form above to learn about membership and upcoming events.",
    },
    {
      question: "Do I need to be an Economics student to participate?",
      answer:
        "Not at all! While many of our members are Economics students, we welcome anyone with an interest in economics, business, finance, or related fields. Our events and activities are designed to be accessible to all levels.",
    },
    {
      question: "What types of events do you organize?",
      answer:
        "We host a variety of events including guest speaker sessions, networking events, career workshops, study groups, social gatherings, and academic competitions. Check our Events page for the latest schedule.",
    },
    {
      question: "How often do you meet?",
      answer:
        "We typically hold events weekly during the academic year, with a mix of educational, professional, and social activities. Meeting frequency may vary based on the semester and special events.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "Most of our events are free for McMaster students. Some special events or workshops may have a small fee to cover costs. We always announce any fees in advance and strive to keep activities accessible.",
    },
    {
      question: "How can I stay updated on upcoming events?",
      answer:
        "Follow us on our social media channels, join our mailing list through the contact form, or check our website regularly. We also post announcements on McMaster's student portals and around campus.",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Get in touch with the McMaster Economics Society
          </p>
        </div>
        {/* Centered Contact Form */}
        <div className={styles.contactForm}>
          <h2 className={styles.sectionTitle}>Send us a Message</h2>
          <p className={styles.formDescription}>
            Have a question or want to get involved? Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <div className={styles.formContainer}>
            <iframe
              className={styles.contactIframe}
              id="contact-form-x3g55v"
              src="https://opnform.com/forms/contact-form-x3g55v"
              title="Contact Form"
            />
          </div>
        </div>
        {/* FAQ Section */}
        <div className={styles.faqSection} id="faq">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqItems.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqButton}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <span
                    className={`${styles.faqIcon} ${openFAQ === index ? styles.faqIconOpen : ""}`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswerContainer} ${openFAQ === index ? styles.faqAnswerOpen : ""}`}
                >
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information Section */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h3>Quick Response</h3>
            <p>
              We typically respond to all inquiries within 24-48 hours during
              business days.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3>Join Our Events</h3>
            <p>
              Looking to attend our next event? Check out our Events page for
              upcoming activities.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3>Get Involved</h3>
            <p>
              Interested in joining our team? Visit our Get Involved page to
              learn about opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
