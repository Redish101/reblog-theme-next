import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar";
import Container from "@/components/Layout/Container";
import getSiteInfo from "@/utils/siteInfo";

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
        <NavBar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
