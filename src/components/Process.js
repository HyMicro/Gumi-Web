export default function Process() {
  return (
    <section className="process reveal" id="proses">
      <div className="proc-top">
        <div className="sec-label">Cara pemesanan</div>
        <h2 className="sec-h">
          Dari benang ke tanganmu
          <br />
          dalam empat langkah.
        </h2>
      </div>
      <div className="proc-grid">
        {[
          {
            n: "01",
            title: "DM & Konsultasi",
            body: "Kirim foto referensi dan detail keinginanmu via WhatsApp. Kami bantu tentukan karakter terbaik.",
          },
          {
            n: "02",
            title: "DP & Antrian",
            body: "Bayar DP 50% untuk mengunci slot. Pesananmu masuk antrian produksi secara resmi.",
          },
          {
            n: "03",
            title: "Produksi 7–15 Hari",
            body: "Dirajut tangan dengan penuh perhatian. Kamu mendapat update progres berkala via WA.",
          },
          {
            n: "04",
            title: "Dikirim dengan Kasih",
            body: "Dikemas rapi dan indah. Pelunasan sebelum pengiriman ke tanganmu.",
          },
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
  );
}
