"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/about-mes" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/icon1.png"
            alt="McMasterEconSociety Logo"
            width={50}
            height={50}
          />
          <span className="logo-text">MES</span>
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>

        <div className="nav-center">
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/contact" className="contact-btn">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
