import type { Metadata } from "next";
import NavBar from "@/components/Layout/NavBar";
import Container from "@/components/Layout/Container";
import getSiteInfo from "@/utils/siteInfo";
import Footer from "@/components/Layout/Footer";

const site = await getSiteInfo();

export const metadata: Metadata = {
  title: site?.name,
  description: site?.desc,
  icons: "/favicon.ico"
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
