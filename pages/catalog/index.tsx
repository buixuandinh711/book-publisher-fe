import { BookCartProps } from "@/components/BookCart";
import { BreadScumb } from "@/components/BreadCrumb";
import {
  CatalogMain,
  CatalogMainProps,
} from "@/components/catalog/CatalogMain";
import { CatalogSideBar } from "@/components/catalog/CatalogSideBar";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Catalog(props: CatalogMainProps) {
  return (
    <>
      <BreadScumb />
      <section className="w-full float-left pt-8">
        <div className="container">
          <div className="-mx-4">
            <CatalogSideBar />
            <CatalogMain {...props} />
          </div>
        </div>
      </section>
    </>
  );
}

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
      `http://${process.env.NEXT_PUBLIC_HOST}/books?${query}`
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
