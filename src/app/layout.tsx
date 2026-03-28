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
  title: "Aksht Jain | Software Engineer",
  description:
    "Software Engineer, ex-Canvas Plus & Rippling. Built scalable systems, payment infrastructure, and AI-powered products.",
  keywords: [
    "Aksht Jain",
    "Software Engineer",
    "Engineering Lead",
    "Full Stack Developer",
    "Rippling",
    "Canvas Plus",
  ],
  openGraph: {
    title: "Aksht Jain | Software Engineer",
    description:
      "Software Engineer, ex-Canvas Plus & Rippling. Built scalable systems, payment infrastructure, and AI-powered products.",
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
