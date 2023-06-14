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
import Link from "next/link";
import { useCartQuery } from "@/contexts/slices/apiSlice";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/contexts/store";
import { closeCartModal } from "@/contexts/slices/cartSlice";

export function CartModal() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartQuery = useCartQuery({});

  const handleContinueShopping = () => {
    dispatch(closeCartModal());
  };

  if (!cart.isModalOpen) return <></>;

  return (
    <div
      id="cart-modal"
      className="overflow-x-hidden overflow-y-auto fixed top-0 right-0 bottom-0 left-0 z-10 outline-none bg-black bg-opacity-40"
      onClick={() => {
        dispatch(closeCartModal());
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
          <FontAwesomeIcon icon={faCheck} className="font-bold" /> You have added {'"'}
          <span className="cart-popup-name">
            <Link
              href={`detail/${cart.recentAdded?.itemId}`}
              title={cart.recentAdded?.name}
              className="text-red-500"
              onClick={() => {
                dispatch(closeCartModal());
              }}
            >
              {cart.recentAdded?.name}
            </Link>
          </span>
          {'"'} to the cart.
        </div>
        <div className="text-sm mb-[10px] cursor-pointer text-red-700">
          <FontAwesomeIcon icon={faShoppingCart} /> Your Cart (
          <span id="cart-modal-item-count">{cartQuery.data?.length}</span> items){" "}
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
        <div className="content-popup-cart">
          <div className="w-full flex">
            <div className="w-1/2 text-left bg-red-700 text-white py-1 px-2 text-sm border-r border-r-whited rounded-tl">
              Product
            </div>
            <div className="w-[15%] text-center bg-red-700 text-white py-1 px-2 text-sm border-r border-r-white">
              Price
            </div>
            <div className="w-[15%] text-center bg-red-700 text-white py-1 px-2 text-sm border-r border-r-white">
              Quantity
            </div>
            <div className="w-1/5 text-center bg-red-700 text-white py-1 px-2 text-sm rounded-tr">Total</div>
          </div>
          <div className="w-full max-h-72 overflow-y-auto overflow-x-hidden border border-gray-300 rounded-b">
            {cartQuery.isLoading ? (
              <Image
                alt="Loading"
                src="/image-loader.gif"
                width="0"
                height="0"
                sizes="10vw"
                className="w-[100px] h-auto max-h-full align-middle object-contain"
              />
            ) : (
              cartQuery.isSuccess &&
              cartQuery.data.map((item) => (
                <CartModalItem book={{ ...item.book }} quantity={item.quantity} key={item.book.id} />
              ))
            )}
          </div>
          <div className="w-full text-red-700">
            <div className="w-full px-[10px] py-4 flex justify-between items-center">
              <div className="text-sm">
                <p>Shipping nationwide</p>
              </div>
              <div className="text-base font-bold">
                <p>
                  Total:{" "}
                  <span className="total-price">
                    {cartQuery
                      .data!.reduce((accumulator, item) => accumulator + item.book.currentPrice * item.quantity, 0)
                      .toLocaleString()}
                    ₫
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <button className="m-[10px] text-sm" title="Continue Shopping" onClick={handleContinueShopping}>
                <FontAwesomeIcon icon={faCaretLeft} /> Continue Shopping
              </button>

              <a
                className="p-[10px] text-sm bg-red-700 text-white rounded"
                title="Proceed to Checkout"
                href="/checkout"
              >
                <span>
                  Proceed to Checkout <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <button
          title="Close"
          className="absolute top-2 right-4 h-min"
          onClick={() => {
            dispatch(closeCartModal());
          }}
        >
          <FontAwesomeIcon icon={faClose} className="text-red-700" />
        </button>
      </div>
    </div>
  );
}
