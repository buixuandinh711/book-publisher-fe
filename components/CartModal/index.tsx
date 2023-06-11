import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartModalItem } from "./CartModalItem";
import {
  faArrowRightLong,
  faCaretLeft,
  faCaretRight,
  faCheck,
  faClose,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext, CartDispatchContext } from "@/contexts/CartContext";
import Link from "next/link";
import { useCartQuery } from "@/contexts/slices/apiSlice";
import Image from "next/image";

export function CartModal() {
  const cart = useContext(CartContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuery = useCartQuery({});

  if (!cart.isModalOpen) return <></>;

  return (
    <div
      id="popup-cart"
      className="overflow-x-hidden overflow-y-auto fixed top-0 right-0 bottom-0 left-0 z-10 outline-none bg-black bg-opacity-40"
      onClick={() => {
        if (cartDispatch) {
          cartDispatch({ type: "CLOSE_CART_MODAL" });
        }
      }}
    >
      <div
        id="popup-cart-desktop"
        className="w-[750px] bg-white float-none mx-auto mt-[10%] p-5 relative rounded-md z-20"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mb-[10px] text-base pr-4 text-red-700">
          <FontAwesomeIcon icon={faCheck} className="font-bold" /> Bạn đã thêm {'"'}
          <span className="cart-popup-name">
            <Link href="/nhung-tam-long-cao-ca-2" title="Những tấm lòng cao cả" className="text-red-500">
              Những tấm lòng cao cả
            </Link>
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
            {cartQuery.isLoading ? (
              <Image
                alt="Loading"
                src="/image-loader.gif"
                placeholder="blur"
                width="0"
                height="0"
                sizes="10vw"
                className="w-[100px] h-auto max-h-full align-middle object-contain"
              />
            ) : (
              cartQuery.isSuccess &&
              cartQuery.data.map((item) => <CartModalItem book={{ ...item.book, price: 100000 }} quantity={item.quantity} key={item.book.id} />)
            )}
          </div>
          <div className="w-full text-red-700">
            <div className="w-full px-[10px] py-4 flex justify-between items-center">
              <div className="text-sm">
                <p>Giao hàng trên toàn quốc</p>
              </div>
              <div className="text-base font-bold">
                <p>
                  Thành tiền:{" "}
                  <span className="total-price">
                    {cart.cartItems
                      .reduce((accumulator, item) => accumulator + item.book.price * item.quantity, 0)
                      .toLocaleString()}
                    ₫
                  </span>
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
        <button
          title="Close"
          className="absolute top-2 right-4 h-min"
          onClick={() => {
            if (cartDispatch) {
              cartDispatch({ type: "CLOSE_CART_MODAL" });
            }
          }}
        >
          <FontAwesomeIcon icon={faClose} className="text-red-700" />
        </button>
      </div>
    </div>
  );
}
