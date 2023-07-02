import { BookCartProps } from "@/components/BookCart";
import { useAddToCartMutation, useCartQuery, useDecreaseCartItemMutation, useUpdateCartItemMutation } from "@/contexts/slices/apiSlice";
import { openCartModal } from "@/contexts/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/contexts/store";
import { calculateDiscountPercentage, orUpdating } from "@/utils/utils";
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

export interface DetailMainProps extends BookCartProps {
  isbn: string;
  genre: string;
  author: string;
  publicationYear: number;
  dimensions: string;
  numPages: number;
  coverType: string;
}

export function DetailMain({
  id,
  name,
  image,
  originalPrice,
  currentPrice,
  isbn,
  genre,
  author,
  publicationYear,
  dimensions,
  numPages,
  coverType,
}: DetailMainProps) {
  return (
    <div className="container">
      <div className="-px-4">
        <div className="relative  mb-8 w-full  px-4">
          <div className="-px-4 flex">
            <BookImage {...{ name, image, originalPrice, currentPrice }} />
            <div className="relative  w-1/2 px-4 text-red-700">
              <BookInfo
                {...{
                  name,
                  originalPrice,
                  currentPrice,
                  isbn,
                  genre,
                  author,
                  publicationYear,
                  dimensions,
                  numPages,
                  coverType,
                }}
              />
              <AddToCart id={id} name={name} />
              <Media />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookImage({
  name,
  image,
  originalPrice,
  currentPrice,
}: {
  name: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
}) {
  return (
    <div className="relative  w-1/2 px-4">
      {calculateDiscountPercentage(originalPrice, currentPrice) > 0 && (
        <div className="absolute left-0 top-0 z-10 h-10 w-10 bg-red-700 text-center text-sm font-bold leading-10 text-white before:absolute before:bottom-full before:left-0 before:top-full before:z-50 before:m-0 before:border-l-20 before:border-r-20 before:border-t-10 before:border-red-700 before:border-l-transparent before:border-r-transparent">
          {`-${calculateDiscountPercentage(originalPrice, currentPrice)}%`}
        </div>
      )}
      <div className="mb-4 h-[521px] bg-gray-100">
        <a href={image} className="flex h-full items-center justify-center">
          <div className="relative flex !h-full !w-full items-center justify-center">
            <Image
              src={image}
              alt={name}
              className="static inline-block h-auto max-h-full w-auto max-w-full object-contain align-middle"
              fill
              sizes="(max-width: 1080px) 40vw"
              placeholder="blur"
              blurDataURL="/image-loader.gif"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

function BookInfo({
  name,
  originalPrice,
  currentPrice,
  isbn,
  genre,
  author,
  publicationYear,
  dimensions,
  numPages,
  coverType,
}: {
  name: string;
  currentPrice: number;
  originalPrice: number;
  isbn: string;
  genre: string;
  author: string;
  publicationYear: number;
  dimensions: string;
  numPages: number;
  coverType: string;
}) {
  return (
    <>
      <h1 className=" mb-4 w-full text-2xl font-bold" itemProp="name">
        {name}
      </h1>
      <div className=" mb-10px w-full">
        <div className="bizweb-product-reviews-badge" />
      </div>
      <div className=" mb-4 w-full">
        <span className="text-2xl font-bold text-black">
          <span className="" itemProp="price">
            {`${currentPrice.toLocaleString()}₫`}
          </span>
          <meta itemProp="priceCurrency" content="VND" />
        </span>
        <span className="ml-10px text-lg text-black">
          <span className="line-through" itemProp="priceSpecification">
            {`${originalPrice.toLocaleString()}₫`}
          </span>
          <meta itemProp="priceCurrency" content="VND" />
        </span>
      </div>
      <div className=" mb-10px w-full text-sm">
        * <em>Product price does not include VAT</em>
      </div>
      <ul className=" m-0 w-full p-0 text-sm leading-relaxed">
        <li className=" mb-10px w-1/2">
          <span>ISBN: </span>
          <strong itemProp="sku">{isbn || "Updating"}</strong>
        </li>
        <li className=" mb-10px w-1/2">
          <span>Status: </span>
          <strong itemProp="supersededBy">In stock</strong>
          <em />
        </li>
        <li className=" mb-10px w-1/2">
          <span>Genre: </span>
          <strong itemProp="model">{genre}</strong>
        </li>
        <li className=" mb-10px w-1/2">
          <span>Publisher: </span>
          <strong itemProp="name">Publisher ABC</strong>
        </li>
        <li className=" mb-4 w-1/2 border-b border-b-gray-300 pb-10px">
          <span>Author: </span>
          <strong itemProp="name">{orUpdating(author)}</strong>
        </li>
      </ul>
      {/* SHORT DESCRIPTION */}
      <div className=" mb-4 w-full border-b border-b-gray-300 pb-10px text-sm">
        <div className="relative  w-full">
          <label className=" m-0 block max-w-full font-bold">Product Introduction</label>
          {/* <em className="fa fa-minus" aria-hidden="true" /> */}
        </div>
        <div className=" mt-2 block w-full text-xs">
          <p className="mb-[15px]">{`✓ Publication Year: ${orUpdating(publicationYear)}`}</p>
          <p className="mb-[15px]">{`✓ Dimensions: ${orUpdating(dimensions)}`}</p>
          <p className="mb-[15px]">{`✓ Number of Pages: ${orUpdating(numPages)}`}</p>
          <p className="mb-[15px]">{`✓ Cover Type: ${orUpdating(coverType)}`}</p>
        </div>
      </div>
      {/* END SHORT DESCRIPTION */}
    </>
  );
}

function AddToCart({ id, name }: { id: string; name: string }) {
  const [counter, setCounter] = useState("1");
  const dispatch = useAppDispatch();
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async () => {
    let amount = parseInt(counter);
    if (Number.isNaN(amount) || amount < 1) {
      return;
    }
    try {
      await addToCart({ itemId: id, amount }).unwrap();
      dispatch(openCartModal({ itemId: id, name }));
    } catch (error: unknown) {
      console.log("Failed to update cart item", (error as { massage: string }).massage);
    }
  };

  return (
    <div className=" w-full">
      <div className=" flex w-full justify-start">
        <div className=" mr-4">
          <div className=" mb-4 flex w-full items-center justify-between border-none p-0">
            <label className="mr-4 block text-sm font-bold leading-[40px]">Amount</label>
            <BookCounter counter={counter} setCounter={setCounter} />
          </div>
        </div>
        <div className=" mb-4 w-48">
          <button
            className="relative  inline-block h-10 w-full cursor-pointer bg-red-700 text-center text-base font-normal leading-[40px] text-white"
            title="Add to cart"
            onClick={handleAddToCart}
          >
            <span>
              Add To Cart
              <FontAwesomeIcon icon={faCaretRight} className="ml-1" />
            </span>
          </button>
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
    <div className="flex">
      <button
        className="block h-10 w-10 whitespace-nowrap border border-gray-300 bg-white text-center leading-[40px] outline-none transition-colors duration-200 hover:bg-red-700 hover:text-white active:bg-red-800"
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
        className="-mx-[1px] block h-10 min-h-[40px] w-32 border border-gray-300 bg-white p-1 text-center align-middle text-gray-900"
        title="Amount"
        maxLength={3}
        value={counter}
        onChange={handleInputChange}
        placeholder="0"
      />
      <button
        className="block h-10 w-10 whitespace-nowrap border border-gray-300 bg-white text-center leading-[40px] outline-none transition-colors duration-200 hover:bg-red-700 hover:text-white active:bg-red-800"
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
    </div>
  );
}

function Media() {
  return (
    <>
      <div className="mb-5 inline-block rounded-md border border-gray-300 bg-gray-100 px-2 py-4 text-sm text-black">
        Hotline phone number:{" "}
        <a href="tel:0904907492" className="text-red-700">
          0971443322{" "}
        </a>
        (every day of the week from 08:00 - 20:00)
      </div>
      {/* SOCIAL MEDIA SHARING */}
      <div className=" w-full">
        <ul className="m-0 list-none p-0">
          <li className=" mb-0 mr-10px inline-block">
            <a
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-sky-700 hover:border-sky-700 hover:bg-sky-700 hover:text-white"
              href="https://www.facebook.com/PublisherABC/"
            >
              <span className="icon icon-facebook" aria-hidden="true">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </a>
          </li>
          <li className=" mb-0 mr-10px inline-block">
            <a
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-sky-400 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              href="https://twitter.com/"
            >
              <span className="icon icon-twitter" aria-hidden="true">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </li>
          <li className=" mb-0 mr-10px inline-block">
            <a
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white"
              href="https://plus.google.com/"
            >
              <span className="icon icon-google-plus" aria-hidden="true">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* END SOCIAL MEDIA SHARING */}
    </>
  );
}
