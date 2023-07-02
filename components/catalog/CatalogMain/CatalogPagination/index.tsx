import { parsedUrlQueryToURLSearchParams } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export function CatalogPagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const router = useRouter();
  const currentPath = router.asPath.split("?")[0];

  return (
    <div className="text-xs-right">
      <nav className=" flex w-full items-center justify-center">
        <ul className="my-4 flex list-none items-center rounded-md pl-0">
          <PrevPage currentPage={currentPage} currentPath={currentPath} />
          {createPages(currentPage, totalPages).map((page) => (
            <PageNumber key={page.toString()} page={page} currentPath={currentPath} isCurrent={page === currentPage} />
          ))}
          <NextPage currentPage={currentPage} totalPages={totalPages} currentPath={currentPath} />
        </ul>
      </nav>
    </div>
  );
}

function PrevPage({ currentPage, currentPath }: { currentPage: number; currentPath: string }) {
  const router = useRouter();
  const { slug, ...queryParams } = router.query;
  queryParams.page = (currentPage - 1).toString();
  const query = parsedUrlQueryToURLSearchParams(queryParams);

  return (
    <li className=" inline">
      {currentPage > 1 ? (
        <Link
          className="ml-0 flex h-10 w-10 items-center justify-center rounded-bl-md rounded-tl-md border border-gray-300 bg-white p-0 text-sm text-red-700 hover:border-red-700 hover:bg-red-700 hover:text-white"
          href={`${currentPath}?${query}`}
        >
          «
        </Link>
      ) : (
        <div className="ml-0 flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-bl-md rounded-tl-md border border-gray-300 bg-white p-0 text-sm text-red-700">
          «
        </div>
      )}
    </li>
  );
}

function NextPage({ currentPage, totalPages, currentPath }: { currentPage: number; totalPages: number; currentPath: string }) {
  const router = useRouter();
  const { slug, ...queryParams } = router.query;
  queryParams.page = (currentPage + 1).toString();
  const query = parsedUrlQueryToURLSearchParams(queryParams);

  return (
    <li className=" inline">
      {currentPage < totalPages ? (
        <Link
          className="-ml-[1px] flex h-10 w-10 items-center justify-center rounded-br-md rounded-tr-md border border-gray-300 bg-white p-0 text-sm text-red-700 hover:border-red-700 hover:bg-red-700 hover:text-white"
          href={`${currentPath}?${query}`}
        >
          »
        </Link>
      ) : (
        <div className="-ml-[1px] flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-br-md rounded-tr-md border border-gray-300 bg-white p-0 text-sm text-red-700">
          »
        </div>
      )}
    </li>
  );
}

function PageNumber({ page, currentPath, isCurrent }: { page: string | number; currentPath: string; isCurrent: boolean }) {
  const isPageLink = typeof page === "number";
  const router = useRouter();
  const { slug, ...queryParams } = router.query;
  queryParams.page = page.toString();
  const query = parsedUrlQueryToURLSearchParams(queryParams);

  return (
    <li className=" inline">
      {isPageLink ? (
        <Link
          className={`-ml-[1px] flex h-10 w-10 items-center justify-center border p-0 text-sm hover:border-red-700 hover:bg-red-700 hover:text-white ${
            isCurrent ? "border-red-700 bg-red-700 text-white" : "border-gray-300 bg-white text-red-700"
          }`}
          href={`${currentPath}?${query}`}
        >
          {page}
        </Link>
      ) : (
        <div
          className={`-ml-[1px] flex h-10 w-10 items-center justify-center border p-0 text-sm ${
            isCurrent ? "border-red-700 bg-red-700 text-white" : "border-gray-300 bg-white text-red-700"
          }`}
        >
          {page}
        </div>
      )}
    </li>
  );
}

function createPages(currentPage: number, totalPages: number): (string | number)[] {
  const pages: (string | number)[] = [];
  if (currentPage <= 4) {
    for (let i = 1; i < currentPage; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1, "...");
    for (let i = currentPage - 2; i < currentPage; i++) {
      pages.push(i);
    }
  }
  pages.push(currentPage);
  if (currentPage >= totalPages - 3) {
    for (let i = currentPage + 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    for (let i = currentPage + 1; i < currentPage + 3; i++) {
      pages.push(i);
    }
    pages.push("...", totalPages);
  }

  return pages;
}
