"use client";

import "../style.css";
import Link from "next/link";

export default function Navbar() {
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

      </div>
    </header>
  );
}