export default function MarqueeStrip({ items, variant = "matcha" }) {
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
