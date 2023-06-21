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
    <aside className="float-left mb-8 w-full">
      <div className="float-left mb-5 w-full">
        <h2 className="relative float-left m-0 w-full text-base font-bold leading-normal text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="relative py-[5px] pr-4 text-lg font-bold text-red-700 after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-red-700"
          >
            <span>Publication Year</span>
          </Link>
        </h2>
      </div>
      <div className="float-left w-full bg-gray-100 py-4 pr-1">
        <ul className="m-0 max-h-[140px] list-none overflow-y-auto pl-4">
          {yearsArray.map((year, index) => (
            <li key={year} className="float-left m-0 w-full cursor-pointer p-0 leading-loose">
              <span className="cursor-pointer text-sm font-normal text-red-700">
                <label htmlFor={`filter-year-${year.toLocaleLowerCase()}`} className="mb-[2px] block cursor-pointer">
                  <input
                    type="checkbox"
                    id={`filter-year-${year.toLocaleLowerCase()}`}
                    className="form-checkbox mr-2 h-3 w-3 border-red-700 p-0 text-red-700 focus:ring-0"
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
