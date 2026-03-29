import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aksht Jain — Software Engineer",
  description:
    "Software engineer building products that move millions. Founder of Ekly.ai. Ex-Canvas Plus Engineering Lead & Rippling SWE2.",
  keywords: [
    "Aksht Jain",
    "Ekly.ai",
    "Software Engineer",
    "Founder",
    "Rippling",
    "Canvas Plus",
  ],
  openGraph: {
    title: "Aksht Jain — Software Engineer",
    description:
      "Software engineer building products that move millions. Founder of Ekly.ai.",
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
      data-theme="dark"
      className={`${instrumentSerif.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
