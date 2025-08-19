import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_25 } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/global/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jersey = Jersey_25({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jersey'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Creative Hub",
  description: "Prime Creative Hub is a wing of Prime IT Club.",
  keywords: "Prime Creative Hub, Prime IT Club, Prime College, Prime,Creative , Creative Hub",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+25&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,200,100,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${jersey.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        

        {children}
      </body>
    </html>
  )
}