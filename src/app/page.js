"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 1, cat: "single", tag: "✦ paling diminati",
    name: "Boneka Wisuda Single",
    desc: "1 boneka kustom mirip wisudawan — toga, kerudung atau rambut, dan selempang bernama. Semua detail disesuaikan.",
    price: "Rp 160.000", featured: true, dark: true,
    img: null, imgHint: "boneka-single.jpg\n600 × 700 px",
  },
  {
    id: 2, cat: "bundle", tag: "untuk berdua",
    name: "Paket Couple",
    desc: "2 boneka kustom — cocok untuk pasangan atau bestie yang wisuda bareng.",
    price: "Rp 290.000", featured: false, dark: false,
    img: null, imgHint: "boneka-couple.jpg\n400 × 400 px",
  },
  {
    id: 3, cat: "mini", tag: "souvenir wisuda",
    name: "Gantungan Kunci Mini",
    desc: "Versi mini lucu, sempurna sebagai souvenir wisuda untuk keluarga.",
    price: "Rp 65.000", featured: false, dark: false,
    img: null, imgHint: "gk-mini.jpg\n400 × 400 px",
  },
  {
    id: 4, cat: "bundle", tag: "paket lengkap",
    name: "Paket Kenangan Premium",
    desc: "Boneka wisuda + frame foto custom + gantungan kunci mini. Kado paling berkesan.",
    price: "Rp 220.000", featured: false, dark: false,
    img: null, imgHint: "paket-premium.jpg\n400 × 400 px",
  },
  {
    id: 5, cat: "bundle", tag: "wisuda bareng 3 orang",
    name: "Paket Bestie Triple",
    desc: "3 boneka wisuda kustom untuk yang lulus bersama. Masing-masing unik!",
    price: "Rp 408.000", featured: false, dark: false,
    img: null, imgHint: "bestie-triple.jpg\n400 × 400 px",
  },
  {
    id: 6, cat: "mini", tag: "hewan rajut",
    name: "Boneka Hewan Mini",
    desc: "Katak, babi, sapi, lebah — karakter hewan rajut gemoy non-wisuda.",
    price: "Rp 80.000", featured: false, dark: false,
    img: null, imgHint: "hewan-mini.jpg\n400 × 400 px",
  },
];

const PROMOS = [
  {
    id: 1, dcat: "disc bundle", span2: true, dark: true, soldOut: false,
    badges: [{ type: "disc", label: "Diskon 20%" }, { type: "bundle", label: "Bundle Terbaik" }],
    tag: "paket terlaris — couple",
    name: "Paket Couple Wisuda — Promo Batch",
    includes: ["2 boneka kustom", "2 nama selempang", "free kartu ucapan", "packaging premium"],
    desc: "2 boneka wisuda kustom lengkap dengan toga, selempang bernama, dan detail wajah mirip orangnya.",
    origPrice: "Rp 320.000", newPrice: "Rp 256.000", save: "Hemat Rp 64.000",
    img: null, imgHint: "couple-promo.jpg\n800 × 500 px",
  },
  {
    id: 2, dcat: "disc single", span2: false, dark: false, soldOut: false,
    badges: [{ type: "disc", label: "Diskon 10%" }, { type: "new", label: "Early Bird" }],
    tag: "single — early bird",
    name: "Boneka Wisuda Single",
    includes: [],
    desc: "1 boneka kustom lengkap. Cocok untuk diri sendiri atau sebagai kado wisudawan.",
    origPrice: "Rp 160.000", newPrice: "Rp 144.000", save: "Hemat Rp 16.000",
    img: null, imgHint: "single-promo.jpg\n400 × 500 px",
  },
  {
    id: 3, dcat: "bundle mini", span2: false, dark: false, soldOut: false,
    badges: [{ type: "bundle", label: "Bundle Souvenir" }],
    tag: "souvenir — 3 pcs",
    name: "Paket GK Mini × 3",
    includes: ["3 GK mini", "warna bebas"],
    desc: "3 gantungan kunci rajut mini — sempurna sebagai souvenir wisuda untuk keluarga.",
    origPrice: "Rp 195.000", newPrice: "Rp 165.000", save: "Hemat Rp 30.000",
    img: null, imgHint: "gk-3pcs.jpg\n400 × 400 px",
  },
  {
    id: 4, dcat: "disc bundle", span2: false, dark: true, soldOut: false,
    badges: [{ type: "disc", label: "Diskon 15%" }, { type: "limited", label: "Slot Terbatas" }],
    tag: "paket kenangan lengkap",
    name: "Paket Kenangan Premium",
    includes: ["1 boneka kustom", "frame foto custom", "GK mini"],
    desc: "Hadiah wisuda paling berkesan dan lengkap. Hanya ada satu, hanya milikmu.",
    origPrice: "Rp 220.000", newPrice: "Rp 187.000", save: "Hemat Rp 33.000",
    img: null, imgHint: "premium-promo.jpg\n400 × 500 px",
  },
  {
    id: 5, dcat: "bundle", span2: false, dark: false, soldOut: false,
    badges: [{ type: "bundle", label: "Bundle Bestie" }],
    tag: "wisuda bareng 3 orang",
    name: "Paket Bestie Triple",
    includes: ["3 boneka kustom", "3 nama selempang"],
    desc: "3 boneka wisuda kustom untuk yang lulus bersama. Masing-masing unik!",
    origPrice: "Rp 480.000", newPrice: "Rp 408.000", save: "Hemat Rp 72.000",
    img: null, imgHint: "bestie-promo.jpg\n400 × 400 px",
  },
  {
    id: 6, dcat: "mini", span2: false, dark: false, soldOut: true,
    badges: [{ type: "sold", label: "Sold Out" }],
    tag: "hewan rajut — habis",
    name: "Boneka Hewan Mini",
    includes: [],
    desc: "Katak, babi, sapi, lebah. Sementara sold out — daftar waiting list.",
    origPrice: "Rp 80.000", newPrice: null, save: null,
    img: null, imgHint: "hewan-sold.jpg\n400 × 400 px",
  },
];

const CAT_FILTERS   = ["all","single","bundle","mini"];
const DISC_FILTERS  = [
  { key:"all",    label:"Semua",      hot:false },
  { key:"disc",   label:"Diskon ✦",   hot:true  },
  { key:"bundle", label:"Bundling",   hot:false },
  { key:"single", label:"Single",     hot:false },
  { key:"mini",   label:"Mini / GK",  hot:false },
];
const MARQUEE_1 = ["Custom Amigurumi","Wisuda Kustom","Handmade Malang","Pre-Order Open","Rajut dengan Kasih","Boneka Unik"];
const MARQUEE_2 = ["Custom Amigurumi","Wisuda 2025","Handmade Malang","Rajut dengan Kasih","Boneka Kustom","Pre-Order Now"];
const MARQUEE_R = ["Promo Batch Pertama","Hemat hingga 20%","Slot Terbatas","Free Kartu Ucapan"];

/* ════════════════════════════════════════════════
   SUB-COMPONENTS
════════════════════════════════════════════════ */

/** Marquee berjalan */
function MarqueeStrip({ items, variant = "matcha" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee ${variant}`}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Placeholder foto / foto nyata */
function PhotoSlot({ src, alt, hint, className = "pcard-img" }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:600px) 100vw, 400px"
        className={className}
        style={{ objectFit:"cover" }}
      />
    );
  }
  return (
    <div className="ph-box">
      <div className="ph-emoji">📸</div>
      {/*
        ─────────────────────────────────────────
        CARA MENGGANTI PLACEHOLDER INI DENGAN FOTO NYATA:
        1. Simpan foto di  /public/images/NAMA_FILE.jpg
        2. Di array PRODUCTS atau PROMOS, ubah:
              img: null
           menjadi:
              img: "/images/NAMA_FILE.jpg"
        3. Komponen ini otomatis menampilkan foto.
        ─────────────────────────────────────────
      */}
      <div className="ph-label" style={{ whiteSpace:"pre-line" }}>{hint}</div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN PAGE
════════════════════════════════════════════════ */
export default function Home() {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMobileOpen,setIsMobileOpen]= useState(false);
  const [activeCat,   setActiveCat]   = useState("all");
  const [activeDisc,  setActiveDisc]  = useState("all");
  const [timeLeft,    setTimeLeft]    = useState({ d:"07",h:"14",m:"32",s:"08" });

  /* ── Side effects ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive:true });

    /* Scroll reveal */
    const els = document.querySelectorAll(".reveal");
    const io  = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold:0.08 }
    );
    els.forEach((el) => io.observe(el));

    /* Countdown */
    const end = new Date(Date.now() + 7*864e5 + 14*36e5 + 32*6e4 + 8*1e3);
    const pad = (n) => String(n).padStart(2,"0");
    const timer = setInterval(() => {
      const diff = Math.max(0, end - Date.now());
      setTimeLeft({
        d: pad(Math.floor(diff / 864e5)),
        h: pad(Math.floor((diff % 864e5) / 36e5)),
        m: pad(Math.floor((diff % 36e5)  / 6e4)),
        s: pad(Math.floor((diff % 6e4)   / 1e3)),
      });
    }, 1000);

    const onResize = () => { if (window.innerWidth > 900) setIsMobileOpen(false); };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearInterval(timer);
      io.disconnect();
    };
  }, []);

  /* ── Helpers ── */
  const openWA = (product) => {
    const msg = encodeURIComponent(
      `Halo gumi! Saya mau pesan: ${product}. Bisa tolong bantu info lebih lanjut?`
    );
    /* ⚠️  GANTI 6281234567890 dengan nomor WA Business kamu */
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
  };
  const closeMobile = () => setIsMobileOpen(false);

  const catFiltered  = PRODUCTS.filter((p) => activeCat  === "all" || p.cat === activeCat);
  const discFiltered = PROMOS.filter((p)   => activeDisc === "all" || p.dcat.includes(activeDisc));

  /* ════════════════════════════════════════════
     JSX
  ════════════════════════════════════════════ */
  return (
    <>

      {/* ══ NAVBAR ══════════════════════════════ */}
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>

        {/*
          ─────────────────────────────────────────
          LOGO DI NAVBAR
          Saat ini menampilkan teks "gumi".

          CARA GANTI KE PNG LOGO KAMU:
          1. Taruh file di  /public/images/logo-gumi.png
          2. Hapus <span className="nav-logo-text">gumi</span>
          3. Uncomment blok <Image> di bawah ini:

          <a href="#beranda" className="nav-logo">
            <Image
              src="/images/logo-gumi.png"
              alt="gumi logo"
              width={90}
              height={36}
              style={{ objectFit:"contain" }}
              priority
            />
          </a>
          ─────────────────────────────────────────
        */}
        <a href="#beranda" className="nav-logo">
          <span className="nav-logo-text">gumi</span>
        </a>

        <div className="nav-links">
          <a href="#katalog">Katalog</a>
          <a href="#proses">Proses</a>
          <a href="#filosofi">Filosofi</a>
          <a href="#diskon">Diskon</a>
        </div>

        <a href="#diskon" className="nav-cta">Pesan PO →</a>

        <button
          className={`nav-burger ${isMobileOpen ? "open" : ""}`}
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`nav-mobile ${isMobileOpen ? "open" : ""}`}>
          <a href="#katalog"  onClick={closeMobile}>Katalog</a>
          <a href="#proses"   onClick={closeMobile}>Proses</a>
          <a href="#filosofi" onClick={closeMobile}>Filosofi</a>
          <a href="#diskon"   onClick={closeMobile}>Diskon</a>
          <a href="#diskon" className="mob-cta" onClick={closeMobile}>Pesan PO →</a>
        </div>
      </nav>

      {/* ══ HERO ════════════════════════════════ */}
      <section className="hero" id="beranda">
        <div className="hero-left">
          <div className="hero-jp">手作りの愛 — Cinta buatan tangan</div>

          <h1 className="hero-h1">
            Setiap simpul<br />
            adalah <em>cerita</em><br />
            yang kamu titipkan.
          </h1>

          <div className="hero-rule" />

          <p className="hero-sub">
            Boneka rajut wisuda kustom — dari foto referensimu, lahir sebuah
            karakter yang hanya ada satu di dunia. Dibuat tangan, dengan kasih.
          </p>

          <div className="hero-ctas">
            <a href="#diskon"  className="btn-gold">Mulai pesanan →</a>
            <a href="#katalog" className="btn-ghost">Lihat katalog</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-n">100+</span>
              <span className="stat-l">Boneka terjual</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-n">4.9★</span>
              <span className="stat-l">Rating</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-n">100%</span>
              <span className="stat-l">Handmade</span>
            </div>
          </div>
        </div>

        {/*
          ══════════════════════════════════════════
          HERO RIGHT — LOGO / MASKOT KAMU

          CARA PAKAI PNG LOGO KAMU DI SINI:
          1. Simpan file di  /public/images/mascot-gumi.png
             (direkomendasikan PNG transparan, min 600×700 px)
          2. Uncomment blok <Image> di bawah
          3. Hapus atau sembunyikan blok .hero-img-placeholder

          <div className="hero-right">
            <div className="hero-bgtext">gumi</div>
            <div className="hero-img-wrap">
              <Image
                src="/images/mascot-gumi.png"
                alt="Maskot gumi — rubah merajut"
                width={340}
                height={400}
                className="hero-mascot-img"
                priority
              />
            </div>
          </div>
          ══════════════════════════════════════════
        */}
        <div className="hero-right">
          <div className="hero-bgtext">gumi</div>

          {/* PLACEHOLDER — hapus blok ini setelah foto siap */}
          <div className="hero-img-placeholder">
            <div className="hip-inner">
              <div className="hip-icon">🖼️</div>
              <div className="hip-title">Logo / Maskot Kamu</div>
              <div className="hip-hint">
                Simpan PNG di<br />
                <code>/public/images/mascot-gumi.png</code><br />
                lalu uncomment blok Image di page.js
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE 1 ═══════════════════════════ */}
      <MarqueeStrip items={MARQUEE_1} variant="matcha" />

      {/* ══ FILOSOFI ════════════════════════════ */}
      <section className="philo reveal" id="filosofi">
        <div className="philo-left">
          <div className="sec-label">Filosofi kami</div>
          <h2 className="sec-h light">Dari benang,<br />lahir kenangan.</h2>
          <div className="gold-rule" />
          <blockquote className="philo-quote">
            "Setiap boneka adalah siklus kasih — benang yang mengalir,
            tangan yang merajut, dan hati yang menerima."
          </blockquote>

          {/*
            FOTO PROSES DI SINI
            Ganti .img-ph dengan:
            <div className="philo-img-wrap">
              <Image
                src="/images/proses-rajut.jpg"
                alt="Proses merajut gumi"
                fill
                className="real-img"
                style={{ objectFit:"cover" }}
              />
            </div>
          */}
          <div className="img-ph">
            <div className="img-ph-icon">📸</div>
            <div className="img-ph-name">proses-rajut.jpg</div>
            <div className="img-ph-spec">400 × 360 px<br />Foto tangan merajut / detail benang</div>
          </div>
        </div>

        <div className="philo-grid">
          {[
            { glyph:"G", title:"Identitas Mengalir",    body:"Huruf G adalah spiral benang, ekor rubah, dan crochet hook sekaligus — satu bentuk, empat makna yang tak terpisah." },
            { glyph:"♡", title:"Kasih Tiap Simpul",     body:"Maskot memeluk alatnya sendiri — pengrajin mencintai proses ini, bukan hanya hasilnya." },
            { glyph:"∞", title:"Kreativitas Tak Habis", body:"Bola benang pelangi di sekitar maskot — kombinasi warna tak terbatas untuk setiap karya kustom." },
            { glyph:"✦", title:"Satu di Dunia",         body:"Tag kayu dengan namamu adalah bukti — boneka ini sungguh hanya satu, hanya milikmu." },
          ].map((p) => (
            <div key={p.title} className="philo-box">
              <div className="philo-glyph">{p.glyph}</div>
              <div className="philo-title">{p.title}</div>
              <div className="philo-body">{p.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ KATALOG ═════════════════════════════ */}
      <section className="catalog reveal" id="katalog">
        <div className="cat-header">
          <div>
            <div className="sec-label">Koleksi produk</div>
            <h2 className="sec-h">Pilih yang paling<br />mencerminkanmu.</h2>
          </div>
          <div className="cat-filters">
            {CAT_FILTERS.map((cat) => (
              <button
                key={cat}
                className={`cat-filter ${activeCat === cat ? "active" : ""}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat === "all" ? "Semua" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="cat-grid">
          {catFiltered.map((p) => (
            <div
              key={p.id}
              className={["pcard", p.dark?"dark":"", p.featured?"featured":""].filter(Boolean).join(" ")}
            >
              <div className="pcard-visual">
                <PhotoSlot src={p.img} alt={p.name} hint={p.imgHint} className="pcard-img" />
              </div>
              <div className="pcard-meta">
                <div className="pcard-tag">{p.tag}</div>
                <div className="pcard-name">{p.name}</div>
                <div className="pcard-desc">{p.desc}</div>
                <div className="pcard-foot">
                  <span className="pcard-price">{p.price}</span>
                  <button className="pcard-btn" onClick={() => openWA(p.name)}>Pesan →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROSES ══════════════════════════════ */}
      <section className="process reveal" id="proses">
        <div className="proc-top">
          <div className="sec-label">Cara pemesanan</div>
          <h2 className="sec-h">Dari benang ke tanganmu<br />dalam empat langkah.</h2>
        </div>
        <div className="proc-grid">
          {[
            { n:"01", title:"DM & Konsultasi",     body:"Kirim foto referensi dan detail keinginanmu via Instagram atau WhatsApp. Kami bantu tentukan karakter terbaik." },
            { n:"02", title:"DP & Antrian",         body:"Bayar DP 50% untuk mengunci slot. Pesananmu masuk antrian produksi secara resmi." },
            { n:"03", title:"Produksi 7–14 Hari",   body:"Dirajut tangan dengan penuh perhatian. Kamu mendapat update progres berkala via WA." },
            { n:"04", title:"Dikirim dengan Kasih", body:"Dikemas rapi dan indah. Pelunasan sebelum pengiriman ke tanganmu." },
          ].map((s) => (
            <div key={s.n} className="proc-step">
              <div className="proc-bignum">{s.n}</div>
              <div className="proc-dot" />
              <div className="proc-title">{s.title}</div>
              <div className="proc-body">{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MARQUEE 2 ═══════════════════════════ */}
      <MarqueeStrip items={MARQUEE_2} variant="dark" />

      {/* ══ DISKON ══════════════════════════════ */}
      <section className="disc-section reveal" id="diskon">

        {/* Strip merah */}
        <MarqueeStrip items={MARQUEE_R} variant="red" />

        {/* Header + countdown */}
        <div className="disc-header">
          <div>
            <div className="disc-label">✦ Promo spesial wisuda 2025</div>
            <h2 className="disc-h">Harga <em>istimewa,</em><br />kualitas tetap sama.</h2>
            <p className="disc-sub">
              Khusus batch pertama — setiap pesanan mendapat diskon spesial
              dan kartu ucapan gratis. Slot sangat terbatas.
            </p>
          </div>

          <div className="countdown">
            <div className="cd-lbl">Promo berakhir dalam</div>
            <div className="cd-boxes">
              {[
                { val:timeLeft.d, unit:"hari"   },
                { val:timeLeft.h, unit:"jam"    },
                { val:timeLeft.m, unit:"menit"  },
                { val:timeLeft.s, unit:"detik"  },
              ].map((item, i) => (
                <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:"4px" }}>
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
              <div className="slot-track"><div className="slot-fill" /></div>
              <div className="slot-note">70% slot sudah terisi — pesan sekarang!</div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="disc-filters">
          <span className="disc-filter-lbl">Filter:</span>
          {DISC_FILTERS.map((f) => (
            <button
              key={f.key}
              className={["dftag", f.hot?"hot":"", activeDisc===f.key?"active":""].filter(Boolean).join(" ")}
              onClick={() => setActiveDisc(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Promo grid — dengan padding kiri-kanan + rounded corners */}
        <div className="disc-grid-wrap">
          <div className="disc-grid">
            {discFiltered.map((p) => (
              <div
                key={p.id}
                className={["dcard", p.dark?"dark":"", p.span2?"span2":"", p.soldOut?"sold":""].filter(Boolean).join(" ")}
              >
                <div className="dbadges">
                  {p.badges.map((b) => (
                    <span key={b.label} className={`dbadge ${b.type}`}>{b.label}</span>
                  ))}
                </div>

                <div className="dcard-visual">
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width:600px) 100vw, 400px"
                      className="dcard-img"
                      style={{ objectFit:"cover" }}
                    />
                  ) : (
                    <div className="dph">
                      <div className="dph-icon">📸</div>
                      <div className="dph-hint" style={{ whiteSpace:"pre-line" }}>{p.imgHint}</div>
                    </div>
                  )}
                </div>

                <div className="dcard-meta">
                  <div className="dcard-tag">{p.tag}</div>
                  <div className="dcard-name">{p.name}</div>
                  {p.includes.length > 0 && (
                    <div className="dincludes">
                      {p.includes.map((inc) => <span key={inc} className="dtag-inc">{inc}</span>)}
                    </div>
                  )}
                  <div className="dcard-desc">{p.desc}</div>
                  <div className="dpricing">
                    {p.origPrice && <span className="dorig">{p.origPrice}</span>}
                    {p.newPrice  && <span className="dnew">{p.newPrice}</span>}
                    {p.save      && <span className="dsave">{p.save}</span>}
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

        {/* Info bar */}
        <div className="info-bar">
          {["🎁 Free kartu ucapan setiap order","⏱ Produksi 7–14 hari kerja","🔒 DP 50% untuk kunci slot","🧶 100% handmade dengan kasih"]
            .map((t) => <div key={t} className="info-item">{t}</div>)}
        </div>
      </section>

      {/* ══ TESTIMONI ═══════════════════════════ */}
      <section className="testi reveal">
        <div className="sec-label">Kata mereka</div>
        <h2 className="sec-h light">Setiap ulasan adalah<br />kebanggaan kami.</h2>
        <div className="testi-grid">
          {[
            { text:"Mirip banget sama aslinya! Kerudungnya persis, selempang CUMLAUDE-nya ada nama saya. Nangis pas buka packaging-nya.", name:"Aulia R.", loc:"Wisuda UB, Malang — 2025" },
            { text:"Kado wisuda paling unik yang pernah aku lihat. Teman saya langsung menangis. Packaging-nya juga cantik luar biasa!", name:"Dina K.", loc:"Pembeli — hadiah untuk bestie" },
            { text:"Responsif, rajin update progres, bonekanya halus dan padat. Pasti kembali lagi untuk adik yang wisuda tahun depan!", name:"Rafi M.", loc:"Wisuda UIN, Malang — 2025" },
          ].map((r) => (
            <div key={r.name} className="tcard">
              <div className="tcard-stars">
                {[...Array(5)].map((_,i) => <span key={i} className="star" />)}
              </div>
              {/*
                FOTO AVATAR REVIEWER — OPSIONAL
                <Image src="/images/avatar-1.jpg" alt={r.name}
                  width={36} height={36}
                  style={{ borderRadius:"50%", objectFit:"cover", marginBottom:8 }} />
              */}
              <blockquote className="tcard-text">"{r.text}"</blockquote>
              <div className="tcard-div" />
              <div className="tcard-name">{r.name}</div>
              <div className="tcard-loc">{r.loc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════ */}
      <div className="cta-banner reveal">
        <div>
          <h3 className="cta-h">Slot PO terbatas.<br /><em>Jangan sampai terlewat.</em></h3>
          <p className="cta-sub">Batch baru dibuka setiap bulan — follow Instagram kami untuk notifikasi pertama.</p>
        </div>
        <div className="cta-actions">
          <a href="#diskon" className="btn-gold">Daftar PO sekarang →</a>
          <span className="cta-ig">@gumi.craft</span>
        </div>
      </div>

      {/* ══ FOOTER ══════════════════════════════ */}
      <footer>
        <div className="footer-main">
          <div>
            {/*
              LOGO DI FOOTER — OPSIONAL
              Ganti <div className="ft-logo"> dengan:
              <Image src="/images/logo-gumi.png" alt="gumi"
                width={100} height={48}
                style={{ objectFit:"contain", marginBottom:8 }} />
            */}
            <div className="ft-logo">gumi</div>
            <div className="ft-tagline">Custom Amigurumi & Yarn Works</div>
            <p className="ft-about">
              Dibuat tangan dengan kasih di Malang. Setiap boneka adalah cerita
              yang kamu titipkan kepada kami untuk diwujudkan.
            </p>
            <div className="ft-palette">
              {[
                { bg:"#F7F0E6", border:"1px solid #DDD0BC" },
                { bg:"#C8A96E" }, { bg:"#6B8F5E" },
                { bg:"#4A6741" }, { bg:"#1A2818" },
              ].map((c,i) => (
                <div key={i} className="ft-dot" style={{ background:c.bg, border:c.border||"none" }} />
              ))}
            </div>
          </div>

          <div className="ft-col">
            <h4>Produk</h4>
            <a href="#katalog">Boneka Wisuda Single</a>
            <a href="#katalog">Paket Couple</a>
            <a href="#katalog">Gantungan Kunci Mini</a>
            <a href="#katalog">Paket Bundling</a>
          </div>

          <div className="ft-col">
            <h4>Info</h4>
            <a href="#proses">Cara Pemesanan</a>
            <a href="#proses">Estimasi Waktu</a>
            <a href="#diskon">FAQ</a>
            <a href="#diskon">Syarat & Ketentuan</a>
          </div>

          <div className="ft-col">
            <h4>Kontak</h4>
            <a href="https://instagram.com/gumi.craft" target="_blank" rel="noopener noreferrer">Instagram: @gumi.craft</a>
            <a href="https://tiktok.com/@gumi.craft"   target="_blank" rel="noopener noreferrer">TikTok: @gumi.craft</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openWA("Info umum"); }}>WhatsApp Business</a>
            <a href="#">Malang, Jawa Timur</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="ft-copy">© 2025 gumi — handmade with love in Malang</span>
          <span className="ft-copy">Made with 🧶 & kasih</span>
        </div>
      </footer>
    </>
  );
}
