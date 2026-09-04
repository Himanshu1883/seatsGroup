import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const monaSans = localFont({
  src: "./fonts/MonaSansVF.woff2",
  variable: "--font-mona",
  display: "swap",
  weight: "200 900",
  declarations: [{ prop: "font-stretch", value: "75% 125%" }],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "SeatsGroup — Powering the Future of Ticketing & Live Experiences",
  description:
    "SeatsGroup is a global technology and distribution group building connected infrastructure for the ticketing, hospitality and live-events industry.",
  icons: {
    icon: [
      { url: "/favicon-green.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-green.png", type: "image/png" },
    ],
    apple: "/favicon-green.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${monaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
