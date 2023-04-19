import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
                <div className="relative max-w-[270px] mx-auto">
                  <img
                    src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_1_image.jpg?1632297125018"
                    data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_1_image.jpg?1632297125018"
                    alt="Sách mới"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
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
                    <span className="text-base font-semibold uppercase mt-[10px] text-white">
                      207 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto">
                  <img
                    src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_2_image.jpg?1632297125018"
                    data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_2_image.jpg?1632297125018"
                    alt="Sách văn học kinh điển"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <a
                        href="/van-hoc-kinh-dien"
                        title="Sách văn học kinh điển"
                        className="text-white text-shadow"
                      >
                        Sách văn học kinh điển
                      </a>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-[10px] text-white">
                      80 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto">
                  <img
                    src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_3_image.jpg?1632297125018"
                    data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_3_image.jpg?1632297125018"
                    alt="Sách liên kết xuất bản"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <a
                        href="/sach-lien-ket-xuat-ban-moi"
                        title="Sách liên kết xuất bản"
                        className="text-white text-shadow"
                      >
                        Sách liên kết xuất bản
                      </a>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-[10px] text-white">
                      525 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto">
                  <img
                    src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_4_image.jpg?1632297125018"
                    data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_4_image.jpg?1632297125018"
                    alt="Sách giảm giá"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <a
                        href="/sach-giam-gia"
                        title="Sách giảm giá"
                        className="text-white text-shadow"
                      >
                        Sách giảm giá
                      </a>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-[10px] text-white">
                      126 sản phẩm
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[270px] mx-auto">
                  <img
                    src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_5_image.jpg?1632297125018"
                    data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/category_5_image.jpg?1632297125018"
                    alt="Sách quý hiếm"
                    className="leading-[1.7] tracking-[0.25px] text-sm align-middle max-w-full h-auto max-h-full w-auto mx-auto my-0 border-0 border-none"
                  />
                  <div className="p-4 absolute z-10 bottom-5 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                    <h2 className="m-0 text-lg uppercase font-semibold text-center">
                      <a
                        href="/"
                        title="Sách quý hiếm"
                        className="text-white text-shadow"
                      >
                        Sách quý hiếm
                      </a>
                    </h2>
                    <span className="text-base font-semibold uppercase mt-[10px] text-white">
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
