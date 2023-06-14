import { useCartQuery } from "@/contexts/slices/apiSlice";
import { CartPopUpItem } from "./CartPopUpItem";
import Image from "next/image";

export function CartPopUp() {
  const cartQuery = useCartQuery({});

  if (cartQuery.isLoading)
    return (
      <div className="group-hover:block hidden absolute top-10 right-4 bg-white text-left rounded shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)]">
        <div id="cart-sidebar" className="p-5 w-[360px] overflow-hidden">
          <Image
            alt="Loading"
            src="/image-loader.gif"
            width="0"
            height="0"
            sizes="10vw"
            className="w-[100px] h-auto max-h-full align-middle object-contain"
          />
        </div>
      </div>
    );

  if (!cartQuery.isSuccess) {
    return (
      <div className="group-hover:block hidden absolute top-10 right-4 bg-white text-left rounded shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)]">
        <div id="cart-sidebar" className="p-5 w-[360px] overflow-hidden">
          Failed to load your cart, please retry
        </div>
      </div>
    );
  }

  if (cartQuery.data.length < 1) {
    return (
      <div className="group-hover:block hidden absolute top-10 right-4 bg-white text-left rounded shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)]">
        <div id="cart-sidebar" className="p-5 w-[360px] overflow-hidden">
          Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className="group-hover:block hidden absolute top-10 right-4 bg-white text-left rounded shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)]">
      <div id="cart-sidebar" className="py-5 w-[360px] overflow-hidden">
        <ul className="w-full max-h-[380px] overflow-x-hidden overflow-y-auto pl-4">
          {cartQuery.data.map((item) => (
            <CartPopUpItem {...item} key={item.book.id} />
          ))}
        </ul>
        <div className="w-full px-4">
          <div className="text-base py-3 flex items-center justify-between">
            <strong className="font-bold text-black">{"Total: "}</strong>
            <span className="mr-1 font-bold text-red-700">
              {cartQuery.data
                .reduce((accumulator, item) => accumulator + item.book.currentPrice * item.quantity, 0)
                .toLocaleString()}
              ₫
            </span>
          </div>
        </div>
        <div className="w-full px-4 flex items-center justify-center">
          <a
            href="/cart"
            className="block w-1/2 h-10 font-bold uppercase border border-red-700 text-red-700 bg-white px-5  cursor-pointer leading-[40px] text-sm text-center rounded-l hover:bg-red-700 hover:text-white transition-all duration-400"
          >
            <span>Cart</span>
          </a>
          <a
            href="/checkout"
            className="block w-1/2 h-10 font-bold uppercase border border-red-700 text-red-700 bg-white px-5  cursor-pointer leading-[40px] text-sm text-center -ml-[1px] rounded-r hover:bg-red-700 hover:text-white transition-all duration-400"
          >
            <span>Check out</span>
          </a>
        </div>
      </div>
    </div>
  );
}
