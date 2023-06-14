import {
  CartItem,
  useAddToCartMutation,
  useDecreaseCartItemMutation,
  useRemoveCartItemMutation,
} from "@/contexts/slices/apiSlice";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";

export function CartPopUpItem({ book: { id, name, image, currentPrice: price }, quantity }: CartItem) {
  const [removeCartItem] = useRemoveCartItemMutation();

  const handleRemoveCartItem = async () => {
    try {
      await removeCartItem({ itemId: id }).unwrap();
    } catch (error: unknown) {
      console.log((error as { message: string }).message);
    }
  };

  return (
    <li className="w-full py-[10px] border-t border-t-gray-300 first:border-none hover:bg-gray-50">
      <div className="flex relative">
        <Link className="block w-[100px] h-[100px] mr-[10px] text-center shrink-0" href={`/detail/${id}`} title={name}>
          <Image
            alt={name}
            src={image}
            placeholder="blur"
            blurDataURL="/image-loader.gif"
            width="0"
            height="0"
            sizes="10vw"
            className="w-[100px] h-auto max-h-full align-middle object-contain"
          />
        </Link>
        <div className="detail-item flex-shrink">
          <div className="product-details">
            <Link href={`/detail/${id}`} title={name} className="line-clamp-1 pr-8">
              {name}
            </Link>
          </div>
          <div className="text-base font-bold pb-[2px]">
            <span className="price">{`${price.toLocaleString()}₫`}</span>
          </div>
          <BookCounter quantity={quantity} id={id} />
        </div>
        <button onClick={handleRemoveCartItem}>
          <FontAwesomeIcon icon={faClose} className="text-red-700 absolute top-1 right-4" />
        </button>
      </div>
    </li>
  );
}

function BookCounter({ id, quantity }: { id: string; quantity: number }) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "" || !Number.isNaN(parseInt(inputValue))) {
      // if (cartDispatch) {
      //   let newQuantity = parseInt(inputValue);
      //   if (Number.isNaN(newQuantity)) {
      //     newQuantity = 1;
      //   }
      //   cartDispatch({
      //     type: "UPDATE_QUANTITY",
      //     id,
      //     newQuantity,
      //   });
      // }
    }
  };

  const [decreaseCartItem] = useDecreaseCartItemMutation();
  const [addToCart] = useAddToCartMutation();

  const handleDecreaseQuantity = async () => {
    try {
      await decreaseCartItem({ itemId: id }).unwrap();
    } catch (error) {
      console.log("Failed to decrease cart item");
    }
  };

  const handleIncreaseQuantity = async () => {
    try {
      await addToCart({ itemId: id }).unwrap();
    } catch (error) {
      console.log("Failed to increase cart item");
    }
  };

  return (
    <>
      <button
        className="w-7 h-7 float-left bg-white border border-gray-300 text-center text-red-700"
        onClick={handleDecreaseQuantity}
      >
        -
      </button>
      <input
        type="text"
        className="w-10 h-7 float-left -mx-[1px] text-center border border-gray-300 min-h-[28px] p-1 text-gray-900 bg-white align-middle text-sm"
        title="Số lượng"
        maxLength={3}
        value={quantity}
        // onChange={}
        placeholder="1"
      />
      <button
        className="w-7 h-7 float-left bg-white border border-gray-300 text-center text-red-700"
        onClick={handleIncreaseQuantity}
      >
        +
      </button>
    </>
  );
}
