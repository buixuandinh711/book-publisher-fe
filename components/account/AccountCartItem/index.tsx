import { CartItem, useAddToCartMutation, useDecreaseCartItemMutation, useRemoveCartItemMutation } from "@/contexts/slices/apiSlice";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";

export function AccountCartItem({ book: { id, name, image, currentPrice: price }, quantity }: CartItem) {
  const [removeCartItem] = useRemoveCartItemMutation();

  const handleRemoveCartItem = async () => {
    try {
      await removeCartItem({ itemId: id }).unwrap();
    } catch (error: unknown) {
      console.log((error as { message: string }).message);
    }
  };

  return (
    <tr className="text-red-700 border-b border-b-gray-300 last:border-none hover:bg-gray-50">
      <td className="p-2">
        <div className="flex items-center">
          <div className="item-image">
            <Link className="relative flex h-20 w-20 justify-center" href={`/detail/${id}`} title={name}>
              <Image
                alt={name}
                src={image}
                placeholder="blur"
                blurDataURL="/small-loader.gif"
                width="0"
                height="0"
                sizes="5vw"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="ml-2">
            <p className="item-name">
              <Link href={`/detail/${id}`} title={name}>
                {name}
              </Link>
            </p>
            <p className="text-xs">
              <button className="remove-item-cart" title="Remove" onClick={handleRemoveCartItem}>
                <FontAwesomeIcon icon={faClose} /> Remove
              </button>
            </p>
          </div>
        </div>
      </td>
      <td className="p-2 text-center">{`${price.toLocaleString()}₫`}</td>
      <td className="p-2 text-center">
        <QuantityControl id={id} quantity={quantity} />
      </td>
      <td className="p-2 text-center">
        <span className="cart-price font-bold">{`${(price * quantity).toLocaleString()}₫`}</span>
      </td>
    </tr>
  );
}

function QuantityControl({ id, quantity }: { id: string; quantity: number }) {
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
    <div className="mx-auto flex h-6 w-[74px] items-stretch justify-center">
      <button
        className="flex grow basis-0 cursor-pointer items-center justify-center border-y border-l border-gray-300"
        onClick={handleDecreaseQuantity}
      >
        <FontAwesomeIcon icon={faSubtract} size="xs" />
      </button>
      <input
        className="flex min-w-0 grow basis-0 items-center justify-center border border-gray-300 text-center outline-none"
        type="text"
        placeholder="0"
        value={quantity}
        onChange={() => {}}
      />
      <button
        className="flex grow basis-0 cursor-pointer items-center justify-center border-y border-r border-gray-300"
        onClick={handleIncreaseQuantity}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}
