import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import GetInTouch from "./components/getInTouch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.L. Prasanna Kumar | about",
  description:
    "Exporing Software devolopment opportunities in trending technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <GetInTouch />
      </body>
    </html>
  );
}
