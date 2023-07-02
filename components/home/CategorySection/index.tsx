import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export function CategorySection() {
  return (
    <section className="relative  my-8 w-full overflow-hidden bg-white py-8 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[rgba(0,0,0,0.5)]">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full">
            <Slider slidesToShow={4} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
              <div>
                <div className="relative mx-auto h-[393px] w-[263px] max-w-[270px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859436/book-publisher/category_new.jpg"
                    className="mx-auto my-0 h-auto max-h-full w-auto max-w-full border-0 border-none align-middle text-sm leading-[1.7] tracking-[0.25px]"
                    alt="Category New Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
                    <h2 className="m-0 text-center text-lg font-semibold uppercase">
                      <a href="/sach-moi" title="New Books" className="text-shadow text-white">
                        New Books
                      </a>
                    </h2>
                    <span className="mt-10px text-base font-semibold uppercase text-white">207 products</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mx-auto h-[393px] w-[263px] max-w-[270px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859472/book-publisher/category_classic.jpg"
                    className="mx-auto my-0 h-auto max-h-full w-auto max-w-full border-0 border-none align-middle text-sm leading-[1.7] tracking-[0.25px]"
                    alt="Category Classic Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
                    <h2 className="m-0 text-center text-lg font-semibold uppercase">
                      <Link href="/catalog/classic" title="Classical Books" className="text-shadow text-white">
                        Classical Books
                      </Link>
                    </h2>
                    <span className="mt-10px text-base font-semibold uppercase text-white">80 products</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mx-auto h-[393px] w-[263px] max-w-[270px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859497/book-publisher/category_link.jpg"
                    className="mx-auto my-0 h-auto max-h-full w-auto max-w-full border-0 border-none align-middle text-sm leading-[1.7] tracking-[0.25px]"
                    alt="Category Popular Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
                    <h2 className="m-0 text-center text-lg font-semibold uppercase">
                      <Link href="/catalog/popular" title="Popular Books" className="text-shadow text-white">
                        Popular Books
                      </Link>
                    </h2>
                    <span className="mt-10px text-base font-semibold uppercase text-white">525 products</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mx-auto h-[393px] w-[263px] max-w-[270px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859514/book-publisher/category_discount.jpg"
                    className="mx-auto my-0 h-auto max-h-full w-auto max-w-full border-0 border-none align-middle text-sm leading-[1.7] tracking-[0.25px]"
                    alt="Category Discount Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
                    <h2 className="m-0 text-center text-lg font-semibold uppercase">
                      <Link href="/catalog/discount" title="Discount Books" className="text-shadow text-white">
                        Discount Books
                      </Link>
                    </h2>
                    <span className="mt-10px text-base font-semibold uppercase text-white">126 products</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mx-auto h-[393px] w-[263px] max-w-[270px]">
                  <Image
                    src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683861724/book-publisher/category_rare.jpg"
                    className="mx-auto my-0 h-auto max-h-full w-auto max-w-full border-0 border-none align-middle text-sm leading-[1.7] tracking-[0.25px]"
                    alt="Category Rare Book"
                    fill
                    sizes="(max-width: 1080px) 25vw"
                  />
                  <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
                    <h2 className="m-0 text-center text-lg font-semibold uppercase">
                      <Link href="/" title="Sách quý hiếm" className="text-shadow text-white">
                        Sách quý hiếm
                      </Link>
                    </h2>
                    <span className="mt-10px text-base font-semibold uppercase text-white">126 products</span>
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
      className="absolute left-0 top-1/2 z-10 h-8 w-8 cursor-pointer bg-gray-300 bg-opacity-50 text-red-700 hover:bg-red-700 hover:bg-opacity-100 hover:text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} className="absolute w-8 translate-y-1/2" />
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 z-10 h-8 w-8 cursor-pointer bg-gray-300 bg-opacity-50 text-red-700 hover:bg-red-700 hover:bg-opacity-100 hover:text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} className="absolute w-8 translate-y-1/2" />
    </div>
  );
}
