import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartModalItem } from "./CartModalItem";
import {
  faArrowRightLong,
  faCarTunnel,
  faCaretLeft,
  faCaretRight,
  faCheck,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export function CartModal() {
  return (
    <div
      id="popup-cart"
      className="overflow-x-hidden overflow-y-auto fixed top-0 right-0 bottom-0 left-0 z-50 outline-none bg-black bg-opacity-40"
    >
      <div id="popup-cart-desktop" className="w-[750px] bg-white float-none mx-auto mt-[10%] p-5 relative rounded-md">
        <div className="mb-[10px] text-base pr-4 text-red-700">
          <FontAwesomeIcon icon={faCheck} className="font-bold" /> Bạn đã thêm {'"'}
          <span className="cart-popup-name">
            <a href="/nhung-tam-long-cao-ca-2" title="Những tấm lòng cao cả" className="text-red-500">
              Những tấm lòng cao cả
            </a>
          </span>
          {'"'} vào giỏ hàng
        </div>
        <div className="text-sm mb-[10px] cursor-pointer text-red-700">
          <FontAwesomeIcon icon={faShoppingCart} /> Giỏ hàng của bạn (<span className="cart-popup-count">3</span> sản
          phẩm) <FontAwesomeIcon icon={faCaretRight} />
        </div>
        <div className="content-popup-cart">
          <div className="w-full flex">
            <div className="w-1/2 text-left bg-red-700 text-white py-1 px-2 text-sm border-r border-r-whited rounded-tl">
              Sản phẩm
            </div>
            <div className="w-[15%] text-center bg-red-700 text-white py-1 px-2 text-sm border-r border-r-white">
              Đơn giá
            </div>
            <div className="w-[15%] text-center bg-red-700 text-white py-1 px-2 text-sm border-r border-r-white">
              Số lượng
            </div>
            <div className="w-1/5 text-center bg-red-700 text-white py-1 px-2 text-sm rounded-tr">Thành tiền</div>
          </div>
          <div className="w-full max-h-72 overflow-y-auto overflow-x-hidden border border-gray-300 rounded-b">
            <CartModalItem />
            <CartModalItem />
            <CartModalItem />
            <CartModalItem />
            <CartModalItem />
          </div>
          <div className="w-full text-red-700">
            <div className="w-full px-[10px] py-4 flex justify-between items-center">
              <div className="text-sm">
                <p>Giao hàng trên toàn quốc</p>
              </div>
              <div className="text-base font-bold">
                <p>
                  Thành tiền: <span className="total-price">368.000₫</span>
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <a className="m-[10px] text-sm" title="Tiếp tục mua hàng">
                <span>
                  <FontAwesomeIcon icon={faCaretLeft} /> Tiếp tục mua hàng
                </span>
              </a>
              <a className="p-[10px] text-sm bg-red-700 text-white rounded" title="Tiến hành đặt hàng" href="/checkout">
                <span>
                  Tiến hành đặt hàng <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <a title="Close" className="quickview-close close-window" href="javascript:;">
          <i className="fa  fa-close" />
        </a>
      </div>
    </div>
  );
}
