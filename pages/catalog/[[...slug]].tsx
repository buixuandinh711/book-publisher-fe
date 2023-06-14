import { BreadScumb } from "@/components/BreadCrumb";
import { CartModal } from "@/components/CartModal";
import { CatalogMain, CatalogMainProps } from "@/components/catalog/CatalogMain";
import { CatalogSideBar, CatalogSideBarProps } from "@/components/catalog/CatalogSideBar";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Catalog({
  catalogMainProps,
  catalogSideBarProps,
}: {
  catalogMainProps: CatalogMainProps;
  catalogSideBarProps: CatalogSideBarProps;
}) {
  return (
    <>
      <BreadScumb />
      <section className="w-full float-left pt-8">
        <div className="container">
          <div className="-mx-4">
            <CatalogSideBar {...catalogSideBarProps} />
            <CatalogMain {...catalogMainProps} />
          </div>
        </div>
      </section>
      <CartModal />
    </>
  );
}

const availablePage = ["new", "classic", "discount", "popular"];

export const getServerSideProps: GetServerSideProps<
  {
    catalogMainProps: CatalogMainProps;
    catalogSideBarProps: CatalogSideBarProps;
  },
  { slug: string[]; page: string }
> = async (context: GetServerSidePropsContext<{ slug: string[]; page: string }>) => {
  let data;

  const { page, slug } = context.query;

  let category = "";

  if (slug !== undefined) {
    if (slug.length !== 1 || !availablePage.includes(slug[0])) {
      return {
        notFound: true,
      };
    }

    category = "/" + slug[0];
  }

  let query = "";

  if (page && typeof page === "string") {
    query = new URLSearchParams({ page }).toString();
  }

  try {
    const bookPromise = fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books${category}?${query}`);

    const bookCountPromise = fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books/category-count`);

    const [booksRes, bookCountRes] = await Promise.all([bookPromise, bookCountPromise]);

    if (!booksRes.ok || !bookCountRes.ok) {
      throw new Error("Failed to load data");
    }

    const [booksData, bookCountData] = await Promise.all([booksRes.json(), bookCountRes.json()]);

    return {
      props: {
        catalogMainProps: {
          booksList: booksData.results,
          currentPage: parseInt(booksData.currentPage),
          totalPages: parseInt(booksData.totalPages),
        },
        catalogSideBarProps: bookCountData,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    notFound: true,
  };
};
