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
              <div className={styles.contactItem}>
                <Image
                  src="/email-icon.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className={styles.contactIcon}
                />
                <a className={styles.email} href="mailto:econ@themsss.com">
                  econ@themsss.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <Image
                  src="/location-icon.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className={styles.contactIcon}
                />
                <div className={styles.address}>
                  <p>1280 Main St W,</p>
                  <p>Hamilton, ON, Canada</p>
                  <p>L8S 4L8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>About</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about/about-mes" className={styles.linkWithIcon}>
                    <span>About MES</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/about/team" className={styles.linkWithIcon}>
                    <span>Our Team</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Community</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/events" className={styles.linkWithIcon}>
                    <span>Events</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/magazine" className={styles.linkWithIcon}>
                    <span>MES Magazine</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className={styles.linkWithIcon}>
                    <span>Resources</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Career</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/get-involved" className={styles.linkWithIcon}>
                    <span>Get Involved</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.linkList}>
                {/* <li>
                  <Link href="#" className={styles.linkWithIcon}>
                    <span>FAQs</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact" className={styles.linkWithIcon}>
                    <span>Contact Us</span>
                    <Image
                      width={16}
                      height={16}
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      className={styles.linkIcon}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright with Social Media */}
        <div className={styles.copyright}>
          <hr className={styles.divider} />
          <div className={styles.copyrightContent}>
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} McMaster Economics Society. All
              Rights Reserved.
            </p>

            {/* Social Media moved here */}
            <div className={styles.socialSection}>
              <a
                href="https://www.instagram.com/mcmasterecon"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <div className={styles.socialIcon}>
                  <Image
                    src="/square-instagram-brands.svg"
                    width={30}
                    height={30}
                    alt="Instagram"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/mcmastereconomicssociety/"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <div className={styles.socialIcon}>
                  <Image
                    src="/linkedin-in-brands.svg"
                    width={30}
                    height={30}
                    alt="LinkedIn"
                  />
                </div>
              </a>
              <a
                href="https://economics.mcmaster.ca/"
                className={styles.socialLink}
                aria-label="McMaster Economics Social Sciences - Department of Economics"
              >
                <div className={styles.socialIcon}>
                  <Image
                    src="/dept-icon.png"
                    width={30}
                    height={30}
                    alt="Globe Icon image that represents McMaster Economics Social Sciences"
                  />
                </div>
              </a>
              <a
                href="https://www.bouncelife.com/organizations/68941c23ea2af129e14211fa"
                className={styles.socialLink}
                aria-label="Bounce Life"
              >
                <div className={styles.socialIcon}>
                  <Image
                    src="/bounce-life-icon.png"
                    width={45}
                    height={45}
                    alt="Bounce Life"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
