import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import AnimatedCursor from "react-animated-cursor";

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
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="88, 129, 87"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        {children}
      </body>
    </html>
  );
}
