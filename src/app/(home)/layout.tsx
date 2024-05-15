import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { Sora as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sajed Portfolio",
  description: "A Passionate Full-stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="hero-gradient relative">
          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
