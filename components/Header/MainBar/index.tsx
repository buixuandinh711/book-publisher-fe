import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from "next/link";
import Image from "next/image";
import { CartPopUp } from "./CartPopUp";
import { useCartQuery, useLogoutMutation, useUserQuery } from "@/contexts/slices/apiSlice";

export function MainBar() {
  return (
    <div className="relative float-left flex w-full items-center bg-white p-0">
      <div className="container">
        <div className="-mx-4 flex items-center">
          <div className="relative float-left ml-0 min-h-1 w-1/3 px-4">
            <div className="flex h-24 content-start items-center">
              <Link title="NHÀ XUẤT BẢN VĂN HỌC" href="/" className="relative h-[57px] w-[360px] bg-transparent text-red-700 no-underline">
                <Image
                  className="block h-auto max-h-full max-w-full border-0 align-middle"
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1684837345/book-publisher/header_logo.png "
                  alt="Logo NHÀ XUẤT BẢN VĂN HỌC"
                  fill
                  sizes="(max-width: 1080px) 30vw"
                />
              </Link>
            </div>
          </div>
          <div className="relative float-left ml-0 inline-flex min-h-1 w-1/3 items-center px-4">
            <form action="/search" method="get" className="float-left m-0 w-full rounded-md border border-gray-300 pl-4 pr-10">
              <div className="relative float-left table w-full border-separate">
                <input
                  type="text"
                  className="relative z-10 float-left mb-0 table-cell h-10 min-h-1 w-full rounded-none border-none bg-transparent pr-6 text-base text-red-700 placeholder-red-700 outline-none"
                  name="query"
                  id="search"
                  title="Nhập từ khoá cần tìm"
                  placeholder="Nhập từ khóa cần tìm ..."
                />
                <button
                  className="absolute -right-10 bottom-0 top-0 z-10 flex h-auto w-6 items-center justify-center bg-transparent px-5 text-center text-sm leading-10 text-red-700"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} className="inline-block text-sm"></FontAwesomeIcon>
                </button>
              </div>
            </form>
          </div>
          <div className="relative float-left ml-0 min-h-1 w-1/3 px-4 text-red-700">
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
    <div className="float-left mr-5 h-10 w-48 rounded-md border border-gray-300">
      <div className="float-left mr-1 flex h-10 w-10 items-center justify-center overflow-hidden border-r border-r-gray-300">
        <FontAwesomeIcon icon={faUser} className="text-lg" />
      </div>
      <div className="float-left flex h-10 flex-col flex-nowrap justify-center">
        <span className="overflow-ellipsis text-sm font-bold leading-none">{userQuery.isSuccess ? userQuery.data.name : "Account"}</span>
        <span className="leading-none">
          {userQuery.isSuccess ? (
            <>
              <Link
                href="/account/login"
                className="relative mr-2 text-xs leading-none before:absolute before:-right-2 before:bottom-0 before:top-1 before:content-['*']"
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
                className="relative mr-2 text-xs leading-none before:absolute before:-right-2 before:bottom-0 before:top-1 before:content-['*']"
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
    <div className="group z-50 float-left flex h-10 w-36 items-center justify-end rounded-md border border-gray-300 p-0 text-gray-900">
      <div className="z-10 float-left w-36 rounded-md text-center">
        <div className="float-left w-full">
          <div className="float-left mr-1 flex h-10 w-10 items-center justify-center overflow-hidden border-r border-r-gray-300">
            <FontAwesomeIcon icon={faShoppingCart} className="inline-block text-lg text-red-700"></FontAwesomeIcon>
          </div>
          <div className="w-calc[100% - 50px] float-left flex h-10 cursor-pointer flex-col flex-nowrap items-start justify-center">
            <span className="text-sm font-bold leading-none text-red-700">Your cart</span>
            <span className="leading-none">
              <span className="text-sm font-bold leading-none text-red-700">{itemsInCart}</span>
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
