import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata = {
  title: "gumi — Custom Amigurumi & Yarn Works",
  description: "Boneka rajut wisuda kustom handmade dari Malang. Setiap simpul adalah cerita yang kamu titipkan.",
  keywords: ["amigurumi", "boneka rajut", "wisuda custom", "handmade malang", "gumi"],
  openGraph: {
    title: "gumi — Custom Amigurumi & Yarn Works",
    description: "Boneka rajut wisuda kustom handmade dari Malang.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
