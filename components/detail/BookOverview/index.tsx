export function BookOverview() {
  return (
    <div className="w-full float-left mb-8">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative px-4">
            <div className="w-full float-left">
              <div className="product-tab e-tabs text-red-700">
                <ul className="p-0 m-0">
                  <li
                    className="relative float-left inline-block cursor-pointer"
                    data-tab="product_tab_1"
                  >
                    <a
                      href=""
                      className="bg-red-700 text-white font-bold text-sm py-10px px-4 float-left relative z-10 leading-relaxed"
                    >
                      <span>Mô tả</span>
                    </a>
                  </li>
                  <li
                    className="relative float-left inline-block cursor-pointer"
                    data-tab="product_tab_2"
                  >
                    <a
                      href=""
                      className="bg-white text-red-700 font-bold text-sm py-10px px-4 float-left relative z-10 leading-relaxed"
                    >
                      <span>Đại lý</span>
                    </a>
                    <span className="bg-link" />
                  </li>
                  <li
                    className="relative float-left inline-block cursor-pointer"
                    data-tab="product_tab_3"
                  >
                    <a
                      href=""
                      className="bg-white text-red-700 font-bold text-sm py-10px px-4 float-left relative z-10 leading-relaxed"
                    >
                      <span>Hướng dẫn mua hàng</span>
                    </a>
                    <span className="bg-link" />
                  </li>
                  <li
                    className="relative float-left inline-block cursor-pointer"
                    data-tab="product_tab_4"
                  >
                    <a
                      href=""
                      className="bg-white text-red-700 font-bold text-sm py-10px px-4 float-left relative z-10 leading-relaxed"
                    >
                      <span>Tags</span>
                    </a>
                    <span className="bg-link" />
                  </li>
                  <li
                    className="relative float-left inline-block cursor-pointer"
                    data-tab="product_tab_5"
                  >
                    <a
                      href=""
                      className="bg-white text-red-700 font-bold text-sm py-10px px-4 float-left relative z-10 leading-relaxed"
                    >
                      <span>Đánh giá</span>
                    </a>
                    <span className="bg-link" />
                  </li>
                </ul>
                <div
                  id="product_tab_1"
                  className="opacity-100 visible h-auto block py-8 px-4 text-xs w-full float-left border border-gray-300 overflow-hidden"
                >
                  <div className="rte">
                    <p style={{ textAlign: "justify" }}>
                      “Có một triết lý hiển nhiên và quen thuộc là một anh chàng
                      đơn thân giàu có hẳn phải cần một người vợ”. Đó là câu mở
                      đầu đáng nhớ của “Kiêu hãnh và định kiến” - cuốn tiểu
                      thuyết nổi tiếng hàng đầu thế giới được Jane Austen viết
                      khi mới vừa đôi mươi.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Được đặt trong bối cảnh những năm 1800, tại thị trấn hư
                      cấu Merton, “Kiêu hãnh và định kiến” là câu chuyện tình
                      yêu giàu cảm xúc của năm cô con gái nhà Bennett, đặc biệt
                      là chuyện tình giữa Elizabeth Bennet - cô con gái thứ hai,
                      và Fitzwilliam Darcy - một quý tộc giàu có và nhiều danh
                      vọng.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Tính kiêu hãnh về giai cấp và tài sản của mình cùng định
                      kiến về vị thế thấp kém của gia đình Bennett khiến Darcy
                      lúc đầu muốn tránh xa Elizabeth, trong khi sự kiêu hãnh vì
                      lòng tự trọng của Elizabeth cũng như định kiến về cung
                      cách trưởng giả của Darcy đã khiến cô trở thành một người
                      con gái đặc biệt và duy nhất trong mắt Darcy. Elizabeth
                      xinh đẹp, với cá tính nhạy bén, dí dỏm và cứng cỏi, được
                      xem là một trong những nhân vật lôi cuốn nhất trong nền
                      văn học Anh.
                    </p>
                  </div>
                </div>
                <div
                  id="product_tab_2"
                  className="opacity-0 invisible h-0 hidden py-8 px-4 text-xs w-full float-left border border-gray-300 overflow-hidden"
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
                  className="opacity-0 invisible h-0 hidden py-8 px-4 text-xs w-full float-left border border-gray-300 overflow-hidden"
                >
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 1: </strong>Truy cập website và lựa chọn sản
                    phẩm cần mua để mua hàng
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 2:</strong> Click vào sản phẩm muốn mua, màn
                    hình hiển thị ra popup với các lựa chọn sau:&nbsp;
                    <br />
                    &nbsp; - Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp
                    tục mua hàng dể lựa chọn thêm sản phẩm vào giỏ hàng.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn muốn xem giỏ hàng để cập nhật sản
                    phẩm: Bấm vào xem giỏ hàng.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn muốn đặt hàng và thanh toán cho sản
                    phẩm này vui lòng bấm vào: Đặt hàng và thanh toán.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 3: </strong>Lựa chọn thông tin tài khoản thanh
                    toán
                    <br />
                    &nbsp; - Nếu bạn đã có tài khoản, vui lòng nhật thông tin
                    tên đăng nhập là email và mật khẩu vào mục đã có tài khoản
                    trên hệ thống.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn chưa có tài khoản và muốn đăng ký tài
                    khoản vui lòng điền các thông tin các nhân để tiếp tục đăng
                    ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được
                    đơn hàng của mình.
                    <br />
                    &nbsp; -&nbsp;Nếu bạn muốn mua hàng mà không cần tài khoản
                    vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 4:</strong> Điền các thông tin của bạn để nhận
                    đơn hàng. Lựa chọn hình thức thanh toán và vận chuyển cho
                    đơn hàng của mình
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Bước 5: </strong>Xem lại thông tin đặt hàng, điền
                    chú thích và gửi đơn hàng
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Sau khi nhận được đơn hàng bạn gửi, chúng tôi sẽ liên hệ
                    bằng cách gọi điện lại để xác nhận đơn hàng và địa chỉ của
                    bạn.
                    <br />
                    Trân trọng cảm ơn
                  </p>
                </div>
                <div
                  id="product_tab_4"
                  className="opacity-0 invisible h-0 hidden py-8 px-4 text-xs w-full float-left border border-gray-300 overflow-hidden"
                ></div>
                <div
                  id="product_tab_5"
                  className="opacity-0 invisible h-0 hidden py-8 px-4 text-xs w-full float-left border border-gray-300 overflow-hidden"
                >
                  <div className="rte">
                    <div
                      id="bizweb-product-reviews"
                      className="bizweb-product-reviews"
                      data-id={30342227}
                    ></div>
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
