import { faMoneyBill, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormikProps } from "formik";
import { CheckoutFormValues } from "..";

export function CheckoutShippingPayment({ formik }: { formik: FormikProps<CheckoutFormValues> }) {
  return (
    <div className="basis-1/2 pr-6">
      <div>
        <h2 className="w-full pb-4 text-xl font-bold">Shipping </h2>
        <div className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 px-3">
          <div>
            <label htmlFor="shipping-radio" className="hidden">
              Shipping
            </label>
            <input id="shipping-radio" type="radio" readOnly checked className="form-radio text-red-700 focus:outline-none focus:ring-0" />
            <span className="px-2 font-medium">Home divery</span>
          </div>
          <span className="font-medium">20$</span>
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
                  value="cod"
                  checked={formik.values.payment === "cod"}
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
                  value="momo"
                  checked={formik.values.payment === "momo"}
                  onChange={formik.handleChange}
                  className="form-radio mr-2 text-red-700 focus:outline-none focus:ring-0"
                />
                Momo Wallet
              </label>
            </div>
            <FontAwesomeIcon icon={faWallet} />
          </div>
        </div>
        {formik.errors.payment && formik.touched.payment ? (
          <div className=" text-red-500">{formik.errors.payment}</div>
        ) : null}
      </div>
    </div>
  );
}
