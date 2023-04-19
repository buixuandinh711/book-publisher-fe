import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HeaderMenu() {
  return (
    <div className="w-full float-left bg-red-700">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left">
            <nav className="bg-red-700">
              <ul id="nav" className="relative pl-0 mb-0 list-none">
                <li className="float-left relative">
                  <a
                    className="text-white bg-red-700 py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="float-left relative">
                  <a
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/gioi-thieu"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li className="float-left relative group">
                  <a
                    href="/collections/all"
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                  >
                    Sản phẩm{" "}
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="absolute right-5px top-1/2 transform: -translate-y-1/2"
                    />
                  </a>
                  <ul className="text-base hidden group-hover:block min-w-[210px] m-0 p-0 drop-shadow-lg border border-gray-300 absolute top-full left-0 z-50 float-left text-left list-none bg-white">
                    <li className="border-b border-b-gray-300 relative">
                      <a
                        className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black"
                        href="/sach-moi"
                      >
                        Sách mới
                        {/* <i className="fa fa-caret-right"></i> */}
                      </a>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item-lv3">
                          <a className="nav-link" href="/van-hoc-trong-nuoc">
                            Sách văn học Việt Nam
                          </a>
                        </li>

                        <li className="nav-item-lv3">
                          <a className="nav-link" href="/van-hoc-nuoc-ngoai">
                            Sách văn học nước ngoài
                          </a>
                        </li>

                        <li className="nav-item-lv3">
                          <a className="nav-link" href="/sach-thieu-nhi">
                            Sách thiếu nhi
                          </a>
                        </li>
                      </ul> */}
                    </li>

                    <li className="border-b border-b-gray-300 relative">
                      <a
                        className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black"
                        href="/van-hoc-kinh-dien"
                      >
                        Sách văn học kinh điển
                      </a>
                    </li>

                    <li className="dropdown-submenu border-b border-b-gray-300 relative">
                      <a
                        className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black"
                        href="/sach-lien-ket-xuat-ban-moi"
                      >
                        Sách liên kết xuất bản{" "}
                        {/* <i className="fa fa-caret-right"></i> */}
                      </a>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item-lv3">
                          <a className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black" href="/sach-tac-gia">
                            Sách liên kết tác giả
                          </a>
                        </li>

                        <li className="nav-item-lv3">
                          <a
                            className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black"
                            href="/sach-lien-ket-xuat-ban-moi"
                          >
                            Sách liên kết với các công ty sách
                          </a>
                        </li>
                      </ul> */}
                    </li>

                    <li className="border-b border-b-gray-300 relative">
                      <a
                        className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black"
                        href="/sach-giam-gia"
                      >
                        Sách giảm giá
                      </a>
                    </li>

                    <li className="relative">
                      <a
                        className="relative py-[10px] px-5 block clear-both font-normal leading-snug text-black"
                        href="/"
                      >
                        Sách quý hiếm
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="float-left relative">
                  <a
                    href="/"
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                  >
                    Tin tức &amp; sự kiện{" "}
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      color="white"
                      className="absolute right-5px top-1/2 transform: -translate-y-1/2"
                    />
                  </a>
                  {/* <ul className="dropdown-menu">
                    <li className="nav-item-lv2">
                      <a className="nav-link" href="/tin-tuc">
                        Tin tức
                      </a>
                    </li>

                    <li className="nav-item-lv2">
                      <a className="nav-link" href="/thong-bao">
                        Thông báo
                      </a>
                    </li>

                    <li className="nav-item-lv2">
                      <a className="nav-link" href="/thong-cao-bao-chi-2">
                        Thông cáo báo chí
                      </a>
                    </li>

                    <li className="nav-item-lv2">
                      <a className="nav-link" href="/thong-tin-phat-hanh">
                        Thông tin phát hành
                      </a>
                    </li>
                  </ul> */}
                </li>

                <li className="float-left relative">
                  <a
                    className="text-white bg-red-700  py-5px pr-5 pl-4 relative uppercase leading-8 block"
                    href="/lien-he"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
