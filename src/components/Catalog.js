"use client";
import { useState } from "react";
import PhotoSlot from "./PhotoSlot";

const PRODUCTS = [
  {
    id: 1,
    cat: "single",
    tag: "✦ paling diminati",
    name: "Boneka Wisuda Single",
    desc: "1 boneka kustom mirip wisudawan...",
    price: "Rp 160.000",
    featured: true,
    dark: true,
    img: "/images/GummiLogoFont.png",
    imgHint: "boneka-single.jpg\n600 × 700 px",
  },
  {
    id: 2,
    cat: "bundle",
    tag: "untuk berdua",
    name: "Paket Couple",
    desc: "2 boneka kustom — cocok untuk pasangan atau bestie yang wisuda bareng.",
    price: "Rp 290.000",
    featured: false,
    dark: false,
    img: null,
    imgHint: "boneka-couple.jpg\n400 × 400 px",
  },
  {
    id: 3,
    cat: "mini",
    tag: "souvenir wisuda",
    name: "Gantungan Kunci Mini",
    desc: "Versi mini lucu, sempurna sebagai souvenir wisuda untuk keluarga.",
    price: "Rp 65.000",
    featured: false,
    dark: false,
    img: null,
    imgHint: "gk-mini.jpg\n400 × 400 px",
  },
  {
    id: 4,
    cat: "bundle",
    tag: "paket lengkap",
    name: "Paket Kenangan Premium",
    desc: "Boneka wisuda + frame foto custom + gantungan kunci mini. Kado paling berkesan.",
    price: "Rp 220.000",
    featured: false,
    dark: false,
    img: null,
    imgHint: "paket-premium.jpg\n400 × 400 px",
  },
  {
    id: 5,
    cat: "bundle",
    tag: "wisuda bareng 3 orang",
    name: "Paket Bestie Triple",
    desc: "3 boneka wisuda kustom untuk yang lulus bersama. Masing-masing unik!",
    price: "Rp 408.000",
    featured: false,
    dark: false,
    img: null,
    imgHint: "bestie-triple.jpg\n400 × 400 px",
  },
  {
    id: 6,
    cat: "mini",
    tag: "hewan rajut",
    name: "Boneka Hewan Mini",
    desc: "Katak, babi, sapi, lebah — karakter hewan rajut gemoy non-wisuda.",
    price: "Rp 80.000",
    featured: false,
    dark: false,
    img: null,
    imgHint: "hewan-mini.jpg\n400 × 400 px",
  },
];
const CAT_FILTERS = ["all", "single", "bundle", "mini"];

export default function Catalog() {
  const [activeCat, setActiveCat] = useState("all");
  const openWA = (product) => {
    window.open(
      `https://wa.me/6282324646801?text=${encodeURIComponent(`Halo gumi! Saya mau pesan: ${product}. Bisa tolong bantu info lebih lanjut?`)}`,
      "_blank",
    );
  };
  const catFiltered = PRODUCTS.filter(
    (p) => activeCat === "all" || p.cat === activeCat,
  );

  return (
    <section className="catalog reveal" id="katalog">
      <div className="cat-header">
        <div>
          <div className="sec-label">Koleksi produk</div>
          <h2 className="sec-h">
            Pilih yang paling
            <br />
            mencerminkanmu.
          </h2>
        </div>
        <div className="cat-filters">
          {CAT_FILTERS.map((cat) => (
            <button
              key={cat}
              className={`cat-filter ${activeCat === cat ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat === "all"
                ? "Semua"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="cat-grid">
        {catFiltered.map((p) => (
          <div
            key={p.id}
            className={[
              "pcard",
              p.dark ? "dark" : "",
              p.featured ? "featured" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="pcard-visual">
              <PhotoSlot
                src={p.img}
                alt={p.name}
                hint={p.imgHint}
                className="pcard-img"
              />
            </div>
            <div className="pcard-meta">
              <div className="pcard-tag">{p.tag}</div>
              <div className="pcard-name">{p.name}</div>
              <div className="pcard-desc">{p.desc}</div>
              <div className="pcard-foot">
                <span className="pcard-price">{p.price}</span>
                <button className="pcard-btn" onClick={() => openWA(p.name)}>
                  Pesan →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
