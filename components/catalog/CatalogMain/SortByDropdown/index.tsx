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
    <div className="w-full float-left mb-5">
      <div className="flex justify-end items-center w-full float-left bg-gray-100 text-red-700">
        <label
          id="sort-by"
          className="cursor-pointer w-52 relative float-left py-[5px] px-10px text-sm text-left before:absolute before:content-['Sort_by'] before:-left-12 before:top-1/2 before:-translate-y-1/2"
        >
          <div className="border border-gray-300 w-full float-left relative">
            <select
              className="form-select cursor-pointer text-sm w-full float-left h-8 borde border-transparent px-3 py-0 appearance-none bg-white focus:ring-red-700 focus:outline-none focus:border-0"
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
