import Link from "next/link";
import { CatalogSideBarProps } from "..";
import { useRouter } from "next/router";
import { parsedUrlQueryToURLSearchParams } from "@/utils/utils";

export function Category() {
  const router = useRouter();
  const { slug, ...queryParams } = router.query;
  const query = parsedUrlQueryToURLSearchParams(queryParams);

  return (
    <div className="mb-8 w-full float-left">
      <div className="w-full float-left mb-5">
        <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href={`/catalog?${query}`}
            className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
          >
            <span>Danh mục sản phẩm</span>
          </Link>
        </h2>
      </div>
      <div className="w-full float-left bg-gray-100 py-4 pr-1">
        <div className="w-full float-left">
          <ul className="w-full float-left m-0 list-none pl-4">
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/new?${query}`}
                title="Sách mới"
              >
                <span>Sách mới</span>
              </Link>
            </li>
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/classic?${query}`}
                title="Sách văn học kinh điển"
              >
                <span>Sách văn học kinh điển</span>
              </Link>
            </li>
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/popular?${query}`}
                title="Sách liên kết xuất bản"
              >
                <span>Sách phổ biến</span>
              </Link>
            </li>
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/discount?${query}`}
                title="Sách giảm giá"
              >
                <span>Sách giảm giá</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
