import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const priceRanges = [
  {
    name: "Under 50.000đ",
    maxPrice: "50000",
  },
  {
    name: "50.000đ - 100.000đ",
    minPrice: "50000",
    maxPrice: "100000",
  },
  {
    name: "100.000đ - 200.000đ",
    minPrice: "100000",
    maxPrice: "200000",
  },
  {
    name: "Above 200.000đ",
    minPrice: "200000",
  },
];

export function PriceFilter() {
  const [rangeIndex, setRangeIndex] = useState(-1);
  const router = useRouter();
  const { "min-price": minPrice, "max-price": maxPrice } = router.query;
  useEffect(() => {
    for (let i = 0; i < priceRanges.length; i++) {
      let range = priceRanges[i];
      if (range.minPrice === minPrice && range.maxPrice === maxPrice) {
        setRangeIndex(i);
        return;
      }
    }
    setRangeIndex(-1);
  }, [minPrice, maxPrice, setRangeIndex]);

  return (
    <aside className=" mb-8 w-full">
      <div className=" mb-5 w-full">
        <h2 className="relative  m-0 w-full text-base font-bold leading-normal text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="relative py-[5px] pr-4 text-lg font-bold text-red-700 after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-red-700"
          >
            <span>Giá products</span>
          </Link>
        </h2>
      </div>
      <div className=" w-full bg-gray-100 py-4 pr-1">
        <ul className="m-0 max-h-[140px] list-none overflow-y-auto pl-4">
          {priceRanges.map((range, index) => (
            <li key={index} className=" m-0 w-full cursor-pointer p-0 leading-loose">
              <span className="cursor-pointer text-sm font-normal text-red-700">
                <label htmlFor={`range-${index}`} className="mb-[2px] block cursor-pointer">
                  <input
                    type="checkbox"
                    id={`range-${index}`}
                    className="form-checkbox mr-2 h-3 w-3 border-red-700 p-0 text-red-700 focus:ring-0"
                    checked={index == rangeIndex}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      const query = { ...router.query };
                      if (index === rangeIndex) {
                        // setRangeIndex(-1);
                        delete query.slug;
                        delete query["min-price"];
                        delete query["max-price"];
                      } else {
                        // setRangeIndex(index);

                        delete query.slug;
                        delete query["min-price"];
                        delete query["max-price"];

                        if (range.minPrice !== undefined) {
                          query["min-price"] = range.minPrice.toString();
                        }
                        if (range.maxPrice !== undefined) {
                          query["max-price"] = range.maxPrice.toString();
                        }
                      }
                      router.replace(
                        {
                          pathname: basePath,
                          query,
                        },
                        undefined,
                        {
                          scroll: false,
                        }
                      );
                    }}
                  />
                  {range.name}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
