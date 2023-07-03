import {
  faCalendarDay,
  faCalendarDays,
  faMoneyBill,
  faTruckDroplet,
  faTruckFast,
  faTruckLoading,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormikProps } from "formik";
import { CheckoutFormValues } from "..";
import { PreviewInfo } from "@/utils/types/checkout";
import { usePreviewOrderMutation } from "@/contexts/slices/apiSlice";

export function CheckoutShippingPayment({ formik }: { formik: FormikProps<CheckoutFormValues> }) {
  const [_, result] = usePreviewOrderMutation({
    fixedCacheKey: "shared-preview-order",
  });

  return (
    <div className="basis-1/2 pr-6">
      <div>
        <h2 className="w-full pb-4 text-xl font-bold">Shipping </h2>
        <div>
          <div className="flex h-10 w-full items-center justify-between rounded-md rounded-b-none border border-gray-300 px-3 text-base font-medium">
            Home Delivery
          </div>
          <div className="flex h-10 w-full items-center justify-between border border-t-0 border-gray-300 px-3">
            <div>
              <FontAwesomeIcon icon={faTruckFast} className="mr-2" />
              <label className="font-medium">Shipping Free:</label>
            </div>
            <span className="font-medium">{result.isSuccess ? result.data.shippingFee.toLocaleString() : "..."}</span>
          </div>
          <div className="flex h-10 w-full items-center justify-between rounded-md rounded-t-none border border-t-0 border-gray-300 px-3">
            <div>
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
              <label className="font-medium">Expected Delivery Time:</label>
            </div>
            <span className="font-medium">
              {result.isSuccess ? new Date(result.data.shippingTime).toLocaleDateString("vie") : "..."}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="w-full pb-4 text-xl font-bold">Payment</h2>
        <div>
          <div className="flex h-10 w-full items-center justify-between rounded-md rounded-b-none border border-gray-300 px-3">
            <div>
              <label className="font-medium">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={formik.values.payment === "COD"}
                  onChange={formik.handleChange}
                  className="form-radio mr-2 text-red-700 focus:outline-none focus:ring-0"
                />
                Ship COD
              </label>
            </div>
            <FontAwesomeIcon icon={faMoneyBill} />
          </div>
          <div className="flex h-10 w-full items-center justify-between rounded-md rounded-t-none border border-t-0 border-gray-300 px-3">
            <div>
              <label className="font-medium">
                <input
                  type="radio"
                  name="payment"
                  value="MOMO"
                  checked={formik.values.payment === "MOMO"}
                  onChange={formik.handleChange}
                  className="form-radio mr-2 text-red-700 focus:outline-none focus:ring-0"
                />
                Momo Wallet
              </label>
            </div>
            <FontAwesomeIcon icon={faWallet} />
          </div>
        </div>
        {formik.errors.payment && formik.touched.payment ? <div className=" text-red-500">{formik.errors.payment}</div> : null}
      </div>
    </div>
  );
}
