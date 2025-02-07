import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import Container from "@/components/layout/container";
import getSiteInfo from "@/utils/siteInfo";
import Footer from "@/components/layout/footer";
import ConsoleBadge from "@/components/console-badge";
import NavBarWrapper from "@/components/layout/navbar-wrapper";

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
