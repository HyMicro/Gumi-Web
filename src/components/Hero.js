import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-left">
        <div className="hero-jp">手作りの愛 — Cinta buatan tangan</div>
        <h1 className="hero-h1">
          Setiap simpul
          <br />
          adalah <em>cerita</em>
          <br />
          yang kamu titipkan.
        </h1>
        <div className="hero-rule" />
        <p className="hero-sub">
          Boneka rajut kustom — dari foto referensimu, lahir sebuah
          karakter yang hanya ada satu di dunia. Dibuat tangan, dengan kasih.
        </p>
        <div className="hero-ctas">
          <a href="#diskon" className="btn-gold">
            Mulai pesanan →
          </a>
          <a href="#katalog" className="btn-ghost">
            Lihat katalog
          </a>
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
      <div className="hero-right">
        <div className="hero-bgtext">gumi</div>
        <div className="hero-img-wrap">
          <Image
            src="/images/GummiLogoFont.png"
            alt="Maskot gumi"
            width={340}
            height={400}
            className="hero-mascot-img object-contain hover:scale-105 transition-transform duration-500 ease-out"
            style={{ filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.25))" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
