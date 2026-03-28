import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aksht Jain | Founder, Ekly.ai",
  description:
    "Founder of Ekly.ai — AI-powered video editing platform. Ex-Canvas Plus Engineering Lead & Rippling SWE2. Building scalable systems and AI products.",
  keywords: [
    "Aksht Jain",
    "Ekly.ai",
    "Software Engineer",
    "Founder",
    "AI Video Editor",
    "Rippling",
    "Canvas Plus",
  ],
  openGraph: {
    title: "Aksht Jain | Founder, Ekly.ai",
    description:
      "Founder of Ekly.ai — AI-powered video editing platform. Ex-Canvas Plus Engineering Lead & Rippling SWE2. Building scalable systems and AI products.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
