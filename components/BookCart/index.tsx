import Link from "next/link";

export interface BookCartProps {
  id: number;
  name: string;
  imageSrc: string;
  originalPrice: number;
  discountPrice: number;
  discountPercent: number;
}

export function BookCart({
  id,
  name,
  imageSrc,
  originalPrice,
  discountPrice,
  discountPercent,
}: BookCartProps) {
  return (
    <div className="text-left relative overflow-hidden bg-white w-[190px] px-4 mx-auto">
      <div className="relative w-full float-left">
        <div className="absolute text-sm text-white w-10 h-10 leading-10 font-bold top-0 left-0 text-center z-50 bg-red-700 before:border-red-700 before:border-t-10 before:border-l-20 before:border-r-20 before:border-l-transparent before:border-r-transparent before:absolute before:bottom-full before:m-0 before:left-0 before:top-full before:z-50">
          {`-${discountPercent}%`}
        </div>
        <Link
          href={`/detail/${id}`}
          title={name}
          className="h-56 flex items-center justify-center text-center"
        >
          <img
            src={imageSrc}
            alt="Sắc nặng hồn thanh nhẹ"
            className="align-middle border-0 max-w-full max-h-full w-auto h-52 mx-auto object-cover"
          />
        </Link>
      </div>
      <div className="w-full float-left z-10 relative pb-3 min-h-105">
        <h3 className="min-h-[50px] overflow-hidden text-ellipsis line-clamp-2 w-full float-left text-base text-red-700 text-center my-3 leading-normal">
          <Link
            href={`/detail/${id}`}
            title={name}
            className="text-red-700 font-semibold"
          >
            {name}
          </Link>
        </h3>
        <div className="min-h-[37px] flex items-center justify-center flex-col leading-normal w-full float-left">
          <div className="text-lg text-black font-bold">
            <span className="price product-price">
              {discountPrice.toLocaleString()}
            </span>
          </div>
          <div className="m-0 text-sm text-black line-through">
            <span className="price product-price-old">
              {originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="inline-flex justify-center w-full float-left">
        <form
          action="/cart/add"
          method="post"
          className=""
          data-id="product-actions-28639343"
          encType="multipart/form-data"
        >
          <div>
            <input type="hidden" name="variantId" defaultValue={76671181} />
            <button
              className="bg-red-700 text-white border-none relative text-base px-7 cursor-pointer inline-block h-10 leading-[40px] text-center whitespace-nowrap outline-none font-normal tracking-normal"
              title="Mua hàng"
            >
              <span>Mua hàng</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
