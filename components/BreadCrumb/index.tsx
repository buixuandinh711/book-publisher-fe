import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BreadScumb() {
  return (
    <section className="w-full float-left border-b border-b-gray-300">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative min-h-[1px] px-4">
            <ul
              className="w-full float-left py-5 m-0 list-none flex items-center"
              itemScope
              itemType="http://data-vocabulary.org/Breadcrumb"
            >
              <li className="inline-flex items-center justify-start">
                <a itemProp="url" href="/" className="text-red-700">
                  <span itemProp="title" className="inline-block text-sm">
                    Trang chủ
                  </span>
                </a>
              </li>
              <li className="inline-flex items-center justify-start">
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="px-[6px] text-gray-300 relative w-3 inline-flex justify-center items-center"
                />
                <strong className="font-bold text-red-700">
                  <span itemProp="title" className="inline-block text-sm">
                    Tất cả sản phẩm
                  </span>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
