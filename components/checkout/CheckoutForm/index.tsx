import { Province } from "@/utils/types/checkout";
import { CheckoutShippingPayment } from "./CheckoutShippingPayment";
import { CheckoutRecipient } from "./CheckoutRecipient";
import { FormikHelpers, useFormik } from "formik";

import * as Yup from "yup";
import { nameRegex, phoneRegex } from "@/utils/constant";
import { usePreviewOrderMutation, useSubmitOrderMutation } from "@/contexts/slices/apiSlice";
import { useEffect } from "react";

export interface CheckoutFormValues {
  email: string;
  name: string;
  phone: string;
  address: string;
  province: string;
  district: string;
  ward: string;
  note: string;
  payment: string;
}

const RecipientSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  name: Yup.string().max(100, "Name should not exceed 100 characters.").matches(nameRegex).required("Name is required."),
  phone: Yup.string().matches(phoneRegex, "Phone number is not valid").required("Phone number is required."),
  address: Yup.string().max(200, "Address should not exceed 100 characters.").required("Address is required."),
  province: Yup.string().min(1).required("City is required."),
  district: Yup.string().min(1).required("District is required."),
  ward: Yup.string().min(1).required("Ward is required."),
  payment: Yup.string().min(1).required("Payment method is required."),
});

const initialValues: CheckoutFormValues = {
  email: "",
  name: "",
  phone: "",
  address: "",
  province: "",
  district: "",
  ward: "",
  note: "",
  payment: "",
};

export function CheckoutForm({ provinces }: { provinces: Province[] }) {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values: CheckoutFormValues, { setSubmitting }: FormikHelpers<CheckoutFormValues>) => {
      setSubmitting(false);
      console.log(JSON.stringify(values));
      try {
        const res = await submitOrder({ formValues: values }).unwrap();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: RecipientSchema,
  });
  const [submitOrder] = useSubmitOrderMutation({
    fixedCacheKey: "checkout-submit-order",
  });

  return (
    <main className="basis-3/4">
      <div className="flex w-full">
        <CheckoutRecipient provinces={provinces} formik={formik} />
        <CheckoutShippingPayment formik={formik} />
      </div>
      <div className="py-8 pr-6">
        <button
          className="relative block h-10 w-full cursor-pointer rounded-md border border-red-700 bg-red-700 text-center leading-[40px] text-white outline-none"
          type="submit"
          value="Log in"
          onClick={() => formik.handleSubmit()}
        >
          Place order
        </button>
      </div>
    </main>
  );
}
