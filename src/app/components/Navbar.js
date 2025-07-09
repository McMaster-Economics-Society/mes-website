"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // Import the mobile menu component

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

        {/* Mobile Menu Component */}
        <div className="mobile-menu-container">
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
            onClose={closeMobileMenu}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-center">
          <ul className="nav-links">
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
                    {item.dropdown && (
                      <span className="dropdown-arrow">
                        <Image
                          src="/chevron-down.svg"
                          width={15}
                          height={15}
                          alt="Chevron Down"
                        />
                      </span>
                    )}
                  </Link>
                </div>

                {/* Desktop Dropdown Menu */}
                {item.dropdown && (
                  <ul
                    className={`dropdown-menu ${
                      activeDropdown === item.name ? "show" : ""
                    }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="dropdown-item">
                        <Link
                          href={subItem.href}
                          className="dropdown-link"
                          prefetch={subItem.name === "About MES"} // Next.js will prefetch this page
                        >
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
