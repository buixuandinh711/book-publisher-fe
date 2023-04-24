import { BookCartProps } from "@/components/BookCart";
import { BookCarousel } from "../../BookCarousel";

interface SectionWithCarouselProps {
  header: string;
  booksList: BookCartProps[];
}

export function SectionWithCarousel({
  header,
  booksList,
}: SectionWithCarouselProps) {
  return (
    <div className="w-full float-left py-[30px]">
      <div className="container">
        <div className="-px-4">
          <BookCarousel header={header} booksList={booksList} />
        </div>
      </div>
    </div>
  );
}
