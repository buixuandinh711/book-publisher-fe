import { CartDispatchContext } from "@/contexts/CartContext";
import { calculateDiscountPercentage, ceilToNearest5 } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useContext } from "react";

export interface BookCartProps {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
}

export function BookCart({ id, name, image, originalPrice, currentPrice }: BookCartProps) {
  const cartDispatch = useContext(CartDispatchContext);

  const openCartModal = useCallback(() => {
    if (cartDispatch) {
      cartDispatch({ type: "ADD_TO_CART", book: { id, name, image, price: currentPrice } });
    }
  }, [cartDispatch, id, image, name, currentPrice]);

  return (
    <div className="text-left relative overflow-hidden bg-white w-[190px] px-4 mx-auto">
      <div className="relative w-full float-left">
        {calculateDiscountPercentage(originalPrice, currentPrice) > 0 && (
          <div className="absolute text-sm text-white w-10 h-10 leading-10 font-bold top-0 left-0 text-center z-10 bg-red-700 before:border-red-700 before:border-t-10 before:border-l-20 before:border-r-20 before:border-l-transparent before:border-r-transparent before:absolute before:bottom-full before:m-0 before:left-0 before:top-full before:z-50">
            {`-${calculateDiscountPercentage(originalPrice, currentPrice)}%`}
          </div>
        )}
        <Link
          href={`/detail/${id}`}
          title={name}
          className="h-56 flex items-center justify-center text-center relative"
        >
          <Image
            src={image}
            alt={name}
            className="align-middle border-0 max-w-full max-h-full w-auto h-52 mx-auto object-cover"
            fill
            sizes="(max-width: 1080px) 10vw"
            placeholder="blur"
            blurDataURL="/image-loader.gif"
          />
        </Link>
      </div>
      <div className="w-full float-left z-10 relative pb-3 min-h-105">
        <h3 className="min-h-[50px] overflow-hidden text-ellipsis line-clamp-2 w-full float-left text-base text-red-700 text-center my-3 leading-normal">
          <Link href={`/detail/${id}`} title={name} className="text-red-700 font-semibold">
            {name}
          </Link>
        </h3>
        <div className="min-h-[37px] flex items-center justify-center flex-col leading-normal w-full float-left">
          <div className="text-lg text-black font-bold">
            <span className="price product-price">{currentPrice.toLocaleString()}</span>
          </div>
          <div className="m-0 text-sm text-black line-through">
            <span className="price product-price-old">{originalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="inline-flex justify-center w-full float-left">
        <div>
          <input type="hidden" name="variantId" defaultValue={76671181} />
          <button
            className="bg-red-700 text-white border-none relative text-base px-7 cursor-pointer inline-block h-10 leading-[40px] text-center whitespace-nowrap outline-none font-normal tracking-normal"
            title="Mua hàng"
            onClick={openCartModal}
          >
            <span>Mua hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
}
