import { CartAction, CartDispatchContext, CartItem } from "@/contexts/CartContext";
import { faClose, faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, useContext } from "react";

export function CartModalItem({ book: { id, name, image, price }, quantity }: CartItem) {
  const cartDispatch = useContext(CartDispatchContext);

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
                if (cartDispatch) {
                  cartDispatch({
                    type: "CLOSE_CART_MODAL",
                  });
                }
              }}
            >
              <Image
                alt="Thép đã tôi thế đấy"
                src={image}
                placeholder="blur"
                blurDataURL="/image-loader.gif"
                width="0"
                height="0"
                sizes="10vw"
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
                  if (cartDispatch) {
                    cartDispatch({
                      type: "CLOSE_CART_MODAL",
                    });
                  }
                }}
              >
                {name}
              </Link>
            </p>
            <p className="text-xs">
              <button
                className="remove-item-cart"
                title="Xóa"
                onClick={() => {
                  if (cartDispatch) {
                    cartDispatch({ type: "REMOVE_ITEM", bookId: id });
                  }
                }}
              >
                <FontAwesomeIcon icon={faClose} /> Xóa
              </button>
            </p>
          </div>
        </div>
        <div className="w-[15%] text-center text-black">
          <div className="item-price">
            <span className="price">{`${price}₫`}</span>
          </div>
        </div>
        <div className="w-[15%] text-center">
          <QuantityControl id={id} quantity={quantity} cartDispatch={cartDispatch}/>
        </div>
        <div className="w-1/5 text-center">
          <span className="cart-price">
            <span className="font-bold">{`${price * quantity}₫`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function QuantityControl({
  id,
  quantity,
  cartDispatch,
}: {
  id: number;
  quantity: number;
  cartDispatch: Dispatch<CartAction> | null;
}) {
  return (
    <div className="h-6 w-[74px] flex mx-auto items-stretch justify-center">
      <button
        className="basis-0 grow flex items-center justify-center cursor-pointer border-y border-l border-gray-300"
        onClick={() => {
          if (cartDispatch) {
            cartDispatch({ type: "DECREASE_ITEM_QUANTITY", bookId: id });
          }
        }}
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
        onClick={() => {
          if (cartDispatch) {
            cartDispatch({ type: "INCREASE_ITEM_QUANTITY", bookId: id });
          }
        }}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}
