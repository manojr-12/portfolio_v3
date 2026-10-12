import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoj Ravichandran — Software Development Engineer",
  description:
    "Manoj Ravichandran is a software development engineer building distributed systems, mobile applications, and performant software.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
