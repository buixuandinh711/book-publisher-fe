import { BookCart, BookCartProps } from "@/components/BookCart";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { CatalogPagination } from "./CatalogPagination";
import { SortByDropdown } from "./SortByDropdown";

export interface CatalogMainProps {
  booksList: BookCartProps[];
  currentPage: number;
  totalPages: number;
}

export function CatalogMain({ booksList, currentPage, totalPages }: CatalogMainProps) {
  return (
    <section className="mb-8 relative  w-3/4 float-left min-h-[1px] px-4">
      {/* Banner */}
      <div className="w-full float-left relative mb-8 min-h-[150px]">
        <Image
          src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683865774/book-publisher/catalog_banner.jpg"
          alt="tat-ca-san-pham"
          className="block max-w-full max-h-full h-auto align-middle"
          fill
          sizes="(max-width: 1080px) 50vw"
          priority
        />
        <h1 className="hidden">Tất cả sản phẩm</h1>
      </div>
      <div className="w-full float-left">
        <SortByDropdown />
        {/* Main */}
        <div className="w-full float-left">
          <section className="w-full float-left block">
            {/* List book */}
            <div className="-mx-4">
              <div className="mb-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-y-8">
                {booksList.map((book) => (
                  <BookCart {...book} key={book.id} />
                ))}
              </div>
            </div>
            {/* Page navigator */}
            <CatalogPagination {...{ currentPage, totalPages }} />
          </section>
        </div>
      </div>
    </section>
  );
}
