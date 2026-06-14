"use client";

export default function Footer() {
  const openWA = (topic) => {
    window.open(
      `https://wa.me/6282324646801?text=${encodeURIComponent(`Halo gumi! Saya mau tanya info tentang: ${topic}`)}`,
      "_blank",
    );
  };
  return (
    <>
      <div className="cta-banner reveal">
        <div>
          <h3 className="cta-h">
            Slot PO terbatas.
            <br />
            <em>Jangan sampai terlewat.</em>
          </h3>
          <p className="cta-sub">
            Batch baru dibuka setiap bulan — follow Instagram kami untuk
            notifikasi pertama.
          </p>
        </div>
        <div className="cta-actions">
          <a href="#diskon" className="btn-gold">
            Daftar PO sekarang →
          </a>
          <span className="cta-ig">@gumi.craft</span>
        </div>
      </div>
      <footer>
        <div className="footer-main">
          <div>
            <div className="ft-logo">gumi</div>
            <div className="ft-tagline">Custom Amigurumi & Yarn Works</div>
            <p className="ft-about">
              Dibuat tangan dengan kasih di Malang. Setiap boneka adalah cerita
              yang kamu titipkan kepada kami untuk diwujudkan.
            </p>
            <div className="ft-palette">
              {[
                { bg: "#F7F0E6", border: "1px solid #DDD0BC" },
                { bg: "#C8A96E" },
                { bg: "#6B8F5E" },
                { bg: "#4A6741" },
                { bg: "#1A2818" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="ft-dot"
                  style={{ background: c.bg, border: c.border || "none" }}
                />
              ))}
            </div>
          </div>
          <div className="ft-col">
            <h4>Produk</h4>
            <a href="#katalog">Boneka Rajut Custom</a>
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
            <a
              href="https://instagram.com/gumi.craft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @gumi.craft
            </a>
            <a
              href="https://tiktok.com/@gumi.craft"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok: @gumi.craft
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWA("Info umum");
              }}
            >
              WhatsApp Business
            </a>
            <a href="#">Malang, Jawa Timur</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="ft-copy">
            © 2025 gumi — handmade with love in Malang
          </span>
          <span className="ft-copy">Made with 🧶 & kasih</span>
        </div>
      </footer>
    </>
  );
}
