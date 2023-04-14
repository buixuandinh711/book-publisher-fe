import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "absolute",
        background: "red",
        "z-index": "100",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        "z-index": "100",
      }}
      onClick={onClick}
    />
  );
}

export function HomeSlider() {
  return (
    <section className="w-full float-left mb-0">
      <section className="w-full float-left">
        <div className="w-full float-left">
          <div className="relative overflow-hidden">
            <Slider
              infinite
              autoplay
              autoplaySpeed={1000}
              pauseOnHover={false}
              arrows
              slidesToShow={1}
              prevArrow={<SamplePrevArrow />}
              nextArrow={<SampleNextArrow />}
            >
              <div className="owl-item cloned">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/search?query=Tinh+hoa+v%C4%83n+ch%C6%B0%C6%A1ng+vi%E1%BB%87t&amp;type=article%2Cproduct"
                    title="Tinh hoa văn chương Việt"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_3_image.jpg?1632297125018"
                      alt="tinh-hoa-van-chuong-viet"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item cloned">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/van-hoc-kinh-dien"
                    title="Văn học kinh điển"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_4_image.jpg?1632297125018"
                      alt="van-hoc-kinh-dien"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/truyen-tranh-kinh-dien"
                    title="Truyện cổ tích kinh điển"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_1_image.jpg?1632297125018"
                      alt="truyen-co-tich-kinh-dien"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/combo-cung-be-kham-pha-tac-pham-kinh-dien"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_2_image.jpg?1632297125018"
                      alt="tu-dai-danh-tac-phien-ban-nhi"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/search?query=Tinh+hoa+v%C4%83n+ch%C6%B0%C6%A1ng+vi%E1%BB%87t&amp;type=article%2Cproduct"
                    title="Tinh hoa văn chương Việt"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_3_image.jpg?1632297125018"
                      alt="tinh-hoa-van-chuong-viet"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item active">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/van-hoc-kinh-dien"
                    title="Văn học kinh điển"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_4_image.jpg?1632297125018"
                      alt="van-hoc-kinh-dien"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item cloned">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/truyen-tranh-kinh-dien"
                    title="Truyện cổ tích kinh điển"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_1_image.jpg?1632297125018"
                      alt="truyen-co-tich-kinh-dien"
                    />
                  </a>
                </div>
              </div>
              <div className="owl-item cloned">
                <div className="item image-item">
                  <a
                    href="https://nxbvanhoc.com.vn/combo-cung-be-kham-pha-tac-pham-kinh-dien"
                    className="clearfix"
                  >
                    <img
                      className="img-responsive"
                      src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/slider_2_image.jpg?1632297125018"
                      alt="tu-dai-danh-tac-phien-ban-nhi"
                    />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
          {/* <div className="owl-nav">
            <div className="owl-prev">prev</div>
            <div className="owl-next">next</div>
          </div>
          <div className="owl-dots disabled"></div> */}
        </div>
      </section>
    </section>
  );
}
