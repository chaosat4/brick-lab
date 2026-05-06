import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bricks Lab — Hardware & Software Studio · New Delhi",
  description:
    "A working lab for builders. End-to-end 3D printing, prototyping, and custom software — websites, native apps, e-commerce, ERP, IoT and AI. Based in New Delhi.",
  keywords: [
    "3D printing", "prototyping", "MVP", "Delhi", "hardware",
    "software development", "ERP", "IoT", "AI", "Bricks Lab",
  ],
  authors: [{ name: "Bricks Lab" }],
  openGraph: {
    title: "Bricks Lab — Hardware & Software Studio",
    description:
      "Turning ideas into reality. End-to-end hardware prototyping and custom software solutions.",
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
