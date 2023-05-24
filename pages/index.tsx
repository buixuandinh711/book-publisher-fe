import { BookCartProps } from "@/components/BookCart";
import { CartModal } from "@/components/CartModal";
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
              "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859350/book-publisher/banner_vietnamese_book.png",
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
              "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859387/book-publisher/banner_combo_discount.png",
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
              "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859567/book-publisher/banner_botton_1.png",
          },
          {
            link: "/",
            title: "Nữ chúa Việt Nam trong lịch sử",
            imageSrc:
              "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859582/book-publisher/banner_bottom_2.png",
          },
        ]}
      />
      <SectionWithCarousel header="Sách giảm giá" booksList={discountBooks} />
      <PrivacySection />
      <CartModal/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  newBooks: BookCartProps[];
  classicBooks: BookCartProps[];
  discountBooks: BookCartProps[];
  popularBooks: BookCartProps[];
}> = async () => {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books/home`);
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
