import { useAddToCartMutation } from "@/contexts/slices/apiSlice";
import { openCartModal } from "@/contexts/slices/cartSlice";
import { useAppDispatch } from "@/contexts/store";
import { calculateDiscountPercentage } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export interface BookCartProps {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
}

export function BookCart({ id, name, image, originalPrice, currentPrice }: BookCartProps) {
  const dispatch = useAppDispatch();
  const [addToCart] = useAddToCartMutation({});

  const handleAddToCart = async () => {
    try {
      await addToCart({ itemId: id }).unwrap();
      dispatch(openCartModal({ itemId: id, name }));
    } catch (error) {
      console.log("Failed to add item to cart");
    }
  };

  return (
    <div className="relative mx-auto w-[190px] overflow-hidden bg-white px-4 text-left">
      <div className="relative float-left w-full">
        {calculateDiscountPercentage(originalPrice, currentPrice) > 0 && (
          <div className="absolute left-0 top-0 z-10 h-10 w-10 bg-red-700 text-center text-sm font-bold leading-10 text-white before:absolute before:bottom-full before:left-0 before:top-full before:z-50 before:m-0 before:border-l-20 before:border-r-20 before:border-t-10 before:border-red-700 before:border-l-transparent before:border-r-transparent">
            {`-${calculateDiscountPercentage(originalPrice, currentPrice)}%`}
          </div>
        )}
        <Link href={`/detail/${id}`} title={name} className="relative flex h-56 items-center justify-center text-center">
          <Image
            src={image}
            alt={name}
            className="mx-auto h-52 max-h-full w-auto max-w-full border-0 object-cover align-middle"
            fill
            sizes="(max-width: 1080px) 10vw"
            placeholder="blur"
            blurDataURL="/image-loader.gif"
          />
        </Link>
      </div>
      <div className="relative z-10 float-left min-h-105 w-full pb-3">
        <h3 className="float-left my-3 line-clamp-2 min-h-[50px] w-full overflow-hidden text-ellipsis text-center text-base leading-normal text-red-700">
          <Link href={`/detail/${id}`} title={name} className="font-semibold text-red-700">
            {name}
          </Link>
        </h3>
        <div className="float-left flex min-h-[37px] w-full flex-col items-center justify-center leading-normal">
          <div className="text-lg font-bold text-black">
            <span className="price product-price">{currentPrice.toLocaleString()}</span>
          </div>
          <div className="m-0 text-sm text-black line-through">
            <span className="price product-price-old">{originalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="float-left inline-flex w-full justify-center">
        <div>
          <input type="hidden" name="variantId" defaultValue={76671181} />
          <button
            className="relative inline-block h-10 cursor-pointer whitespace-nowrap border-none bg-red-700 px-7 text-center text-base font-normal leading-[40px] tracking-normal text-white outline-none"
            title="Mua hàng"
            onClick={handleAddToCart}
          >
            <span>Mua hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
}
