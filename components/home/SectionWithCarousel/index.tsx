import { BookCarousel } from "../../BookCarousel";

export function SectionWithCarousel() {
  return (
    <div className="w-full float-left py-[30px]">
      <div className="container">
        <div className="-px-4">
          <BookCarousel />
        </div>
      </div>
    </div>
  );
}
