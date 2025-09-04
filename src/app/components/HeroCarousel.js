"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroCarousel.module.css";

const HeroCarousel = () => {
  // Replace these with your actual image paths
  const images = [
    "/hero-carousel/MEETTHEPROFS-11.jpg",
    "/hero-carousel/MEETTHEPROFS-23.jpg",
    "/hero-carousel/MEETTHEPROFS-29.jpg",
    "/hero-carousel/MEETTHEPROFS-37.jpg",
    "/hero-carousel/MESxPHILSOC-3.jpg",
    "/hero-carousel/MESxPHILSOC-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className={styles.heroSection}>
      {/* Carousel Container */}
      <div className={styles.carouselContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay for better text readability */}
        <div className={styles.overlay} />
      </div>

      {/* Hero Content - same as your original */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroWelcome}>Welcome</span>
          <span className={styles.heroTo}>to</span>
          <span className={styles.heroMain}>McMaster Economics Society</span>
        </h1>
        <Link href="/get-involved" className={styles.heroCta}>
          We are hiring!
        </Link>
        {/* Below is for non-hiring status*/}
        {/* <Link href="/about/about-mes" className={styles.heroCta}>
          Learn more
        </Link>*/}
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.navArrow} ${styles.prev}`}
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={`${styles.navArrow} ${styles.next}`}
        onClick={goToNext}
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className={styles.dotIndicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
