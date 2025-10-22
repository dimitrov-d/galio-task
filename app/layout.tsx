import ConvexClientProvider from "@/components/ConvexClientProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gotag = localFont({
  src: "../public/fonts/gotag.regular.ttf",
  variable: "--font-gotag",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galio - Store Insights Dashboard",
  description: "AI-powered email marketing analytics and insights for your Shopify store",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const customStyles = `
  :root {
    --galio-primary: #00FE5D;
    --galio-secondary: #013213;
    --galio-text: #E6FEF9;
    --galio-button-secondary: #123029;
  }
  
  @font-face {
    font-family: 'Gotag Regular';
    src: url('data:font/woff2;base64,') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  .galio-brand {
    font-family: var(--font-gotag), "Gotag Regular", "Gotag Regular Placeholder", sans-serif;
    font-size: 25px;
    letter-spacing: 0.02em;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gotag.variable} antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
