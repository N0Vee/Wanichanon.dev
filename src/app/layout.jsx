import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";
import MouseFollowingCircle from '@/components/MouseFollowingCircle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Preload geistMono font for better performance
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Changed from false to true
});

// Split metadata into smaller exports for better readability
export const openGraph = {
  type: "website",
  locale: "en_US",
  url: "https://wanichanon.dev",
  title: "Wanichanon.dev - Full-Stack Developer",
  description: "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  siteName: "Wanichanon.dev",
};

export const twitter = {
  card: "summary_large_image",
  title: "Wanichanon.dev - Full-Stack Developer",
  description: "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
};

export const metadata = {
  title: "Wanichanon.dev - Full-Stack Developer",
  description: "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: "full-stack developer, React, Next.js, web development, portfolio, JavaScript, TypeScript",
  authors: [{ name: "Wanichanon Saelee" }],
  creator: "Wanichanon Saelee",
  icon: [
    { rel: "icon", url: "/favicon.ico" },
  ],
  openGraph,
  twitter,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Wanichanon.dev - Full-Stack Developer</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="min-h-screen text-slate-100 relative">
          {/* Glassmorphism overlay pattern */}
          <div className="fixed inset-0 pointer-events-none opacity-35">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/12 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/12 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/12 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-400/12 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Mouse Following Circle Animation */}
          <MouseFollowingCircle />
          
          {children}
        </div>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="lazyOnload" // Changed from afterInteractive to lazyOnload
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
