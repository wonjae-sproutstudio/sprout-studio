"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight")
        setActiveIdx((i) => ((i ?? 0) + 1) % screenshots.length);
      if (e.key === "ArrowLeft")
        setActiveIdx((i) => ((i ?? 0) - 1 + screenshots.length) % screenshots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIdx, screenshots.length]);

  return (
    <>
      {/* Thumbnail strip */}
      <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory">
        {screenshots.map(({ src, alt, w, h }, i) => (
          <button
            key={src}
            onClick={() => setActiveIdx(i)}
            className="relative shrink-0 snap-start rounded-xl overflow-hidden border border-border shadow-sm cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ height: 200, width: Math.round(200 * w / h) }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="400px"
              className="object-cover transition-transform duration-200 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setActiveIdx(null)}
        >
          {/* Prev */}
          <button
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((activeIdx - 1 + screenshots.length) % screenshots.length);
            }}
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Full image */}
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={screenshots[activeIdx].src}
              alt={screenshots[activeIdx].alt}
              width={screenshots[activeIdx].w}
              height={screenshots[activeIdx].h}
              className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Next */}
          <button
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((activeIdx + 1) % screenshots.length);
            }}
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Close */}
          <button
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            onClick={() => setActiveIdx(null)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
