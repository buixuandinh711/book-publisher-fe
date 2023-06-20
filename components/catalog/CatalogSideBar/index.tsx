import { Category } from "./Category";
import { PriceFilter } from "./PriceFilter";
import { GenreFilter } from "./GenreFilter";
import { YearFilter } from "./YearFilter";

export interface CatalogSideBarProps {
  genres: string[];
}

export function CatalogSideBar({ genres }: CatalogSideBarProps) {
  return (
    <aside className="mb-8 relative  w-1/4 float-left min-h-[1px] px-4">
      <Category />
      <div className="mb-8 w-full float-left">
        <PriceFilter />
        <GenreFilter genres={genres} />
        <YearFilter />
      </div>
    </aside>
  );
}
