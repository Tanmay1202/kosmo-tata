"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ThreeViewer360 from "@/components/showroom/ThreeViewer360";
import { vehicles } from "@/data/vehicles";

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
  { src: "/assets/images/cars/aeris-interior-ai.jpg", title: "Aeris concept interior", category: "Interiors" },
  { src: "/assets/images/cars/aeris-interior-petrol_$IMG-1326-721-D$_fit_crop_fmt_avif-alpha.avif", title: "Aeris cabin", category: "Interiors" },
  { src: "/assets/images/cars/altroz-audio-ai.jpg", title: "Altroz audio experience", category: "Interiors" },
  { src: "/assets/images/cars/curvv-interior-ai.jpg", title: "Curvv concept interior", category: "Interiors" },
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
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tata-blue"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedMedia.title}
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            className="absolute right-4 top-4 z-20 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
            aria-label="Close gallery view"
          >
            Close
          </button>
          <div
            className="relative flex h-full max-h-[85vh] w-full max-w-6xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="mb-3 text-center text-lg font-semibold text-white">
              {selectedMedia.title}
            </h2>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-slate-950">
              {isRotation(selectedMedia) ? (
                <ThreeViewer360
                  fallbackImage={selectedMedia.frames[0]}
                  rotationArray={selectedMedia.frames}
                />
              ) : (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
