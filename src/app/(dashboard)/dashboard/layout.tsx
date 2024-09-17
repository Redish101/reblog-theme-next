import { Metadata } from "next";

export const metadata: Metadata = {
  title: "控制台 | reblog",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
