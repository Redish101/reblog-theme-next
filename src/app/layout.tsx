import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar";
import Container from "@/components/Layout/Container";
import getSiteInfo from "@/utils/siteInfo";
import Footer from "@/components/Layout/Footer";
import NextTopLoader from "nextjs-toploader";

const site = await getSiteInfo();

export const metadata: Metadata = {
  title: site?.name,
  description: site?.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <NextTopLoader />
        <NavBar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
