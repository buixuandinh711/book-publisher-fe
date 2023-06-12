import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export function RecentBook() {
  return (
    <div className="w-full float-left mb-8 overflow-hidden">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative px-4">
            <div className="w-full float-left">
              <div className="w-full float-left">
                <div className="w-full float-left">
                  <h2 className="mt-0 mb-8 mx-0 text-base relative w-full float-left font-bold text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-gray-300">
                    <a
                      href="sach-giam-gia"
                      title="Sách giảm giá"
                      className="font-bold text-lg py-[5px] pr-[15px] relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-[15px] after:-bottom-[3px] after:h-[3px]"
                    >
                      <span>Bạn đã xem</span>
                    </a>
                  </h2>
                </div>
                <div className="w-full float-left">
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
    <div className="relative overflow-hidden bg-white mx-auto">
      <div className="w-full float-left relative">
        <a
          href="/combo-nhung-cau-chuyen-boi-duong-cac-chi-so-iq-lq-mq-aq-eq"
          className="h-32 flex justify-center items-center text-center"
        >
          <Image
            alt="NHÀ XUẤT BẢN VĂN HỌC"
            src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188455/book-publisher/tho-ho-xuan-huong.jpg"
            placeholder="blur"
            blurDataURL="/image-loader.gif"
            width="0"
            height="0"
            sizes="10vw"
            className="w-auto mx-auto block h-auto max-w-full max-h-full"
          />
        </a>
      </div>
      <div className="min-h-auto w-full float-left z-10 relative pb-10px">
        <h3 className="text-xs min-h-auto overflow-hidden text-ellipsis line-clamp-2 w-full float-left text-red-700 font-bold text-center my-10px px-2">
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
