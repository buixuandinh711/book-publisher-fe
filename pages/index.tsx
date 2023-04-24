import { BookCartProps } from "@/components/BookCart";
import { CategorySection } from "@/components/home/CategorySection";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeSlider } from "@/components/home/HomeSlider";
import { ImageBanner } from "@/components/home/ImageBanner";
import { PrivacySection } from "@/components/home/PrivacySection";
import { SectionWithCarousel } from "@/components/home/SectionWithCarousel";

const newBoosList: BookCartProps[] = [
  {
    id: 1,
    name: "Tự sự một người đặc biệt",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/tu-su-mot-nguoi-dac-biet.jpg?v=1666687371933",
    originalPrice: 88000,
    discountPrice: 70400,
    discountPercent: 20,
  },
  {
    id: 2,
    name: "Truyện ngắn hay 2022",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/truyen-ngan-hay-2022.png?v=1663055389627",
    originalPrice: 120000,
    discountPrice: 96000,
    discountPercent: 20,
  },
];

export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeBanner />
      <SectionWithCarousel header="Sách mới" booksList={newBoosList} />
      <ImageBanner
        bannersList={[
          {
            link: "/",
            title: "Tinh hoa văn chương Việt",
            imageSrc:
              "https://bizweb.dktcdn.net/thumb/2048x2048/100/370/339/themes/744741/assets/large_banner_image_1.jpg?1632297125018",
          },
        ]}
      />
      <CategorySection />
      <PrivacySection />
    </>
  );
}
