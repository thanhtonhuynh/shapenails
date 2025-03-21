import { TailwindScreenSizeIndicator } from "@/components/dev/tw-screen-size-indicator";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shape Nails",
  description:
    "Shape Nails, shaping stories through stunning nails. Well-shaped nails are more than a detail - they're a statement. Whether you're seeking timeless elegance or bold designs, our mission is to enhance your natural beauty with expert care and stunning nail artistry.",
  metadataBase: new URL("https://shapenails.vercel.app"),
  openGraph: {
    siteName: "Shape Nails",
    url: "https://shapenails.vercel.app",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about1.png",
        // width: 1200,
        // height: 630,
        alt: "Shape Nails",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} font-geist-sans antialiased`}
      >
        <div className="relative mx-auto flex min-h-screen flex-col scroll-smooth">
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
        <TailwindScreenSizeIndicator />
      </body>
    </html>
  );
}
