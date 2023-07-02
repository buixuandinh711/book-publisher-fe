import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function HeaderMenu() {
  return (
    <div className="w-full bg-red-700">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full">
            <nav className="bg-red-700">
              <ul id="nav" className="relative mb-0 flex list-none pl-0">
                <li className="relative">
                  <Link className="relative block bg-red-700 py-5px pl-4 pr-5 uppercase leading-8 text-white" href="/">
                    Home
                  </Link>
                </li>
                <li className="relative">
                  <Link className="relative block  bg-red-700 py-5px pl-4 pr-5 uppercase leading-8 text-white" href="/about">
                    About
                  </Link>
                </li>
                <li className="group relative">
                  <Link href="/catalog" className="relative block  bg-red-700 py-5px pl-4 pr-5 uppercase leading-8 text-white">
                    Products <FontAwesomeIcon icon={faCaretRight} className="transform: absolute right-5px top-1/2 -translate-y-1/2" />
                  </Link>
                  <ul className="absolute left-0 top-full z-50 m-0 hidden min-w-[210px] list-none border border-gray-300 bg-white p-0 text-left text-base drop-shadow-lg group-hover:block">
                    <li className="relative border-b border-b-gray-300">
                      <Link className="relative clear-both block px-5 py-10px font-normal leading-snug text-black" href="/catalog/new">
                        New Books
                      </Link>
                    </li>

                    <li className="relative border-b border-b-gray-300">
                      <Link className="relative clear-both block px-5 py-10px font-normal leading-snug text-black" href="/catalog/classic">
                        Classical Books
                      </Link>
                    </li>

                    <li className="dropdown-submenu relative border-b border-b-gray-300">
                      <Link className="relative clear-both block px-5 py-10px font-normal leading-snug text-black" href="/catalog/popular">
                        Popular Books
                      </Link>
                    </li>

                    <li className="relative border-b border-b-gray-300">
                      <Link className="relative clear-both block px-5 py-10px font-normal leading-snug text-black" href="/catalog/discount">
                        Discounted Books
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative">
                  <Link href="/" className="relative block  bg-red-700 py-5px pl-4 pr-5 uppercase leading-8 text-white">
                    News &amp; Events{" "}
                    <FontAwesomeIcon icon={faCaretRight} color="white" className="transform: absolute right-5px top-1/2 -translate-y-1/2" />
                  </Link>
                </li>

                <li className="relative">
                  <Link className="relative block  bg-red-700 py-5px pl-4 pr-5 uppercase leading-8 text-white" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
