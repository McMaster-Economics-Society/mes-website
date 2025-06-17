import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Logo and Contact Info */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <Link href="/" className="logo">
                <Image
                  src="/icon1.png"
                  alt="McMaster Economics Society Logo"
                  width={40}
                  height={40}
                />
                <span className={styles.logoText}>MES</span>
              </Link>
            </div>
            <div className={styles.contactInfo}>
              <a className={styles.email} href="mailto:econ@themsss.com">
                econ@themsss.com
              </a>
              <div className={styles.address}>
                <p>1280 Main St W,</p>
                <p>Hamilton, ON, Canada</p>
                <p>L8S 4L8</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>About</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about">About MES</Link>
                </li>
                <li>
                  <Link href="/about/team">Our Team</Link>
                </li>
                <li>
                  <Link href="/about/newsroom">Newsroom</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Community</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/resources">MES Magazine</Link>
                </li>
                <li>
                  <Link href="/resources">Resources</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Career</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/get-involved">Get Involved</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <div className={styles.socialIcon}>
                <span>Instagram</span>
              </div>
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <div className={styles.socialIcon}>
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <hr className={styles.divider} />
          <p>
            © {new Date().getFullYear()} McMaster Economics Society. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
