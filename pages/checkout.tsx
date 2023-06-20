import { BreadScumb } from "@/components/BreadCrumb";

export default function Checkout() {
  return (
    <>
      <BreadScumb />
      <div className="w-full float-left py-8 text-red-700 text-sm">
        <div className="container">
          <h1 className="mb-8 text-2xl font-bold uppercase w-full leading-snug">Checkout your cart</h1>
          <div className="flex">
            <main className="basis-3/4">
              <div className="w-full flex">
                <div className="basis-1/2 pr-6">
                  <h2 className="text-xl font-bold w-full pb-4">Delivery information</h2>
                  <div className="w-full">
                    <fieldset className="relative mb-4">
                      <label htmlFor="email" className="block mb-[2px] font-bold">
                        Email:{" "}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                        placeholder="Email"
                      />
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                    <fieldset className="relative mb-4">
                      <label htmlFor="name" className="block mb-[2px] font-bold">
                        Full name:{" "}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                        placeholder="Full name"
                      />
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                    <fieldset className="relative mb-4">
                      <label htmlFor="phone" className="block mb-[2px] font-bold">
                        Phone number:{" "}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                        placeholder="Phone number"
                      />
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                    <fieldset className="relative mb-4">
                      <label htmlFor="address" className="block mb-[2px] font-bold">
                        Address:{" "}
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                        placeholder="Address"
                      />
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                    <fieldset className="relative mb-4">
                      <label htmlFor="city" className="block mb-[2px] font-bold">
                        Province/City:{" "}
                      </label>
                      <select
                        id="city"
                        name="city"
                        className="form-select block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md"
                      >
                        <option>Hanoi</option>
                      </select>
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                    <fieldset className="relative mb-4">
                      <label htmlFor="district" className="block mb-[2px] font-bold">
                        District:{" "}
                      </label>
                      <select
                        id="district"
                        name="district"
                        className="form-select block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md"
                      >
                        <option>Cau Giay</option>
                      </select>
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                    <fieldset className="relative mb-4">
                      <label htmlFor="ward" className="block mb-[2px] font-bold">
                        Commune/Ward/Town:{" "}
                      </label>
                      <select
                        id="ward"
                        name="ward"
                        className="form-select block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md"
                      >
                        <option>Dich Vong</option>
                      </select>
                      {/* {errors.email && touched.email ? (
                    <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                  ) : null} */}
                    </fieldset>
                  </div>
                </div>
                <div className="basis-1/2 pr-6">
                  <div>
                    <h2 className="text-xl font-bold w-full pb-4">Shipping </h2>
                    <div className="w-full min-h-105 border border-gray-300"></div>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-xl font-bold w-full pb-4">Payment</h2>
                    <div className="w-full min-h-105 border border-gray-300"></div>
                  </div>
                </div>
              </div>
              <div className="pr-6 py-8">
                <button
                  className="w-full bg-red-700 text-white border border-red-700 rounded-md relative cursor-pointer block h-10 leading-[40px] text-center outline-none"
                  type="submit"
                  value="Log in"
                >
                  Place order
                </button>
              </div>
            </main>
            <div className="basis-1/4">
              <h2 className="text-xl font-bold w-full pb-4">Your cart</h2>
              <div className="w-full min-h-105 border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
