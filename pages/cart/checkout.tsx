import { BreadScumb } from "@/components/BreadCrumb";
import { CheckoutCoupon } from "@/components/checkout/CheckoutCoupon";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { CheckoutOrderInfo } from "@/components/checkout/CheckoutOrderInfo";
import { CheckoutTotal } from "@/components/checkout/CheckoutTotal";
import { OrderCreatedModal } from "@/components/checkout/OrderCreatedModal";
import { useSubmitOrderMutation } from "@/contexts/slices/apiSlice";
import { Province } from "@/utils/types/checkout";
import { GetServerSideProps } from "next";

export default function Checkout({ provinces }: { provinces: Province[] }) {
  const [_, result] = useSubmitOrderMutation({
    fixedCacheKey: "checkout-submit-order",
  });

  return (
    <>
      <BreadScumb />
      <div className=" w-full py-8 text-sm text-red-700">
        <div className="container">
          <h1 className="mb-8 w-full text-2xl font-bold uppercase leading-snug">Checkout your cart</h1>
          <div className="flex">
            <CheckoutForm provinces={provinces} />
            <div className="basis-1/4">
              <CheckoutOrderInfo />
              <CheckoutCoupon />
              <CheckoutTotal />
            </div>
          </div>
        </div>
      </div>
      {result.isSuccess && <OrderCreatedModal />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ provinces: Province[] }> = async () => {
  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/checkout/province`);

    if (!res.ok) {
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
        provinces: data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};
