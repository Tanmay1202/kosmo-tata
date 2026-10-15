"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, useCallback } from "react";
import ThreeViewer360 from "@/components/showroom/ThreeViewer360";
import { vehicles } from "@/data/vehicles";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryCategory =
  | "Vehicles"
  | "Interiors"
  | "Lifestyle"
  | "Features"
  | "360 Views";

type GalleryImage = {
  src: string;
  title: string;
  category: Exclude<GalleryCategory, "360 Views">;
};

type GalleryRotation = {
  title: string;
  category: "360 Views";
  frames: string[];
};

type GalleryMedia = GalleryImage | GalleryRotation;

const galleryImages: GalleryImage[] = [
  { src: "/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Aeris exterior", category: "Vehicles" },
  { src: "/assets/images/cars/altroz-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Altroz exterior", category: "Vehicles" },
  { src: "/assets/images/cars/d-curvv-banner-kv_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Curvv exterior", category: "Vehicles" },
  { src: "/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Harrier exterior", category: "Vehicles" },
  { src: "/assets/images/cars/nexon-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Nexon exterior", category: "Vehicles" },
  { src: "/assets/images/cars/punch-new-revised-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Punch exterior", category: "Vehicles" },
  { src: "/assets/images/cars/safari-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Safari exterior", category: "Vehicles" },
  { src: "/assets/images/cars/sierra-horses_$B-1228-488-D$_fit_crop_fmt_avif-alpha.avif", title: "Sierra in the wild", category: "Vehicles" },
  { src: "/assets/images/cars/tiago-new-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif", title: "Tiago exterior", category: "Vehicles" },
  { src: "/assets/images/cars/luxury_suv_panoramic_sunroof_stars.jpg", title: "Panoramic night sky", category: "Vehicles" },
  { src: "/assets/images/cars/aeris-interior-petrol_$IMG-1326-721-D$_fit_crop_fmt_avif-alpha.avif", title: "Aeris cabin", category: "Interiors" },
  { src: "/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif", title: "Panoramic dashboard", category: "Interiors" },
  { src: "/assets/images/cars/premium-ventilated-leatherette-seats-1_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif", title: "Ventilated leatherette seats", category: "Interiors" },
  { src: "/assets/images/lifestyle/harrier-product-lifestyle-resized.jpg", title: "Harrier lifestyle", category: "Lifestyle" },
  { src: "/assets/images/lifestyle/lifestyle-1.jpg", title: "Curvv lifestyle", category: "Lifestyle" },
  { src: "/assets/images/lifestyle/new-punch-lifestyle-first.png", title: "Punch lifestyle", category: "Lifestyle" },
  { src: "/assets/images/lifestyle/safari-interior-lifestyle-resized-new.jpg", title: "Safari interior", category: "Lifestyle" },
  { src: "/assets/images/lifestyle/terrain-repsonse.jpg", title: "Terrain response", category: "Lifestyle" },
  { src: "/assets/images/features/360-svs-hd-camera.avif", title: "360° surround-view camera", category: "Features" },
  { src: "/assets/images/features/connected-vehicle-technology-with-ira.avif", title: "Connected vehicle technology", category: "Features" },
  { src: "/assets/images/features/electronic-stability-program-esp-1.avif", title: "Electronic stability program", category: "Features" },
];

const filters: Array<"All" | GalleryCategory> = [
  "All",
  "Vehicles",
  "Interiors",
  "Lifestyle",
  "Features",
  "360 Views",
];

function isRotation(media: GalleryMedia): media is GalleryRotation {
  return "frames" in media;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  const rotations = useMemo<GalleryRotation[]>(() => {
    const sequences = new Map<string, GalleryRotation>();

    for (const vehicle of vehicles) {
      for (const color of vehicle.colors) {
        if (!color.rotationArray || color.rotationArray.length < 2) continue;

        const firstFrame = color.rotationArray[0];
        if (!sequences.has(firstFrame)) {
          sequences.set(firstFrame, {
            title: `${vehicle.name} · ${color.name} 360° view`,
            category: "360 Views",
            frames: color.rotationArray,
          });
        }
      }
    }

    return [...sequences.values()];
  }, []);

  const media: GalleryMedia[] = [...galleryImages, ...rotations];
  const visibleMedia =
    activeFilter === "All"
      ? media
      : media.filter((item) => item.category === activeFilter);

  const selectedMediaIndex = useMemo(() => {
    if (!selectedMedia) return -1;
    return visibleMedia.findIndex(
      (m) => m.title === selectedMedia.title && m.category === selectedMedia.category
    );
  }, [selectedMedia, visibleMedia]);

  const goToPrevMedia = useCallback(() => {
    if (selectedMediaIndex === -1 || visibleMedia.length <= 1) return;
    const prevIndex = (selectedMediaIndex - 1 + visibleMedia.length) % visibleMedia.length;
    setSelectedMedia(visibleMedia[prevIndex]);
  }, [selectedMediaIndex, visibleMedia]);

  const goToNextMedia = useCallback(() => {
    if (selectedMediaIndex === -1 || visibleMedia.length <= 1) return;
    const nextIndex = (selectedMediaIndex + 1) % visibleMedia.length;
    setSelectedMedia(visibleMedia[nextIndex]);
  }, [selectedMediaIndex, visibleMedia]);

  useEffect(() => {
    if (!selectedMedia) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      } else if (e.key === "ArrowLeft") {
        goToPrevMedia();
      } else if (e.key === "ArrowRight") {
        goToNextMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia, goToPrevMedia, goToNextMedia]);

  return (
    <div className="min-h-screen bg-white px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-tata-blue">
            Kosmo Tata
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore our vehicle range, interiors, lifestyle imagery, featured
            technology, and interactive 360° views.
          </p>
        </header>

        <nav
          aria-label="Filter gallery media"
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </nav>

        <p className="mb-4 text-sm text-slate-500" aria-live="polite">
          Showing {visibleMedia.length} {visibleMedia.length === 1 ? "item" : "items"}
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMedia.map((item) => {
            const thumbnail = isRotation(item) ? item.frames[0] : item.src;

            return (
              <button
                key={`${item.category}-${item.title}`}
                type="button"
                onClick={() => setSelectedMedia(item)}
                className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tata-blue"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-16 text-white">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-white/75">
                    {item.category}
                  </span>
                  <span className="mt-1 block text-lg font-semibold">{item.title}</span>
                  {isRotation(item) && (
                    <span className="mt-1 block text-sm text-white/80">
                      Drag to explore {item.frames.length} frames
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedMedia.title}
          onClick={() => setSelectedMedia(null)}
        >
          {/* Main Modal Dialog Box */}
          <div
            className="relative flex flex-col w-full max-w-6xl h-[92dvh] max-h-[92dvh] sm:h-[88dvh] sm:max-h-[88dvh] bg-slate-950/95 rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header: Title, Category, and Close Button */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-slate-900/60 shrink-0">
              <div className="min-w-0 flex-1">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-tata-blue block">
                  {selectedMedia.category}
                </span>
                <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white truncate">
                  {selectedMedia.title}
                </h2>
              </div>

              {/* Close Button — prominent and touch-friendly */}
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-medium text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition-all touch-manipulation"
                aria-label="Close photo view"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden min-[400px]:inline">Close</span>
              </button>
            </div>

            {/* Media Canvas Container — guarantees 100% visible image without cutoff on mobile */}
            <div className="relative flex-1 w-full min-h-0 bg-black/90 flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
              {isRotation(selectedMedia) ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <ThreeViewer360
                    fallbackImage={selectedMedia.frames[0]}
                    rotationArray={selectedMedia.frames}
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </div>
              )}

              {/* Left / Right Navigation Controls */}
              {visibleMedia.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevMedia();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/25 backdrop-blur-sm transition-all duration-200 active:scale-95 touch-manipulation focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextMedia();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/25 backdrop-blur-sm transition-all duration-200 active:scale-95 touch-manipulation focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  </button>
                </>
              )}
            </div>

            {/* Footer Bar: Instructional hint & counter */}
            <div className="flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 border-t border-white/10 bg-slate-900/60 text-xs sm:text-sm text-slate-400 shrink-0">
              <span className="truncate">
                {isRotation(selectedMedia)
                  ? `Interactive 360° · Drag horizontally to rotate`
                  : "Tap arrows to browse · Full original view"}
              </span>
              <span className="shrink-0 ml-2 font-mono text-[11px] sm:text-xs text-white/70">
                {selectedMediaIndex + 1} / {visibleMedia.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
