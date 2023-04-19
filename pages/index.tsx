import { CategorySection } from "@/components/home/CategorySection";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeSlider } from "@/components/home/HomeSlider";
import { PrivacySection } from "@/components/home/PrivacySection";
import { SectionWithCarousel } from "@/components/home/SectionWithCarousel";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeBanner />
      <SectionWithCarousel />
      <CategorySection />
      <PrivacySection />
    </>
  );
}
