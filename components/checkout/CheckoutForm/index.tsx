import { Province } from "@/utils/types/checkout";
import { faMoneyBill, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CheckoutForm({ provinces }: { provinces: Province[] }) {
  return (
    <main className="basis-3/4">
      <div className="flex w-full">
        <div className="basis-1/2 pr-6">
          <h2 className="w-full pb-4 text-xl font-bold">Delivery information</h2>
          <div className="w-full">
            <fieldset className="relative mb-4">
              <label htmlFor="email" className="mb-[2px] block font-bold">
                Email:{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                placeholder="Email"
              />
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="name" className="mb-[2px] block font-bold">
                Full name:{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                placeholder="Full name"
              />
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="phone" className="mb-[2px] block font-bold">
                Phone number:{" "}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                placeholder="Phone number"
              />
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="address" className="mb-[2px] block font-bold">
                Address:{" "}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                placeholder="Address"
              />
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="city" className="mb-[2px] block font-bold">
                Province/City:{" "}
              </label>
              <select
                id="city"
                name="city"
                className="form-select block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900"
              >
                <option value="none" selected disabled hidden>
                  Select an Option
                </option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="district" className="mb-[2px] block font-bold">
                District:{" "}
              </label>
              <select
                id="district"
                name="district"
                className="form-select block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900"
              >
                <option>Cau Giay</option>
              </select>
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="ward" className="mb-[2px] block font-bold">
                Commune/Ward/Town:{" "}
              </label>
              <select
                id="ward"
                name="ward"
                className="form-select block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900"
              >
                <option>Dich Vong</option>
              </select>
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
            <fieldset className="relative mb-4">
              <label htmlFor="note" className="mb-[2px] block font-bold">
                Note:{" "}
              </label>
              <textarea
                id="note"
                name="Note"
                className="block h-20 min-h-[6px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                placeholder="Note"
              />
              {/* {errors.email && touched.email ? (
                      <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                    ) : null} */}
            </fieldset>
          </div>
        </div>
        <div className="basis-1/2 pr-6">
          <div>
            <h2 className="w-full pb-4 text-xl font-bold">Shipping </h2>
            <div className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 px-3">
              <div>
                <label htmlFor="shipping-radio" className="hidden">
                  Shipping
                </label>
                <input id="shipping-radio" type="radio" checked className="form-radio text-red-700 focus:outline-none focus:ring-0" />
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
                    <input type="radio" name="payment-method" className="form-radio mr-2 text-red-700 focus:outline-none focus:ring-0" />
                    Ship COD
                  </label>
                </div>
                <FontAwesomeIcon icon={faMoneyBill} />
              </div>
              <div className="flex h-10 w-full items-center justify-between rounded-md rounded-t-none border border-t-0 border-gray-300 px-3">
                <div>
                  <label className="font-medium">
                    <input type="radio" name="payment-method" className="form-radio mr-2 text-red-700 focus:outline-none focus:ring-0" />
                    Momo Wallet
                  </label>
                </div>
                <FontAwesomeIcon icon={faWallet} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 pr-6">
        <button
          className="relative block h-10 w-full cursor-pointer rounded-md border border-red-700 bg-red-700 text-center leading-[40px] text-white outline-none"
          type="submit"
          value="Log in"
        >
          Place order
        </button>
      </div>
    </main>
  );
}
