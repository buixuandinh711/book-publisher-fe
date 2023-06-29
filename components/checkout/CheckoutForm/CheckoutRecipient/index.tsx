import { useCheckoutDistrictQuery, useCheckoutWardQuery, usePreviewOrderMutation } from "@/contexts/slices/apiSlice";
import { Province } from "@/utils/types/checkout";
import { FormikProps } from "formik";
import { CheckoutFormValues } from "..";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export function CheckoutRecipient({ provinces, formik }: { provinces: Province[]; formik: FormikProps<CheckoutFormValues> }) {
  const districtQuery = useCheckoutDistrictQuery({ provinceId: formik.values.province }, { skip: formik.values.province === "" });
  const wardQuery = useCheckoutWardQuery({ districtId: formik.values.district }, { skip: formik.values.district === "" });

  const [previewOrder] = usePreviewOrderMutation({
    fixedCacheKey: "shared-preview-order",
  });

  return (
    <div className="basis-1/2 pr-6">
      <h2 className="w-full pb-4 text-xl font-bold">Delivery information</h2>
      <div className="w-full">
        <fieldset className="relative mb-6">
          <label htmlFor="email" className="mb-[2px] block font-bold">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.email}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="name" className="mb-[2px] block font-bold">
            Full name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
            placeholder="Full name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.name}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="phone" className="mb-[2px] block font-bold">
            Phone number:{" "}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
            placeholder="Phone number"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.phone}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="address" className="mb-[2px] block font-bold">
            Address:{" "}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
            placeholder="Address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address && formik.touched.address ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.address}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="province" className="mb-[2px] block font-bold">
            Province/City:{" "}
          </label>
          <select
            id="province"
            name="province"
            className="form-select block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900"
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldValue("district", "");
              formik.setFieldValue("ward", "");
              previewOrder({ formValues: { district: "", ward: "" } });
            }}
            value={formik.values.province}
          >
            <option value="" disabled hidden>
              Select an Option
            </option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
          {formik.errors.province && formik.touched.province ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.province}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="district" className="mb-[2px] block font-bold">
            District:{" "}
          </label>
          <select
            id="district"
            name="district"
            className="form-select block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900"
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldValue("ward", "");
              previewOrder({ formValues: { district: "", ward: "" } });
            }}
            value={formik.values.district}
          >
            <option value="" disabled hidden>
              Select an Option
            </option>
            {districtQuery.isSuccess &&
              districtQuery.data.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
          </select>
          {formik.errors.district && formik.touched.district ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.district}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="ward" className="mb-[2px] block font-bold">
            Commune/Ward/Town:{" "}
          </label>
          <select
            id="ward"
            name="ward"
            className="form-select block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900"
            onChange={(e) => {
              formik.handleChange(e);
              const value = e.target.value;
              previewOrder({ formValues: { district: formik.values.district, ward: value } });
            }}
            value={formik.values.ward}
          >
            <option value="" disabled hidden>
              Select an Option
            </option>
            {wardQuery.isSuccess &&
              wardQuery.data.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
          </select>
          {formik.errors.ward && formik.touched.ward ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.ward}</div>
          ) : null}
        </fieldset>
        <fieldset className="relative mb-6">
          <label htmlFor="note" className="mb-[2px] block font-bold">
            Note:{" "}
          </label>
          <textarea
            id="note"
            name="note"
            className="block h-20 min-h-[6px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
            placeholder="Note"
            onChange={formik.handleChange}
            value={formik.values.note}
          />
          {formik.errors.note && formik.touched.note ? (
            <div className="absolute bottom-0 left-0 translate-y-full text-red-500">{formik.errors.note}</div>
          ) : null}
        </fieldset>
      </div>
    </div>
  );
}
