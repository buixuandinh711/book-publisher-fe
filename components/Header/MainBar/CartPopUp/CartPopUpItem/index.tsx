import { CartItem, useAddToCartMutation, useDecreaseCartItemMutation, useRemoveCartItemMutation } from "@/contexts/slices/apiSlice";
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
    <li className="w-full border-t border-t-gray-300 py-[10px] first:border-none hover:bg-gray-50">
      <div className="relative flex">
        <Link className="mr-[10px] block h-[100px] w-[100px] shrink-0 text-center" href={`/detail/${id}`} title={name}>
          <Image
            alt={name}
            src={image}
            placeholder="blur"
            blurDataURL="/image-loader.gif"
            width="0"
            height="0"
            sizes="10vw"
            className="h-auto max-h-full w-[100px] object-contain align-middle"
          />
        </Link>
        <div className="detail-item flex-shrink">
          <div className="product-details">
            <Link href={`/detail/${id}`} title={name} className="line-clamp-1 pr-8">
              {name}
            </Link>
          </div>
          <div className="pb-[2px] text-base font-bold">
            <span className="price">{`${price.toLocaleString()}₫`}</span>
          </div>
          <BookCounter quantity={quantity} id={id} />
        </div>
        <button onClick={handleRemoveCartItem}>
          <FontAwesomeIcon icon={faClose} className="absolute right-4 top-1 text-red-700" />
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
      <button className="float-left h-7 w-7 border border-gray-300 bg-white text-center text-red-700" onClick={handleDecreaseQuantity}>
        -
      </button>
      <input
        type="text"
        className="float-left -mx-[1px] h-7 min-h-[28px] w-10 border border-gray-300 bg-white p-1 text-center align-middle text-sm text-gray-900"
        title="Số lượng"
        maxLength={3}
        value={quantity}
        onChange={() => {}}
        placeholder="1"
      />
      <button className="float-left h-7 w-7 border border-gray-300 bg-white text-center text-red-700" onClick={handleIncreaseQuantity}>
        +
      </button>
    </>
  );
}
