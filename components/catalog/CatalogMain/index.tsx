import { BookCart, BookCartProps } from "@/components/BookCart";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { CatalogPagination } from "./CatalogPagination";

export interface CatalogMainProps {
  booksList: BookCartProps[];
  currentPage: number;
  totalPages: number;
}

export function CatalogMain({
  booksList,
  currentPage,
  totalPages,
}: CatalogMainProps) {
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
        {/* Sort by */}
        <div className="w-full float-left mb-5">
          <div className="flex justify-end items-center w-full float-left bg-gray-100 text-red-700">
            <div
              id="sort-by"
              className="w-52 relative float-left py-[5px] px-10px text-sm text-left before:absolute before:content-['Sắp_xếp'] before:-left-12 before:top-1/2 before:-translate-y-1/2"
            >
              <div className="border border-gray-300 w-full float-left relative">
                <select className="w-full float-left h-8 borde border-transparent px-4 appearance-none bg-white outline-none">
                  <option className="valued" value="default">
                    Mặc định
                  </option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                  <option value="alpha-asc">Từ A-Z</option>
                  <option value="alpha-desc">Từ Z-A</option>
                  <option value="created-asc">Cũ đến mới</option>
                  <option value="created-desc">Mới đến cũ</option>
                </select>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
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
