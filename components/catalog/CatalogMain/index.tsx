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
    <section className="relative float-left  mb-8 min-h-[1px] w-3/4 px-4">
      {/* Banner */}
      <div className="relative float-left mb-8 min-h-[150px] w-full">
        <Image
          src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683865774/book-publisher/catalog_banner.jpg"
          alt="tat-ca-san-pham"
          className="block h-auto max-h-full max-w-full align-middle"
          fill
          sizes="(max-width: 1080px) 50vw"
          priority
        />
        <h1 className="hidden">Tất cả sản phẩm</h1>
      </div>
      <div className="float-left w-full">
        <SortByDropdown />
        {/* Main */}
        <div className="float-left w-full">
          <section className="float-left block w-full">
            {/* List book */}
            <div className="-mx-4">
              <div className="mb-8 grid grid-flow-row gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
