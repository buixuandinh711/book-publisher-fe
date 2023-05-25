import { BookCartProps } from "@/components/BookCart";
import { CartDispatchContext } from "@/contexts/CartContext";
import { orUpdating } from "@/utils/utils";
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faCaretRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from "react";

export interface DetailMainProps extends BookCartProps {
  isbn: string;
  category: string;
  author: string;
  publicationYear: number;
  dimemsions: string;
  numPages: number;
  coverType: string;
}

export function DetailMain({
  id,
  name,
  image,
  originalPrice,
  discountPrice,
  discountPercent,
  isbn,
  category,
  author,
  publicationYear,
  dimemsions,
  numPages,
  coverType,
}: DetailMainProps) {
  const [counter, setCounter] = useState("");
  const cartDispatch = useContext(CartDispatchContext);

  return (
    <div className="container">
      <div className="-px-4">
        <div className="mb-8 w-full float-left relative  px-4">
          <div className="-px-4">
            <div className="w-1/2 float-left relative px-4">
              <div className="absolute text-sm text-white w-10 h-10 leading-10 font-bold top-0 left-0 text-center z-50 bg-red-700 before:border-red-700 before:border-t-10 before:border-l-20 before:border-r-20 before:border-l-transparent before:border-r-transparent before:absolute before:bottom-full before:m-0 before:left-0 before:top-full before:z-50">
                {`-${discountPercent}%`}
              </div>
              <div className="h-[521px] bg-gray-100 mb-4">
                <a href={image} className="flex justify-center items-center h-full">
                  <div className="!w-full !h-full flex justify-center items-center relative">
                    <Image
                      id="img_01"
                      src={image}
                      alt={name}
                      className="w-auto max-w-full inline-block h-auto static max-h-full align-middle object-contain"
                      fill
                      sizes="(max-width: 1080px) 40vw"
                      placeholder="blur"
                      blurDataURL="/image-loader.gif"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-1/2 float-left relative px-4 text-red-700">
              <h1 className="text-2xl mb-4 w-full float-left font-bold" itemProp="name">
                {name}
              </h1>
              <div className="mb-10px w-full float-left">
                <div className="bizweb-product-reviews-badge" />
              </div>
              <div className="mb-4 w-full float-left">
                <span className="text-2xl text-black font-bold">
                  <span className="" itemProp="price">
                    {`${discountPrice.toLocaleString()}₫`}
                  </span>
                  <meta itemProp="priceCurrency" content="VND" />
                </span>
                <span className="text-lg text-black ml-10px">
                  <span className="line-through" itemProp="priceSpecification">
                    {`${originalPrice.toLocaleString()}₫`}
                  </span>
                  <meta itemProp="priceCurrency" content="VND" />
                </span>
              </div>
              <div className="w-full float-left mb-10px text-sm">
                * <em>Giá sản phẩm chưa bao gồm VAT</em>
              </div>
              <ul className="p-0 w-full float-left m-0 text-sm leading-relaxed">
                <li className="w-1/2 float-left mb-10px">
                  <span>Mã ISBN: </span>
                  <strong itemProp="sku">{isbn || "Đang cập nhật"}</strong>
                </li>
                <li className="w-1/2 float-left mb-10px">
                  <span>Tình trạng: </span>
                  <strong itemProp="supersededBy">Còn hàng</strong>
                  <em />
                </li>
                <li className="w-1/2 float-left mb-10px">
                  <span>Loại sách: </span>
                  <strong itemProp="model">{category}</strong>
                </li>
                <li className="w-1/2 float-left mb-10px">
                  <span>Nhà xuất bản: </span>
                  <strong itemProp="name">NXB Văn học</strong>
                </li>
                <li className="pb-10px border-b border-b-gray-300 w-1/2 float-left mb-4">
                  <span>Tác giả: </span>
                  <strong itemProp="name">{orUpdating(author)}</strong>
                </li>
              </ul>
              {/* MÔ TẢ NGẮN */}
              <div className="w-full float-left mb-4 pb-10px border-b border-b-gray-300 text-sm">
                <div className="w-full float-left relative">
                  <label className="m-0 float-left block max-w-full font-bold">Giới thiệu sản phẩm</label>
                  {/* <em className="fa fa-minus" aria-hidden="true" /> */}
                </div>
                <div className="block w-full float-left text-xs mt-2">
                  <p className="mb-[15px]">{`✓ Năm xuất bản: ${orUpdating(publicationYear)}`}</p>
                  <p className="mb-[15px]">{`✓ Kích thước: ${orUpdating(dimemsions)}`}</p>
                  <p className="mb-[15px]">{`✓ Số trang: ${orUpdating(numPages)}`}</p>
                  <p className="mb-[15px]">{`✓ Loại bìa: ${orUpdating(coverType)}`}</p>
                </div>
              </div>
              {/* END MÔ TẢ NGẮN */}
              <div className="w-full float-left">
                <div className="w-full float-left">
                  <div className="box-variant fw clearfix ">
                    <input type="hidden" name="variantId" defaultValue={82829982} />
                  </div>
                  <div className="w-[calc(100%-215px)] mr-4 float-left">
                    <div className="p-0 mb-4 inline-block w-full float-left border-none">
                      <label className="w-24 float-left overflow-hidden leading-[40px] max-w-full font-bold text-sm">
                        Số lượng
                      </label>
                      <BookCounter counter={counter} setCounter={setCounter} />
                    </div>
                  </div>
                  {/* BUTTON ACTIONS */}
                  <input className="hidden" type="hidden" name="variantId" defaultValue={82829982} />
                  <div className="w-48 float-left mb-4">
                    <button
                      className="w-full float-left bg-red-700 text-white relative text-base cursor-pointer inline-block h-10 leading-[40px] text-center font-normal"
                      title="Add to cart"
                      onClick={() => {
                        if (cartDispatch) {
                          let addedAmount = parseInt(counter);
                          if (Number.isNaN(addedAmount)) {
                            addedAmount = 1;
                          }
                          cartDispatch({
                            type: "ADD_WITH_AMOUNT",
                            book: { id, name, image, price: discountPrice },
                            amount: addedAmount,
                          });
                        }
                      }}
                    >
                      <span>
                        Add To Cart
                        <FontAwesomeIcon icon={faCaretRight } className="ml-1"/>
                      </span>
                    </button>
                  </div>
                  {/* END BUTTON ACTIONS */}
                </div>
                {/* TAG SẢN PHẨM */}
                {/* END TAG */}
              </div>
              <div className="border border-gray-300 inline-block mb-5 bg-gray-100 py-4 px-2 rounded-md text-black text-sm">
                Số điện thoại hotline:{" "}
                <a href="tel:0904907492" className="text-red-700">
                  0971443322{" "}
                </a>
                (tất cả các ngày trong tuần từ 08:00 - 20:00)
              </div>
              {/* CHIA SẺ MẠNG XÃ HỘI */}
              <div className="w-full float-left">
                <ul className="p-0 m-0 list-none">
                  <li className="mr-10px float-left inline-block mb-0">
                    <a
                      className="text-sky-700 w-[35px] h-[35px] border border-gray-300 flex justify-center items-center rounded-full hover:bg-sky-700 hover:border-sky-700 hover:text-white"
                      href="https://www.facebook.com/Nh%C3%A0-xu%E1%BA%A5t-b%E1%BA%A3n-V%C4%83n-h%E1%BB%8Dc-475715752558826/"
                    >
                      <span className="icon icon-facebook" aria-hidden="true">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </span>
                    </a>
                  </li>
                  <li className="mr-10px float-left inline-block mb-0">
                    <a
                      className="text-sky-400 w-[35px] h-[35px] border border-gray-300 flex justify-center items-center rounded-full hover:bg-sky-400 hover:border-sky-400 hover:text-white"
                      href="https://twitter.com/"
                    >
                      <span className="icon icon-twitter" aria-hidden="true">
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                    </a>
                  </li>
                  <li className="mr-10px float-left inline-block mb-0">
                    <a
                      className="text-red-500 w-[35px] h-[35px] border border-gray-300 flex justify-center items-center rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white"
                      href="https://plus.google.com/"
                    >
                      <span className="icon icon-google-plus" aria-hidden="true">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* END CHIA SẺ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookCounter({ counter, setCounter }: { counter: string; setCounter: Dispatch<SetStateAction<string>> }) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "" || !Number.isNaN(parseInt(inputValue))) {
      setCounter(inputValue);
    }
  };

  return (
    <>
      <button
        className="w-10 h-10 float-left bg-white border border-gray-300 text-center leading-[40px] outline-none whitespace-nowrap"
        type="button"
        onClick={() => {
          setCounter((prev) => {
            if (prev.trim() === "" || parseInt(prev) <= 1) {
              return prev;
            }
            return (parseInt(prev) - 1).toString();
          });
        }}
      >
        -
      </button>
      <input
        type="text"
        className="w-[calc(100%-188px)] h-10 float-left -mx-[1px] text-center border border-gray-300 min-h-[40px] p-1 text-gray-900 bg-white align-middle"
        title="Số lượng"
        maxLength={3}
        value={counter}
        onChange={handleInputChange}
        placeholder="1"
      />
      <button
        className="w-10 h-10 float-left bg-white border border-gray-300 text-center leading-[40px] outline-none whitespace-nowrap"
        type="button"
        onClick={() => {
          setCounter((prev) => {
            if (prev.trim() === "") {
              return "2";
            }
            return (parseInt(prev) + 1).toString();
          });
        }}
      >
        +
      </button>
    </>
  );
}
