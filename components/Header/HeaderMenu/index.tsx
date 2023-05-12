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
                  <Link
                    className="text-white bg-red-700 py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li className="float-left relative">
                  <Link
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/gioi-thieu"
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li className="float-left relative group">
                  <Link
                    href="/catalog"
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                  >
                    Sản phẩm{" "}
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
                        Sách mới
                      </Link>
                    </li>

                    <li className="border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/classic"
                      >
                        Sách văn học kinh điển
                      </Link>
                    </li>

                    <li className="dropdown-submenu border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/popular"
                      >
                        Sách phổ biến
                      </Link>
                    </li>

                    <li className="border-b border-b-gray-300 relative">
                      <Link
                        className="relative py-10px px-5 block clear-both font-normal leading-snug text-black"
                        href="/catalog/discount"
                      >
                        Sách giảm giá
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="float-left relative">
                  <Link
                    href="/"
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                  >
                    Tin tức &amp; sự kiện{" "}
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      color="white"
                      className="absolute right-5px top-1/2 transform: -translate-y-1/2"
                    />
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/tin-tuc">
                        Tin tức
                      </Link>
                    </li>

                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/thong-bao">
                        Thông báo
                      </Link>
                    </li>

                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/thong-cao-bao-chi-2">
                        Thông cáo báo chí
                      </Link>
                    </li>

                    <li className="nav-item-lv2">
                      <Link className="nav-link" href="/thong-tin-phat-hanh">
                        Thông tin phát hành
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="float-left relative">
                  <Link
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/lien-he"
                  >
                    Liên hệ
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
