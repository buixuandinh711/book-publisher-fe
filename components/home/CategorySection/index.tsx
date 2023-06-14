import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export function CategorySection() {
  return (
    <section className="w-full float-left overflow-hidden py-8 my-8 bg-white relative before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[rgba(0,0,0,0.5)]">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full">
            <Slider
              slidesToShow={4}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              <div>
                <div className="relative max-w-[270px] mx-auto w-[263px] h-[393px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859436/book-publisher/category_new.jpg"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                    alt="Category New Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <a
                        href="/sach-moi"
                        title="Sách mới"
                        className="text-white text-shadow"
                      >
                        Sách mới
                      </a>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-10px text-white">
                      207 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto w-[263px] h-[393px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859472/book-publisher/category_classic.jpg"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                    alt="Category Classic Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <Link
                        href="/catalog/classic"
                        title="Sách văn học kinh điển"
                        className="text-white text-shadow"
                      >
                        Sách văn học kinh điển
                      </Link>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-10px text-white">
                      80 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto w-[263px] h-[393px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859497/book-publisher/category_link.jpg"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                    alt="Category Popular Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <Link
                        href="/catalog/popular"
                        title="Sách liên kết xuất bản"
                        className="text-white text-shadow"
                      >
                        Sách liên kết xuất bản
                      </Link>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-10px text-white">
                      525 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto w-[263px] h-[393px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859514/book-publisher/category_discount.jpg"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                    alt="Category Discount Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <Link
                        href="/catalog/discount"
                        title="Sách giảm giá"
                        className="text-white text-shadow"
                      >
                        Sách giảm giá
                      </Link>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-10px text-white">
                      126 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto w-[263px] h-[393px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683861724/book-publisher/category_rare.jpg"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                    alt="Category Rare Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <Link
                        href="/"
                        title="Sách quý hiếm"
                        className="text-white text-shadow"
                      >
                        Sách quý hiếm
                      </Link>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-10px text-white">
                      126 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 z-10 w-8 h-8 bg-gray-300 bg-opacity-50 cursor-pointer hover:bg-red-700 hover:bg-opacity-100 text-red-700 hover:text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="absolute translate-y-1/2 w-8"
      />
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 z-10 w-8 h-8 bg-gray-300 bg-opacity-50 cursor-pointer hover:bg-red-700 hover:bg-opacity-100 text-red-700 hover:text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
        className="absolute translate-y-1/2 w-8"
      />
    </div>
  );
}
