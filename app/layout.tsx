import { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "./components/global/navbar";
import { Mona_Sans } from "next/font/google";
import Downfooter from "./components/global/downfooter";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Prime Creative Hub",
  description: "Prime Creative Hub is a wing of Prime IT Club.",
  keywords:
    "Prime Creative Hub, Prime IT Club, Prime College, Prime,Creative , Creative Hub",
  icons: {
    icon: "/images/CreativeHub.svg",
    shortcut: "/images/CreativeHub.svg",
    apple: "/images/CreativeHub.svg",
    other: {
      rel: "icon",
      url: "/images/CreativeHub.svg",
    },
  },
  openGraph: {
    title: "Prime Creative Hub",
    description: "Prime Creative Hub is a wing of Prime IT Club.",
    url: "https://creativehub.primeitclub.com",
    type: "website",
    images: [
      {
        url: "https://creativehub.primeitclub.com/images/CreativeHub.png",
        alt: "Prime Creative Hub Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Creative Hub",
    description: "Prime Creative Hub is a wing of Prime IT Club.",
    images: ["https://creativehub.primeitclub.com/images/CreativeHub.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={monaSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Downfooter />
      </body>
    </html>
  );
}
