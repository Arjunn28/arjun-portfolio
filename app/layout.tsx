import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-nav",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI with Arjun",
  description:
    "Data Analyst transitioning into AI Engineering. Building agentic systems, RAG pipelines and multimodal applications — with 3 years of production analytics experience at a Fortune 50 retailer.",
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "Agentic AI",
    "Arjun AN",
    "Machine Learning",
    "Data Analyst",
    "AI projects",
  ],
  authors: [{ name: "Arjun Abbimutt Nagendra Kumar" }],
  creator: "Arjun Abbimutt Nagendra Kumar",
  openGraph: {
    title: "AI with Arjun",
    description:
      "Building agentic systems, RAG pipelines and multimodal applications. From Data Analyst to AI Engineer.",
    url: "https://arjun-an.vercel.app",
    siteName: "AI with Arjun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI with Arjun",
    description:
      "Building agentic systems, RAG pipelines and multimodal applications. From Data Analyst to AI Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050404",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="relative">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
