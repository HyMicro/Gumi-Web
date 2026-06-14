import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair", // Ini penting!
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dmsans", // Ini penting!
  display: "swap",
});

export const metadata = {
  title: "gumi — Custom Amigurumi & Yarn Works",
  description: "Setiap simpul adalah cerita yang kamu titipkan.",
};

export default function RootLayout({ children }) {
  return (
    // TAMBAHKAN className INI:
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}