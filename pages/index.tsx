import { CategorySection } from "@/components/CategorySection";
import { Header } from "@/components/Header";
import { HomeBanner } from "@/components/HomeBanner";
import { HomeSlider } from "@/components/HomeSlider";
import { SectionWithCarousel } from "@/components/SectionWithCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <HomeBanner />
      <SectionWithCarousel />
      <CategorySection />
    </>
  );
}
