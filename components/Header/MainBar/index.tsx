import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from "next/link";
import Image from "next/image";
import { CartPopUp } from "./CartPopUp";
import { useCartQuery, useLogoutMutation, useUserQuery } from "@/contexts/slices/apiSlice";

export function MainBar() {
  return (
    <div className="relative w-full float-left flex items-center p-0 bg-white">
      <div className="container">
        <div className="flex items-center -mx-4">
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4">
            <div className="h-24 flex content-start items-center">
              <Link
                title="NHÀ XUẤT BẢN VĂN HỌC"
                href="/"
                className="text-red-700 no-underline bg-transparent relative w-[360px] h-[57px]"
              >
                <Image
                  className="block max-w-full h-auto border-0 max-h-full align-middle"
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1684837345/book-publisher/header_logo.png "
                  alt="Logo NHÀ XUẤT BẢN VĂN HỌC"
                  fill
                  sizes="(max-width: 1080px) 30vw"
                />
              </Link>
            </div>
          </div>
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4 inline-flex items-center">
            <form
              action="/search"
              method="get"
              className="float-left w-full m-0 border border-gray-300 pr-10 pl-4 rounded-md"
            >
              <div className="w-full float-left relative table border-separate">
                <input
                  type="text"
                  className="outline-none text-base bg-transparent text-red-700 placeholder-red-700 pr-6 min-h-1 h-10 border-none rounded-none table-cell relative z-10 float-left w-full mb-0"
                  name="query"
                  id="search"
                  title="Nhập từ khoá cần tìm"
                  placeholder="Nhập từ khóa cần tìm ..."
                />
                <button
                  className="absolute h-auto top-0 -right-10 bottom-0 z-10 w-6 text-sm bg-transparent text-red-700 flex justify-center items-center leading-10 px-5 text-center"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} className="inline-block text-sm"></FontAwesomeIcon>
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/3 float-left ml-0 relative min-h-1 px-4 text-red-700">
            <HeaderAccount />
            <HeaderCart />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderAccount() {
  const userQuery = useUserQuery({});
  const [logout] = useLogoutMutation();

  return (
    <div className="w-48 h-10 float-left mr-5 border border-gray-300 rounded-md">
      <div className="float-left mr-1 h-10 w-10 overflow-hidden border-r border-r-gray-300 flex justify-center items-center">
        <FontAwesomeIcon icon={faUser} className="text-lg" />
      </div>
      <div className="float-left h-10 flex justify-center flex-col flex-nowrap">
        <span className="font-bold text-sm leading-none overflow-ellipsis">
          {userQuery.isSuccess ? userQuery.data.name : "Account"}
        </span>
        <span className="leading-none">
          {userQuery.isSuccess ? (
            <>
              <Link
                href="/account/login"
                className="mr-2 relative text-xs leading-none before:content-['*'] before:absolute before:-right-2 before:bottom-0 before:top-1"
              >
                Account
              </Link>
              <button
                className="text-xs leading-none"
                onClick={async () => {
                  try {
                    await logout({}).unwrap();
                  } catch (error) {}
                }}
              >
                Exit
              </button>
            </>
          ) : (
            <>
              <Link
                href="/account/login"
                className="mr-2 relative text-xs leading-none before:content-['*'] before:absolute before:-right-2 before:bottom-0 before:top-1"
              >
                Log in
              </Link>
              <Link href="/account/register" className="text-xs leading-none">
                Register
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
}

function HeaderCart() {
  const cartQuery = useCartQuery({});
  const itemsInCart = cartQuery.isSuccess ? cartQuery.data.length : 0;

  return (
    <div className="w-36 h-10 flex justify-end items-center float-left text-gray-900 p-0 z-50 border border-gray-300 rounded-md group">
      <div className="w-36 z-50 text-center float-left rounded-md">
        <div className="w-full float-left">
          <div className="float-left mr-1 h-10 w-10 overflow-hidden border-r border-r-gray-300 flex justify-center items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="inline-block text-lg text-red-700"></FontAwesomeIcon>
          </div>
          <div className="cursor-pointer w-calc[100% - 50px] float-left h-10 flex flex-col justify-center items-start flex-nowrap">
            <span className="font-bold text-sm text-red-700 leading-none">Your cart</span>
            <span className="leading-none">
              <span className="font-bold text-sm text-red-700 leading-none">{itemsInCart}</span>
              &nbsp;
              <span className="text-xs leading-none">{itemsInCart > 0 ? "Items" : "Item"}</span>
            </span>
          </div>
        </div>
        <CartPopUp />
      </div>
    </div>
  );
}
