import type { Metadata } from "next";
import "../globals.css";
import "../features.css";
import { Sora as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sajed | Full-stack Web Developer",
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
        <div className="hero-gradients relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
