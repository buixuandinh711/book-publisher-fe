import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const breadScumbMapping = {
  "": { name: "Home", link: "/" },
  catalog: { name: "Catalog", link: "/catalog" },
  new: { name: "New Books", link: "/catalog/new" },
  classic: { name: "Classic Books", link: "/catalog/classic" },
  popular: { name: "Popular Books", link: "/catalog/popular" },
  discount: { name: "Discount Books", link: "/catalog/discount" },
  detail: { name: "Catalog", link: "/catalog" },
  login: { name: "Log in", link: "/account/login" },
  register: { name: "Register", link: "/account/register" },
  checkout: {name: "Checkout", link: "/checkout"}
};

const getBreadScumb = (key: string) => {
  if (key in breadScumbMapping) {
    return breadScumbMapping[key as BreasScumbKeys];
  }
  return {
    name: "Undefined",
    link: "/",
  };
};

type BreasScumbKeys = keyof typeof breadScumbMapping;

export function BreadScumb({
  current,
}: {
  current?: { name: string; link: string };
}) {
  const router = useRouter();
  const pathsWithoutQuery = router.asPath.split("?")[0];
  const paths = pathsWithoutQuery.split("/");

  return (
    <section className="w-full float-left border-b border-b-gray-300">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative min-h-[1px] px-4">
            <ul className="w-full float-left py-5 m-0 list-none flex items-center">
              {paths
                .filter(
                  (p, index) =>
                    p in breadScumbMapping &&
                    (current !== undefined || index < paths.length - 1)
                )
                .map((p, index) => {
                  const item = getBreadScumb(p);
                  return (
                    <li
                      className="inline-flex items-center justify-start"
                      key={index}
                    >
                      <Link
                        itemProp="url"
                        href={item.link}
                        className="text-red-700"
                      >
                        <span itemProp="title" className="inline-block text-sm">
                          {item.name}
                        </span>
                      </Link>
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="px-[6px] text-gray-300 relative w-3 inline-flex justify-center items-center"
                      />
                    </li>
                  );
                })}

              <li className="inline-flex items-center justify-start">
                <Link
                  itemProp="url"
                  href={
                    current !== undefined
                      ? current.link
                      : getBreadScumb(paths[paths.length - 1]).link
                  }
                  className="text-red-700"
                >
                  <strong className="font-bold text-red-700">
                    <span itemProp="title" className="inline-block text-sm">
                      {current !== undefined
                        ? current.name
                        : getBreadScumb(paths[paths.length - 1]).name}
                    </span>
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
