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
    <aside className="mb-8 w-full float-left">
      <div className="w-full float-left mb-5">
        <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
          >
            <span>Giá sản phẩm</span>
          </Link>
        </h2>
      </div>
      <div className="w-full float-left bg-gray-100 py-4 pr-1">
        <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
          {priceRanges.map((range, index) => (
            <li key={index} className="leading-loose w-full cursor-pointer float-left m-0 p-0">
              <span className="text-red-700 cursor-pointer text-sm font-normal">
                <label htmlFor={`range-${index}`} className="cursor-pointer block mb-[2px]">
                  <input
                    type="checkbox"
                    id={`range-${index}`}
                    className="form-checkbox mr-2 p-0 w-3 h-3 border-red-700 focus:ring-0 text-red-700"
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
