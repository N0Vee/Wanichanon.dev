import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MouseFollowingCircle from "@/components/ui/MouseFollowingCircle";
import AllStructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// ============================================
// COMPREHENSIVE SEO METADATA
// ============================================
export const metadata = {
  // Basic Metadata
  title: {
    default: "Wanichanon Saelee - Full-Stack Developer | React & Next.js Expert",
    template: "%s | Wanichanon.dev",
  },
  description:
    "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Building elegant, user-centered digital experiences.",

  // Canonical URL
  metadataBase: new URL("https://wanichanon.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  // Keywords for search engines
  keywords: [
    "Wanichanon Saelee",
    "Wanichanon",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
    "Web Development",
    "Tailwind CSS",
    "Node.js",
    "Modern Web Technologies",
    "UI/UX Developer",
    "Freelance Developer",
    "Remote Developer",
  ],

  // Author Information
  authors: [{ name: "Wanichanon Saelee", url: "https://wanichanon.dev" }],
  creator: "Wanichanon Saelee",
  publisher: "Wanichanon Saelee",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/WS.ico", type: "image/x-icon" },
    ],
    shortcut: "/WS.ico",
    apple: "/images/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/images/apple-touch-icon.png",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wanichanon.dev",
    siteName: "Wanichanon.dev",
    title: "Wanichanon Saelee - Full-Stack Developer | React & Next.js Expert",
    description:
      "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "https://wanichanon.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wanichanon Saelee - Full-Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "https://wanichanon.dev/images/Wanichanon.webp",
        width: 800,
        height: 800,
        alt: "Wanichanon Saelee Profile Picture",
        type: "image/webp",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@wanichanon",
    creator: "@wanichanon",
    title: "Wanichanon Saelee - Full-Stack Developer",
    description:
      "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["https://wanichanon.dev/images/og-image.png"],
  },

  // Verification
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["wanichanon.work@gmail.com", "https://github.com/N0Vee"],
    },
  },

  // Apple Web App
  appleWebApp: {
    capable: true,
    title: "Wanichanon.dev",
    statusBarStyle: "black-translucent",
    startupImage: "/images/apple-startup.png",
  },

  // Format Detection
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

  // Category and Classification
  classification: "Portfolio, Web Development, Technology",
  category: "technology",

  // Additional Metadata
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "Wanichanon.dev",
};

// Viewport Configuration
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      dir="ltr"
      prefix="og: https://ogp.me/ns#"
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://wanichanon.dev" />

        {/* Alternative Languages */}
        <link rel="alternate" hrefLang="en" href="https://wanichanon.dev" />
        <link rel="alternate" hrefLang="x-default" href="https://wanichanon.dev" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Structured Data */}
        <AllStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="min-h-screen text-slate-100 relative">
          {/* Glassmorphism overlay pattern */}
          <div className="fixed inset-0 pointer-events-none opacity-35">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/12 rounded-full blur-xl animate-float"></div>
            <div
              className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/12 rounded-full blur-xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/12 rounded-full blur-xl animate-float"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-400/12 rounded-full blur-xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to main content
          </a>

          {/* Mouse Following Circle Animation */}
          <MouseFollowingCircle />

          {/* Main content */}
          <main id="main-content">{children}</main>
        </div>

        {/* Font Awesome Script */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="lazyOnload"
        />

        {/* Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
