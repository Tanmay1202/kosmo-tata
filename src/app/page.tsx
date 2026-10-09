import CinematicHeroCarousel from "@/components/home/CinematicHeroCarousel";
import HomeContent from "@/components/home/HomeContent";
import DealershipConversionHub from "@/components/home/DealershipConversionHub";
import HomeYoutubeSection from "@/components/home/HomeYoutubeSection";
import HomeTestDriveSection from "@/components/home/HomeTestDriveSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <CinematicHeroCarousel />
      <HomeContent />
      <DealershipConversionHub />
      <HomeYoutubeSection />
      <HomeTestDriveSection />
    </div>
  );
}
