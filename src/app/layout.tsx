import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abundant Strategies | Nathalie Salles",
  description: "Executive coaching and AI strategy for leaders navigating transformation. 15+ years developing leaders at Meta, Google, Shell. Now building AI systems.",
  keywords: ["executive coaching", "AI strategy", "leadership development", "AI transformation", "HR technology"],
  authors: [{ name: "Nathalie Salles" }],
  openGraph: {
    title: "Abundant Strategies | Nathalie Salles",
    description: "Executive coaching and AI strategy for leaders navigating transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
