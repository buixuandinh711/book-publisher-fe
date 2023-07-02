import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BookCart, BookCartProps } from "../BookCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export interface BookCarouselProps {
  header: string;
  booksList: BookCartProps[];
}

export function BookCarousel({ header, booksList }: BookCarouselProps) {
  return (
    <div className=" w-full">
      <div className=" w-full">
        <h2 className="relative  mx-0 mb-8 mt-0 w-full text-base font-bold text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-gray-300">
          <a
            href="sach-giam-gia"
            title="Discount Books"
            className="relative py-[5px] pr-[15px] text-lg font-bold text-red-700 after:absolute after:-bottom-[3px] after:left-0 after:right-[15px] after:h-[3px] after:border-b-[3px] after:border-b-red-700"
          >
            <span>{header}</span>
          </a>
        </h2>
      </div>
      <div className=" w-full">
        <Slider
          slidesToShow={booksList.length < 6 ? booksList.length : 6}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          variableWidth
        >
          {booksList.map((book) => (
            <BookCart {...book} key={book.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-6 top-1/2 z-10 h-8 w-8 cursor-pointer bg-gray-300 bg-opacity-50 text-red-700 hover:bg-red-700 hover:bg-opacity-100 hover:text-white"
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
      className="absolute -right-6 top-1/2 z-10 h-8 w-8 cursor-pointer bg-gray-300 bg-opacity-50 text-red-700 hover:bg-red-700 hover:bg-opacity-100 hover:text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} className="absolute w-8 translate-y-1/2" />
    </div>
  );
}
