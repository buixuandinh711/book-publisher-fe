import { BookCartProps } from "@/components/BookCart";
import { CategorySection } from "@/components/home/CategorySection";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeSlider } from "@/components/home/HomeSlider";
import { ImageBanner } from "@/components/home/ImageBanner";
import { PrivacySection } from "@/components/home/PrivacySection";
import { SectionWithCarousel } from "@/components/home/SectionWithCarousel";
import { GetServerSideProps } from "next";

export default function Home({
  newBooks,
  classicBooks,
  discountBooks,
  popularBooks,
}: {
  newBooks: BookCartProps[];
  classicBooks: BookCartProps[];
  discountBooks: BookCartProps[];
  popularBooks: BookCartProps[];
}) {
  console.log("get data", newBooks, classicBooks, discountBooks, popularBooks);

  return (
    <>
      <HomeSlider />
      <HomeBanner />
      <SectionWithCarousel header="Sách mới" booksList={newBooks} />
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
      <SectionWithCarousel
        header="Văn học kinh điển"
        booksList={classicBooks}
      />
      <ImageBanner
        bannersList={[
          {
            link: "/",
            title: "combo sách giảm giá",
            imageSrc:
              "https://bizweb.dktcdn.net/thumb/2048x2048/100/370/339/themes/744741/assets/large_banner_image_2.jpg?1632297125018",
          },
        ]}
      />
      <CategorySection />
      <SectionWithCarousel header="Sách phổ biến" booksList={popularBooks} />
      <ImageBanner
        bannersList={[
          {
            link: "/",
            title: "Danh tướng Việt Nam",
            imageSrc:
              "https://bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_mid_1_image.jpg?1632297125018",
          },
          {
            link: "/",
            title: "Nữ chúa Việt Nam trong lịch sử",
            imageSrc:
              "https://bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_mid_2_image.jpg?1632297125018",
          },
        ]}
      />
      <SectionWithCarousel header="Sách giảm giá" booksList={discountBooks} />
      <PrivacySection />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  newBooks: BookCartProps[];
  classicBooks: BookCartProps[];
  discountBooks: BookCartProps[];
  popularBooks: BookCartProps[];
}> = async () => {
  const res = await fetch("http://127.0.0.1:5000/books/home");
  const data = await res.json();

  return {
    props: {
      newBooks: data.newBooks,
      classicBooks: data.classicBooks,
      discountBooks: data.discountBooks,
      popularBooks: data.popularBooks,
    },
  };
};
