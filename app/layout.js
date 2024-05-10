import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Home - NexaThread",
  description: "Woven By AI, Loved By Developers",
};

const poppins = Poppins({
  weight: ["400", "900","700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
