import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function MainBar() {
  return (
    <div className="relative w-full float-left flex items-center p-0 bg-white">
      <div className="container">
        <div className="flex items-center -mx-4">
          {/* <div className="menu-bar hidden-md hidden-lg">
            <a href="#nav-mobile">
              <i className="fa fa-align-justify"></i>
            </a>
          </div> */}
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4">
            <div className="h-24 flex content-start items-center">
              <a
                title="NHÀ XUẤT BẢN VĂN HỌC"
                href="/"
                className="text-red-700 no-underline bg-transparent"
              >
                <img
                  className="block max-w-full h-auto border-0 max-h-full align-middle"
                  src="https://bizweb.dktcdn.net/100/370/339/themes/744741/assets/logo.png?1632297125018"
                  alt="Logo NHÀ XUẤT BẢN VĂN HỌC"
                />
              </a>
            </div>
          </div>
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4 inline-flex items-center">
            <form
              action="/search"
              method="get"
              className="float-left w-full m-0 border border-gray-300 pr-10 pl-4 rounded-md"
            >
              <div className="w-full float-left relative table border-separate">
                <input
                  type="text"
                  className="outline-none text-base bg-transparent text-red-700 placeholder-red-700 pr-6 min-h-1 h-10 border-none rounded-none table-cell relative z-10 float-left w-full mb-0"
                  name="query"
                  id="search"
                  title="Nhập từ khoá cần tìm"
                  placeholder="Nhập từ khóa cần tìm ..."
                />
                {/* <input
                  type="hidden"
                  className="form-control"
                  name="type"
                  value="article,product"
                /> */}
                <button
                  className="absolute h-auto top-0 -right-10 bottom-0 z-10 w-6 text-sm bg-transparent text-red-700 flex justify-center items-center leading-10 px-5 text-center"
                  type="submit"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="inline-block text-sm"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4">
            <div className="w-48 h-10 float-left mr-5 border border-gray-300 rounded-md">
              <div className="float-left mr-1 h-10 w-10 overflow-hidden border-r border-r-gray-300 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} className="text-lg" />
              </div>
              <div className="float-left h-10 flex justify-center flex-col flex-nowrap">
                <span className="font-bold text-base leading-none">
                  Tài khoản
                </span>
                <span className="leading-none">
                  <a
                    href="/account/login"
                    className="mr-2 relative text-sm leading-none before:content-['*'] before:absolute before:-right-2 before:bottom-0 before:top-1"
                  >
                    Đăng nhập
                  </a>
                  <a href="/account/register" className="text-sm leading-none">
                    Đăng ký
                  </a>
                </span>
              </div>
            </div>

            <div className="w-36 h-10 flex justify-end items-center float-left text-gray-900 p-0 z-50 border border-gray-300 rounded-md">
              <div className="w-36 z-10 text-center float-left rounded-md">
                <div className="w-full float-left">
                  <div className="float-left mr-1 h-10 w-10 overflow-hidden border-r border-r-gray-300 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="inline-block text-lg text-red-700"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="cursor-pointer w-calc[100% - 50px] float-left h-10 flex justify-center flex-col flex-nowrap">
                    <span className="font-bold text-base text-red-700 leading-none">
                      Giỏ hàng
                    </span>
                    <span className="leading-none">
                      <span
                        className="font-bold text-base text-red-700 leading-none"
                        id="cart-total"
                      >
                        0
                      </span>
                      &nbsp;
                      <span className="text-sm leading-none">Sản phẩm</span>
                    </span>
                  </div>
                </div>
                {/* <div className="top-cart-content hidden-sm hidden-xs">
                  <ul id="cart-sidebar" className="mini-products-list count_li">
                    <div className="no-item">
                      <p>Không có sản phẩm nào trong giỏ hàng.</p>
                    </div>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
