import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"],
  display: "swap", // 'swap' ensures text is visible while the font loads
  variable: "--font-poppins", // Optional: for use with CSS variables
});

export const metadata = {
  title: {
    default: 'FarmLook - AI-Powered Crop Disease Detection',
    template: '%s | FarmLook Nigeria'
  },
  description: 'Empowering Nigerian farmers with AI to detect crop diseases and improve yields.',
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    title: 'FarmLook - Smart Farming in Nigeria',
    description: 'Snap your crops to analyze health and get instant recommendations.',
    url: 'https://farmlook.com.ng',
    siteName: 'FarmLook',
    images: [{ url: '/brand-logo.png', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} bg-white antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
