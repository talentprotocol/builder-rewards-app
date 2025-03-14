import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import { SponsorProvider } from "@/app/context/SponsorContext";
import { GrantProvider } from "@/app/context/GrantContext";
import { LeaderboardProvider } from "@/app/context/LeaderboardContext";
import UserStatus from "@/app/components/UserStatus";
import { UserProvider } from "@/app/context/UserContext";
import { Footer } from "@/app/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const frame = {
  version: "next",
  imageUrl: "https://www.builderscore.xyz/images/frame-image.png",
  button: {
    title: "Ship, Earn, Repeat.",
    action: {
      type: "launch_frame",
      name: "Builder Rewards",
      url: "https://www.builderscore.xyz",
      splashImageUrl: "https://www.builderscore.xyz/images/icon.png",
      splashBackgroundColor: "#FFFFFF",
    },
  },
};

export const metadata: Metadata = {
  title: "Builder Rewards",
  description: "Ship, Earn, Repeat.",
  other: {
    "fc:frame": JSON.stringify(frame)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <SponsorProvider>
          <GrantProvider>
            <UserProvider>
              <LeaderboardProvider>
                <div className="flex flex-col min-h-dvh max-w-3xl mx-auto py-2 px-4">
                  {process.env.NODE_ENV === "development" && <UserStatus />}
                  <Navbar />
                  <main className="flex flex-col h-full">{children}</main>
                  <Footer />
                </div>
              </LeaderboardProvider>
            </UserProvider>
          </GrantProvider>
        </SponsorProvider>
      </body>
    </html>
  );
}
