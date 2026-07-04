"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % images.length
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll while the lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, images.length]);

  if (!images.length) return null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-video overflow-hidden rounded-lg border border-border-hairline bg-white/[0.03] transition-colors hover:border-cyan/40"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-void/0 opacity-0 transition-all duration-200 group-hover:bg-void/40 group-hover:opacity-100">
              <ZoomIn size={18} className="text-white" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-border-hairline bg-white/[0.05] p-2 text-white transition-colors hover:text-cyan"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : (prev - 1 + images.length) % images.length
              );
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border-hairline bg-white/[0.05] p-2 text-white transition-colors hover:text-cyan sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border-hairline">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {images[activeIndex].caption && (
              <p className="font-mono text-xs text-ink-secondary">
                {images[activeIndex].caption} · {activeIndex + 1}/{images.length}
              </p>
            )}
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : (prev + 1) % images.length
              );
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border-hairline bg-white/[0.05] p-2 text-white transition-colors hover:text-cyan sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
