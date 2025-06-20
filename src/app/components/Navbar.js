"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "#",
      dropdown: [
        { name: "About MES", href: "/about/about-mes" },
        { name: "Our Team", href: "/about/team" },
      ],
    },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "Events", href: "/events" },
    {
      name: "Resources",
      href: "#",
    },
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
              <li
                key={index}
                className={`nav-item ${item.dropdown ? "has-dropdown" : ""}`}
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.name)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <div className="nav-link-wrapper">
                  <Link href={item.href} className="nav-link">
                    {item.name}
                    {item.dropdown && <span className="dropdown-arrow">▼</span>}
                  </Link>

                  {/* Mobile dropdown toggle */}
                  {item.dropdown && (
                    <button
                      className="mobile-dropdown-toggle"
                      onClick={() => handleDropdownToggle(item.name)}
                      aria-label={`Toggle ${item.name} menu`}
                    >
                      ▼
                    </button>
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <ul
                    className={`dropdown-menu ${
                      activeDropdown === item.name ? "show" : ""
                    }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="dropdown-item">
                        <Link href={subItem.href} className="dropdown-link">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
