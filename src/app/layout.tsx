import { DescriptionInicio } from "@/assets/common/messages";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientRootShell from "./ClientRootShell";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portafolio-Carlos Daniel",
  description: DescriptionInicio,
  icons: { icon: "/images/logo.webp",  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased overflow-x-hidden`}
      >
        <main className="w-screen min-h-screen">
          <div className="container mx-auto min-h-screen flex flex-col px-5">
            <ClientRootShell>{children}</ClientRootShell>
          </div>
        </main>
      </body>
    </html>
  );
}
