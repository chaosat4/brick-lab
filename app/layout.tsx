import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bricks Lab | 3D Printing Services - Coming Soon",
  description: "Turning ideas into 3D reality. High-quality 3D prints and custom builds. Delhi based 3D printing services. Coming soon!",
  keywords: ["3D printing", "Delhi", "custom prints", "3D services", "Bricks Lab"],
  authors: [{ name: "Bricks Lab" }],
  openGraph: {
    title: "Bricks Lab | 3D Printing Services",
    description: "Turning ideas into 3D reality. High-quality prints & custom builds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
