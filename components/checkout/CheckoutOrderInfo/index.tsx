import { useCartQuery } from "@/contexts/slices/apiSlice";
import Image from "next/image";

export function CheckoutOrderInfo() {
  const cartQuery = useCartQuery({});

  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <h2 className="w-full text-xl font-bold">Your cart</h2>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-white">
          <span className="text-center align-middle font-bold">{cartQuery.isSuccess ? cartQuery.data.length : 0}</span>
        </div>
      </div>
      <div className="max-h-52 overflow-y-auto rounded-md border border-gray-300 py-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
        {cartQuery.isSuccess &&
          cartQuery.data.map((item) => (
            <div key={item.book.id} className="flex border-b border-gray-300 p-2 first:rounded-t-md last:border-b-0 hover:bg-gray-50">
              <Image
                alt={item.book.name}
                src={item.book.image}
                width="0"
                height="0"
                sizes="10vw"
                className="h-20 w-20 min-w-[80px] object-contain align-middle"
              />
              <div className="flex w-full justify-between">
                <div>
                  <div className="line-clamp-3 font-semibold">{item.book.name}</div>
                  <div className="text-xs">
                    <span>{item.book.currentPrice.toLocaleString()}</span>
                    {" × "}
                    <span>{item.quantity}</span>
                  </div>
                </div>
                <div className="font-medium">{(item.quantity * item.book.currentPrice).toLocaleString()}$</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
