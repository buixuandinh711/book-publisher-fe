import { parsedUrlQueryToURLSearchParams } from "@/utils/utils";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface CatalogSideBarProps {
  newBooksCount: number;
  classicBooksCount: number;
  discountBooksCount: number;
  popularBooksCount: number;
  genres: string[];
}

export function CatalogSideBar({
  newBooksCount,
  classicBooksCount,
  discountBooksCount,
  popularBooksCount,
  genres,
}: CatalogSideBarProps) {
  return (
    <aside className="mb-8 relative  w-1/4 float-left min-h-[1px] px-4">
      <Category {...{ newBooksCount, classicBooksCount, discountBooksCount, popularBooksCount }} />
      {/* FILTERS */}
      <div className="mb-8 w-full float-left">
        {/* LỌC GIÁ */}
        <PriceFilter />
        {/* LỌC TYPE */}
        <GenreFilter genres={genres} />
        {/* LỌC VENDOR */}
        <aside className="mb-8 w-full float-left">
          <div className="w-full float-left mb-5">
            <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
              <Link
                href=""
                className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
              >
                <span>Đơn vị liên kết xuất bản</span>
              </Link>
            </h2>
          </div>
          <div className="w-full float-left bg-gray-100 py-4 pr-1">
            <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-1980-novel" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-1980-novel"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="1980 Novel"
                      defaultValue="(1980 Novel)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    1980 Novel
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-alphabooks" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-alphabooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Alphabooks"
                      defaultValue="(Alphabooks)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Alphabooks
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-bach-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-bach-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Bách Việt"
                      defaultValue="(Bách Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Bách Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-co-phan-sach-co-nguyet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-co-nguyet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Sách Cổ Nguyệt"
                      defaultValue="(Công ty Cổ phần Sách Cổ Nguyệt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Sách Cổ Nguyệt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-co-phan-sach-dich-va-tu-dien-giao-duc"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-dich-va-tu-dien-giao-duc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY CỔ PHẦN SÁCH DỊCH VÀ TỪ ĐIỂN GIÁO DỤC"
                      defaultValue="(CÔNG TY CỔ PHẦN SÁCH DỊCH VÀ TỪ ĐIỂN GIÁO DỤC)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    CÔNG TY CỔ PHẦN SÁCH DỊCH VÀ TỪ ĐIỂN GIÁO DỤC
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-co-phan-sach-omega-viet-nam-omega-plus"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-omega-viet-nam-omega-plus"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Sách Omega Việt Nam (Omega Plus)"
                      defaultValue="(Công ty Cổ phần Sách Omega Việt Nam (Omega Plus))"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Sách Omega Việt Nam (Omega Plus)
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-co-phan-sach-van-chuong-nha-sach-van-chuong"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-van-chuong-nha-sach-van-chuong"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần sách Văn Chương (Nhà sách Văn Chương)"
                      defaultValue="(Công ty Cổ phần sách Văn Chương (Nhà sách Văn Chương))"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần sách Văn Chương (Nhà sách Văn Chương)
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-co-phan-sbooks" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sbooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty cổ phần SBOOKS"
                      defaultValue="(Công ty cổ phần SBOOKS)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty cổ phần SBOOKS
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-chi" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-chi"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa Chi"
                      defaultValue="(Công ty Cổ phần Văn hóa Chi)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Văn hóa Chi
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-dong-a" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-dong-a"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa Đông A"
                      defaultValue="(Công ty Cổ phần Văn hóa Đông A)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Văn hóa Đông A
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-huy-hoang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-huy-hoang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa Huy Hoàng"
                      defaultValue="(Công ty Cổ phần Văn hóa Huy Hoàng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Văn hóa Huy Hoàng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-co-phan-van-hoa-va-giao-duc-tan-viet-nha-sach-tan-viet"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-va-giao-duc-tan-viet-nha-sach-tan-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa và Giáo dục Tân Việt - Nhà sách Tân Việt"
                      defaultValue="(Công ty Cổ phần Văn hóa và Giáo dục Tân Việt - Nhà sách Tân Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Văn hóa và Giáo dục Tân Việt - Nhà sách Tân Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-co-phan-van-hoa-va-truyen-thong-nha-nam"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-va-truyen-thong-nha-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam"
                      defaultValue="(Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-co-phan-xuat-ban-va-giao-duc-quang-van"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-xuat-ban-va-giao-duc-quang-van"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY CỔ PHẦN XUẤT BẢN VÀ GIÁO DỤC QUẢNG VĂN"
                      defaultValue="(CÔNG TY CỔ PHẦN XUẤT BẢN VÀ GIÁO DỤC QUẢNG VĂN)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    CÔNG TY CỔ PHẦN XUẤT BẢN VÀ GIÁO DỤC QUẢNG VĂN
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-cp-dau-tu-tm-pt-phuc-minh" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-dau-tu-tm-pt-phuc-minh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Đầu Tư TM&PT Phúc Minh"
                      defaultValue="(Công ty CP Đầu Tư TM&PT Phúc Minh)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP Đầu Tư TM&amp;PT Phúc Minh
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-cp-sach-bach-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-sach-bach-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP sách Bách Việt"
                      defaultValue="(Công ty CP sách Bách Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP sách Bách Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-cp-sach-dich-va-tu-dien-giao-duc"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-sach-dich-va-tu-dien-giao-duc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP sách dịch và từ điển giáo dục"
                      defaultValue="(Công ty CP sách dịch và từ điển giáo dục)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP sách dịch và từ điển giáo dục
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-cp-thuong-mai-thien-ha-thuy" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-thuong-mai-thien-ha-thuy"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Thương mại Thiên Hà Thủy"
                      defaultValue="(Công ty CP Thương mại Thiên Hà Thủy)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP Thương mại Thiên Hà Thủy
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-cp-van-hoa-huy-hoang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-van-hoa-huy-hoang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Văn hóa Huy Hoàng"
                      defaultValue="(Công ty CP Văn hóa Huy Hoàng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP Văn hóa Huy Hoàng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-cp-van-hoa-truyen-thong-sen-viet"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-van-hoa-truyen-thong-sen-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Văn hóa Truyền thông Sen Việt"
                      defaultValue="(Công ty CP Văn hóa Truyền thông Sen Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP Văn hóa Truyền thông Sen Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-cp-van-hoa-va-truyen-thong-lien-viet"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-van-hoa-va-truyen-thong-lien-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Văn hóa và Truyền thông Liên Việt"
                      defaultValue="(Công ty CP Văn hóa và Truyền thông Liên Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty CP Văn hóa và Truyền thông Liên Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-sach-tri-tue-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-sach-tri-tue-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY SÁCH TRÍ TUỆ VIỆT"
                      defaultValue="(CÔNG TY SÁCH TRÍ TUỆ VIỆT)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    CÔNG TY SÁCH TRÍ TUỆ VIỆT
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-1-thanh-vien-tm-dv-van-hoa-minh-long"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-1-thanh-vien-tm-dv-van-hoa-minh-long"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH 1 thành viên TM & DV Văn hóa Minh Long"
                      defaultValue="(Công ty TNHH 1 thành viên TM & DV Văn hóa Minh Long)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH 1 thành viên TM &amp; DV Văn hóa Minh Long
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-dt-pt-van-hoa-viet-nha-sach-tri-duc"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-dt-pt-van-hoa-viet-nha-sach-tri-duc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH ĐT & PT Văn hóa Việt - Nhà sách Trí Đức"
                      defaultValue="(Công ty TNHH ĐT & PT Văn hóa Việt - Nhà sách Trí Đức)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH ĐT &amp; PT Văn hóa Việt - Nhà sách Trí Đức
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-mtv-sach-phuong-nam-phuongnambook"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-mtv-sach-phuong-nam-phuongnambook"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH MTV Sách Phương Nam (phuongnambook)"
                      defaultValue="(Công ty TNHH MTV Sách Phương Nam (phuongnambook))"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH MTV Sách Phương Nam (phuongnambook)
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-mtv-tm-dv-van-hoa-minh-long"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-mtv-tm-dv-van-hoa-minh-long"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH MTV TM & DV Văn hóa Minh Long"
                      defaultValue="(Công ty TNHH MTV TM & DV Văn hóa Minh Long)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH MTV TM &amp; DV Văn hóa Minh Long
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-sach-truyen-thong-viet-nam"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-sach-truyen-thong-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY TNHH SÁCH & TRUYỀN THÔNG VIỆT NAM"
                      defaultValue="(CÔNG TY TNHH SÁCH & TRUYỀN THÔNG VIỆT NAM)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    CÔNG TY TNHH SÁCH &amp; TRUYỀN THÔNG VIỆT NAM
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-tnhh-sach-amun" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-sach-amun"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH sách Amun"
                      defaultValue="(Công ty TNHH sách Amun)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH sách Amun
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-tnhh-sach-ha-giang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-sach-ha-giang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH sách Hà Giang"
                      defaultValue="(Công ty TNHH sách Hà Giang)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH sách Hà Giang
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-tnhh-son-quynh" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-son-quynh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Sơn Quỳnh"
                      defaultValue="(Công ty TNHH Sơn Quỳnh)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Sơn Quỳnh
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-tnhh-tazano-gieo-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-tazano-gieo-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Tazano (Gieo Books)"
                      defaultValue="(Công ty TNHH Tazano (Gieo Books))"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Tazano (Gieo Books)
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-thuong-mai-dich-vu-sach-tuyet-dinh"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-thuong-mai-dich-vu-sach-tuyet-dinh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH thương mại dịch vụ Sách Tuyệt Đỉnh"
                      defaultValue="(Công ty TNHH thương mại dịch vụ Sách Tuyệt Đỉnh)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH thương mại dịch vụ Sách Tuyệt Đỉnh
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-thuong-mai-sach-nhan-dan"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-thuong-mai-sach-nhan-dan"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Thương mại Sách Nhân Dân"
                      defaultValue="(Công ty TNHH Thương mại Sách Nhân Dân)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Thương mại Sách Nhân Dân
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-thuong-mai-va-dich-vu-van-hoa-hai-dang"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-thuong-mai-va-dich-vu-van-hoa-hai-dang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN HÓA HẢI ĐĂNG"
                      defaultValue="(CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN HÓA HẢI ĐĂNG)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN HÓA HẢI ĐĂNG
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-cong-ty-tnhh-tm-dv-vh-huong-trang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-tm-dv-vh-huong-trang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH TM & DV - VH Hương Trang"
                      defaultValue="(Công ty TNHH TM & DV - VH Hương Trang)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH TM &amp; DV - VH Hương Trang
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-tm-dv-van-hoa-dinh-ti-books"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-tm-dv-van-hoa-dinh-ti-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH TM & DV Văn hóa Đinh Tị Books"
                      defaultValue="(Công ty TNHH TM & DV Văn hóa Đinh Tị Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH TM &amp; DV Văn hóa Đinh Tị Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-truyen-thong-giao-duc-giai-tri-phan-thi"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-truyen-thong-giao-duc-giai-tri-phan-thi"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Truyền thông - Giáo dục & Giải trí Phan Thị"
                      defaultValue="(Công ty TNHH Truyền thông - Giáo dục & Giải trí Phan Thị)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Truyền thông - Giáo dục &amp; Giải trí Phan Thị
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-van-hoa-minh-tan-nha-sach-minh-thang"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-minh-tan-nha-sach-minh-thang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa Minh Tân - Nhà sách Minh Thắng"
                      defaultValue="(Công ty TNHH Văn hóa Minh Tân - Nhà sách Minh Thắng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Văn hóa Minh Tân - Nhà sách Minh Thắng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-1980-books"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-1980-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông 1980 Books"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông 1980 Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Văn hóa và Truyền thông 1980 Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-az-viet-nam"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-az-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông AZ Việt Nam"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông AZ Việt Nam)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Văn hóa và Truyền thông AZ Việt Nam
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-skybooks-viet-nam"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-skybooks-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông Skybooks Việt Nam"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông Skybooks Việt Nam)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Văn hóa và Truyền thông Skybooks Việt Nam
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-thao-nguyen"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-thao-nguyen"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông Thảo Nguyên"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông Thảo Nguyên)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Văn hóa và Truyền thông Thảo Nguyên
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-tri-viet"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-tri-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông Trí Việt"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông Trí Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Văn hóa và Truyền thông Trí Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-xuat-ban-va-truyen-thong-bestbooks-viet-nam"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-xuat-ban-va-truyen-thong-bestbooks-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Xuất bản và Truyền thông Bestbooks Việt Nam"
                      defaultValue="(Công ty TNHH Xuất bản và Truyền thông Bestbooks Việt Nam)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Xuất bản và Truyền thông Bestbooks Việt Nam
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-tnhh-xuc-tien-hop-tac-van-hoa-truyen-thong-sao-bac"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-xuc-tien-hop-tac-van-hoa-truyen-thong-sao-bac"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Xúc tiến hợp tác văn hóa & truyền thông Sao Bắc"
                      defaultValue="(Công ty TNHH Xúc tiến hợp tác văn hóa & truyền thông Sao Bắc)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty TNHH Xúc tiến hợp tác văn hóa &amp; truyền thông Sao Bắc
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label
                    htmlFor="filter-cong-ty-truyen-thong-van-hoa-unicorn-publishing"
                    className="cursor-pointer block mb-[2px]"
                  >
                    <input
                      type="checkbox"
                      id="filter-cong-ty-truyen-thong-van-hoa-unicorn-publishing"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Truyền thông & Văn hóa Unicorn Publishing"
                      defaultValue="(Công ty Truyền thông & Văn hóa Unicorn Publishing)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Công ty Truyền thông &amp; Văn hóa Unicorn Publishing
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-dinh-ti" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-dinh-ti"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Đinh Tị"
                      defaultValue="(Đinh Tị)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Đinh Tị
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-dinh-ti-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-dinh-ti-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Đinh Tị Books"
                      defaultValue="(Đinh Tị Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Đinh Tị Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-dinh-ti-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-dinh-ti-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Định Tị Books"
                      defaultValue="(Định Tị Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Định Tị Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-dong-a" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-dong-a"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Đông A"
                      defaultValue="(Đông A)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Đông A
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-ehomebooks" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-ehomebooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Ehomebooks"
                      defaultValue="(Ehomebooks)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Ehomebooks
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-hagiang-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-hagiang-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Hagiang Books"
                      defaultValue="(Hagiang Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Hagiang Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-hai-dang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-hai-dang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Hải Đăng"
                      defaultValue="(Hải Đăng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Hải Đăng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-hanoibooks" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-hanoibooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="HANOIBOOKS"
                      defaultValue="(HANOIBOOKS)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    HANOIBOOKS
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-huy-hoang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-huy-hoang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Huy Hoàng"
                      defaultValue="(Huy Hoàng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Huy Hoàng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-lien-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-lien-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Liên Việt"
                      defaultValue="(Liên Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Liên Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-minh-chau-book" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-minh-chau-book"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Minh Châu book"
                      defaultValue="(Minh Châu book)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Minh Châu book
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-minh-thang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-minh-thang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Minh Thắng"
                      defaultValue="(Minh Thắng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Minh Thắng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-minh-thang-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-minh-thang-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Minh Thắng Books"
                      defaultValue="(Minh Thắng Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Minh Thắng Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-mintbooks" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-mintbooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="mintbooks"
                      defaultValue="(mintbooks)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    mintbooks
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-nam" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhã Nam"
                      defaultValue="(Nhã Nam)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhã Nam
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-hoang-gia" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-hoang-gia"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Hoàng Gia"
                      defaultValue="(Nhà sách Hoàng Gia)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Hoàng Gia
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-khang-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-khang-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Khang Việt"
                      defaultValue="(Nhà sách Khang Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Khang Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-minh-thang" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-minh-thang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Minh Thắng"
                      defaultValue="(Nhà sách Minh Thắng)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Minh Thắng
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-nguoi-tre-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-nguoi-tre-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Người Trẻ Việt"
                      defaultValue="(Nhà sách Người Trẻ Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Người Trẻ Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-thanh-nien" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-thanh-nien"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Thanh Niên"
                      defaultValue="(Nhà sách Thanh Niên)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Thanh Niên
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-tri-thuc-tre" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-tri-thuc-tre"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Tri thức trẻ"
                      defaultValue="(Nhà sách Tri thức trẻ)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Tri thức trẻ
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-sach-tri-thuc-tre-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-tri-thuc-tre-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Tri thức trẻ books"
                      defaultValue="(Nhà sách Tri thức trẻ books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà sách Tri thức trẻ books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nha-xuat-ban-hoi-nha-van" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nha-xuat-ban-hoi-nha-van"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà xuất bản Hội Nhà Văn"
                      defaultValue="(Nhà xuất bản Hội Nhà Văn)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Nhà xuất bản Hội Nhà Văn
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nxb-van-hoc" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nxb-van-hoc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="NXB Văn học"
                      defaultValue="(NXB Văn học)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    NXB Văn học
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-phuc-minh" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-phuc-minh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Phúc Minh"
                      defaultValue="(Phúc Minh)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Phúc Minh
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-quang-van" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-quang-van"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Quảng Văn"
                      defaultValue="(Quảng Văn)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Quảng Văn
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-quoc-hoc" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-quoc-hoc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Quốc học"
                      defaultValue="(Quốc học)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Quốc học
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-tac-gia" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-tac-gia"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Tác giả"
                      defaultValue="(Tác giả)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Tác giả
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-tan-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-tan-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Tân Việt"
                      defaultValue="(Tân Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Tân Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-tri-thuc-tre-books" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-tri-thuc-tre-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Tri Thức Trẻ Books"
                      defaultValue="(Tri Thức Trẻ Books)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Tri Thức Trẻ Books
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-tri-tue" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-tri-tue"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Trí Tuệ"
                      defaultValue="(Trí Tuệ)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Trí Tuệ
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-tri-viet" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-tri-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Trí Việt"
                      defaultValue="(Trí Việt)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Trí Việt
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-trung-tam-nghien-cuu-quoc-hoc" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-trung-tam-nghien-cuu-quoc-hoc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Trung tâm Nghiên cứu Quốc học"
                      defaultValue="(Trung tâm Nghiên cứu Quốc học)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Trung tâm Nghiên cứu Quốc học
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </aside>
        {/* LỌC TAG 2 */}
        <aside className="mb-8 w-full float-left">
          <div className="w-full float-left mb-5">
            <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
              <Link
                href=""
                className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
              >
                <span>Độ tuổi</span>
              </Link>
            </h2>
          </div>
          <div className="w-full float-left bg-gray-100 py-4 pr-1">
            <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0" title="Người lớn">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-nguoi-lon" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-nguoi-lon"
                      data-group="tag2"
                      data-field="variants.title"
                      data-text="Người lớn"
                      defaultValue="(Người lớn)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Người lớn
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0" title="Thiếu nhi">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-thieu-nhi" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-thieu-nhi"
                      data-group="tag2"
                      data-field="variants.title"
                      data-text="Thiếu nhi"
                      defaultValue="(Thiếu nhi)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Thiếu nhi
                  </label>
                </span>
              </li>
              <li className="leading-loose w-full cursor-pointer float-left m-0 p-0" title="Thiếu niên">
                <span className="text-red-700 cursor-pointer text-sm font-normal">
                  <label htmlFor="filter-thieu-nien" className="cursor-pointer block mb-[2px]">
                    <input
                      type="checkbox"
                      id="filter-thieu-nien"
                      data-group="tag2"
                      data-field="variants.title"
                      data-text="Thiếu niên"
                      defaultValue="(Thiếu niên)"
                      data-operator="OR"
                      className="hidden m-0 p-0"
                    />
                    <FontAwesomeIcon icon={faSquare} className="mr-2 w-3" />
                    Thiếu niên
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </aside>
  );
}

function Category({
  newBooksCount,
  classicBooksCount,
  discountBooksCount,
  popularBooksCount,
}: Omit<CatalogSideBarProps, "genres">) {
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
                &nbsp;
                <span className="object_count">{`(${newBooksCount})`}</span>
              </Link>
            </li>
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/classic?${query}`}
                title="Sách văn học kinh điển"
              >
                <span>Sách văn học kinh điển</span>
                &nbsp;
                <span className="object_count">{`(${classicBooksCount})`}</span>
              </Link>
            </li>
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/popular?${query}`}
                title="Sách liên kết xuất bản"
              >
                <span>Sách phổ biến</span>
                &nbsp;
                <span className="object_count">{`(${popularBooksCount})`}</span>
              </Link>
            </li>
            <li className="w-full float-left block relative">
              <Link
                className="text-sm text-red-700 block py-[5px] pr-7"
                href={`/catalog/discount?${query}`}
                title="Sách giảm giá"
              >
                <span>Sách giảm giá</span>
                &nbsp;
                <span className="object_count">{`(${discountBooksCount})`}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const priceRanges = [
  {
    name: "Under 50.000đ",
    maxPrice: "50000",
  },
  {
    name: "50.000đ - 100.000đ",
    minPrice: "50000",
    maxPrice: "100000",
  },
  {
    name: "100.000đ - 200.000đ",
    minPrice: "100000",
    maxPrice: "200000",
  },
  {
    name: "Above 200.000đ",
    minPrice: "200000",
  },
];

function PriceFilter() {
  const [rangeIndex, setRangeIndex] = useState(-1);
  const router = useRouter();
  const { "min-price": minPrice, "max-price": maxPrice } = router.query;
  useEffect(() => {
    for (let i = 0; i < priceRanges.length; i++) {
      let range = priceRanges[i];
      if (range.minPrice === minPrice && range.maxPrice === maxPrice) {
        setRangeIndex(i);
        return;
      }
    }
    setRangeIndex(-1);
  }, [minPrice, maxPrice, setRangeIndex]);

  return (
    <aside className="mb-8 w-full float-left">
      <div className="w-full float-left mb-5">
        <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
          >
            <span>Giá sản phẩm</span>
          </Link>
        </h2>
      </div>
      <div className="w-full float-left bg-gray-100 py-4 pr-1">
        <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
          {priceRanges.map((range, index) => (
            <li key={index} className="leading-loose w-full cursor-pointer float-left m-0 p-0">
              <span className="text-red-700 cursor-pointer text-sm font-normal">
                <label htmlFor={`range-${index}`} className="cursor-pointer block mb-[2px]">
                  <input
                    type="checkbox"
                    id={`range-${index}`}
                    className="form-checkbox mr-2 p-0 w-3 h-3 border-red-700 focus:ring-0 text-red-700"
                    checked={index == rangeIndex}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      const query = { ...router.query };
                      if (index === rangeIndex) {
                        // setRangeIndex(-1);
                        delete query.slug;
                        delete query["min-price"];
                        delete query["max-price"];
                      } else {
                        // setRangeIndex(index);

                        delete query.slug;
                        delete query["min-price"];
                        delete query["max-price"];

                        if (range.minPrice !== undefined) {
                          query["min-price"] = range.minPrice.toString();
                        }
                        if (range.maxPrice !== undefined) {
                          query["max-price"] = range.maxPrice.toString();
                        }
                      }
                      router.replace(
                        {
                          pathname: basePath,
                          query,
                        },
                        undefined,
                        {
                          scroll: false,
                        }
                      );
                    }}
                  />
                  {range.name}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function GenreFilter({ genres }: { genres: string[] }) {
  const router = useRouter();
  const [chosenGenres, setChosenGenres] = useState<string[]>([]);
  const { genre } = router.query;

  useEffect(() => {
    if (genre === undefined) {
      setChosenGenres([]);
    } else if (typeof genre === "string") {
      setChosenGenres([genre]);
    } else {
      setChosenGenres(genre);
    }
  }, [genre, setChosenGenres]);

  return (
    <aside className="mb-8 w-full float-left">
      <div className="w-full float-left mb-5">
        <h2 className="m-0 text-base relative w-full float-left font-bold text-red-700 leading-normal before:absolute before:-bottom-[5px] before:left-0 before:right-0 before:border-b-[3px] before:border-b-gray-300">
          <Link
            href=""
            className="text-lg font-bold py-[5px] pr-4 relative text-red-700 after:absolute after:border-b-[3px] after:border-b-red-700 after:left-0 after:right-4 after:-bottom-[3px]"
          >
            <span>Genres</span>
          </Link>
        </h2>
      </div>
      <div className="w-full float-left bg-gray-100 py-4 pr-1">
        <ul className="max-h-[140px] overflow-y-auto list-none m-0 pl-4">
          {genres.map((item) => (
            <li key={item} className="leading-loose w-full cursor-pointer float-left m-0 p-0">
              <span className="text-red-700 cursor-pointer text-sm font-normal">
                <label htmlFor={`filter-${item.toLocaleLowerCase()}`} className="cursor-pointer block mb-[2px]">
                  <input
                    type="checkbox"
                    id={`filter-${item.toLocaleLowerCase()}`}
                    className="form-checkbox mr-2 p-0 w-3 h-3 border-red-700 focus:ring-0 text-red-700"
                    checked={chosenGenres.includes(item)}
                    onChange={() => {
                      const basePath = router.asPath.split("?")[0];
                      let newChosen;

                      if (chosenGenres.includes(item)) {
                        newChosen = chosenGenres.filter((chosen) => chosen !== item);
                      } else {
                        newChosen = chosenGenres.concat(item);
                      }

                      const newQuery = {
                        ...router.query,
                      };

                      delete newQuery.slug;
                      newQuery.genre = newChosen;

                      console.log(newQuery);

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
                      // setChosenGenres(newChosen);
                    }}
                  />
                  {item}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
