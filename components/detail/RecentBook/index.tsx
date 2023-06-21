import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export function RecentBook() {
  return (
    <div className="float-left mb-8 w-full overflow-hidden">
      <div className="container">
        <div className="-mx-4">
          <div className="relative float-left w-full px-4">
            <div className="float-left w-full">
              <div className="float-left w-full">
                <div className="float-left w-full">
                  <h2 className="relative float-left mx-0 mb-8 mt-0 w-full text-base font-bold text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-gray-300">
                    <a
                      href="sach-giam-gia"
                      title="Sách giảm giá"
                      className="relative py-[5px] pr-[15px] text-lg font-bold text-red-700 after:absolute after:-bottom-[3px] after:left-0 after:right-[15px] after:h-[3px] after:border-b-[3px] after:border-b-red-700"
                    >
                      <span>Bạn đã xem</span>
                    </a>
                  </h2>
                </div>
                <div className="float-left w-full">
                  <Slider slidesToShow={8} infinite={false}>
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="relative mx-auto overflow-hidden bg-white">
      <div className="relative float-left w-full">
        <a href="/combo-nhung-cau-chuyen-boi-duong-cac-chi-so-iq-lq-mq-aq-eq" className="flex h-32 items-center justify-center text-center">
          <Image
            alt="NHÀ XUẤT BẢN VĂN HỌC"
            src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188455/book-publisher/tho-ho-xuan-huong.jpg"
            placeholder="blur"
            blurDataURL="/image-loader.gif"
            width="0"
            height="0"
            sizes="10vw"
            className="mx-auto block h-auto max-h-full w-auto max-w-full"
          />
        </a>
      </div>
      <div className="relative z-10 float-left min-h-auto w-full pb-10px">
        <h3 className="float-left my-10px line-clamp-2 min-h-auto w-full overflow-hidden text-ellipsis px-2 text-center text-xs font-bold text-red-700">
          <a
            href="/combo-nhung-cau-chuyen-boi-duong-cac-chi-so-iq-lq-mq-aq-eq"
            title="Combo Những câu chuyện bồi dưỡng các chỉ số IQ - LQ - MQ - AQ - EQ"
          >
            Combo Những câu chuyện bồi dưỡng các chỉ số IQ - LQ - MQ - AQ - EQ
          </a>
        </h3>
      </div>
    </div>
  );
}
