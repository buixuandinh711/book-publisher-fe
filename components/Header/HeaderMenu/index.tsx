import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function HeaderMenu() {
  return (
    <div className="w-full float-left bg-red-700">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left">
            <nav className="bg-red-700">
              <ul id="nav" className="relative pl-0 mb-0 list-none">
                <li className="float-left relative">
                  <Link className="text-white bg-red-700 py-5px pr-5 pl-4 relative uppercase leading-8 block" href="/">
                    Home
                  </Link>
                </li>
                <li className="float-left relative">
                  <Link
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="float-left relative group">
                  <Link
                    href="/catalog"
                    
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                  >
                    Products{" "}
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="absolute right-5px top-1/2 transform: -translate-y-1/2"
                    />
                  </Link>
                  <ul className="text-base group-hover:block hidden min-w-[210px] m-0 p-0 drop-shadow-lg border border-gray-300 absolute top-full left-0 z-50 float-left text-left list-none bg-white">
                    <li className="border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/new"
                      >
                        New Books
                      </Link>
                    </li>

                    <li className="border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/classic"
                      >
                        Classic Literature
                      </Link>
                    </li>

                    <li className="dropdown-submenu border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/popular"
                      >
                        Popular Books
                      </Link>
                    </li>

                    <li className="border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/discount"
                      >
                        Discounted Books
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="float-left relative">
                  <Link href="/" className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block">
                    News &amp; Events{" "}
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      color="white"
                      className="absolute right-5px top-1/2 transform: -translate-y-1/2"
                    />
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/news">
                        News
                      </Link>
                    </li>

                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/announcements">
                        Announcements
                      </Link>
                    </li>

                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/press-releases">
                        Press Releases
                      </Link>
                    </li>

                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/distribution-information">
                        Distribution Information
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="float-left relative">
                  <Link
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/contact"
                  >
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
