import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function YearFilter() {
  const router = useRouter();
  const [chonsenYears, setChonsenYears] = useState<string[]>([]);
  const { year } = router.query;

  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from({ length: 10 }, (_, index) => (currentYear - index).toString());

  useEffect(() => {
    if (year === undefined) {
      setChonsenYears([]);
    } else if (typeof year === "string") {
      setChonsenYears([year]);
    } else {
      setChonsenYears(year);
    }
  }, [year, setChonsenYears]);

  return (
    <aside className="mb-8 w-full float-left">
      <div className="w-full float-left mb-5">
        <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
          >
            <span>Publication Year</span>
          </Link>
        </h2>
      </div>
      <div className="w-full float-left bg-gray-100 py-4 pr-1">
        <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
          {yearsArray.map((year, index) => (
            <li key={year} className="leading-loose w-full cursor-pointer float-left m-0 p-0">
              <span className="text-red-700 cursor-pointer text-sm font-normal">
                <label htmlFor={`filter-year-${year.toLocaleLowerCase()}`} className="cursor-pointer block mb-[2px]">
                  <input
                    type="checkbox"
                    id={`filter-year-${year.toLocaleLowerCase()}`}
                    className="form-checkbox mr-2 p-0 w-3 h-3 border-red-700 focus:ring-0 text-red-700"
                    checked={chonsenYears.includes(year)}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      let newChosen;

                      if (chonsenYears.includes(year)) {
                        newChosen = chonsenYears.filter((chosen) => chosen !== year);
                      } else {
                        newChosen = chonsenYears.concat(year);
                      }

                      const newQuery = {
                        ...router.query,
                      };

                      delete newQuery.slug;
                      newQuery.year = newChosen;

                      router.replace(
                        {
                          pathname: basePath,
                          query: newQuery,
                        },
                        undefined,
                        {
                          scroll: false,
                        }
                      );
                    }}
                  />
                  {(() => {
                    if (index === 0) return "This year";
                    if (index === yearsArray.length - 1) return `Before ${year}`;
                    return year;
                  })()}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
