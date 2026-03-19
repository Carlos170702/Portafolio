"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface Props {
  disabled?: boolean;
}

const SECTION_SELECTOR = "main section";
const NODE_POSITIONS = [20, 40, 60, 80];

export default function SectionScrollButton({ disabled = false }: Readonly<Props>) {
  const [direction, setDirection] = useState<"down" | "up" | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const getSections = useCallback((): HTMLElement[] => {
    return Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
  }, []);

  const getNextSectionTop = useCallback((): number | null => {
    const sections = getSections();
    if (sections.length === 0) return null;

    const currentY = window.scrollY;
    const threshold = currentY + 24;

    const nextSection = sections.find((section) => {
      const sectionTop = section.getBoundingClientRect().top + currentY;
      return sectionTop > threshold;
    });

    if (!nextSection) return null;
    return nextSection.getBoundingClientRect().top + currentY;
  }, [getSections]);

  const getPreviousSectionTop = useCallback((): number | null => {
    const sections = getSections();
    if (sections.length === 0) return null;

    const currentY = window.scrollY;
    const threshold = currentY - 24;

    const previousSections = sections.filter((section) => {
      const sectionTop = section.getBoundingClientRect().top + currentY;
      return sectionTop < threshold;
    });

    if (previousSections.length === 0) return null;

    const previousSection = previousSections[previousSections.length - 1];
    return previousSection.getBoundingClientRect().top + currentY;
  }, [getSections]);

  const updateButtonState = useCallback(() => {
    if (disabled) {
      setDirection(null);
      setScrollProgress(0);
      return;
    }

    const currentY = window.scrollY;
    const viewportBottom = currentY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScrollableDistance = Math.max(documentHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max((currentY / maxScrollableDistance) * 100, 0), 100);
    setScrollProgress(progress);
    const isAtBottom = viewportBottom >= documentHeight - 8;

    if (isAtBottom) {
      const prevTop = getPreviousSectionTop();
      setDirection(prevTop !== null ? "up" : null);
      return;
    }

    const nextTop = getNextSectionTop();
    if (nextTop !== null) {
      setDirection("down");
      return;
    }

    const prevTop = getPreviousSectionTop();
    setDirection(prevTop !== null ? "up" : null);
  }, [disabled, getNextSectionTop, getPreviousSectionTop]);

  useEffect(() => {
    updateButtonState();

    const onScroll = () => updateButtonState();
    const onResize = () => updateButtonState();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateButtonState]);

  const shouldRender = useMemo(() => !disabled && direction !== null, [disabled, direction]);

  if (!shouldRender) return null;

  const handleScrollNext = () => {
    const isGoingDown = direction !== "up";
    const targetTop = isGoingDown ? getNextSectionTop() : 0;
    if (targetTop === null) return;

    window.scrollTo({
      top: Math.max(targetTop - 16, 0),
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-24 bottom-6 right-7 z-50 flex w-10 flex-col items-center">
      {/* Track */}
      <div className="relative mb-3 w-[6px] flex-1 rounded-full bg-[#2F5D3A]/10 shadow-inner">
        {/* Fill */}
        <span
          className="absolute top-0 left-0 right-0 rounded-full bg-[#2F5D3A] transition-all duration-200 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Bamboo nodes */}
        {NODE_POSITIONS.map((pos) => (
          <span
            key={pos}
            className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[3px] rounded-full transition-colors duration-300"
            style={{
              top: `${pos}%`,
              backgroundColor: scrollProgress >= pos ? "#1a3d24" : "rgba(47,93,58,0.25)",
            }}
          />
        ))}

        {/* Progress marker */}
        <span
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-3 w-3 rounded-full border-2 border-[#2F5D3A] bg-white shadow-[0_0_6px_rgba(47,93,58,0.4)] transition-all duration-200 ease-out"
          style={{ top: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll button */}
      <button
        type="button"
        onClick={handleScrollNext}
        aria-label={direction === "up" ? "Subir al inicio" : "Bajar a la siguiente seccion"}
        className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-[#2F5D3A]/20 shadow-[0_4px_12px_rgba(47,93,58,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(47,93,58,0.25)] hover:border-[#2F5D3A]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5D3A]/50"
      >
        <Image
          src="/images/go-down.webp"
          alt={direction === "up" ? "Subir" : "Bajar"}
          width={28}
          height={28}
          className={`pointer-events-none relative z-10 transition-transform duration-300 ${direction === "up" ? "rotate-180 group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
        />
      </button>
    </div>
  );
}
