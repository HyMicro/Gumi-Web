import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="philo reveal" id="filosofi">
      <div className="philo-left">
        <div className="sec-label">Filosofi kami</div>
        <h2 className="sec-h light">
          Dari benang,
          <br />
          lahir kenangan.
        </h2>
        <div className="gold-rule" />
        <blockquote className="philo-quote">
          "Setiap boneka adalah siklus kasih — benang yang mengalir, tangan yang
          merajut, dan hati yang menerima."
        </blockquote>
        <div
          className="philo-img-wrap"
          style={{ position: "relative", width: "100%", height: "320px" }}
        >
          <Image
            src="/images/Heroooochibi.jpg"
            alt="Proses merajut gumi"
            fill
            className="real-img"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="philo-grid">
        {[
          {
            glyph: "G",
            title: "Identitas Mengalir",
            body: "Huruf G adalah spiral benang, ekor rubah, dan crochet hook sekaligus — satu bentuk, empat makna yang tak terpisah.",
          },
          {
            glyph: "♡",
            title: "Kasih Tiap Simpul",
            body: "Maskot memeluk alatnya sendiri — pengrajin mencintai proses ini, bukan hanya hasilnya.",
          },
          {
            glyph: "∞",
            title: "Kreativitas Tak Habis",
            body: "Kombinasi warna tak terbatas untuk setiap karya kustom.",
          },
          {
            glyph: "✦",
            title: "Satu di Dunia",
            body: "Boneka ini sungguh hanya satu, hanya milikmu.",
          },
        ].map((p) => (
          <div key={p.title} className="philo-box">
            <div className="philo-glyph">{p.glyph}</div>
            <div className="philo-title">{p.title}</div>
            <div className="philo-body">{p.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
