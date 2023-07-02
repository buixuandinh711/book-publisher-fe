import { useCartQuery } from "@/contexts/slices/apiSlice";
import { AccountCartItem } from "@/components/cart/AccountCartItem";
import { BreadScumb } from "@/components/BreadCrumb";
import Link from "next/link";

export default function CartPage() {
  const cartQuery = useCartQuery({});

  return (
    <div>
      <BreadScumb />
      <div className="mt-8">
        <div className="container">
          <div className="max-h-[700px] overflow-y-auto rounded-md border border-gray-300 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="sticky top-0 z-[1] w-2/3 border-r border-white bg-red-700 p-2 leading-none text-white">Product</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">Price</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">Quantity</th>
                  <th className="sticky top-0 z-[1] bg-red-700 p-2 leading-none text-white ">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartQuery.isLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  cartQuery.isSuccess &&
                  cartQuery.data.map((item) => <AccountCartItem book={{ ...item.book }} quantity={item.quantity} key={item.book.id} />)
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Link
              className="mr-2 rounded border border-red-700 bg-white px-4 py-2 text-red-700 hover:bg-red-700 hover:text-white"
              href="/catalog"
            >
              Continue Shopping
            </Link>
            <Link className="rounded bg-red-700 px-4 py-2 text-white hover:bg-red-800" href="/cart/checkout">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
