import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Click Presets Pack – Premiere Pro Presets | ₹299",
  description: "Edit faster with the One Click Presets Pack for Premiere Pro. Get character animation, text effects, transitions and motion presets for just ₹299.",
  keywords: "Premiere Pro presets, video editing presets, animation presets, text effects, transitions, motion effects",
  authors: [{ name: "One Click Presets Pack" }],
  robots: "index, follow",
  openGraph: {
    title: "One Click Presets Pack – Premiere Pro Presets | ₹299",
    description: "Edit faster with the One Click Presets Pack for Premiere Pro. Get character animation, text effects, transitions and motion presets for just ₹299.",
    type: "website",
    url: "https://oneclickpresets.in",
    siteName: "One Click Presets Pack",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Click Presets Pack – Premiere Pro Presets | ₹299",
    description: "Edit faster with the One Click Presets Pack for Premiere Pro.",
  },
  alternates: { canonical: "https://oneclickpresets.in" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
