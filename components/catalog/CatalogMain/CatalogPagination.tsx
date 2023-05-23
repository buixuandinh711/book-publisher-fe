import Link from "next/link";
import { useRouter } from "next/router";

export function CatalogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const currentPath = router.asPath.split("?")[0];

  return (
    <div className="text-xs-right">
      <nav className="w-full float-left flex justify-center items-center">
        <ul className="inline-block pl-0 my-4 rounded-md list-none">
          <li className="float-left inline">
            {currentPage > 1 ? (
              <Link
                className="ml-0 rounded-tl-md rounded-bl-md w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white hover:text-white hover:bg-red-700 hover:border-red-700"
                href={`${currentPath}?page=${currentPage - 1}`}
              >
                «
              </Link>
            ) : (
              <div className="ml-0 rounded-tl-md rounded-bl-md w-10 h-10 text-sm cursor-not-allowed border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white">
                «
              </div>
            )}
          </li>
          {createPages(currentPage, totalPages).map((page) => (
            <PageNumber
              key={page.toString()}
              page={page}
              currentPath={currentPath}
              isCurrent={page === currentPage}
            />
          ))}
          <li className="float-left inline">
            {currentPage < totalPages ? (
              <Link
                className="-ml-[1px] w-10 h-10 text-sm border rounded-tr-md rounded-br-md border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white hover:text-white hover:bg-red-700 hover:border-red-700"
                href={`${currentPath}?page=${currentPage + 1}`}
              >
                »
              </Link>
            ) : (
              <div className="-ml-[1px] w-10 h-10 text-sm border cursor-not-allowed rounded-tr-md rounded-br-md border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white">
                »
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

function PageNumber({
  page,
  currentPath,
  isCurrent,
}: {
  page: string | number;
  currentPath: string;
  isCurrent: boolean;
}) {
  const isPageLink = typeof page === "number";
  return (
    <li className="float-left inline">
      {isPageLink ? (
        <Link
          className={`-ml-[1px] w-10 h-10 text-sm border p-0 flex justify-center items-center hover:text-white hover:bg-red-700 hover:border-red-700 ${
            isCurrent
              ? "text-white bg-red-700 border-red-700"
              : "text-red-700 bg-white border-gray-300"
          }`}
          href={`${currentPath}?page=${page}`}
        >
          {page}
        </Link>
      ) : (
        <div
          className={`-ml-[1px] w-10 h-10 text-sm border p-0 flex justify-center items-center ${
            isCurrent
              ? "text-white bg-red-700 border-red-700"
              : "text-red-700 bg-white border-gray-300"
          }`}
        >
          {page}
        </div>
      )}
    </li>
  );
}

function createPages(
  currentPage: number,
  totalPages: number
): (string | number)[] {
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
