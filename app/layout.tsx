import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Builder Rewards",
  description: "Ship, Earn, Repeat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <div className="flex flex-col min-h-dvh h-dvh max-w-3xl mx-auto py-2">
          <Navbar />
          <main className="flex flex-col h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
