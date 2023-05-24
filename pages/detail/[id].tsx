import { BreadScumb } from "@/components/BreadCrumb";
import { CartModal } from "@/components/CartModal";
import { BookOverview, BookOverviewProps } from "@/components/detail/BookOverview";
import { DetailMain, DetailMainProps } from "@/components/detail/DetailMain";
import { RecentBook } from "@/components/detail/RecentBook";
import { RelatedBook } from "@/components/detail/RelatedBook";
import { GetServerSideProps } from "next";

export default function Catalog({ book }: { book: DetailMainProps & BookOverviewProps }) {
  return (
    <>
      <BreadScumb current={{ name: book.name, link: `${book.id}` }} />
      <div className="w-full float-left pt-8">
        <DetailMain {...book} />
        <BookOverview description={book.description} />
        <RelatedBook id={book.id} />
        <RecentBook />
        <CartModal />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  book: DetailMainProps & BookOverviewProps;
}> = async (context) => {
  let data = [];
  try {
    const id = context.params!.id;
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/books/detail/${id}`);

    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      book: data,
    },
  };
};
