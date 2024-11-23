import { DescriptionInicio } from "@/assets/common/messages";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { NavBar } from "./components/NavBar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Portafolio-Carlos Daniel",
  description: DescriptionInicio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased font-sora overflow-x-hidden`}
      >
        <main className="w-screen min-h-screen">
          <div className="container mx-auto min-h-screen flex flex-col px-5">
            <NavBar />
            <div className="max-w-[1200px] mx-auto">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
