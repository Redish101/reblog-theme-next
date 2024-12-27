import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import Container from "@/components/Layout/Container";
import getSiteInfo from "@/utils/siteInfo";
import Footer from "@/components/Layout/Footer";
import ConsoleBadge from "@/components/ConsoleBadge";
import NavBarWrapper from "@/components/Layout/NavBarWrapper";

// const miSans = localFont({
//   src: "./font/MiSans-VF.woff2",
// });

const site = await getSiteInfo();

export const metadata: Metadata = {
  title: site?.name,
  description: site?.desc,
  icons: "/favicon.ico",
  openGraph: {
    title: site?.name,
    description: site?.desc,
    url: site?.url,
    siteName: site?.name,
    locale: "zh-CN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <NextTopLoader />
        <NavBarWrapper />
        <Container>{children}</Container>
        <Footer />
        <ConsoleBadge />
      </body>
    </html>
  );
}
