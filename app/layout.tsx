import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Long Hoang",
  metadataBase: new URL("https://www.hthanhlong97.ca"),
  description: "Software Engineer - Open to work",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Long Hoang",
    description: "Software Engineer - Open to work",
    images: [
      {
        url: "/images/personal.jpg",
      },
    ],
    siteName: "Long Hoang",
    locale: "ca_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Hoang",
    description: "Software Engineer - Open to work",
    images: "/images/personal.jpg",
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
