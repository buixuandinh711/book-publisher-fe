export function HomeBanner() {
  return (
    <section className="py-8 w-full float-left section_small_banner">
      <div className="container">
        <div className="-mx-4">
          <div className="flex justify-around gap-x-3">
            <div className="relative">
              <div className="relative">
                <img
                  src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_small_1_image.jpg?1632297125018"
                  data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_small_1_image.jpg?1632297125018"
                  className="my-0 mx-auto w-auto block max-w-full h-auto max-h-full align-middle overflow-clip"
                  alt=""
                />
                {/* <div className="banner_title">
                  <span></span>
                </div> */}
                <a
                  className="absolute py-1 px-5 bottom-7 font-bold text-red-700 border-2 border-white left-1/2 transform: -translate-x-1/2 bg-white opacity-80 uppercase z-10"
                  href="https://nxbvanhoc.com.vn/sach-moi"
                >
                  <span>Xem ngay</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_small_2_image.jpg?1632297125018"
                  data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_small_2_image.jpg?1632297125018"
                  className="my-0 mx-auto w-auto block max-w-full h-auto max-h-full align-middle overflow-clip"
                  alt=""
                />
                {/* <div className="banner_title">
                  <span></span>
                </div> */}
                <a
                  className="absolute py-1 px-5 bottom-7 font-bold text-red-700 border-2 border-white left-1/2 transform: -translate-x-1/2 bg-white opacity-80 uppercase z-10"
                  href="https://nxbvanhoc.com.vn/van-hoc-kinh-dien"
                >
                  <span>Giảm -30%</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_small_3_image.jpg?1632297125018"
                  data-lazyload="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/banner_small_3_image.jpg?1632297125018"
                  className="my-0 mx-auto w-auto block max-w-full h-auto max-h-full align-middle overflow-clip"
                  alt=""
                />
                <div className="banner_title">
                  <span></span>
                </div>
                <a
                  className="absolute py-1 px-5 bottom-7 font-bold text-red-700 border-2 border-white left-1/2 transform: -translate-x-1/2 bg-white opacity-80 uppercase z-10"
                  href="https://nxbvanhoc.com.vn/sach-lien-ket-xuat-ban-moi"
                >
                  <span>Xem ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
