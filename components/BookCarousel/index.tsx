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
    <div className="w-full float-left">
      <div className="w-full float-left">
        <h2 className="mt-0 mb-8 mx-0 text-base relative w-full float-left font-bold text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-gray-300">
          <a
            href="sach-giam-gia"
            title="Sách giảm giá"
            className="font-bold text-lg py-[5px] pr-[15px] relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-[15px] after:-bottom-[3px] after:h-[3px]"
          >
            <span>{header}</span>
          </a>
        </h2>
      </div>
      <div className="w-full float-left">
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
      className="absolute top-1/2 -left-6 z-10 w-8 h-8 bg-gray-300 bg-opacity-50 cursor-pointer hover:bg-red-700 hover:bg-opacity-100 text-red-700 hover:text-white"
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
      className="absolute top-1/2 -right-6 z-10 w-8 h-8 bg-gray-300 bg-opacity-50 cursor-pointer hover:bg-red-700 hover:bg-opacity-100 text-red-700 hover:text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
        className="absolute translate-y-1/2 w-8"
      />
    </div>
  );
}
