export default function Testimonials() {
  return (
    <section className="testi reveal">
      <div className="sec-label">Kata mereka</div>
      <h2 className="sec-h light">
        Setiap ulasan adalah
        <br />
        kebanggaan kami.
      </h2>
      <div className="testi-grid">
        {[
          {
            text: "Mirip banget sama aslinya! Kerudungnya persis, selempang CUMLAUDE-nya ada nama saya. Nangis pas buka packaging-nya.",
            name: "Aulia R.",
            loc: "Wisuda UB, Malang — 2025",
          },
          {
            text: "Kado wisuda paling unik yang pernah aku lihat. Teman saya langsung menangis. Packaging-nya juga cantik luar biasa!",
            name: "Dina K.",
            loc: "Pembeli — hadiah untuk bestie",
          },
          {
            text: "Responsif, rajin update progres, bonekanya halus dan padat. Pasti kembali lagi untuk adik yang wisuda tahun depan!",
            name: "Rafi M.",
            loc: "Wisuda UIN, Malang — 2025",
          },
        ].map((r) => (
          <div key={r.name} className="tcard">
            <div className="tcard-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star" />
              ))}
            </div>
            <blockquote className="tcard-text">"{r.text}"</blockquote>
            <div className="tcard-div" />
            <div className="tcard-name">{r.name}</div>
            <div className="tcard-loc">{r.loc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
