import { Category } from "./Category";
import { PriceFilter } from "./PriceFilter";
import { GenreFilter } from "./GenreFilter";
import { YearFilter } from "./YearFilter";

export interface CatalogSideBarProps {
  genres: string[];
}

export function CatalogSideBar({ genres }: CatalogSideBarProps) {
  return (
    <aside className="relative mb-8 min-h-[1px] w-1/4 px-4">
      <Category />
      <div className=" mb-8 w-full">
        <PriceFilter />
        <GenreFilter genres={genres} />
        <YearFilter />
      </div>
    </aside>
  );
}
