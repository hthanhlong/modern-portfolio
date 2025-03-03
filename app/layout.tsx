import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Long Hoang",
  description: "Software Engineer - Open to work",
  icons: {
    icon: "/favicon.ico",
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
