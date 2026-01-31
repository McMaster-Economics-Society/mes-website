"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileMenu.module.css";
import React, { useEffect } from "react";

export default function MobileMenu({ isOpen, onToggle, onClose }) {
  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.width = "100%";
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - Fixed Position */}
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={onToggle}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        {/* Menu Header */}
        <div className={styles.menuHeader}>
          <div className={styles.logo}>
            <Image
              src="/icon1.png"
              alt="McMaster Economics Society Logo"
              width={50}
              height={50}
            />
            <span className={styles.logoText}>MES</span>
          </div>
        </div>

        {/* Menu Content */}
        <div className={styles.menuContent}>
          {/* About with Dropdown - Default Expanded */}
          <div className={styles.navItem}>
            <input
              type="checkbox"
              id="about-toggle"
              className={styles.dropdownToggle}
              defaultChecked={true}
            />
            <label htmlFor="about-toggle" className={styles.navLink}>
              <span>About</span>
              <div className={styles.dropdownArrow}></div>
            </label>
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>
                <Link
                  href="/about/about-mes"
                  className={styles.dropdownLink}
                  onClick={onClose}
                >
                  About MES
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link
                  href="/about/team"
                  className={styles.dropdownLink}
                  onClick={onClose}
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>

          {/* Other Navigation Items */}
          <div className={styles.navItem}>
            <Link
              href="/get-involved"
              className={styles.navLink}
              onClick={onClose}
            >
              <span>Get Involved</span>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link
              href="/sponsorship"
              className={styles.navLink}
              onClick={onClose}
            >
              <span>Sponsorship</span>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/events" className={styles.navLink} onClick={onClose}>
              <span>Events</span>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/magazine" className={styles.navLink} onClick={onClose}>
              <span>Magazine</span>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link
              href="/resources"
              className={styles.navLink}
              onClick={onClose}
            >
              <span>Resources</span>
            </Link>
          </div>
        </div>

        {/* Contact Button */}
        <div className={styles.contactSection}>
          <Link href="/contact" className={styles.contactBtn} onClick={onClose}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
    </>
  );
}
