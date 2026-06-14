"use client";
import { useEffect, useState } from "react";
import PhotoSlot from "./PhotoSlot";
import MarqueeStrip from "./MarqueeStrip";

const PROMOS = [
  {
    id: 1,
    dcat: "disc bundle",
    span2: true,
    dark: true,
    soldOut: false,
    badges: [
      { type: "disc", label: "Diskon 20%" },
      { type: "bundle", label: "Bundle Terbaik" },
    ],
    tag: "paket terlaris — couple",
    name: "Paket Couple — Promo Batch",
    includes: [
      "2 boneka kustom",
      "2 nama selempang",
      "free kartu ucapan",
      "packaging premium",
    ],
    desc: "2 boneka wisuda kustom lengkap dengan toga, selempang bernama, dan detail wajah mirip orangnya.",
    origPrice: "Rp 320.000",
    newPrice: "Rp 256.000",
    save: "Hemat Rp 64.000",
    img: null,
    imgHint: "couple-promo.jpg\n800 × 500 px",
  },
  {
    id: 2,
    dcat: "disc single",
    span2: false,
    dark: false,
    soldOut: false,
    badges: [
      { type: "disc", label: "Diskon 10%" },
      { type: "new", label: "Early Bird" },
    ],
    tag: "single — early bird",
    name: "Boneka Wisuda Single",
    includes: [],
    desc: "1 boneka kustom lengkap. Cocok untuk diri sendiri atau sebagai kado wisudawan.",
    origPrice: "Rp 160.000",
    newPrice: "Rp 144.000",
    save: "Hemat Rp 16.000",
    img: null,
    imgHint: "single-promo.jpg\n400 × 500 px",
  },
  {
    id: 3,
    dcat: "bundle mini",
    span2: false,
    dark: false,
    soldOut: false,
    badges: [{ type: "bundle", label: "Bundle Souvenir" }],
    tag: "souvenir — 3 pcs",
    name: "Paket GK Mini × 3",
    includes: ["3 GK mini", "warna bebas"],
    desc: "3 gantungan kunci rajut mini — sempurna sebagai souvenir wisuda untuk keluarga.",
    origPrice: "Rp 195.000",
    newPrice: "Rp 165.000",
    save: "Hemat Rp 30.000",
    img: null,
    imgHint: "gk-3pcs.jpg\n400 × 400 px",
  },
  {
    id: 4,
    dcat: "disc bundle",
    span2: false,
    dark: true,
    soldOut: false,
    badges: [
      { type: "disc", label: "Diskon 15%" },
      { type: "limited", label: "Slot Terbatas" },
    ],
    tag: "paket kenangan lengkap",
    name: "Paket Kenangan Premium",
    includes: ["1 boneka kustom", "frame foto custom", "GK mini"],
    desc: "Hadiah wisuda paling berkesan dan lengkap. Hanya ada satu, hanya milikmu.",
    origPrice: "Rp 220.000",
    newPrice: "Rp 187.000",
    save: "Hemat Rp 33.000",
    img: null,
    imgHint: "premium-promo.jpg\n400 × 500 px",
  },
  {
    id: 5,
    dcat: "bundle",
    span2: false,
    dark: false,
    soldOut: false,
    badges: [{ type: "bundle", label: "Bundle Bestie" }],
    tag: "wisuda bareng 3 orang",
    name: "Paket Bestie Triple",
    includes: ["3 boneka kustom", "3 nama selempang"],
    desc: "3 boneka wisuda kustom untuk yang lulus bersama. Masing-masing unik!",
    origPrice: "Rp 480.000",
    newPrice: "Rp 408.000",
    save: "Hemat Rp 72.000",
    img: null,
    imgHint: "bestie-promo.jpg\n400 × 400 px",
  },
  {
    id: 6,
    dcat: "mini",
    span2: false,
    dark: false,
    soldOut: true,
    badges: [{ type: "sold", label: "Sold Out" }],
    tag: "hewan rajut — habis",
    name: "Boneka Hewan Mini",
    includes: [],
    desc: "Katak, babi, sapi, lebah. Sementara sold out — daftar waiting list.",
    origPrice: "Rp 80.000",
    newPrice: null,
    save: null,
    img: null,
    imgHint: "hewan-sold.jpg\n400 × 400 px",
  },
];
const DISC_FILTERS = [
  { key: "all", label: "Semua", hot: false },
  { key: "disc", label: "Diskon ✦", hot: true },
  { key: "bundle", label: "Bundling", hot: false },
  { key: "single", label: "Single", hot: false },
  { key: "mini", label: "Mini / GK", hot: false },
];
const MARQUEE_R = [
  "Promo Batch Pertama",
  "Hemat hingga 20%",
  "Slot Terbatas",
  "Free Kartu Ucapan",
];

export default function Discount() {
  const [activeDisc, setActiveDisc] = useState("all");
  const [timeLeft, setTimeLeft] = useState({
    d: "07",
    h: "14",
    m: "32",
    s: "08",
  });

  useEffect(() => {
    const end = new Date(
      Date.now() + 7 * 864e5 + 14 * 36e5 + 32 * 6e4 + 8 * 1e3,
    );
    const pad = (n) => String(n).padStart(2, "0");
    const timer = setInterval(() => {
      const diff = Math.max(0, end - Date.now());
      setTimeLeft({
        d: pad(Math.floor(diff / 864e5)),
        h: pad(Math.floor((diff % 864e5) / 36e5)),
        m: pad(Math.floor((diff % 36e5) / 6e4)),
        s: pad(Math.floor((diff % 6e4) / 1e3)),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openWA = (product) => {
    window.open(
      `https://wa.me/6282324646801?text=${encodeURIComponent(`Halo gumi! Saya mau pesan: ${product}. Bisa tolong bantu info lebih lanjut?`)}`,
      "_blank",
    );
  };
  const discFiltered = PROMOS.filter(
    (p) => activeDisc === "all" || p.dcat.includes(activeDisc),
  );

  return (
    <section className="disc-section reveal" id="diskon">
      <MarqueeStrip items={MARQUEE_R} variant="red" />
      <div className="disc-header">
        <div>
          <div className="disc-label">✦ Promo spesial wisuda 2025</div>
          <h2 className="disc-h">
            Harga <em>istimewa,</em>
            <br />
            kualitas tetap sama.
          </h2>
          <p className="disc-sub">
            Khusus batch pertama — setiap pesanan mendapat diskon spesial dan
            kartu ucapan gratis. Slot sangat terbatas.
          </p>
        </div>
        <div className="countdown">
          <div className="cd-lbl">Promo berakhir dalam</div>
          <div className="cd-boxes">
            {[
              { val: timeLeft.d, unit: "hari" },
              { val: timeLeft.h, unit: "jam" },
              { val: timeLeft.m, unit: "menit" },
              { val: timeLeft.s, unit: "detik" },
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <div className="cd-box">
                  <span className="cd-num">{item.val}</span>
                  <span className="cd-unit">{item.unit}</span>
                </div>
                {i < 3 && <span className="cd-sep">:</span>}
              </span>
            ))}
          </div>
          <div className="slot-bar">
            <div className="slot-lbl">
              <span>Slot tersisa</span>
              <span className="slot-count">3 dari 10</span>
            </div>
            <div className="slot-track">
              <div className="slot-fill" />
            </div>
            <div className="slot-note">
              70% slot sudah terisi — pesan sekarang!
            </div>
          </div>
        </div>
      </div>
      <div className="disc-filters">
        <span className="disc-filter-lbl">Filter:</span>
        {DISC_FILTERS.map((f) => (
          <button
            key={f.key}
            className={[
              "dftag",
              f.hot ? "hot" : "",
              activeDisc === f.key ? "active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActiveDisc(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="disc-grid-wrap">
        <div className="disc-grid">
          {discFiltered.map((p) => (
            <div
              key={p.id}
              className={[
                "dcard",
                p.dark ? "dark" : "",
                p.span2 ? "span2" : "",
                p.soldOut ? "sold" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="dbadges">
                {p.badges.map((b) => (
                  <span key={b.label} className={`dbadge ${b.type}`}>
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="dcard-visual">
                <PhotoSlot
                  src={p.img}
                  alt={p.name}
                  hint={p.imgHint}
                  className="dcard-img"
                />
              </div>
              <div className="dcard-meta">
                <div className="dcard-tag">{p.tag}</div>
                <div className="dcard-name">{p.name}</div>
                {p.includes.length > 0 && (
                  <div className="dincludes">
                    {p.includes.map((inc) => (
                      <span key={inc} className="dtag-inc">
                        {inc}
                      </span>
                    ))}
                  </div>
                )}
                <div className="dcard-desc">{p.desc}</div>
                <div className="dpricing">
                  {p.origPrice && <span className="dorig">{p.origPrice}</span>}
                  {p.newPrice && <span className="dnew">{p.newPrice}</span>}
                  {p.save && <span className="dsave">{p.save}</span>}
                </div>
                <button
                  className="dcard-btn"
                  disabled={p.soldOut}
                  onClick={() => !p.soldOut && openWA(p.name)}
                >
                  {p.soldOut ? "Sold out" : "Pesan sekarang →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="info-bar">
        {[
          "🎁 Free kartu ucapan setiap order",
          "⏱ Produksi 7–14 hari kerja",
          "🔒 DP 50% untuk kunci slot",
          "🧶 100% handmade dengan kasih",
        ].map((t) => (
          <div key={t} className="info-item">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
