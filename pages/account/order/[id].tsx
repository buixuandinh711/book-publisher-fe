import { BreadScumb } from "@/components/BreadCrumb";
import { CheckoutOrderInfo } from "@/components/checkout/CheckoutOrderInfo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";

interface OrderDetailProps {
  id: string;
  recipientName: string;
  phone: string;
  fullAddress: string;
  createdAt: string;
  quantity: number;
  total: string;
  shippingCode: string;
  note: string;
  payment: string;
}

const data = [
  {
    book: {
      id: "abc",
      name: "Book A",
      currentPrice: 123000,
      image: "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188453/book-publisher/chop-mat-cung-so-phan.jpg",
    },
    quantity: 1,
  },
];

export default function OrderDetailPage({ order }: { order: OrderDetailProps }) {
  console.log(order);

  return (
    <div>
      <BreadScumb current={{ name: "Detail", link: `${order.id}` }} />
      <div className="flex">
        {data.map((item) => (
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  {
    order: OrderDetailProps;
  },
  { id: string }
> = async (context: GetServerSidePropsContext<{ id: string }>) => {
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
    const id = context.params!.id;
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/order/${id}`, {
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
        order: data,
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
