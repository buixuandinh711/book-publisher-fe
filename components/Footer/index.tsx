import { faFacebookF, faGooglePlus, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFax, faGlobe, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative  mt-8 w-full overflow-hidden bg-gray-100">
      <div className="pb-10 pt-8">
        <div className="container">
          <div className="footer-inner">
            <div className="-mx-4 flex overflow-hidden">
              <div className="relative  mt-8 min-h-[1px] w-1/2 border-r border-black px-4">
                <div className=" mt-0 w-full">
                  <div className=" mb-8 w-full">
                    <Link href="/" title="NHÀ XUẤT BẢN VĂN HỌC" className="text-red-700">
                      <Image
                        alt="NHÀ XUẤT BẢN VĂN HỌC"
                        src="https://res.cloudinary.com/dsy1fdqx2/image/upload/v1686542718/book-publisher/footer_logo.png"
                        placeholder="blur"
                        blurDataURL="/image-loader.gif"
                        width="0"
                        height="0"
                        sizes="30vw"
                        className="block h-auto max-h-full w-[350px] align-middle"
                      />
                    </Link>
                  </div>
                  <div className=" w-full">
                    <div className="mb-10px text-sm text-black">MÃ SỐ DOANH NGHIỆP: 0100111514</div>
                    <div className=" w-full text-sm text-black">
                      <b />
                      <br />
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="pr-10px" />
                      <b className="font-bold">Trụ sở:</b> 18 Nguyễn Trường Tộ - Ba Đình - Hà Nội
                      <br />
                      <FontAwesomeIcon icon={faPhone} className="pr-10px" />
                      <b className="font-bold">Điện thoại:</b> 024.37161518 - 024.37163409
                      <br /> <FontAwesomeIcon icon={faFax} className="pr-10px" />
                      <b className="font-bold">Fax:</b> 024.38294781
                      <br />
                      <FontAwesomeIcon icon={faGlobe} className="pr-10px" />
                      <b className="font-bold">Website: </b>www.nxbvanhoc.com; www.nxbvanhoc.com.vn
                      <br />
                      <FontAwesomeIcon icon={faEnvelope} className="pr-10px" />
                      <b className="font-bold">E-mail: </b>info@nxbvanhoc.com.vn
                      <br />
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="pr-10px" />
                      <b className="font-bold"> Chi nhánh tại TP. Hồ Chí Minh</b>
                      : 290/20 Nam Kỳ Khởi Nghĩa - Quận 3<br />
                      <FontAwesomeIcon icon={faPhone} className="pr-10px" />
                      <b className="font-bold">Điện thoại:</b> 0983128138
                      <br /> <FontAwesomeIcon icon={faFax} className="pr-10px" />
                      <b className="font-bold">Fax:</b> 028.38483481
                      <br />
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="pr-10px" />
                      <b className="font-bold"> Văn phòng đại diện tại Đà Nẵng</b>
                      : 344 đường Trưng Nữ Vương - TP. Đà Nẵng
                      <br />
                      <FontAwesomeIcon icon={faPhone} className="pr-10px" />
                      <b className="font-bold">Điện thoại - Fax:</b> 0236. 3888333 <br />
                      <b />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative  mt-8 min-h-[1px] w-1/2 px-4 pl-8">
                <div className=" w-full">
                  <h4 className=" mb-8 w-full text-lg font-bold uppercase text-red-700">
                    <span>Chính sách</span>
                  </h4>
                  <ul className=" m-0 mb-4 w-full list-none p-0 leading-4">
                    <li className=" w-full pb-10px text-gray-800">
                      <a href="/chinh-sach-bao-mat" className=" text-sm text-black">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li className=" w-full">
                      <a href="/chinh-sach-doi-tra" className=" text-sm text-black">
                        Chính sách đổi trả
                      </a>
                    </li>
                  </ul>
                  <br />
                  <h4 className=" mb-8 w-full text-lg font-bold uppercase text-red-700">
                    <span>Hướng dẫn</span>
                  </h4>
                  <ul className=" m-0 mb-4 w-full list-none p-0 leading-4">
                    <li className=" w-full pb-10px text-gray-800">
                      <a href="/huong-dan">Hướng dẫn mua hàng</a>
                    </li>
                    <li className=" w-full pb-10px text-gray-800">
                      <a href="/huong-dan">Hướng dẫn thanh toán</a>
                    </li>
                    <li className=" w-full text-gray-800">
                      <a href="/dieu-khoan">Điều khoản dịch vụ</a>
                    </li>
                  </ul>
                  <div className=" mt-4 w-full">
                    <ul className="m-0 list-none p-0">
                      <li className=" mb-0 mr-10px inline-block">
                        <a
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-black hover:border-sky-700 hover:bg-sky-700 hover:text-white"
                          href="https://www.facebook.com/Nh%C3%A0-xu%E1%BA%A5t-b%E1%BA%A3n-V%C4%83n-h%E1%BB%8Dc-475715752558826/"
                        >
                          <span className="icon icon-facebook" aria-hidden="true">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </span>
                        </a>
                      </li>
                      <li className=" mb-0 mr-10px inline-block">
                        <a
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-black hover:border-sky-400 hover:bg-sky-400 hover:text-white"
                          href="https://twitter.com/"
                        >
                          <span className="icon icon-twitter" aria-hidden="true">
                            <FontAwesomeIcon icon={faTwitter} />
                          </span>
                        </a>
                      </li>
                      <li className=" mb-0 mr-10px inline-block">
                        <a
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-black hover:border-red-500 hover:bg-red-500 hover:text-white"
                          href="https://plus.google.com/"
                        >
                          <span className="icon icon-google-plus" aria-hidden="true">
                            <FontAwesomeIcon icon={faGooglePlus} />
                          </span>
                        </a>
                      </li>
                      <li className=" mb-0 mr-10px inline-block">
                        <a
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-black hover:border-red-600 hover:bg-red-600 hover:text-white"
                          href="https://www.youtube.com"
                        >
                          <span className="icon icon-youtube" aria-hidden="true">
                            <FontAwesomeIcon icon={faYoutube} />
                          </span>
                        </a>
                      </li>
                      <li className=" mb-0 inline-block">
                        <a
                          className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-gray-300 text-black hover:border-pink-600 hover:bg-pink-600 hover:text-white"
                          href="https://www.instagram.com/"
                        >
                          <span className="icon icon-instagram" aria-hidden="true">
                            <FontAwesomeIcon icon={faInstagram} />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
