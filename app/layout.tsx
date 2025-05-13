import "./globals.css";
import { Reddit_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const reddit_sans = Reddit_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Mood tracking app",
  description:
    "Log how you're feeling, visualize trends, and gain insights into your daily moods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={reddit_sans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
