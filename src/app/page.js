"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MarqueeStrip from "../components/MarqueeStrip";
import Philosophy from "../components/Philosophy";
import Catalog from "../components/Catalog";
import Process from "../components/Process";
import Discount from "../components/Discount";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const MARQUEE_1 = [
  "Custom Amigurumi",
  "Boneka Rajut Custom",
  "Handmade Malang",
  "Rajut dengan Kasih",
  "Boneka Unik",
];
const MARQUEE_2 = [
  "Custom Amigurumi",
  "Boneka Rajut Custom",
  "Handmade Malang",
  "Rajut dengan Kasih",
  "Boneka Kustom",
  "Handmade Gift",
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeStrip items={MARQUEE_1} variant="matcha" />
      <Philosophy />
      <Catalog />
      <Process />
      <MarqueeStrip items={MARQUEE_2} variant="dark" />
      <Discount />
      <Testimonials />
      <Footer />
    </>
  );
}
