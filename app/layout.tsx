import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Fun with Saity",
  description: "Learning how to use Sanity with Next.js",
  keywords: ["Sanity", "Next.js", "React"],
  icons:[{rel:"icon", url:"/favicon.ico"}],
  openGraph: {
    title: "Fun with Saity",
    description: "Learning how to use Sanity with Next.js",
    url: "https://fun-with-sanity.vercel.app",
    siteName: "Fun with Saity",
    images:{
      url:"/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Fun with Saity",
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} max-w-[1920px] mx-auto`}>
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
