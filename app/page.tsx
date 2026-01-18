'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className={styles.main}>
      {/* Animated Background */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGrid}></div>
      
      {/* Floating 3D Elements */}
      <div className={styles.floatingElements}>
        <div className={`${styles.floatingCube} ${styles.cube1}`}></div>
        <div className={`${styles.floatingCube} ${styles.cube2}`}></div>
        <div className={`${styles.floatingCube} ${styles.cube3}`}></div>
      </div>

      {/* Main Content */}
      <div className={`${styles.content} ${mounted ? styles.visible : ''}`}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/bricks_lab_logo.png"
            alt="Bricks Lab Logo"
            width={280}
            height={200}
            className={styles.logo}
            priority
          />
        </div>

        {/* Coming Soon Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Coming Soon
        </div>

        {/* Tagline */}
        <h1 className={styles.tagline}>
          Turning Ideas into <span className={styles.highlight}>3D Reality</span>
        </h1>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span>High-Quality Prints</span>
          </div>
          <div className={styles.divider}>•</div>
          <div className={styles.feature}>
            <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            <span>Custom Builds</span>
          </div>
        </div>

        {/* Location */}
        <div className={styles.location}>
          <svg className={styles.locationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Delhi Based</span>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Get in touch for orders & inquiries</p>
          
          <div className={styles.contactButtons}>
            {/* Instagram Button */}
            <a 
              href="https://www.instagram.com/lab.bricks/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactBtn} ${styles.instagramBtn}`}
            >
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@lab.bricks</span>
            </a>

            {/* Email Button */}
            <a 
              href="mailto:info@brickslab.in"
              className={`${styles.contactBtn} ${styles.emailBtn}`}
            >
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>info@brickslab.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Bricks Lab. All rights reserved.</p>
      </footer>
    </main>
  );
}
