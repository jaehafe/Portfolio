import "./globals.css";
import React from "react";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ModalProviders from "@/providers/ModalProviders";
import ToastProvider from "./talent/designs/sonner/ToastProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alirezasamadi.com/"),
  title: {
    default: "Ali Reza",
    template: "%s | Portfolio",
  },
  description:
    "I've got 2+ years of web dev experience, mainly focusing on front-end magic with ReactJS.",
  openGraph: {
    title: "Ali Reza",
    description: "Developer, writer, and creator.",
    url: "https://www.alirezasamadi.com/",
    siteName: "Ali Reza",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ldxedhzbfnmrovkzozxc.supabase.co/storage/v1/object/public/project/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-background text-foreground`}>
        <ModalProviders />
        {/* <BgShadow /> */}
        <Navbar />

        {children}

        <Footer />

        <ToastProvider />
      </body>
    </html>
  );
}
