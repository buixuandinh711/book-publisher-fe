import { BookCarousel } from "@/components/BookCarousel";
import { BookCartProps } from "@/components/BookCart";

const relatedBooks: BookCartProps[] = [
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

export function RelatedBook() {
  return (
    <div className="w-full float-left mb-8 overflow-hidden">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative px-4">
            <div className="w-full float-left">
              <BookCarousel
                header={"Sản phẩm liên quan"}
                booksList={relatedBooks}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
