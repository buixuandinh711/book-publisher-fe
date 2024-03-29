import Image from "next/image";

export function PrivacySection() {
  return (
    <section className="w-full border-b border-gray-300 py-8">
      <div className="container">
        <div className="">
          <div className="flex w-full items-center justify-between">
            <div className="relative  flex w-1/4 justify-center border-r border-gray-300">
              <div className="inline-flex items-center">
                <div className=" mr-10px flex h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-double border-white bg-blue-500 text-center">
                  <Image
                    alt="Freeship"
                    src="/privacy/privacy_freeship.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="h-auto max-h-full w-7 max-w-full overflow-clip border-none align-middle"
                  />
                </div>
                <div className="">
                  <h4 className="margin-b-[5px]  w-full text-base font-bold text-black">Free Shipping</h4>
                  <div className=" m-0 w-full text-sm font-normal">Orders over 500k</div>
                </div>
              </div>
            </div>
            <div className="relative  flex w-1/4 justify-center border-r border-gray-300">
              <div className="inline-flex items-center">
                <div className="privacy_bg_icon_2  mr-10px flex h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-double border-white bg-red-500 text-center">
                  <Image
                    alt="Free return"
                    src="/privacy/privacy_freereturn.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="h-auto max-h-full w-7 max-w-full overflow-clip border-none align-middle"
                  />
                </div>
                <div className="">
                  <h4 className="margin-b-[5px]  w-full text-base font-bold text-black">Free Returns</h4>
                  <div className=" m-0 w-full text-sm font-normal">Due to manufacturing defects</div>
                </div>
              </div>
            </div>
            <div className="relative  flex w-1/4 justify-center border-r border-gray-300">
              <div className="inline-flex items-center ">
                <div className="privacy_bg_icon_3  mr-10px flex h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-double border-white bg-green-500 text-center">
                  <Image
                    alt="Online support"
                    src="/privacy/privacy_consult.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="h-auto max-h-full w-7 max-w-full overflow-clip border-none align-middle"
                  />
                </div>
                <div className="">
                  <h4 className="margin-b-[5px]  w-full text-base font-bold text-black">Online Support</h4>
                  <div className=" m-0 w-full text-sm font-normal">24/7 assistance</div>
                </div>
              </div>
            </div>
            <div className="relative  flex w-1/4 justify-center">
              <div className="inline-flex items-center ">
                <div className="privacy_bg_icon_4  mr-10px flex h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-double border-white bg-purple-500 text-center">
                  <Image
                    alt="Payment"
                    src="/privacy/privacy_payment.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="h-auto max-h-full w-7 max-w-full overflow-clip border-none align-middle"
                  />
                </div>
                <div className="">
                  <h4 className="margin-b-[5px]  w-full text-base font-bold text-black">Payment</h4>
                  <div className=" m-0 w-full text-sm font-normal">Secure payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
