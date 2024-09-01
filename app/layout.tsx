import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Alvarez",
  description: "My small corner of the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
