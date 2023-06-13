import {
  CartItem,
  useAddToCartMutation,
  useDecreaseCartItemMutation,
  useRemoveCartItemMutation,
} from "@/contexts/slices/apiSlice";
import { closeCartModal } from "@/contexts/slices/cartSlice";
import { useAppDispatch } from "@/contexts/store";
import { faClose, faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function CartModalItem({ book: { id, name, image, currentPrice: price }, quantity }: CartItem) {
  const dispatch = useAppDispatch();
  const [removeCartItem] = useRemoveCartItemMutation();

  const handleRemoveCartItem = async () => {
    try {
      await removeCartItem({ itemId: id }).unwrap();
    } catch (error: unknown) {
      console.log((error as { message: string }).message);
    }
  };

  return (
    <div className="w-full border-b border-dotted text-sm text-red-700">
      <div className="flex items-start -mr-3 py-2">
        <div className="w-1/2 text-left flex px-2">
          <div className="item-image">
            <Link
              className="block w-20 h-max relative"
              href={`/detail/${id}`}
              title={name}
              onClick={() => {
                dispatch(closeCartModal());
              }}
            >
              <Image
                alt={name}
                src={image}
                placeholder="blur"
                blurDataURL="/image-loader.gif"
                width="0"
                height="0"
                sizes="5vw"
                className="w-20 h-auto"
              />
            </Link>
          </div>
          <div className="ml-2">
            <p className="item-name">
              <Link
                href={`/detail/${id}`}
                title={name}
                onClick={() => {
                  dispatch(closeCartModal());
                }}
              >
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
        <div className="w-[15%] text-center text-black">
          <div className="item-price">
            <span className="price">{`${price.toLocaleString()}₫`}</span>
          </div>
        </div>
        <div className="w-[15%] text-center">
          <QuantityControl id={id} quantity={quantity} />
        </div>
        <div className="w-1/5 text-center">
          <span className="cart-price">
            <span className="font-bold">{`${(price * quantity).toLocaleString()}₫`}</span>
          </span>
        </div>
      </div>
    </div>
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
    <div className="h-6 w-[74px] flex mx-auto items-stretch justify-center">
      <button
        className="basis-0 grow flex items-center justify-center cursor-pointer border-y border-l border-gray-300"
        onClick={handleDecreaseQuantity}
      >
        <FontAwesomeIcon icon={faSubtract} size="xs" />
      </button>
      <input
        className="basis-0 grow flex items-center justify-center min-w-0 text-center outline-none border border-gray-300"
        type="text"
        placeholder="0"
        value={quantity}
        onChange={() => {}}
      />
      <button
        className="basis-0 grow flex items-center justify-center cursor-pointer border-y border-r border-gray-300"
        onClick={handleIncreaseQuantity}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}
