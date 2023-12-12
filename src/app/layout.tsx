import "./globals.css";
import { Footer } from "@/components/shared/Footer";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/shared/NavBar";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandria",
  description: "Management for your books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-screen justify-between">
          <NavBar name="Alexandria" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
