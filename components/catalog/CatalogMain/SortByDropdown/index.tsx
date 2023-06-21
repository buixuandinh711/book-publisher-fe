import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

const options = [
  { name: "Default", value: "default" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
  { name: "A to Z", value: "alpha-asc" },
  { name: "Z to A", value: "alpha-desc" },
  { name: "Oldest to Newest", value: "created-asc" },
  { name: "Newest to Oldest", value: "created-desc" },
];

export function SortByDropdown() {
  const [selectedMethod, setSelectedMethod] = useState("default");
  const router = useRouter();
  const { "sort-by": sortBy } = router.query;

  useEffect(() => {
    if (sortBy === undefined) {
      setSelectedMethod("default");
    } else if (typeof sortBy === "string") {
      if (options.map((opt) => opt.value).includes(sortBy)) {
        setSelectedMethod(sortBy);
      } else {
        setSelectedMethod("default");
      }
    } else {
      const lastSelected = sortBy[sortBy.length - 1];
      if (options.map((opt) => opt.value).includes(lastSelected)) {
        setSelectedMethod(lastSelected);
      } else {
        setSelectedMethod("default");
      }
    }
  }, [sortBy, setSelectedMethod]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const basePath = router.asPath.split("?")[0];

    const newQuery = {
      ...router.query,
    };

    delete newQuery.slug;
    delete newQuery["sort-by"];

    if (value !== "default") {
      newQuery["sort-by"] = value;
    }

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
  };

  return (
    <div className="float-left mb-5 w-full">
      <div className="float-left flex w-full items-center justify-end bg-gray-100 text-red-700">
        <label
          id="sort-by"
          className="relative float-left w-52 cursor-pointer px-10px py-[5px] text-left text-sm before:absolute before:-left-12 before:top-1/2 before:-translate-y-1/2 before:content-['Sort_by']"
        >
          <div className="relative float-left w-full border border-gray-300">
            <select
              className="borde form-select float-left h-8 w-full cursor-pointer appearance-none border-transparent bg-white px-3 py-0 text-sm focus:border-0 focus:outline-none focus:ring-red-700"
              onChange={handleSelect}
              value={selectedMethod}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value} className="cursor-pointer">
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
    </div>
  );
}
