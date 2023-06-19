import { Category } from "./Category";
import { PriceFilter } from "./PriceFilter";
import { GenreFilter } from "./GenreFilter";
import { YearFilter } from "./YearFilter";

export interface CatalogSideBarProps {
  newBooksCount: number;
  classicBooksCount: number;
  discountBooksCount: number;
  popularBooksCount: number;
  genres: string[];
}

export function CatalogSideBar({
  newBooksCount,
  classicBooksCount,
  discountBooksCount,
  popularBooksCount,
  genres,
}: CatalogSideBarProps) {
  return (
    <aside className="mb-8 relative  w-1/4 float-left min-h-[1px] px-4">
      <Category {...{ newBooksCount, classicBooksCount, discountBooksCount, popularBooksCount }} />
      <div className="mb-8 w-full float-left">
        <PriceFilter />
        <GenreFilter genres={genres} />
        <YearFilter />
      </div>
    </aside>
  );
}
