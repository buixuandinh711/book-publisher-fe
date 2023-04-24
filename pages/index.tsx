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
  {
    id: 3,
    name: "Sách nặng hồn thanh nhẹ",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/sac-nang-hon-thanh-nhe-bia-1.jpg?v=1669364038113",
    originalPrice: 88000,
    discountPrice: 70400,
    discountPercent: 20,
  },
  {
    id: 4,
    name: "Từ sự mất ngủ của ruồi",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/tu-su-mat-ngu-cua-ruoi.png?v=1661920070393",
    originalPrice: 66000,
    discountPrice: 52800,
    discountPercent: 20,
  },
  {
    id: 5,
    name: "Nông dân với địa chủ",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/1.png?v=1661748946813",
    originalPrice: 69000,
    discountPrice: 55200,
    discountPercent: 20,
  },
  {
    id: 6,
    name: "Đới Đăng",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/20220722-101045.jpg?v=1658459565027",
    originalPrice: 260000,
    discountPrice: 208000,
    discountPercent: 20,
  },
];

const classicalBooksList: BookCartProps[] = [
  {
    id: 11,
    name: "Thép đã tôi thế đấy",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/thep-da-toi-the-day-minh-thang.jpg?v=1660103564230",
    originalPrice: 120000,
    discountPrice: 96000,
    discountPercent: 20,
  },
  {
    id: 12,
    name: "Không gia đình",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/khong-gia-dinh-2020.jpg?v=1653553421020",
    originalPrice: 184000,
    discountPrice: 92000,
    discountPercent: 50,
  },
  {
    id: 13,
    name: "Cuốn theo chiều gió",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/cuon-theo-chieu-gio.gif?v=1647851507177",
    originalPrice: 120000,
    discountPrice: 96000,
    discountPercent: 20,
  },
  {
    id: 14,
    name: "Chiến hữu của Jehu",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/chien-huu-cua-jehu.jpg?v=1679041056807",
    originalPrice: 200000,
    discountPrice: 250000,
    discountPercent: 20,
  },
];

const linkBooksList: BookCartProps[] = [
  {
    id: 21,
    name: "Combo Những câu chuyện bồi dưỡng các chỉ số IQ - LQ - MQ - AQ - EQ",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/1e418a1b-9bf9-4f7a-8144-dd98bb71246e.jpg?v=1678782790953",
    originalPrice: 221000,
    discountPrice: 340000,
    discountPercent: 35,
  },
  {
    id: 22,
    name: "Hậu cung Như Ý truyện (Tập 1)",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/hau-cung-nhu-y-truyen-t1.jpg?v=1678779833880",
    originalPrice: 163000,
    discountPrice: 229000,
    discountPercent: 30,
  },
  {
    id: 23,
    name: "Siêu lí trí của đức Phật: Để mọi lo lắng đều tan biến",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/de-moi-lo-lang-deu-tan-bien.jpg?v=1678353014723",
    originalPrice: 69600,
    discountPrice: 87000,
    discountPercent: 20,
  },
  {
    id: 24,
    name: "Mẹ làm gì có ước mơ",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/me-lam-gi-co-uoc-mo-fb.jpg?v=1678183186337",
    originalPrice: 71200,
    discountPrice: 95000,
    discountPercent: 20,
  },
];

const discountBooksList: BookCartProps[] = [
  {
    id: 31,
    name: "Combo sách Dostoevsky",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/combo-dostoevsky.jpg?v=1630425669657",
    originalPrice: 500000,
    discountPrice: 1250000,
    discountPercent: 40,
  },
  {
    id: 32,
    name: "Wandeuk cậu học trò nổi loạn",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/wandeuk-cau-hoc-tro-noi-loan.jpg?v=1653626662267",
    originalPrice: 27600,
    discountPrice: 60000,
    discountPercent: 60,
  },
  {
    id: 33,
    name: "Trên sa mạc và trong rừng thẳm",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/tren-sa-mac-va-trong-rung-tham.jpg?v=1653618041020",
    originalPrice: 69000,
    discountPrice: 115000,
    discountPercent: 40,
  },
  {
    id: 34,
    name: "Trọn bộ Tinh hoa văn chương Việt",
    imageSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/tinh-hoa-vc-viet.jpg?v=1630913707490",
    originalPrice: 1200000,
    discountPrice: 2200000,
    discountPercent: 45,
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
      <SectionWithCarousel
        header="Văn học kinh điển"
        booksList={classicalBooksList}
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
      <SectionWithCarousel
        header="Sách liên kết xuất bản"
        booksList={linkBooksList}
      />
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
      <SectionWithCarousel
        header="Sách giảm giá"
        booksList={discountBooksList}
      />
      <PrivacySection />
    </>
  );
}
