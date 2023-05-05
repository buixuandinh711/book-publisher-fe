import { BookCart, BookCartProps } from "@/components/BookCart";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const newBoosList: BookCartProps[] = [
  {
    id: 1,
    name: "Tự sự một người đặc biệt",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/tu-su-mot-nguoi-dac-biet.jpg?v=1666687371933",
    originalPrice: 88000,
    discountPrice: 70400,
    discountPercent: 20,
  },
  {
    id: 2,
    name: "Truyện ngắn hay 2022",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/truyen-ngan-hay-2022.png?v=1663055389627",
    originalPrice: 120000,
    discountPrice: 96000,
    discountPercent: 20,
  },
  {
    id: 3,
    name: "Sách nặng hồn thanh nhẹ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/sac-nang-hon-thanh-nhe-bia-1.jpg?v=1669364038113",
    originalPrice: 88000,
    discountPrice: 70400,
    discountPercent: 20,
  },
  {
    id: 4,
    name: "Từ sự mất ngủ của ruồi",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/tu-su-mat-ngu-cua-ruoi.png?v=1661920070393",
    originalPrice: 66000,
    discountPrice: 52800,
    discountPercent: 20,
  },
  {
    id: 5,
    name: "Nông dân với địa chủ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/1.png?v=1661748946813",
    originalPrice: 69000,
    discountPrice: 55200,
    discountPercent: 20,
  },
  {
    id: 6,
    name: "Đới Đăng",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/370/339/products/20220722-101045.jpg?v=1658459565027",
    originalPrice: 260000,
    discountPrice: 208000,
    discountPercent: 20,
  },
];

export function MainContainer() {
  return (
    <section className="mb-8 relative  w-3/4 float-left min-h-[1px] px-4">
      <div className="w-full float-left relative mb-8">
        <img
          src="//bizweb.dktcdn.net/100/370/339/themes/744741/assets/bg_default.jpg?1632297125018"
          alt="tat-ca-san-pham"
          className="block max-w-full max-h-full h-auto align-middle"
        />
        <h1 className="hidden">Tất cả sản phẩm</h1>
      </div>
      <div className="w-full float-left">
        {/* Sort by */}
        <div className="w-full float-left mb-5">
          <div className="flex justify-end items-center w-full float-left bg-gray-100 text-red-700">
            <div
              id="sort-by"
              className="w-52 relative float-left py-[5px] px-10px text-sm text-left before:absolute before:content-['Sắp_xếp'] before:-left-12 before:top-1/2 before:-translate-y-1/2"
            >
              <div className="border border-gray-300 w-full float-left relative">
                <select className="w-full float-left h-8 borde border-transparent px-4 appearance-none bg-white outline-none">
                  <option className="valued" value="default">
                    Mặc định
                  </option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                  <option value="alpha-asc">Từ A-Z</option>
                  <option value="alpha-desc">Từ Z-A</option>
                  <option value="created-asc">Cũ đến mới</option>
                  <option value="created-desc">Mới đến cũ</option>
                </select>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full float-left">
          <section className="w-full float-left block">
            <div className="-mx-4">
              <div className="mb-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-y-8">
                {newBoosList.map((book) => (
                  <BookCart {...book} />
                ))}
              </div>
            </div>
            <div className="text-xs-right">
              <nav className="w-full float-left flex justify-center items-center">
                <ul className="inline-block pl-0 my-4 rounded-md list-none">
                  <li className="float-left inline">
                    <a
                      className="ml-0 rounded-tl-md rounded-bl-md w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href="#"
                    >
                      «
                    </a>
                  </li>
                  <li className="float-left inline">
                    <a
                      className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href=""
                    >
                      1
                    </a>
                  </li>
                  <li className="float-left inline">
                    <a
                      className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href=""
                    >
                      2
                    </a>
                  </li>
                  <li className="float-left inline">
                    <a
                      className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href=""
                    >
                      3
                    </a>
                  </li>
                  <li className="float-left inline">
                    <a
                      className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href=""
                    >
                      ...
                    </a>
                  </li>
                  <li className="float-left inline">
                    <a
                      className="-ml-[1px] w-10 h-10 text-sm border border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href=""
                    >
                      72
                    </a>
                  </li>
                  <li className="float-left inline">
                    <a
                      className="-ml-[1px] w-10 h-10 text-sm border rounded-tr-md rounded-br-md border-gray-300 p-0 flex justify-center items-center text-red-700 bg-white"
                      href=""
                    >
                      »
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
