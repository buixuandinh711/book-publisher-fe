import { BreadScumb } from "@/components/BreadCrumb";
import { CartModal } from "@/components/CartModal";
import { CatalogMain, CatalogMainProps } from "@/components/catalog/CatalogMain";
import { CatalogSideBar, CatalogSideBarProps } from "@/components/catalog/CatalogSideBar";
import { parsedUrlQueryToURLSearchParams } from "@/utils/utils";
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
      <section className="w-full pt-8">
        <div className="container">
          <div className="flex">
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
  {
    slug: string[];
    page: string;
  }
> = async (
  context: GetServerSidePropsContext<{
    slug?: string[];
    page?: string;
  }>
) => {
  const { slug, ...queryParams } = context.query;

  let category = "";

  if (slug !== undefined) {
    if (slug.length !== 1 || !availablePage.includes(slug[0])) {
      return {
        notFound: true,
      };
    }

    category = "/" + slug[0];
  }

  const query = parsedUrlQueryToURLSearchParams(queryParams);

  try {
    const bookPromise = fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books${category}?${query}`);

    const bookGenresPromise = fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books/genres`);

    const [booksRes, bookGenres] = await Promise.all([bookPromise, bookGenresPromise]);

    if (!booksRes.ok || !bookGenres.ok) {
      throw new Error("Failed to load data");
    }

    const [booksData, bookGenresData] = await Promise.all([booksRes.json(), bookGenres.json()]);

    return {
      props: {
        catalogMainProps: {
          booksList: booksData.results,
          currentPage: parseInt(booksData.currentPage),
          totalPages: parseInt(booksData.totalPages),
        },
        catalogSideBarProps: {
          genres: bookGenresData,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
