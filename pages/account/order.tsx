import { useCartQuery } from "@/contexts/slices/apiSlice";
import { AccountCartItem } from "@/components/cart/AccountCartItem";
import { BreadScumb } from "@/components/BreadCrumb";
import Link from "next/link";
import { formatDateTime } from "@/utils/utils";

const orders = [
  {
    recipientName: "Nguyen Van A",
    phone: "0971334456",
    email: "nguyevanA@gmail.com",
    fullAddress: "Lang Tho, Xã Ba Sao, Huyện Cao Lãnh, Đồng Tháp",
    shippingCode: "LLAEMM",
    note: "abc xyz",
    payment: "COD",
    createdAt: "2023-07-06T17:26:35.582Z",
    id: "64a6f94b4f5a1fc82792d94d",
    quantity: 2,
    total: 795200,
  },
  {
    recipientName: "Nguyen Van A",
    phone: "0971334456",
    email: "nguyevanA@gmail.com",
    fullAddress: "Lang Tho, Xã Ba Sao, Huyện Cao Lãnh, Đồng Tháp",
    shippingCode: "LLAEMM",
    note: "abc xyz",
    payment: "COD",
    createdAt: "2023-07-06T17:26:35.582Z",
    id: "64a6f94b4f5a1fc82792d94e",
    quantity: 2,
    total: 795200,
  },
  {
    recipientName: "Nguyen Van A",
    phone: "0971334456",
    email: "nguyevanA@gmail.com",
    fullAddress: "Lang Tho, Xã Ba Sao, Huyện Cao Lãnh, Đồng Tháp",
    shippingCode: "LLAEMM",
    note: "abc xyz",
    payment: "COD",
    createdAt: "2023-07-06T17:26:35.582Z",
    id: "64a6f94b4f5a1fc82792d94f",
    quantity: 2,
    total: 795200,
  },
];

export default function OrderPage() {
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
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">No.</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">Recipient</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">Phone</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">Address</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white">Created At</th>
                  <th className="sticky top-0 z-[1] border-r border-white bg-red-700 p-2 leading-none text-white last:border-none">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <OrderItem
                    key={order.id}
                    no={orders.length - index}
                    recipient={order.recipientName}
                    phone={order.phone}
                    address={order.fullAddress}
                    createdAt={order.createdAt}
                    total={order.total.toLocaleString()}
                  />
                ))}
                {/* {cartQuery.isLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  cartQuery.isSuccess &&
                  cartQuery.data.map((item) => <AccountCartItem book={{ ...item.book }} quantity={item.quantity} key={item.book.id} />)
                )} */}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Link className="mr-2 rounded border border-red-700 bg-white px-4 py-2 text-red-700 hover:bg-red-700 hover:text-white" href="">
              Need Support?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderItem({
  no,
  recipient,
  phone,
  address,
  createdAt,
  total,
}: {
  no: number;
  recipient: string;
  phone: string;
  address: string;
  createdAt: string;
  total: string;
}) {
  return (
    <tr className="cursor-pointer border-b border-b-gray-300 text-red-700 last:border-none hover:bg-gray-50">
      <td className="border-r border-gray-300 px-2 py-4 last:border-none">
        <div className="flex justify-center">{no}</div>
      </td>
      <td className="border-r border-gray-300 px-2 py-4 last:border-none">
        <div className="flex justify-center">{recipient}</div>
      </td>
      <td className="border-r border-gray-300 px-2 py-4 last:border-none">
        <div className="flex justify-center">{phone}</div>
      </td>
      <td className="border-r border-gray-300 px-2 py-4 last:border-none">{address}</td>
      <td className="border-r border-gray-300 px-2 py-4 last:border-none">
        <div className="flex justify-center">{formatDateTime(createdAt)}</div>
      </td>
      <td className="border-r border-gray-300 px-2 py-4 last:border-none">
        <div className="flex justify-center">{total}</div>
      </td>
    </tr>
  );
}
