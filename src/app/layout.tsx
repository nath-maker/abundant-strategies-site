import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
