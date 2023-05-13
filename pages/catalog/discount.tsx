import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Catalog from ".";
import { CatalogMainProps } from "@/components/catalog/CatalogMain";

export default Catalog;

export const getServerSideProps: GetServerSideProps<
  CatalogMainProps,
  { page: string }
> = async (context: GetServerSidePropsContext<{ page: string }>) => {
  let data;

  const { page } = context.query;

  let query = "";

  if (page && typeof page === "string") {
    query = new URLSearchParams({ page }).toString();
  }

  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_HOST}/books/discount?${query}`
    );
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      booksList: data.results,
      currentPage: parseInt(data.currentPage),
      totalPages: parseInt(data.totalPages),
    },
  };
};
