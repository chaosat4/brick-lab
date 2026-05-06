'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className={`${styles.main} ${mounted ? styles.mounted : ''}`}>
      {/* Paper texture & blueprint grid */}
      <div className={styles.paper} aria-hidden />
      <div className={styles.grid} aria-hidden />

      {/* Page registration marks */}
      <span className={`${styles.regMark} ${styles.regTL}`} aria-hidden>+</span>
      <span className={`${styles.regMark} ${styles.regTR}`} aria-hidden>+</span>
      <span className={`${styles.regMark} ${styles.regBL}`} aria-hidden>+</span>
      <span className={`${styles.regMark} ${styles.regBR}`} aria-hidden>+</span>

      {/* Top meta strip */}
      <header className={styles.topBar}>
        <div className={styles.brandMark}>
          <Image
            src="/bricks_lab_logo.png"
            alt="Bricks Lab"
            width={140}
            height={100}
            className={styles.logo}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Bricks Lab</span>
            <span className={styles.brandTag}>HARDWARE × SOFTWARE / STUDIO</span>
          </div>
        </div>

        <div className={styles.topMeta}>
          <span>N°—01</span>
          <span className={styles.diamond} />
          <span>NEW DELHI / IND</span>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.heroLabel}>
          <span className={styles.tick} /> A WORKING LAB FOR BUILDERS
        </span>

        <h1 className={styles.tagline}>
          <span className={styles.tlLine}>turning&nbsp;ideas</span>
          <span className={styles.tlLine}>
            into&nbsp;
            <span className={styles.realityWrap}>
              <span className={styles.reality}>reality</span>
              <svg
                className={styles.circleSVG}
                viewBox="0 0 360 140"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M 22 72 C 18 30, 110 14, 184 14 C 270 16, 350 38, 348 76 C 346 112, 248 132, 162 128 C 82 124, 12 100, 24 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            <span className={styles.period}>.</span>
          </span>
        </h1>

        <div className={styles.heroFoot}>
          <span className={styles.arrow}>↳</span>
          <p className={styles.subtagline}>
            End-to-end hardware prototyping and custom software solutions —
            from a single sketch to a shipped product.
          </p>
        </div>

        {/* Vertical dimension line decoration */}
        <div className={styles.dimensionLine} aria-hidden>
          <span className={styles.dimCap}>▲</span>
          <span className={styles.dimLabel}>HW · SW</span>
          <span className={styles.dimCap}>▼</span>
        </div>
      </section>

      {/* Service blocks */}
      <section className={styles.services} aria-label="Services">
        {/* 01 — HARDWARE */}
        <article className={styles.svc}>
          <span className={`${styles.svcCorner} ${styles.cTL}`} aria-hidden>+</span>
          <span className={`${styles.svcCorner} ${styles.cTR}`} aria-hidden>+</span>
          <span className={`${styles.svcCorner} ${styles.cBL}`} aria-hidden>+</span>
          <span className={`${styles.svcCorner} ${styles.cBR}`} aria-hidden>+</span>

          <header className={styles.svcHead}>
            <span className={styles.svcIndex}>01</span>
            <div className={styles.svcTitleGroup}>
              <h2 className={styles.svcTitle}>Hardware</h2>
              <span className={styles.svcSub}>3D Printing &nbsp;/&nbsp; Prototyping</span>
            </div>
          </header>

          <ul className={styles.svcList}>
            <li>
              <span className={styles.lineNo}>a.</span>
              <div className={styles.lineBody}>
                <strong>Fast Prototyping</strong>
                <span>Iterate designs in days, not weeks.</span>
              </div>
            </li>
            <li>
              <span className={styles.lineNo}>b.</span>
              <div className={styles.lineBody}>
                <strong>MVP Builds</strong>
                <span>From concept to working product.</span>
              </div>
            </li>
            <li>
              <span className={styles.lineNo}>c.</span>
              <div className={styles.lineBody}>
                <strong>Quick Turnaround</strong>
                <span>Express delivery on rush jobs.</span>
              </div>
            </li>
            <li>
              <span className={styles.lineNo}>d.</span>
              <div className={styles.lineBody}>
                <strong>Material &amp; Color Support</strong>
                <span>PLA · ABS · PETG · TPU and more.</span>
              </div>
            </li>
          </ul>

          <footer className={styles.svcFoot}>
            <span>FILE · BL-HW.001</span>
            <span>SHEET 01 / 02</span>
          </footer>
        </article>

        {/* 02 — SOFTWARE */}
        <article className={styles.svc}>
          <span className={`${styles.svcCorner} ${styles.cTL}`} aria-hidden>+</span>
          <span className={`${styles.svcCorner} ${styles.cTR}`} aria-hidden>+</span>
          <span className={`${styles.svcCorner} ${styles.cBL}`} aria-hidden>+</span>
          <span className={`${styles.svcCorner} ${styles.cBR}`} aria-hidden>+</span>

          <header className={styles.svcHead}>
            <span className={styles.svcIndex}>02</span>
            <div className={styles.svcTitleGroup}>
              <h2 className={styles.svcTitle}>Software</h2>
              <span className={styles.svcSub}>Personal &nbsp;/&nbsp; SMB &nbsp;/&nbsp; Enterprise</span>
            </div>
          </header>

          <ul className={styles.svcList}>
            <li>
              <span className={styles.lineNo}>a.</span>
              <div className={styles.lineBody}>
                <strong>Web &amp; Native Apps</strong>
                <span>Android · iOS · Windows · Linux.</span>
              </div>
            </li>
            <li>
              <span className={styles.lineNo}>b.</span>
              <div className={styles.lineBody}>
                <strong>E-commerce &amp; ERP</strong>
                <span>Storefronts and business systems.</span>
              </div>
            </li>
            <li>
              <span className={styles.lineNo}>c.</span>
              <div className={styles.lineBody}>
                <strong>IoT &amp; AI Specialized</strong>
                <span>Connected devices and intelligent automation.</span>
              </div>
            </li>
            <li>
              <span className={styles.lineNo}>d.</span>
              <div className={styles.lineBody}>
                <strong>Support &amp; Consultation</strong>
                <span>Technical guidance from idea to launch.</span>
              </div>
            </li>
          </ul>

          <footer className={styles.svcFoot}>
            <span>FILE · BL-SW.002</span>
            <span>SHEET 02 / 02</span>
          </footer>
        </article>
      </section>

      {/* Marquee ticker */}
      <div className={styles.tickerWrap} aria-hidden>
        <div className={styles.ticker}>
          {Array.from({ length: 2 }).map((_, i) => (
            <div className={styles.tickerRow} key={i}>
              <span>PROTOTYPE</span><span className={styles.sep}>◆</span>
              <span>ITERATE</span><span className={styles.sep}>◆</span>
              <span>SHIP</span><span className={styles.sep}>◆</span>
              <span>3D PRINT</span><span className={styles.sep}>◆</span>
              <span>WEB</span><span className={styles.sep}>◆</span>
              <span>NATIVE APPS</span><span className={styles.sep}>◆</span>
              <span>E-COMMERCE</span><span className={styles.sep}>◆</span>
              <span>ERP</span><span className={styles.sep}>◆</span>
              <span>IOT</span><span className={styles.sep}>◆</span>
              <span>AI</span><span className={styles.sep}>◆</span>
              <span>BRICKS LAB</span><span className={styles.sep}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section className={styles.contact}>
        <div className={styles.contactLeft}>
          <span className={styles.locDot} />
          <div>
            <span className={styles.contactLbl}>LOCATION</span>
            <span className={styles.contactVal}>New Delhi · serving worldwide</span>
          </div>
        </div>

        <div className={styles.contactBtns}>
          <a
            href="mailto:vishal@brickslab.in"
            className={styles.cta}
          >
            <span className={styles.ctaArrow}>→</span>
            <span className={styles.ctaTxt}>
              <span className={styles.ctaLbl}>WRITE TO US</span>
              <span className={styles.ctaVal}>vishal@brickslab.in</span>
            </span>
          </a>
        </div>
      </section>

      {/* Title block / footer */}
      <footer className={styles.titleBlock}>
        <div className={styles.tbCol}>
          <span className={styles.tbLbl}>DRAWING</span>
          <span className={styles.tbVal}>BRICKS LAB / LANDING</span>
        </div>
        <div className={styles.tbCol}>
          <span className={styles.tbLbl}>REV</span>
          <span className={styles.tbVal}>02 — 2026.05</span>
        </div>
        <div className={styles.tbCol}>
          <span className={styles.tbLbl}>SCALE</span>
          <span className={styles.tbVal}>1 : 1</span>
        </div>
        <div className={styles.tbCol}>
          <span className={styles.tbLbl}>©</span>
          <span className={styles.tbVal}>2026 BRICKS LAB</span>
        </div>
      </footer>
    </main>
  );
}
