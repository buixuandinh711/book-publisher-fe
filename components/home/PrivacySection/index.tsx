import Image from "next/image";

export function PrivacySection() {
  return (
    <section className="py-8 border-b border-gray-300 w-full float-left">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left">
            <div className="w-1/4 float-left relative px-4">
              <div className="border-r border-gray-300 w-full float-left inline-flex items-center">
                <div className="bg-blue-500 w-[60px] h-[60px] float-left mr-10px text-center flex justify-center items-center rounded-full border-[5px] border-white border-double">
                  <Image
                    alt="Freeship"
                    src="/privacy/privacy_freeship.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="w-7 border-none max-w-full h-auto max-h-full align-middle overflow-clip"
                  />
                </div>
                <div className="w-left70 float-left">
                  <h4 className="margin-b-[5px] text-base font-bold w-full float-left text-black">Free Shipping</h4>
                  <div className="m-0 text-sm font-normal w-full float-left">Orders over 500k</div>
                </div>
              </div>
            </div>
            <div className="w-1/4 float-left relative px-4">
              <div className="border-r border-gray-300 w-full float-left inline-flex items-center">
                <div className="bg-red-500 w-[60px] h-[60px] float-left mr-10px text-center flex justify-center items-center rounded-full border-[5px] border-white border-double privacy_bg_icon_2">
                  <Image
                    alt="Free return"
                    src="/privacy/privacy_freereturn.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="w-7 border-none max-w-full h-auto max-h-full align-middle overflow-clip"
                  />
                </div>
                <div className="w-left70 float-left">
                  <h4 className="margin-b-[5px] text-base font-bold w-full float-left text-black">Free Returns</h4>
                  <div className="m-0 text-sm font-normal w-full float-left">Due to manufacturing defects</div>
                </div>
              </div>
            </div>
            <div className="w-1/4 float-left relative px-4">
              <div className="border-r border-gray-300 w-full float-left inline-flex items-center ">
                <div className="bg-green-500 w-[60px] h-[60px] float-left mr-10px text-center flex justify-center items-center rounded-full border-[5px] border-white border-double privacy_bg_icon_3">
                  <Image
                    alt="Online support"
                    src="/privacy/privacy_consult.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="w-7 border-none max-w-full h-auto max-h-full align-middle overflow-clip"
                  />
                </div>
                <div className="w-left70 float-left">
                  <h4 className="margin-b-[5px] text-base font-bold w-full float-left text-black">Online Support</h4>
                  <div className="m-0 text-sm font-normal w-full float-left">24/7 assistance</div>
                </div>
              </div>
            </div>
            <div className="w-1/4 float-left relative px-4">
              <div className="w-full float-left inline-flex items-center ">
                <div className="bg-purple-500 w-[60px] h-[60px] float-left mr-10px text-center flex justify-center items-center rounded-full border-[5px] border-white border-double privacy_bg_icon_4">
                  <Image
                    alt="Payment"
                    src="/privacy/privacy_payment.png"
                    placeholder="blur"
                    blurDataURL="/image-loader.gif"
                    width="0"
                    height="0"
                    sizes="10vw"
                    className="w-7 border-none max-w-full h-auto max-h-full align-middle overflow-clip"
                  />
                </div>
                <div className="w-left70 float-left">
                  <h4 className="margin-b-[5px] text-base font-bold w-full float-left text-black">Payment</h4>
                  <div className="m-0 text-sm font-normal w-full float-left">Secure payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
