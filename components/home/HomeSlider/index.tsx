import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

export function HomeSlider() {
  return (
    <section className=" mb-0 w-full">
      <section className=" w-full">
        <div className=" w-full">
          <div className="relative overflow-hidden">
            <Slider infinite autoplay autoplaySpeed={1000} pauseOnHover={false} arrows slidesToShow={1}>
              <div>
                <div className="item image-item">
                  <Link href="/catalog" title="Tinh hoa văn chương Việt">
                    <Image
                      alt="tinh-hoa-van-chuong-viet"
                      src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1686543293/book-publisher/slider_thvcv.jpg"
                      placeholder="blur"
                      blurDataURL="/image-loader.gif"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="item image-item">
                  <Link href="https://nxbvanhoc.com.vn/catalog/classic" title="Classical Books">
                    <Image
                      alt="Classical Books"
                      src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1686543335/book-publisher/slider_vhkd.jpg"
                      placeholder="blur"
                      blurDataURL="/image-loader.gif"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="item image-item">
                  <Link href="/catalog" title="Truyện cổ tích kinh điển">
                    <Image
                      alt="tinh-hoa-van-chuong-viet"
                      src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1686543364/book-publisher/slider_ctkd.jpg"
                      placeholder="blur"
                      blurDataURL="/image-loader.gif"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="item image-item">
                  <Link href="/catalog">
                    <Image
                      alt=""
                      src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1686543386/book-publisher/slider_tddtpbn.jpg"
                      placeholder="blur"
                      blurDataURL="/image-loader.gif"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
}
