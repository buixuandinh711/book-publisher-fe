import { BookCarousel } from "@/components/BookCarousel";

export function RelatedBook() {
  return (
    <div className="w-full float-left mb-8 overflow-hidden">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative px-4">
            <div className="w-full float-left">
              <BookCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
