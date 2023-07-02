import Link from "next/link";
import { CatalogSideBarProps } from "..";
import { useRouter } from "next/router";
import { parsedUrlQueryToURLSearchParams } from "@/utils/utils";

export function Category() {
  const router = useRouter();
  const { slug, ...queryParams } = router.query;
  const query = parsedUrlQueryToURLSearchParams(queryParams);

  return (
    <div className=" mb-8 w-full">
      <div className=" mb-5 w-full">
        <h2 className="relative  m-0 w-full text-base font-bold leading-normal text-red-700 before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href={`/catalog?${query}`}
            className="relative py-[5px] pr-4 text-lg font-bold text-red-700 after:absolute after:-bottom-[3px] after:left-0 after:right-4 after:border-b-[3px] after:border-b-red-700"
          >
            <span>Danh mục products</span>
          </Link>
        </h2>
      </div>
      <div className=" w-full bg-gray-100 py-4 pr-1">
        <div className=" w-full">
          <ul className=" m-0 w-full list-none pl-4">
            <li className="relative  block w-full">
              <Link className="block py-[5px] pr-7 text-sm text-red-700" href={`/catalog/new?${query}`} title="New Books">
                <span>New Books</span>
              </Link>
            </li>
            <li className="relative  block w-full">
              <Link className="block py-[5px] pr-7 text-sm text-red-700" href={`/catalog/classic?${query}`} title="Classical Books">
                <span>Classical Books</span>
              </Link>
            </li>
            <li className="relative  block w-full">
              <Link className="block py-[5px] pr-7 text-sm text-red-700" href={`/catalog/popular?${query}`} title="Popular Books">
                <span>Sách phổ biến</span>
              </Link>
            </li>
            <li className="relative  block w-full">
              <Link className="block py-[5px] pr-7 text-sm text-red-700" href={`/catalog/discount?${query}`} title="Discount Books">
                <span>Discount Books</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
