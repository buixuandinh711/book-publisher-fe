import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function MainBar() {
  return (
    <div className="relative w-full float-left flex items-center p-0 bg-white">
      <div className="container mx-auto px-4">
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
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4">
            <form
              action="/search"
              method="get"
              className="float-left w-full m-0 border border-gray-500 pr-10 pl-4 rounded-md"
            >
              <div className="w-full float-left relative table border-separate">
                <input
                  type="text"
                  className="text-base bg-transparent text-red-700 pr-6 min-h-1 h-10 border-none rounded-none table-cell relative z-10 float-left w-full mb-0"
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
            <div className="account_panel panel_cart hidden-sm hidden-xs">
              <div className="img hidden-md">
                <i className="fa fa-user"></i>
              </div>
              <div className="info">
                <span>Tài khoản</span>
                <span>
                  <a href="/account/login">Đăng nhập</a>
                  <a href="/account/register">Đăng ký</a>
                </span>
              </div>
            </div>

            <div className="top-cart-contain panel_cart">
              <div className="mini-cart text-xs-center">
                <div className="heading-cart">
                  <div className="img hidden-md">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <span className="hidden-sm hidden-xs">Giỏ hàng</span>
                    <span className="cart_info">
                      <span className="cartCount count_item_pr" id="cart-total">
                        0
                      </span>
                      &nbsp;
                      <span className="hidden-sm hidden-xs">Sản phẩm</span>
                    </span>
                  </div>
                </div>
                <div className="top-cart-content hidden-sm hidden-xs">
                  <ul id="cart-sidebar" className="mini-products-list count_li">
                    <div className="no-item">
                      <p>Không có sản phẩm nào trong giỏ hàng.</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
