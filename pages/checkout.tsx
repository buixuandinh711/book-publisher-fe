import { BreadScumb } from "@/components/BreadCrumb";

export default function Checkout() {
  return (
    <>
      <BreadScumb />
      <div className="float-left w-full py-8 text-sm text-red-700">
        <div className="container">
          <h1 className="mb-8 w-full text-2xl font-bold uppercase leading-snug">Checkout your cart</h1>
          <div className="flex">
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
                        <option>Hanoi</option>
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
                  </div>
                </div>
                <div className="basis-1/2 pr-6">
                  <div>
                    <h2 className="w-full pb-4 text-xl font-bold">Shipping </h2>
                    <div className="min-h-105 w-full border border-gray-300"></div>
                  </div>
                  <div className="mt-8">
                    <h2 className="w-full pb-4 text-xl font-bold">Payment</h2>
                    <div className="min-h-105 w-full border border-gray-300"></div>
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
            <div className="basis-1/4">
              <h2 className="w-full pb-4 text-xl font-bold">Your cart</h2>
              <div className="min-h-105 w-full border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
