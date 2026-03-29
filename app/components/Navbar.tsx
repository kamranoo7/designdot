"use client";

import "../style.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbardibba">

        <div className="logo">
          <div className="hexlogo">
            <img
              src="/navbar.png"
              alt="Logo"
              className="logo-icon"
            />
          </div>
        </div>

        {/* Desktop nav */}
        <div className="navright">
          <nav className="navmenu">
            <Link href="#">WHO WE SERVE</Link>
            <Link href="#">SOLUTIONS</Link>
            <Link href="#">RESOURCES</Link>
            <Link href="#">ABOUT US</Link>
            <Link href="#">CONTACT US</Link>
          </nav>

          <div className="navact">
            <button className="search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            <div className="select">
              <span>IND</span>
              <span className="dwn">▼</span>
            </div>

            <div className="select">
              <span>ENGLISH</span>
              <span className="dwn">▼</span>
            </div>
          </div>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobilemenu ${menuOpen ? "mobilemenu--open" : ""}`}>
        <nav className="mobilenav">
          <Link href="#" onClick={() => setMenuOpen(false)}>WHO WE SERVE</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>SOLUTIONS</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>RESOURCES</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        </nav>
        <div className="mobilemenu-footer">
          <div className="select">
            <span>IND</span>
            <span className="dwn">▼</span>
          </div>
          <div className="select">
            <span>ENGLISH</span>
            <span className="dwn">▼</span>
          </div>
        </div>
      </div>

    </header>
  );
}