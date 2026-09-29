import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickTouch Kinetic 1 — The Tactile-First Flagship Smartphone",
  description:
    "Engineered with aerospace Grade-5 titanium, dual linear resonant haptic actuators, mechanical dual-aperture optics, and zero-latency QuickOS. Feel the future of mobile precision.",
  keywords: [
    "QuickTouch",
    "Kinetic 1",
    "Flagship Smartphone",
    "Tactile Haptics",
    "Titanium Phone",
    "Mechanical Aperture",
    "Zero Latency OS",
  ],
  authors: [{ name: "QuickTouch Labs" }],
  openGraph: {
    title: "QuickTouch Kinetic 1 — Sensation Reborn",
    description:
      "The world's first tactile-first flagship smartphone. Grade-5 titanium chassis, dual linear resonant haptics, and mechanical variable optics.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#07080b] text-[#f3f6fa] antialiased selection:bg-[#e28743] selection:text-white">
        {children}
      </body>
    </html>
  );
}
