import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function CartPopUpItem() {
  return (
    <li className="w-full py-[10px] border-t border-t-gray-300 first:border-none hover:bg-gray-50">
      <div className="flex relative">
        <Link
          className="block w-[100px] h-[100px] mr-[10px] text-center shrink-0"
          href="/copy-of-thep-da-toi-the-day"
          title="Thép đã tôi thế đấy"
        >
          <Image
            alt="Thép đã tôi thế đấy"
            src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188453/book-publisher/truyen-ngan-hay-2019.jpg"
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
            <a href="/copy-of-thep-da-toi-the-day" title="Thép đã tôi thế đấy" className="line-clamp-1">
              Thép đã tôi thế đấyfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </a>
          </div>
          <div className="text-base font-bold pb-[2px]">
            <span className="price">96.000₫</span>
          </div>
          <BookCounter />
        </div>
        <button>
          <FontAwesomeIcon icon={faClose} className="text-red-700 absolute top-1 right-4" />
        </button>
      </div>
    </li>
  );
}

function BookCounter() {
  return (
    <>
      <button
        className="w-7 h-7 float-left bg-white border border-gray-300 text-center text-red-700"
      >
        -
      </button>
      <input
        type="text"
        className="w-10 h-7 float-left -mx-[1px] text-center border border-gray-300 min-h-[28px] p-1 text-gray-900 bg-white align-middle text-sm"
        title="Số lượng"
        maxLength={3}
        placeholder="1"
      />
      <button
        className="w-7 h-7 float-left bg-white border border-gray-300 text-center text-red-700"
      >
        +
      </button>
    </>
  );
}
