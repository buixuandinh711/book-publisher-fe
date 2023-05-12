import { GetServerSideProps } from "next";
import Catalog from ".";
import { BookCartProps } from "@/components/BookCart";

export default Catalog;

export const getServerSideProps: GetServerSideProps<{
  booksList: BookCartProps[];
}> = async () => {
  let data;

  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_HOST}/books/popular`
    );
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      booksList: data.results,
    },
  };
};
