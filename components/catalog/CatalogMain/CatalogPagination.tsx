import { useRouter } from "next/router";

export function CatalogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="text-xs-right">
      <nav className="w-full float-left flex justify-center items-center">
        <ul className="inline-block pl-0 my-4 rounded-md list-none">
          <li className="float-left inline">
            <a
              className="ml-0 rounded-tl-md rounded-bl-md w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
              href="#"
            >
              «
            </a>
          </li>
          <li className="float-left inline">
            <a
              className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
              href=""
            >
              1
            </a>
          </li>
          {}
          <li className="float-left inline">
            <a
              className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
              href=""
            >
              ...
            </a>
          </li>
          <li className="float-left inline">
            <a
              className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
              href=""
            >
              72
            </a>
          </li>
          <li className="float-left inline">
            <a
              className="-ml-[1px] w-10 h-10 text-sm border rounded-tr-md rounded-br-md border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
              href=""
            >
              »
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function PageNumber(page: number) {
  return (
    <li className="float-left inline">
      <a
        className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
        href=""
      >
        {page}
      </a>
    </li>
  );
}

function createPages(currentPage: number, totalPages: number) {
  const pages: JSX.Element[] = [];
  pages.push(
    <li className="float-left inline">
      <a
        className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
        href=""
      >
        1
      </a>
    </li>
  );
}
