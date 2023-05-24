import { faClose, faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function CartModalItem() {
  return (
    <div className="w-full border-b border-dotted text-sm text-red-700">
      <div className="flex items-start -mr-3 py-2">
        <div className="w-1/2 text-left flex px-2">
          <div className="item-image">
            <a className="block w-20 h-max relative" href="/copy-of-thep-da-toi-the-day" title="Thép đã tôi thế đấy">
              <Image
                alt="Thép đã tôi thế đấy"
                src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188454/book-publisher/truyen-ngan-dac-sac-nga.jpg"
                placeholder="blur"
                blurDataURL="/image-loader.gif"
                width="0"
                height="0"
                sizes="10vw"
                className="w-20 h-auto"
              />
            </a>
          </div>
          <div className="ml-2">
            <p className="item-name">
              <a href="/copy-of-thep-da-toi-the-day" title="Thép đã tôi thế đấy">
                Thép đã tôi thế đấy
              </a>
            </p>
            <p className="text-xs">
              <a href="javascript:;" className="remove-item-cart" title="Xóa" data-id={69812916}>
                <FontAwesomeIcon icon={faClose} /> Xóa
              </a>
            </p>
          </div>
        </div>
        <div className="w-[15%] text-center text-black">
          <div className="item-price">
            <span className="price">96.000₫</span>
          </div>
        </div>
        <div className="w-[15%] text-center">
          <QuantityControl />
        </div>
        <div className="w-1/5 text-center">
          <span className="cart-price">
            <span className="font-bold">96.000₫</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function QuantityControl() {
  return (
    <div className="h-6 w-[74px] flex mx-auto items-stretch justify-center">
      <span className="basis-0 grow flex items-center justify-center cursor-pointer border-y border-l border-gray-300">
        <FontAwesomeIcon icon={faSubtract} size="xs" />
      </span>
      <input
        className="basis-0 grow flex items-center justify-center min-w-0 text-center outline-none border border-gray-300"
        placeholder="0"
      />
      <span className="basis-0 grow flex items-center justify-center cursor-pointer border-y border-r border-gray-300">
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </span>
    </div>
  );
}
