import { BookCarousel } from "@/components/BookCarousel";
import { BookCartProps } from "@/components/BookCart";
import useSWR from "swr";

const relatedBooks: BookCartProps[] = [];

export function RelatedBook({ id }: { id: string }) {
  const { data, error } = useSWR<BookCartProps[]>(`http://${process.env.NEXT_PUBLIC_HOST}/books/relate/${id}`, (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  );

  return (
    <div className=" mb-8 w-full overflow-hidden">
      <div className="container">
        <div className="-mx-4">
          <div className="relative  w-full px-4">
            <div className=" w-full">
              <BookCarousel header={"Sản phẩm liên quan"} booksList={error || !data ? [] : data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
