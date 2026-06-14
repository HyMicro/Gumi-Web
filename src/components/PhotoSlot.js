import Image from "next/image";

export default function PhotoSlot({ src, alt, hint, className = "pcard-img" }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:600px) 100vw, 400px"
        className={className}
        style={{ objectFit: "cover" }}
      />
    );
  }
  return (
    <div className="ph-box">
      <div className="ph-emoji">📸</div>
      <div className="ph-label" style={{ whiteSpace: "pre-line" }}>
        {hint}
      </div>
    </div>
  );
}
