import Image from "next/image";
import Link from "next/link";

export function HomeBanner() {
  return (
    <section className="py-8 w-full float-left section_small_banner">
      <div className="container">
        <div className="-mx-4">
          <div className="flex justify-around gap-x-3">
            <div className="relative">
              <div className="relative w-96 h-48">
                <Image
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859247/book-publisher/banner_new_book.jpg"
                  className="my-0 mx-auto w-auto block max-w-full h-auto max-h-full align-middle overflow-clip"
                  alt="New Books"
                  fill
                  sizes="(max-width: 1080px) 25vw"
                />
                <Link
                  className="absolute py-1 px-5 bottom-7 font-bold text-red-700 border-2 border-white left-1/2 transform: -translate-x-1/2 bg-white opacity-80 uppercase z-10"
                  href="/catalog/new"
                >
                  <span>Xem ngay</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-96 h-48">
                <Image
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859276/book-publisher/banner_discount_book.png"
                  className="my-0 mx-auto w-auto block max-w-full h-auto max-h-full align-middle overflow-clip"
                  alt="Discount Books"
                  fill
                  sizes="(max-width: 1080px) 25vw"
                />
                {/* <div className="banner_title">
                  <span></span>
                </div> */}
                <Link
                  className="absolute py-1 px-5 bottom-7 font-bold text-red-700 border-2 border-white left-1/2 transform: -translate-x-1/2 bg-white opacity-80 uppercase z-10"
                  href="/catalog/discount"
                >
                  <span>Giảm -30%</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-96 h-48">
                <Image
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859305/book-publisher/banner_link_book.png"
                  className="my-0 mx-auto w-auto block max-w-full h-auto max-h-full align-middle overflow-clip"
                  alt="Linked book"
                  fill
                  sizes="(max-width: 1080px) 25vw"
                />
                {/* <div className="banner_title">
                  <span></span>
                </div> */}
                <Link
                  className="absolute py-1 px-5 bottom-7 font-bold text-red-700 border-2 border-white left-1/2 transform: -translate-x-1/2 bg-white opacity-80 uppercase z-10"
                  href="/catalog/populate"
                >
                  <span>Xem ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
