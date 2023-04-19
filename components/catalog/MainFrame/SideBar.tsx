export function SideBar() {
  return (
    <aside className="mb-8 relative  w-1/4 float-left min-h-[1px] px-4">
      <div className="sidebar-item sidebar-menu sidebar-collection-menu">
        <div className="module-header">
          <h2 className="title-head module-title sidebar-title">
            <a href="javascript:;">
              <span>Danh mục sản phẩm</span>
            </a>
          </h2>
        </div>
        <div className="sidebar-menu-content module-content">
          <div className="sidebar-linklists">
            <ul>
              <li className="sidebar-menu-list collection-sidebar-menu">
                <a className="ajaxLayer" href="/sach-moi" title="Sách mới">
                  <span>Sách mới</span>
                  <span className="object_count">(207)</span>
                </a>
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
                <ul style={{ display: "none" }} className="lv2">
                  <li>
                    <a
                      className="ajaxLayer a_lv2"
                      href="/van-hoc-trong-nuoc"
                      title="Sách văn học Việt Nam"
                    >
                      <span>Sách văn học Việt Nam</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="ajaxLayer a_lv2"
                      href="/van-hoc-nuoc-ngoai"
                      title="Sách văn học nước ngoài"
                    >
                      <span>Sách văn học nước ngoài</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="ajaxLayer a_lv2"
                      href="/sach-thieu-nhi"
                      title="Sách thiếu nhi"
                    >
                      <span>Sách thiếu nhi</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-list collection-sidebar-menu">
                <a
                  className="ajaxLayer"
                  href="/van-hoc-kinh-dien"
                  title="Sách văn học kinh điển"
                >
                  <span>Sách văn học kinh điển</span>
                  <span className="object_count">(80)</span>
                </a>
              </li>
              <li className="sidebar-menu-list collection-sidebar-menu">
                <a
                  className="ajaxLayer"
                  href="/sach-lien-ket-xuat-ban-moi"
                  title="Sách liên kết xuất bản"
                >
                  <span>Sách liên kết xuất bản</span>
                  <span className="object_count">(525)</span>
                </a>
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
                <ul style={{ display: "none" }} className="lv2">
                  <li>
                    <a
                      className="ajaxLayer a_lv2"
                      href="/sach-tac-gia"
                      title="Sách liên kết tác giả"
                    >
                      <span>Sách liên kết tác giả</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="ajaxLayer a_lv2"
                      href="/sach-lien-ket-xuat-ban-moi"
                      title="Sách liên kết với các công ty sách"
                    >
                      <span>Sách liên kết với các công ty sách</span>
                    </a>
                    <em>
                      <i className="fa fa-plus" aria-hidden="true" />
                    </em>
                    <ul style={{ display: "none" }} className="lv3">
                      <li>
                        <a
                          className="ajaxLayer a_lv3"
                          href="/sach-lien-ket-moi"
                          title="Sách liên kết mới"
                        >
                          <span>Sách liên kết mới</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ajaxLayer a_lv3"
                          href="/sa-ch-van-ho-c-vie-t-nam-lien-ke-t"
                          title="Sách văn học Việt Nam liên kết"
                        >
                          <span>Sách văn học Việt Nam liên kết</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ajaxLayer a_lv3"
                          href="/sa-ch-van-ho-c-nuo-c-ngoa-i-lien-ke-t"
                          title="Sách văn học Nước ngoài liên kết"
                        >
                          <span>Sách văn học Nước ngoài liên kết</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ajaxLayer a_lv3"
                          href="/sa-ch-thie-u-nhi-lien-ke-t"
                          title="Sách thiêu nhi liên kết"
                        >
                          <span>Sách thiêu nhi liên kết</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-list collection-sidebar-menu">
                <a
                  className="ajaxLayer"
                  href="/sach-giam-gia"
                  title="Sách giảm giá"
                >
                  <span>Sách giảm giá</span>
                  <span className="object_count">(126)</span>
                </a>
              </li>
              <li className="sidebar-menu-list collection-sidebar-menu">
                <a className="ajaxLayer" href="/" title="Sách quý hiếm">
                  <span>Sách quý hiếm</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* FILTERS */}
      <div className="aside-filter sidebar-item">
        <div className="filter-container hidden">
          <div
            className="filter-container__selected-filter"
            style={{ display: "none" }}
          >
            <div className="filter-container__selected-filter-header clearfix">
              <span className="filter-container__selected-filter-header-title">
                <i className="fa fa-arrow-left hidden-sm-up" /> Bạn chọn
              </span>
              <a
                href="javascript:void(0)"
                className="filter-container__clear-all"
              >
                Bỏ hết <i className="fa fa-angle-right" />
              </a>
            </div>
            <div className="filter-container__selected-filter-list">
              <ul />
            </div>
          </div>
        </div>
        {/* LỌC GIÁ */}
        <aside className="aside-item filter-price">
          <div className="aside-title module-header">
            <h2 className="title-head module-title sidebar-title">
              <a href="javascript:;">
                <span>Giá sản phẩm</span>
              </a>
            </h2>
          </div>
          <div className="module-content aside-content filter-group">
            <ul>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-duoi-50-000d">
                    <input
                      type="checkbox"
                      id="filter-duoi-50-000d"
                      data-group="Khoảng giá"
                      data-field="price_min"
                      data-text="Dưới 50.000đ"
                      defaultValue="(<50000)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Giá dưới 50.000đ
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-50-000d-100-000d">
                    <input
                      type="checkbox"
                      id="filter-50-000d-100-000d"
                      data-group="Khoảng giá"
                      data-field="price_min"
                      data-text="50.000đ - 100.000đ"
                      defaultValue="(>50000 AND <100000)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    50.000đ - 100.000đ
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-100-000d-200-000d">
                    <input
                      type="checkbox"
                      id="filter-100-000d-200-000d"
                      data-group="Khoảng giá"
                      data-field="price_min"
                      data-text="100.000đ - 200.000đ"
                      defaultValue="(>100000 AND <200000)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    100.000đ - 200.000đ
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tren200-000d">
                    <input
                      type="checkbox"
                      id="filter-tren200-000d"
                      data-group="Khoảng giá"
                      data-field="price_min"
                      data-text="Trên 200.000đ"
                      defaultValue="(>200000)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Giá trên 200.000đ
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </aside>
        {/* LỌC TYPE */}
        <aside className="aside-item filter-type">
          <div className="aside-title module-header">
            <h2 className="title-head module-title sidebar-title">
              <a href="javascript:;">
                <span>Loại tác phẩm</span>
              </a>
            </h2>
          </div>
          <div className="module-content aside-content filter-group">
            <ul>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-but-ky">
                    <input
                      type="checkbox"
                      id="filter-but-ky"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Bút ký"
                      defaultValue="(Bút ký)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Bút ký
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-but-ky-binh-luan">
                    <input
                      type="checkbox"
                      id="filter-but-ky-binh-luan"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Bút ký - Bình luận"
                      defaultValue="(Bút ký - Bình luận)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Bút ký - Bình luận
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-hoi-ky">
                    <input
                      type="checkbox"
                      id="filter-hoi-ky"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Hồi ký"
                      defaultValue="(Hồi ký)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Hồi ký
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-ly-luan-phe-binh">
                    <input
                      type="checkbox"
                      id="filter-ly-luan-phe-binh"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Lý luận - Phê bình"
                      defaultValue="(Lý luận - Phê bình)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Lý luận - Phê bình
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-nghien-cuu">
                    <input
                      type="checkbox"
                      id="filter-nghien-cuu"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Nghiên cứu"
                      defaultValue="(Nghiên cứu)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nghiên cứu
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-nhat-ky">
                    <input
                      type="checkbox"
                      id="filter-nhat-ky"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Nhật ký"
                      defaultValue="(Nhật ký)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhật ký
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-phong-su">
                    <input
                      type="checkbox"
                      id="filter-phong-su"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Phóng sự"
                      defaultValue="(Phóng sự)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Phóng sự
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-phong-su-ghi-chep">
                    <input
                      type="checkbox"
                      id="filter-phong-su-ghi-chep"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Phóng sự - Ghi chép"
                      defaultValue="(Phóng sự - Ghi chép)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Phóng sự - Ghi chép
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-phong-su-tieu-thuyet">
                    <input
                      type="checkbox"
                      id="filter-phong-su-tieu-thuyet"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Phóng sự - Tiểu thuyết"
                      defaultValue="(Phóng sự - Tiểu thuyết)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Phóng sự - Tiểu thuyết
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-phong-van-doi-thoai">
                    <input
                      type="checkbox"
                      id="filter-phong-van-doi-thoai"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Phỏng vấn, đối thoại"
                      defaultValue="(Phỏng vấn, đối thoại)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Phỏng vấn, đối thoại
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-sach-chuyen-khao">
                    <input
                      type="checkbox"
                      id="filter-sach-chuyen-khao"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Sách chuyên khảo"
                      defaultValue="(Sách chuyên khảo)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Sách chuyên khảo
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-sach-chuyen-luan">
                    <input
                      type="checkbox"
                      id="filter-sach-chuyen-luan"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Sách chuyên luận"
                      defaultValue="(Sách chuyên luận)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Sách chuyên luận
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-sach-lich-su">
                    <input
                      type="checkbox"
                      id="filter-sach-lich-su"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Sách lịch sử"
                      defaultValue="(Sách lịch sử)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Sách lịch sử
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-sach-tham-khao">
                    <input
                      type="checkbox"
                      id="filter-sach-tham-khao"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Sách tham khảo"
                      defaultValue="(Sách tham khảo)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Sách tham khảo
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-sach-thieu-nhi">
                    <input
                      type="checkbox"
                      id="filter-sach-thieu-nhi"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Sách thiếu nhi"
                      defaultValue="(Sách thiếu nhi)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Sách thiếu nhi
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tan-van">
                    <input
                      type="checkbox"
                      id="filter-tan-van"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tản văn"
                      defaultValue="(Tản văn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tản văn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tan-van-but-ky-phe-binh">
                    <input
                      type="checkbox"
                      id="filter-tan-van-but-ky-phe-binh"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tản văn, Bút ký, Phê bình"
                      defaultValue="(Tản văn, Bút ký, Phê bình)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tản văn, Bút ký, Phê bình
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tap-but">
                    <input
                      type="checkbox"
                      id="filter-tap-but"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tạp bút"
                      defaultValue="(Tạp bút)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tạp bút
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tap-truyen">
                    <input
                      type="checkbox"
                      id="filter-tap-truyen"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tập truyện"
                      defaultValue="(Tập truyện)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tập truyện
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tap-truyen-ngan">
                    <input
                      type="checkbox"
                      id="filter-tap-truyen-ngan"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tập truyện ngắn"
                      defaultValue="(Tập truyện ngắn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tập truyện ngắn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-than-thoai">
                    <input
                      type="checkbox"
                      id="filter-than-thoai"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Thần thoại"
                      defaultValue="(Thần thoại)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thần thoại
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tho">
                    <input
                      type="checkbox"
                      id="filter-tho"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Thơ"
                      defaultValue="(Thơ)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thơ
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tho-ngu-ngon">
                    <input
                      type="checkbox"
                      id="filter-tho-ngu-ngon"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Thơ ngụ ngôn"
                      defaultValue="(Thơ ngụ ngôn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thơ ngụ ngôn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tho-hoi-ky-kich-ban">
                    <input
                      type="checkbox"
                      id="filter-tho-hoi-ky-kich-ban"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Thơ, Hồi ký, Kịch bản"
                      defaultValue="(Thơ, Hồi ký, Kịch bản)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thơ, Hồi ký, Kịch bản
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tho-van-tuy-but-tan-van">
                    <input
                      type="checkbox"
                      id="filter-tho-van-tuy-but-tan-van"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Thơ, Văn, Tùy bút, Tản Văn"
                      defaultValue="(Thơ, Văn, Tùy bút, Tản Văn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thơ, Văn, Tùy bút, Tản Văn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-luan">
                    <input
                      type="checkbox"
                      id="filter-tieu-luan"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu luận"
                      defaultValue="(Tiểu luận)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu luận
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-luan-phe-binh">
                    <input
                      type="checkbox"
                      id="filter-tieu-luan-phe-binh"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu luận - Phê bình"
                      defaultValue="(Tiểu luận - Phê bình)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu luận - Phê bình
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-luan-va-but-ky">
                    <input
                      type="checkbox"
                      id="filter-tieu-luan-va-but-ky"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu luận và bút ký"
                      defaultValue="(Tiểu luận và bút ký)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu luận và bút ký
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-thuyet">
                    <input
                      type="checkbox"
                      id="filter-tieu-thuyet"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu thuyết"
                      defaultValue="(Tiểu thuyết)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu thuyết
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-thuyet-da-su">
                    <input
                      type="checkbox"
                      id="filter-tieu-thuyet-da-su"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu thuyết dã sử"
                      defaultValue="(Tiểu thuyết dã sử)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu thuyết dã sử
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-thuyet-lich-su">
                    <input
                      type="checkbox"
                      id="filter-tieu-thuyet-lich-su"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu thuyết lịch sử"
                      defaultValue="(Tiểu thuyết lịch sử)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu thuyết lịch sử
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tieu-thuyet-trinh-tham">
                    <input
                      type="checkbox"
                      id="filter-tieu-thuyet-trinh-tham"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tiểu thuyết trinh thám"
                      defaultValue="(Tiểu thuyết trinh thám)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tiểu thuyết trinh thám
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tinh-hoa-van-chuong-viet">
                    <input
                      type="checkbox"
                      id="filter-tinh-hoa-van-chuong-viet"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tinh hoa văn chương Việt"
                      defaultValue="(Tinh hoa văn chương Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tinh hoa văn chương Việt
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-trinh-tham">
                    <input
                      type="checkbox"
                      id="filter-trinh-tham"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Trinh thám"
                      defaultValue="(Trinh thám)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Trinh thám
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-co">
                    <input
                      type="checkbox"
                      id="filter-truyen-co"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện cổ"
                      defaultValue="(Truyện cổ)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện cổ
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-co-tich">
                    <input
                      type="checkbox"
                      id="filter-truyen-co-tich"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện cổ tích"
                      defaultValue="(Truyện cổ tích)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện cổ tích
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-cuc-ngan">
                    <input
                      type="checkbox"
                      id="filter-truyen-cuc-ngan"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện cực ngắn"
                      defaultValue="(Truyện cực ngắn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện cực ngắn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-cuoi">
                    <input
                      type="checkbox"
                      id="filter-truyen-cuoi"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện cười"
                      defaultValue="(Truyện cười)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện cười
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-da-su">
                    <input
                      type="checkbox"
                      id="filter-truyen-da-su"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện Dã sử"
                      defaultValue="(Truyện Dã sử)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện Dã sử
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-dai">
                    <input
                      type="checkbox"
                      id="filter-truyen-dai"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện dài"
                      defaultValue="(Truyện dài)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện dài
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-ky">
                    <input
                      type="checkbox"
                      id="filter-truyen-ky"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện ký"
                      defaultValue="(Truyện ký)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện ký
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-ngan">
                    <input
                      type="checkbox"
                      id="filter-truyen-ngan"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện ngắn"
                      defaultValue="(Truyện ngắn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện ngắn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-ngan-tan-van">
                    <input
                      type="checkbox"
                      id="filter-truyen-ngan-tan-van"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện ngắn - Tản văn"
                      defaultValue="(Truyện ngắn - Tản văn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện ngắn - Tản văn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-truyen-ngu-ngon">
                    <input
                      type="checkbox"
                      id="filter-truyen-ngu-ngon"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Truyện ngụ ngôn"
                      defaultValue="(Truyện ngụ ngôn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Truyện ngụ ngôn
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tu-truyen">
                    <input
                      type="checkbox"
                      id="filter-tu-truyen"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tự truyện"
                      defaultValue="(Tự truyện)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tự truyện
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-tuy-but">
                    <input
                      type="checkbox"
                      id="filter-tuy-but"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Tùy bút"
                      defaultValue="(Tùy bút)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tùy bút
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-van-hoc-kinh-dien">
                    <input
                      type="checkbox"
                      id="filter-van-hoc-kinh-dien"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Văn học kinh điển"
                      defaultValue="(Văn học kinh điển)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Văn học kinh điển
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-van-hoc-nuoc-ngoai">
                    <input
                      type="checkbox"
                      id="filter-van-hoc-nuoc-ngoai"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Văn học nước ngoài"
                      defaultValue="(Văn học nước ngoài)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Văn học nước ngoài
                  </label>
                </span>
              </li>
              <li className="filter-item filter-item--check-box filter-item--green">
                <span>
                  <label htmlFor="filter-van-hoc-viet-nam">
                    <input
                      type="checkbox"
                      id="filter-van-hoc-viet-nam"
                      data-group="Loại"
                      data-field="product_type"
                      data-text="Văn học Việt Nam"
                      defaultValue="(Văn học Việt Nam)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Văn học Việt Nam
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </aside>
        {/* LỌC VENDOR */}
        <aside className="aside-item filter-vendor">
          <div className="aside-title module-header">
            <h2 className="title-head module-title sidebar-title">
              <a href="javascript:;">
                <span>Đơn vị liên kết xuất bản</span>
              </a>
            </h2>
          </div>
          <div className="module-content aside-content filter-group">
            <ul>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-1980-novel">
                    <input
                      type="checkbox"
                      id="filter-1980-novel"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="1980 Novel"
                      defaultValue="(1980 Novel)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    1980 Novel
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-alphabooks">
                    <input
                      type="checkbox"
                      id="filter-alphabooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Alphabooks"
                      defaultValue="(Alphabooks)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Alphabooks
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-bach-viet">
                    <input
                      type="checkbox"
                      id="filter-bach-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Bách Việt"
                      defaultValue="(Bách Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Bách Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-sach-co-nguyet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-co-nguyet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Sách Cổ Nguyệt"
                      defaultValue="(Công ty Cổ phần Sách Cổ Nguyệt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Sách Cổ Nguyệt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-sach-dich-va-tu-dien-giao-duc">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-dich-va-tu-dien-giao-duc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY CỔ PHẦN SÁCH DỊCH VÀ TỪ ĐIỂN GIÁO DỤC"
                      defaultValue="(CÔNG TY CỔ PHẦN SÁCH DỊCH VÀ TỪ ĐIỂN GIÁO DỤC)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    CÔNG TY CỔ PHẦN SÁCH DỊCH VÀ TỪ ĐIỂN GIÁO DỤC
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-sach-omega-viet-nam-omega-plus">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-omega-viet-nam-omega-plus"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Sách Omega Việt Nam (Omega Plus)"
                      defaultValue="(Công ty Cổ phần Sách Omega Việt Nam (Omega Plus))"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Sách Omega Việt Nam (Omega Plus)
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-sach-van-chuong-nha-sach-van-chuong">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sach-van-chuong-nha-sach-van-chuong"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần sách Văn Chương (Nhà sách Văn Chương)"
                      defaultValue="(Công ty Cổ phần sách Văn Chương (Nhà sách Văn Chương))"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần sách Văn Chương (Nhà sách Văn Chương)
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-sbooks">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-sbooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty cổ phần SBOOKS"
                      defaultValue="(Công ty cổ phần SBOOKS)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty cổ phần SBOOKS
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-chi">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-chi"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa Chi"
                      defaultValue="(Công ty Cổ phần Văn hóa Chi)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Văn hóa Chi
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-dong-a">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-dong-a"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa Đông A"
                      defaultValue="(Công ty Cổ phần Văn hóa Đông A)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Văn hóa Đông A
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-huy-hoang">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-huy-hoang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa Huy Hoàng"
                      defaultValue="(Công ty Cổ phần Văn hóa Huy Hoàng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Văn hóa Huy Hoàng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-va-giao-duc-tan-viet-nha-sach-tan-viet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-va-giao-duc-tan-viet-nha-sach-tan-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa và Giáo dục Tân Việt - Nhà sách Tân Việt"
                      defaultValue="(Công ty Cổ phần Văn hóa và Giáo dục Tân Việt - Nhà sách Tân Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Văn hóa và Giáo dục Tân Việt - Nhà sách Tân
                    Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-van-hoa-va-truyen-thong-nha-nam">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-van-hoa-va-truyen-thong-nha-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam"
                      defaultValue="(Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-co-phan-xuat-ban-va-giao-duc-quang-van">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-co-phan-xuat-ban-va-giao-duc-quang-van"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY CỔ PHẦN XUẤT BẢN VÀ GIÁO DỤC QUẢNG VĂN"
                      defaultValue="(CÔNG TY CỔ PHẦN XUẤT BẢN VÀ GIÁO DỤC QUẢNG VĂN)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    CÔNG TY CỔ PHẦN XUẤT BẢN VÀ GIÁO DỤC QUẢNG VĂN
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-dau-tu-tm-pt-phuc-minh">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-dau-tu-tm-pt-phuc-minh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Đầu Tư TM&PT Phúc Minh"
                      defaultValue="(Công ty CP Đầu Tư TM&PT Phúc Minh)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP Đầu Tư TM&amp;PT Phúc Minh
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-sach-bach-viet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-sach-bach-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP sách Bách Việt"
                      defaultValue="(Công ty CP sách Bách Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP sách Bách Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-sach-dich-va-tu-dien-giao-duc">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-sach-dich-va-tu-dien-giao-duc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP sách dịch và từ điển giáo dục"
                      defaultValue="(Công ty CP sách dịch và từ điển giáo dục)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP sách dịch và từ điển giáo dục
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-thuong-mai-thien-ha-thuy">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-thuong-mai-thien-ha-thuy"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Thương mại Thiên Hà Thủy"
                      defaultValue="(Công ty CP Thương mại Thiên Hà Thủy)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP Thương mại Thiên Hà Thủy
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-van-hoa-huy-hoang">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-van-hoa-huy-hoang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Văn hóa Huy Hoàng"
                      defaultValue="(Công ty CP Văn hóa Huy Hoàng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP Văn hóa Huy Hoàng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-van-hoa-truyen-thong-sen-viet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-van-hoa-truyen-thong-sen-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Văn hóa Truyền thông Sen Việt"
                      defaultValue="(Công ty CP Văn hóa Truyền thông Sen Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP Văn hóa Truyền thông Sen Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-cp-van-hoa-va-truyen-thong-lien-viet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-cp-van-hoa-va-truyen-thong-lien-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty CP Văn hóa và Truyền thông Liên Việt"
                      defaultValue="(Công ty CP Văn hóa và Truyền thông Liên Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty CP Văn hóa và Truyền thông Liên Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-sach-tri-tue-viet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-sach-tri-tue-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY SÁCH TRÍ TUỆ VIỆT"
                      defaultValue="(CÔNG TY SÁCH TRÍ TUỆ VIỆT)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    CÔNG TY SÁCH TRÍ TUỆ VIỆT
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-1-thanh-vien-tm-dv-van-hoa-minh-long">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-1-thanh-vien-tm-dv-van-hoa-minh-long"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH 1 thành viên TM & DV Văn hóa Minh Long"
                      defaultValue="(Công ty TNHH 1 thành viên TM & DV Văn hóa Minh Long)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH 1 thành viên TM &amp; DV Văn hóa Minh Long
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-dt-pt-van-hoa-viet-nha-sach-tri-duc">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-dt-pt-van-hoa-viet-nha-sach-tri-duc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH ĐT & PT Văn hóa Việt - Nhà sách Trí Đức"
                      defaultValue="(Công ty TNHH ĐT & PT Văn hóa Việt - Nhà sách Trí Đức)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH ĐT &amp; PT Văn hóa Việt - Nhà sách Trí Đức
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-mtv-sach-phuong-nam-phuongnambook">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-mtv-sach-phuong-nam-phuongnambook"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH MTV Sách Phương Nam (phuongnambook)"
                      defaultValue="(Công ty TNHH MTV Sách Phương Nam (phuongnambook))"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH MTV Sách Phương Nam (phuongnambook)
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-mtv-tm-dv-van-hoa-minh-long">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-mtv-tm-dv-van-hoa-minh-long"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH MTV TM & DV Văn hóa Minh Long"
                      defaultValue="(Công ty TNHH MTV TM & DV Văn hóa Minh Long)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH MTV TM &amp; DV Văn hóa Minh Long
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-sach-truyen-thong-viet-nam">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-sach-truyen-thong-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY TNHH SÁCH & TRUYỀN THÔNG VIỆT NAM"
                      defaultValue="(CÔNG TY TNHH SÁCH & TRUYỀN THÔNG VIỆT NAM)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    CÔNG TY TNHH SÁCH &amp; TRUYỀN THÔNG VIỆT NAM
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-sach-amun">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-sach-amun"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH sách Amun"
                      defaultValue="(Công ty TNHH sách Amun)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH sách Amun
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-sach-ha-giang">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-sach-ha-giang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH sách Hà Giang"
                      defaultValue="(Công ty TNHH sách Hà Giang)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH sách Hà Giang
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-son-quynh">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-son-quynh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Sơn Quỳnh"
                      defaultValue="(Công ty TNHH Sơn Quỳnh)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Sơn Quỳnh
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-tazano-gieo-books">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-tazano-gieo-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Tazano (Gieo Books)"
                      defaultValue="(Công ty TNHH Tazano (Gieo Books))"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Tazano (Gieo Books)
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-thuong-mai-dich-vu-sach-tuyet-dinh">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-thuong-mai-dich-vu-sach-tuyet-dinh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH thương mại dịch vụ Sách Tuyệt Đỉnh"
                      defaultValue="(Công ty TNHH thương mại dịch vụ Sách Tuyệt Đỉnh)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH thương mại dịch vụ Sách Tuyệt Đỉnh
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-thuong-mai-sach-nhan-dan">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-thuong-mai-sach-nhan-dan"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Thương mại Sách Nhân Dân"
                      defaultValue="(Công ty TNHH Thương mại Sách Nhân Dân)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Thương mại Sách Nhân Dân
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-thuong-mai-va-dich-vu-van-hoa-hai-dang">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-thuong-mai-va-dich-vu-van-hoa-hai-dang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN HÓA HẢI ĐĂNG"
                      defaultValue="(CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN HÓA HẢI ĐĂNG)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN HÓA HẢI ĐĂNG
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-tm-dv-vh-huong-trang">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-tm-dv-vh-huong-trang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH TM & DV - VH Hương Trang"
                      defaultValue="(Công ty TNHH TM & DV - VH Hương Trang)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH TM &amp; DV - VH Hương Trang
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-tm-dv-van-hoa-dinh-ti-books">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-tm-dv-van-hoa-dinh-ti-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH TM & DV Văn hóa Đinh Tị Books"
                      defaultValue="(Công ty TNHH TM & DV Văn hóa Đinh Tị Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH TM &amp; DV Văn hóa Đinh Tị Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-truyen-thong-giao-duc-giai-tri-phan-thi">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-truyen-thong-giao-duc-giai-tri-phan-thi"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Truyền thông - Giáo dục & Giải trí Phan Thị"
                      defaultValue="(Công ty TNHH Truyền thông - Giáo dục & Giải trí Phan Thị)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Truyền thông - Giáo dục &amp; Giải trí Phan Thị
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-van-hoa-minh-tan-nha-sach-minh-thang">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-minh-tan-nha-sach-minh-thang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa Minh Tân - Nhà sách Minh Thắng"
                      defaultValue="(Công ty TNHH Văn hóa Minh Tân - Nhà sách Minh Thắng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Văn hóa Minh Tân - Nhà sách Minh Thắng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-1980-books">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-1980-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông 1980 Books"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông 1980 Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Văn hóa và Truyền thông 1980 Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-az-viet-nam">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-az-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông AZ Việt Nam"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông AZ Việt Nam)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Văn hóa và Truyền thông AZ Việt Nam
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-skybooks-viet-nam">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-skybooks-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông Skybooks Việt Nam"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông Skybooks Việt Nam)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Văn hóa và Truyền thông Skybooks Việt Nam
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-thao-nguyen">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-thao-nguyen"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông Thảo Nguyên"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông Thảo Nguyên)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Văn hóa và Truyền thông Thảo Nguyên
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-tri-viet">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-van-hoa-va-truyen-thong-tri-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Văn hóa và Truyền thông Trí Việt"
                      defaultValue="(Công ty TNHH Văn hóa và Truyền thông Trí Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Văn hóa và Truyền thông Trí Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-xuat-ban-va-truyen-thong-bestbooks-viet-nam">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-xuat-ban-va-truyen-thong-bestbooks-viet-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Xuất bản và Truyền thông Bestbooks Việt Nam"
                      defaultValue="(Công ty TNHH Xuất bản và Truyền thông Bestbooks Việt Nam)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Xuất bản và Truyền thông Bestbooks Việt Nam
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-tnhh-xuc-tien-hop-tac-van-hoa-truyen-thong-sao-bac">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-tnhh-xuc-tien-hop-tac-van-hoa-truyen-thong-sao-bac"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty TNHH Xúc tiến hợp tác văn hóa & truyền thông Sao Bắc"
                      defaultValue="(Công ty TNHH Xúc tiến hợp tác văn hóa & truyền thông Sao Bắc)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty TNHH Xúc tiến hợp tác văn hóa &amp; truyền thông Sao
                    Bắc
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-cong-ty-truyen-thong-van-hoa-unicorn-publishing">
                    <input
                      type="checkbox"
                      id="filter-cong-ty-truyen-thong-van-hoa-unicorn-publishing"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Công ty Truyền thông & Văn hóa Unicorn Publishing"
                      defaultValue="(Công ty Truyền thông & Văn hóa Unicorn Publishing)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Công ty Truyền thông &amp; Văn hóa Unicorn Publishing
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-dinh-ti">
                    <input
                      type="checkbox"
                      id="filter-dinh-ti"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Đinh Tị"
                      defaultValue="(Đinh Tị)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Đinh Tị
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-dinh-ti-books">
                    <input
                      type="checkbox"
                      id="filter-dinh-ti-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Đinh Tị Books"
                      defaultValue="(Đinh Tị Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Đinh Tị Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-dinh-ti-books">
                    <input
                      type="checkbox"
                      id="filter-dinh-ti-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Định Tị Books"
                      defaultValue="(Định Tị Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Định Tị Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-dong-a">
                    <input
                      type="checkbox"
                      id="filter-dong-a"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Đông A"
                      defaultValue="(Đông A)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Đông A
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-ehomebooks">
                    <input
                      type="checkbox"
                      id="filter-ehomebooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Ehomebooks"
                      defaultValue="(Ehomebooks)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Ehomebooks
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-hagiang-books">
                    <input
                      type="checkbox"
                      id="filter-hagiang-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Hagiang Books"
                      defaultValue="(Hagiang Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Hagiang Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-hai-dang">
                    <input
                      type="checkbox"
                      id="filter-hai-dang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Hải Đăng"
                      defaultValue="(Hải Đăng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Hải Đăng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-hanoibooks">
                    <input
                      type="checkbox"
                      id="filter-hanoibooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="HANOIBOOKS"
                      defaultValue="(HANOIBOOKS)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    HANOIBOOKS
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-huy-hoang">
                    <input
                      type="checkbox"
                      id="filter-huy-hoang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Huy Hoàng"
                      defaultValue="(Huy Hoàng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Huy Hoàng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-lien-viet">
                    <input
                      type="checkbox"
                      id="filter-lien-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Liên Việt"
                      defaultValue="(Liên Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Liên Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-minh-chau-book">
                    <input
                      type="checkbox"
                      id="filter-minh-chau-book"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Minh Châu book"
                      defaultValue="(Minh Châu book)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Minh Châu book
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-minh-thang">
                    <input
                      type="checkbox"
                      id="filter-minh-thang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Minh Thắng"
                      defaultValue="(Minh Thắng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Minh Thắng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-minh-thang-books">
                    <input
                      type="checkbox"
                      id="filter-minh-thang-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Minh Thắng Books"
                      defaultValue="(Minh Thắng Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Minh Thắng Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-mintbooks">
                    <input
                      type="checkbox"
                      id="filter-mintbooks"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="mintbooks"
                      defaultValue="(mintbooks)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    mintbooks
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-nam">
                    <input
                      type="checkbox"
                      id="filter-nha-nam"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhã Nam"
                      defaultValue="(Nhã Nam)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhã Nam
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-hoang-gia">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-hoang-gia"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Hoàng Gia"
                      defaultValue="(Nhà sách Hoàng Gia)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Hoàng Gia
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-khang-viet">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-khang-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Khang Việt"
                      defaultValue="(Nhà sách Khang Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Khang Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-minh-thang">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-minh-thang"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Minh Thắng"
                      defaultValue="(Nhà sách Minh Thắng)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Minh Thắng
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-nguoi-tre-viet">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-nguoi-tre-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Người Trẻ Việt"
                      defaultValue="(Nhà sách Người Trẻ Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Người Trẻ Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-thanh-nien">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-thanh-nien"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Thanh Niên"
                      defaultValue="(Nhà sách Thanh Niên)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Thanh Niên
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-tri-thuc-tre">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-tri-thuc-tre"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Tri thức trẻ"
                      defaultValue="(Nhà sách Tri thức trẻ)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Tri thức trẻ
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-sach-tri-thuc-tre-books">
                    <input
                      type="checkbox"
                      id="filter-nha-sach-tri-thuc-tre-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà sách Tri thức trẻ books"
                      defaultValue="(Nhà sách Tri thức trẻ books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà sách Tri thức trẻ books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nha-xuat-ban-hoi-nha-van">
                    <input
                      type="checkbox"
                      id="filter-nha-xuat-ban-hoi-nha-van"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Nhà xuất bản Hội Nhà Văn"
                      defaultValue="(Nhà xuất bản Hội Nhà Văn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Nhà xuất bản Hội Nhà Văn
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-nxb-van-hoc">
                    <input
                      type="checkbox"
                      id="filter-nxb-van-hoc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="NXB Văn học"
                      defaultValue="(NXB Văn học)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    NXB Văn học
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-phuc-minh">
                    <input
                      type="checkbox"
                      id="filter-phuc-minh"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Phúc Minh"
                      defaultValue="(Phúc Minh)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Phúc Minh
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-quang-van">
                    <input
                      type="checkbox"
                      id="filter-quang-van"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Quảng Văn"
                      defaultValue="(Quảng Văn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Quảng Văn
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-quoc-hoc">
                    <input
                      type="checkbox"
                      id="filter-quoc-hoc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Quốc học"
                      defaultValue="(Quốc học)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Quốc học
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-tac-gia">
                    <input
                      type="checkbox"
                      id="filter-tac-gia"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Tác giả"
                      defaultValue="(Tác giả)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tác giả
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-tan-viet">
                    <input
                      type="checkbox"
                      id="filter-tan-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Tân Việt"
                      defaultValue="(Tân Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tân Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-tri-thuc-tre-books">
                    <input
                      type="checkbox"
                      id="filter-tri-thuc-tre-books"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Tri Thức Trẻ Books"
                      defaultValue="(Tri Thức Trẻ Books)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Tri Thức Trẻ Books
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-tri-tue">
                    <input
                      type="checkbox"
                      id="filter-tri-tue"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Trí Tuệ"
                      defaultValue="(Trí Tuệ)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Trí Tuệ
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-tri-viet">
                    <input
                      type="checkbox"
                      id="filter-tri-viet"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Trí Việt"
                      defaultValue="(Trí Việt)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Trí Việt
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="200.000đ"
              >
                <span>
                  <label htmlFor="filter-trung-tam-nghien-cuu-quoc-hoc">
                    <input
                      type="checkbox"
                      id="filter-trung-tam-nghien-cuu-quoc-hoc"
                      data-group="Hãng"
                      data-field="vendor"
                      data-text="Trung tâm Nghiên cứu Quốc học"
                      defaultValue="(Trung tâm Nghiên cứu Quốc học)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Trung tâm Nghiên cứu Quốc học
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </aside>
        {/* LỌC TAG 1 */}
        {/* LỌC TAG 2 */}
        <aside className="aside-item filter-tag-style-1">
          <div className="aside-title module-header">
            <h2 className="title-head module-title sidebar-title">
              <a href="javascript:;">
                <span>Độ tuổi</span>
              </a>
            </h2>
          </div>
          <div className="module-content aside-content filter-group">
            <ul>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="Người lớn"
              >
                <span>
                  <label htmlFor="filter-nguoi-lon">
                    <input
                      type="checkbox"
                      id="filter-nguoi-lon"
                      data-group="tag2"
                      data-field="variants.title"
                      data-text="Người lớn"
                      defaultValue="(Người lớn)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Người lớn
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="Thiếu nhi"
              >
                <span>
                  <label htmlFor="filter-thieu-nhi">
                    <input
                      type="checkbox"
                      id="filter-thieu-nhi"
                      data-group="tag2"
                      data-field="variants.title"
                      data-text="Thiếu nhi"
                      defaultValue="(Thiếu nhi)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thiếu nhi
                  </label>
                </span>
              </li>
              <li
                className="filter-item filter-item--check-box filter-item--green"
                title="Thiếu niên"
              >
                <span>
                  <label htmlFor="filter-thieu-nien">
                    <input
                      type="checkbox"
                      id="filter-thieu-nien"
                      data-group="tag2"
                      data-field="variants.title"
                      data-text="Thiếu niên"
                      defaultValue="(Thiếu niên)"
                      data-operator="OR"
                    />
                    <i className="fa" />
                    Thiếu niên
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      {/* FEATURE PRODUCTS */}
      <div className="sidebar-item sidebar-menu sidebar-collection-menu">
        <div className="module-header">
          <h2 className="title-head module-title sidebar-title">
            <a href="javascript:;">
              <span>Sản phẩm bán chạy</span>
            </a>
          </h2>
        </div>
        <div className="sidebar-menu-content module-content padding-0">
          <div
            className="collection-sidebar-items owl-carousel owl-theme owl-loaded owl-drag"
            data-lg-items={1}
            data-md-items={1}
            data-sm-items={1}
            data-xs-items={1}
            data-xxs-items={1}
          >
            {/* ADD DIV */}
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 466,
                }}
              >
                <div className="owl-item active" style={{ width: 233 }}>
                  <div className="item">
                    <div className="product-item product-sidebar">
                      <a
                        className="product-image"
                        href="/ho-xuan-huong-tieng-vong"
                        title="Hồ Xuân Hương tiếng vọng"
                      >
                        <img
                          className="img-responsive"
                          src="//bizweb.dktcdn.net/thumb/small/100/370/339/products/ho-xuan-huong-tieng-vong.jpg?v=1669608992000"
                          alt="Hồ Xuân Hương tiếng vọng"
                        />
                      </a>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a
                            href="/ho-xuan-huong-tieng-vong"
                            title="Hồ Xuân Hương tiếng vọng"
                          >
                            <span>Hồ Xuân Hương tiếng vọng</span>
                          </a>
                        </h3>
                        <div className="price-box price-loop-style res-item">
                          <span className="special-price">
                            <span className="price">172.000₫</span>
                          </span>
                          <span className="old-price">
                            <span className="price">215.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-item product-sidebar">
                      <a
                        className="product-image"
                        href="/napoleon-bonaparte"
                        title="Napoléon Bonaparte"
                      >
                        <img
                          className="img-responsive"
                          src="//bizweb.dktcdn.net/thumb/small/100/370/339/products/images.jpg?v=1623140283000"
                          alt="Napoléon Bonaparte"
                        />
                      </a>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a
                            href="/napoleon-bonaparte"
                            title="Napoléon Bonaparte"
                          >
                            <span>Napoléon Bonaparte</span>
                          </a>
                        </h3>
                        <div className="price-box price-loop-style res-item">
                          <span className="special-price">
                            <span className="price">472.000₫</span>
                          </span>
                          <span className="old-price">
                            <span className="price">590.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-item product-sidebar">
                      <a
                        className="product-image"
                        href="/chu-be-ti-hon"
                        title="Chú bé tí hon"
                      >
                        <img
                          className="img-responsive"
                          src="//bizweb.dktcdn.net/thumb/small/100/370/339/products/chu-be-ti-hon.jpg?v=1582693899637"
                          alt="Chú bé tí hon"
                        />
                      </a>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a href="/chu-be-ti-hon" title="Chú bé tí hon">
                            <span>Chú bé tí hon</span>
                          </a>
                        </h3>
                        <div className="price-box price-loop-style res-item">
                          <span className="special-price">
                            <span className="price">29.400₫</span>
                          </span>
                          <span className="old-price">
                            <span className="price">42.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 233 }}>
                  <div className="item">
                    <div className="product-item product-sidebar">
                      <a
                        className="product-image"
                        href="/co-be-quang-khan-do"
                        title="Cô bé quàng khăn đỏ"
                      >
                        <img
                          className="img-responsive"
                          src="//bizweb.dktcdn.net/thumb/small/100/370/339/products/co-be-quang-khan-do.jpg?v=1582693785597"
                          alt="Cô bé quàng khăn đỏ"
                        />
                      </a>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a
                            href="/co-be-quang-khan-do"
                            title="Cô bé quàng khăn đỏ"
                          >
                            <span>Cô bé quàng khăn đỏ</span>
                          </a>
                        </h3>
                        <div className="price-box price-loop-style res-item">
                          <span className="special-price">
                            <span className="price">29.400₫</span>
                          </span>
                          <span className="old-price">
                            <span className="price">42.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-item product-sidebar">
                      <a
                        className="product-image"
                        href="/ba-chu-lon-con"
                        title="Ba chú lợn con"
                      >
                        <img
                          className="img-responsive"
                          src="//bizweb.dktcdn.net/thumb/small/100/370/339/products/ba-chu-lon-con.jpg?v=1582693743287"
                          alt="Ba chú lợn con"
                        />
                      </a>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a href="/ba-chu-lon-con" title="Ba chú lợn con">
                            <span>Ba chú lợn con</span>
                          </a>
                        </h3>
                        <div className="price-box price-loop-style res-item">
                          <span className="special-price">
                            <span className="price">29.400₫</span>
                          </span>
                          <span className="old-price">
                            <span className="price">42.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* chan le = true */}
                    <div className="product-item product-sidebar">
                      <a
                        className="product-image"
                        href="/goldilocks-va-ba-chu-gau"
                        title="Goldilocks và ba chú gấu"
                      >
                        <img
                          className="img-responsive"
                          src="//bizweb.dktcdn.net/thumb/small/100/370/339/products/goldilocks-va-ba-chu-gau.jpg?v=1582693584137"
                          alt="Goldilocks và ba chú gấu"
                        />
                      </a>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a
                            href="/goldilocks-va-ba-chu-gau"
                            title="Goldilocks và ba chú gấu"
                          >
                            <span>Goldilocks và ba chú&nbsp;gấu</span>
                          </a>
                        </h3>
                        <div className="price-box price-loop-style res-item">
                          <span className="special-price">
                            <span className="price">29.400₫</span>
                          </span>
                          <span className="old-price">
                            <span className="price">42.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev">
                <i className="fa fa-angle-left" />
              </div>
              <div className="owl-next">
                <i className="fa fa-angle-right" />
              </div>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </div>
    </aside>
  );
}
