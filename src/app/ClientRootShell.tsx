"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import SectionScrollButton from "@/components/SectionScrollButton/SectionScrollButton";

export default function ClientRootShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/home" || pathname.startsWith("/home/");

  useEffect(() => {
    if (!isHomeRoute) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [isHomeRoute]);

  return (
    <>
      {!isHomeRoute && <NavBar />}
      <div className="max-w-[1200px] mx-auto">{children}</div>
      <SectionScrollButton disabled={isHomeRoute} />
    </>
  );
}

