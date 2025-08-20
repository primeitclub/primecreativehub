import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "./components/global/navbar";
import HeroSection from "./features/hero-section";

export const metadata: Metadata = {
  title: "Prime Creative Hub",
  description: "Prime Creative Hub is a wing of Prime IT Club.",
  keywords: "Prime Creative Hub, Prime IT Club, Prime College, Prime, Creative, Creative Hub",
  icons: {
    icon: '/creativehubfavicon.ico',
    shortcut: '/creativehubfavicon.ico',
    apple: '/creativehubfavicon.ico',
    other: {
      rel: 'icon',
      url: '/creativehubfavicon.ico',
    },
  },
  openGraph: {
    title: "Prime Creative Hub",
    description: "Prime Creative Hub is a wing of Prime IT Club.",
    url: "https://creativehub.primeitclub.com",
    type: "website",
    images: [
      {
        url: "https://creativehub.primeitclub.com/images/icon.svg",
        width: 200,
        height: 200,
        alt: "Prime Creative Hub Logo",
        type: "image/svg+xml",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Creative Hub",
    description: "Prime Creative Hub is a wing of Prime IT Club.",
    images: ["https://creativehub.primeitclub.com/images/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Navbar />
        <HeroSection />
      
        {children}
      </body>
    </html>
  );
}
