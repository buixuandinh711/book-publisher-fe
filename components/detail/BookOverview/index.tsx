export interface BookOverviewProps {
  description: string;
}

export function BookOverview({ description }: BookOverviewProps) {
  return (
    <div className=" mb-8 w-full">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full px-4">
            <div className=" w-full">
              <div className="text-red-700">
                <ul className="block">
                  <li className="inline-flex items-center h-10 cursor-pointer bg-red-700 px-4 text-center align-middle text-sm font-bold text-white">
                    <span>Mô tả</span>
                  </li>
                  <li className="inline-flex items-center h-10 cursor-pointer bg-white px-4 text-center align-middle text-sm font-bold text-red-700">
                    <span>Đại lý</span>
                  </li>
                  <li className="inline-flex items-center h-10 cursor-pointer bg-white px-4 text-center align-middle text-sm font-bold text-red-700">
                    <span>Hướng dẫn mua hàng</span>
                  </li>
                  <li className="inline-flex items-center h-10 cursor-pointer bg-white px-4 text-center align-middle text-sm font-bold text-red-700">
                    <span>Tags</span>
                  </li>
                  <li className="inline-flex items-center h-10 cursor-pointer bg-white px-4 text-center align-middle text-sm font-bold text-red-700">
                    <span>Đánh giá</span>
                  </li>
                </ul>
                <div className="block h-auto w-full border border-gray-300 px-4 py-8 text-xs opacity-100">
                  <div className="rte">
                    {description.split("\n").map((content, index) => (
                      <p className="mb-4" key={index}>
                        {content}
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  id="product_tab_2"
                  className="invisible  hidden h-0 w-full overflow-hidden border border-gray-300 px-4 py-8 text-xs opacity-0"
                >
                  <p>
                    - Hệ thống nhà sách Fahasa : toàn quốc
                    <br />
                    - Hệ thống nhà sách Phương Nam : toàn quốc
                    <br />
                    - Hệ thống nhà sách Tiền Phong : toàn quốc
                    <br />
                    - Hệ thống nhà sách ADC : khu vực Hà Nội
                    <br />
                    - Hệ thống nhà sách Thăng Long : Thành phố Hồ Chí Minh
                    <br />
                    - Hệ thống nhà sách Cá Chép : toàn quốc
                    <br />
                    - Hệ thống nhà sách Tân Việt : khu vực Hà Nội
                    <br />
                    - Nhà sách Ngân Nga - Số 7 Đinh Lễ
                    <br />
                    - Nhà sách Lâm - số 3 Đinh Lễ
                    <br />
                    - Nhà sách Huy Hoàng - số 3 Đinh Lễ
                    <br />
                    * Tuyển đại lý
                    <br />
                    - Chiết khấu hấp dẫn
                    <br />- Hotline : 090 4351818
                  </p>
                </div>
                <div
                  id="product_tab_3"
                  className="invisible  hidden h-0 w-full overflow-hidden border border-gray-300 px-4 py-8 text-xs opacity-0"
                >
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 1: </strong>Truy cập website và lựa chọn products cần mua để mua hàng
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 2:</strong> Click vào products muốn mua, màn hình hiển thị ra popup với các lựa chọn sau:&nbsp;
                    <br />
                    &nbsp; - Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng dể lựa chọn thêm products vào giỏ hàng.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn muốn xem giỏ hàng để cập nhật products: Bấm vào xem giỏ hàng.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn muốn đặt hàng và thanh toán cho products này vui lòng bấm vào: Đặt hàng và thanh toán.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 3: </strong>Lựa chọn thông tin tài khoản thanh toán
                    <br />
                    &nbsp; - Nếu bạn đã có tài khoản, vui lòng nhật thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản
                    trên hệ thống.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin các nhân để tiếp tục đăng
                    ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 4:</strong> Điền các thông tin của bạn để nhận đơn hàng. Lựa chọn hình thức thanh toán và vận chuyển cho
                    đơn hàng của mình
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 5: </strong>Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Sau khi nhận được đơn hàng bạn gửi, chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận đơn hàng và địa chỉ của bạn.
                    <br />
                    Trân trọng cảm ơn
                  </p>
                </div>
                <div
                  id="product_tab_4"
                  className="invisible  hidden h-0 w-full overflow-hidden border border-gray-300 px-4 py-8 text-xs opacity-0"
                ></div>
                <div
                  id="product_tab_5"
                  className="invisible  hidden h-0 w-full overflow-hidden border border-gray-300 px-4 py-8 text-xs opacity-0"
                >
                  <div className="rte">
                    <div id="bizweb-product-reviews" className="bizweb-product-reviews" data-id={30342227}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
