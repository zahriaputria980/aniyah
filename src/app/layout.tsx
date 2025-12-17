import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANIYAH - Produsen Beras Berkualitas Terpercaya",
  description: "ANIYAH adalah produsen beras premium yang menyediakan produk beras berkualitas tinggi untuk setiap rumah tangga. Dapatkan beras pilihan dengan harga terjangkau.",
  keywords: ["ANIYAH", "beras", "produsen beras", "beras premium", "beras organik", "beras berkualitas", "Bekasi", "Jawa Barat"],
  authors: [{ name: "ANIYAH Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ANIYAH - Produsen Beras Berkualitas Terpercaya",
    description: "Menyediakan beras pilihan dengan kualitas premium untuk setiap rumah tangga Indonesia",
    url: "https://aniyah.com",
    siteName: "ANIYAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANIYAH - Produsen Beras Berkualitas",
    description: "Beras berkualitas tinggi dengan harga terjangkau untuk keluarga Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
