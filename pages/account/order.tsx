import { BreadScumb } from "@/components/BreadCrumb";
import { OrderItem, OrderItemProps } from "@/components/account/order/OrderItem";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";

export default function OrderPage({ orders }: { orders: OrderItemProps[] }) {
  return (
    <div>
      <BreadScumb />
      <div className="mt-8">
        <div className="container">
          <div className="max-h-[700px] overflow-y-auto rounded-md border border-gray-300 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="leading-idne sticky top-0 z-[1] border-r border-white bg-red-700 p-2 text-white">Created At</th>
                  <th className="leading-idne sticky top-0 z-[1] border-r border-white bg-red-700 p-2 text-white">Recipient</th>
                  <th className="leading-idne sticky top-0 z-[1] border-r border-white bg-red-700 p-2 text-white">Phone</th>
                  <th className="leading-idne sticky top-0 z-[1] border-r border-white bg-red-700 p-2 text-white">Address</th>
                  <th className="leading-idne last:border-idne sticky top-0 z-[1] border-r border-white bg-red-700 p-2 text-white">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <OrderItem
                    key={order.id}
                    id={order.id}
                    recipientName={order.recipientName}
                    phone={order.phone}
                    fullAddress={order.fullAddress}
                    createdAt={order.createdAt}
                    total={order.total.toLocaleString()}
                  />
                ))}
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

export const getServerSideProps: GetServerSideProps<{
  orders: OrderItemProps[];
}> = async (context: GetServerSidePropsContext) => {
  const sessionCookie = context.req.cookies["connect.sid"];

  if (!sessionCookie) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }

  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/order`, {
      headers: { cookie: `connect.sid=${sessionCookie};` },
    });

    if (!res.ok) {
      if (res.status === 401) {
        return {
          redirect: {
            destination: "/account/login",
            permanent: false,
          },
        };
      }
      return {
        redirect: {
          destination: "/500",
          permanent: false,
        },
      };
    }

    const data = await res.json();
    return {
      props: {
        orders: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};
