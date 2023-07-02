import { useCartQuery } from "@/contexts/slices/apiSlice";
import { CartPopUpItem } from "./CartPopUpItem";
import Image from "next/image";
import Link from "next/link";

export function CartPopUp() {
  const cartQuery = useCartQuery({});

  if (cartQuery.isLoading)
    return (
      <div className="absolute right-4 top-10 hidden rounded bg-white text-left shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] group-hover:block">
        <div id="cart-sidebar" className="w-[360px] overflow-hidden p-5">
          <Image
            alt="Loading"
            src="/image-loader.gif"
            width="0"
            height="0"
            sizes="10vw"
            className="h-auto max-h-full w-[100px] object-contain align-middle"
          />
        </div>
      </div>
    );

  if (!cartQuery.isSuccess) {
    return (
      <div className="absolute right-4 top-10 hidden rounded bg-white text-left shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] group-hover:block">
        <div id="cart-sidebar" className="w-[360px] overflow-hidden p-5">
          Failed to load your cart, please retry
        </div>
      </div>
    );
  }

  if (cartQuery.data.length < 1) {
    return (
      <div className="absolute right-4 top-10 hidden rounded bg-white text-left shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] group-hover:block">
        <div id="cart-sidebar" className="w-[360px] overflow-hidden p-5">
          Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-4 top-10 hidden rounded bg-white text-left shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] group-hover:block">
      <div id="cart-sidebar" className="w-[360px] overflow-hidden py-5">
        <ul className="max-h-[380px] w-full overflow-y-auto overflow-x-hidden pl-4">
          {cartQuery.data.map((item) => (
            <CartPopUpItem {...item} key={item.book.id} />
          ))}
        </ul>
        <div className="w-full px-4">
          <div className="flex items-center justify-between py-3 text-base">
            <strong className="font-bold text-black">{"Total: "}</strong>
            <span className="mr-1 font-bold text-red-700">
              {cartQuery.data.reduce((accumulator, item) => accumulator + item.book.currentPrice * item.quantity, 0).toLocaleString()}₫
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center px-4">
          <a
            href="/cart"
            className="duration-400 block h-10 w-1/2 cursor-pointer rounded-l border border-red-700 bg-white px-5  text-center text-sm font-bold uppercase leading-[40px] text-red-700 transition-all hover:bg-red-700 hover:text-white"
          >
            <span>Cart</span>
          </a>
          <Link
            href="/cart/checkout"
            className="duration-400 -ml-[1px] block h-10 w-1/2 cursor-pointer rounded-r border border-red-700 bg-white  px-5 text-center text-sm font-bold uppercase leading-[40px] text-red-700 transition-all hover:bg-red-700 hover:text-white"
          >
            <span>Check out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
