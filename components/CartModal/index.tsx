import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartModalItem } from "./CartModalItem";
import { faArrowRightLong, faCaretLeft, faCaretRight, faCheck, faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
      className="fixed bottom-0 left-0 right-0 top-0 z-10 overflow-y-auto overflow-x-hidden bg-black bg-opacity-40 outline-none"
      onClick={() => {
        dispatch(closeCartModal());
      }}
    >
      <div
        id="popup-cart-desktop"
        className="relative z-20 float-none mx-auto mt-[10%] w-[750px] rounded-md bg-white p-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mb-[10px] pr-4 text-base text-red-700">
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
        <div className="mb-[10px] cursor-pointer text-sm text-red-700">
          <FontAwesomeIcon icon={faShoppingCart} /> Your Cart (<span id="cart-modal-item-count">{cartQuery.data?.length}</span> items){" "}
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
        <div className="content-popup-cart">
          <div className="flex w-full">
            <div className="border-r-whited w-1/2 rounded-tl border-r bg-red-700 px-2 py-1 text-left text-sm text-white">Product</div>
            <div className="w-[15%] border-r border-r-white bg-red-700 px-2 py-1 text-center text-sm text-white">Price</div>
            <div className="w-[15%] border-r border-r-white bg-red-700 px-2 py-1 text-center text-sm text-white">Quantity</div>
            <div className="w-1/5 rounded-tr bg-red-700 px-2 py-1 text-center text-sm text-white">Total</div>
          </div>
          <div className="max-h-72 w-full overflow-y-auto overflow-x-hidden rounded-b border border-gray-300">
            {cartQuery.isLoading ? (
              <Image
                alt="Loading"
                src="/image-loader.gif"
                width="0"
                height="0"
                sizes="10vw"
                className="h-auto max-h-full w-[100px] object-contain align-middle"
              />
            ) : (
              cartQuery.isSuccess &&
              cartQuery.data.map((item) => <CartModalItem book={{ ...item.book }} quantity={item.quantity} key={item.book.id} />)
            )}
          </div>
          <div className="w-full text-red-700">
            <div className="flex w-full items-center justify-between px-[10px] py-4">
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
            <div className="flex w-full items-center justify-between">
              <button className="m-[10px] text-sm" title="Continue Shopping" onClick={handleContinueShopping}>
                <FontAwesomeIcon icon={faCaretLeft} /> Continue Shopping
              </button>

              <Link className="rounded bg-red-700 p-[10px] text-sm text-white" title="Proceed to Checkout" href="/cart/checkout">
                <span>
                  Proceed to Checkout <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <button
          title="Close"
          className="absolute right-4 top-2 h-min"
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
