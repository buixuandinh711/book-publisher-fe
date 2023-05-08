import { BookCarousel } from "@/components/BookCarousel";
import { BookCartProps } from "@/components/BookCart";
import useSWR from "swr";

const relatedBooks: BookCartProps[] = [];

export function RelatedBook({ id }: { id: number }) {
  const { data, error } = useSWR<BookCartProps[]>(
    `http://${process.env.NEXT_PUBLIC_HOST}/books/relate/${id}`,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );

  return (
    <div className="w-full float-left mb-8 overflow-hidden">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative px-4">
            <div className="w-full float-left">
              <BookCarousel
                header={"Sản phẩm liên quan"}
                booksList={error || !data ? [] : data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
