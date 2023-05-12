import { BookCartProps } from "@/components/BookCart";
import { BreadScumb } from "@/components/BreadCrumb";
import {
  CatalogMain,
  CatalogMainProps,
} from "@/components/catalog/CatalogMain";
import { CatalogSideBar } from "@/components/catalog/CatalogSideBar";
import { GetServerSideProps } from "next";

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
  CatalogMainProps
> = async () => {
  let data;

  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books`);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: data,
  };
};
