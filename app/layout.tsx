import type { Metadata } from "next";
import { Geist, Geist_Mono, Lekton } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

import { Jersey_25 } from 'next/font/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jersey = Jersey_25({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jersey'
});
// ss
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Creative Hub",
  description: "Prime Creative Hub is a wing of Prime IT Club.",
  icons: {
    icon: '/creativehubfavicon.ico',

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Prime Creative Hub is a wing of Prime IT Club." />
        <meta name="keywords" content="Prime Creative Hub, Prime IT Club, Prime" />
        <meta property="og:description" content="Prime Creative Hub is a wing of Prime IT Club." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creativehub.primeitclub.com" />
        <meta property="og:title" content="Prime Creative Hub" />
        <meta property="og:image" content="https://creativehub.primeitclub.com/images/icon.svg" />
        <meta property="og:image:alt" content="Prime Creative Hub Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <link rel="icon" href="/creativehubfavicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+25&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,200,100,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${jersey.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
