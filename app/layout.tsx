import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./mycomponents/ScrollToTopButton";
import Navbar from "./mycomponents/Navbar";
import { ThemeProvider } from "./mycomponents/theme-provider";
import Footer from "./mycomponents/Footer";

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
  title: "Fun with Sanity",
  description: "Using Sanity and Next.js to build a blog app",
  keywords: ["Sanity", "Next.js", "React"],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  // openGraph: {
  //   title: "Fun with Saity",
  //   description: "Using Sanity and Next.js to build a blog app",
  //   url: "https://fun-with-sanity.vercel.app",
  //   siteName: "Fun with Saity",
  //   images: {
  //     url: "/images/og-image.jpg",
  //     width: 1200,
  //     height: 630,
  //     alt: "Fun with Sanity",
  //   },
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.variable} overflow-x-hidden bg-white dark:bg-black dark:text-white transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
