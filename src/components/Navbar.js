"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      if (window.innerWidth > 900) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <a href="#beranda" className="nav-logo">
        <span className="nav-logo-text">gumi</span>
      </a>
      <div className="nav-links">
        <a href="#katalog">Katalog</a>
        <a href="#proses">Proses</a>
        <a href="#filosofi">Filosofi</a>
        <a href="#diskon">Diskon</a>
      </div>
      <a href="#diskon" className="nav-cta">
        Pesan PO →
      </a>
      <button
        className={`nav-burger ${isMobileOpen ? "open" : ""}`}
        onClick={() => setIsMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`nav-mobile ${isMobileOpen ? "open" : ""}`}>
        <a href="#katalog" onClick={closeMobile}>
          Katalog
        </a>
        <a href="#proses" onClick={closeMobile}>
          Proses
        </a>
        <a href="#filosofi" onClick={closeMobile}>
          Filosofi
        </a>
        <a href="#diskon" onClick={closeMobile}>
          Diskon
        </a>
        <a href="#diskon" className="mob-cta" onClick={closeMobile}>
          Pesan PO →
        </a>
      </div>
    </nav>
  );
}
