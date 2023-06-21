import Image from "next/image";
import Link from "next/link";

export function HomeBanner() {
  return (
    <section className="section_small_banner float-left w-full py-8">
      <div className="container">
        <div className="-mx-4">
          <div className="flex justify-around gap-x-3">
            <div className="relative">
              <div className="relative h-48 w-96">
                <Image
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859247/book-publisher/banner_new_book.jpg"
                  className="mx-auto my-0 block h-auto max-h-full w-auto max-w-full overflow-clip align-middle"
                  alt="New Books"
                  fill
                  sizes="(max-width: 1080px) 25vw"
                />
                <Link
                  className="transform: absolute bottom-7 left-1/2 z-10 -translate-x-1/2 border-2 border-white bg-white px-5 py-1 font-bold uppercase text-red-700 opacity-80"
                  href="/catalog/new"
                >
                  <span>Xem ngay</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-48 w-96">
                <Image
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859276/book-publisher/banner_discount_book.png"
                  className="mx-auto my-0 block h-auto max-h-full w-auto max-w-full overflow-clip align-middle"
                  alt="Discount Books"
                  fill
                  sizes="(max-width: 1080px) 25vw"
                />
                {/* <div className="banner_title">
                  <span></span>
                </div> */}
                <Link
                  className="transform: absolute bottom-7 left-1/2 z-10 -translate-x-1/2 border-2 border-white bg-white px-5 py-1 font-bold uppercase text-red-700 opacity-80"
                  href="/catalog/discount"
                >
                  <span>Giảm -30%</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-48 w-96">
                <Image
                  src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683859305/book-publisher/banner_link_book.png"
                  className="mx-auto my-0 block h-auto max-h-full w-auto max-w-full overflow-clip align-middle"
                  alt="Linked book"
                  fill
                  sizes="(max-width: 1080px) 25vw"
                />
                {/* <div className="banner_title">
                  <span></span>
                </div> */}
                <Link
                  className="transform: absolute bottom-7 left-1/2 z-10 -translate-x-1/2 border-2 border-white bg-white px-5 py-1 font-bold uppercase text-red-700 opacity-80"
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
