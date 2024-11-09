import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/Layout/NavBar";
import Container from "@/components/Layout/Container";
import getSiteInfo from "@/utils/siteInfo";
import Footer from "@/components/Layout/Footer";
import ConsoleBadge from "@/components/ConsoleBadge";

const miSans = localFont({
  src: "./font/MiSans-VF.ttf",
});

const site = await getSiteInfo();

export const metadata: Metadata = {
  title: site?.name,
  description: site?.desc,
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={miSans.className}>
        <NextTopLoader />
        <NavBar />
        <Container>{children}</Container>
        <Footer />
        <ConsoleBadge />
      </body>
    </html>
  );
}
