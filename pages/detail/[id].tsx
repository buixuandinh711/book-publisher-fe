import { BreadScumb } from "@/components/BreadCrumb";
import { BookOverview } from "@/components/detail/BookOverview";
import { DetailMain, DetailMainProps } from "@/components/detail/DetailMain";
import { RecentBook } from "@/components/detail/RecentBook";
import { RelatedBook } from "@/components/detail/RelatedBook";
import { GetServerSideProps } from "next";

export default function Catalog({ book }: { book: DetailMainProps }) {
  console.log(book);

  return (
    <>
      <BreadScumb />
      <div className="w-full float-left pt-8">
        <DetailMain {...book} />
        <BookOverview />
        <RelatedBook />
        <RecentBook />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  book: DetailMainProps;
}> = async (context) => {
  const id = context.params!.id;
  const res = await fetch(`http://127.0.0.1:5000/books/detail/${id}`);
  const data = await res.json();

  return {
    props: {
      book: data,
    },
  };
};
