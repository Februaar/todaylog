import type { Metadata } from "next";
import "./globals.css";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";

export const metadata: Metadata = {
  title: "todaylog",
  description: "log your day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
