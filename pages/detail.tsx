import { BreadScumb } from "@/components/BreadCrumb";
import { BookOverview } from "@/components/detail/BookOverview";
import { DetailMain } from "@/components/detail/DetailMain";
import { RecentBook } from "@/components/detail/RecentBook";
import { RelatedBook } from "@/components/detail/RelatedBook";

export default function Catalog() {
  return (
    <>
      <BreadScumb />
      <div className="w-full float-left pt-8">
        <DetailMain />
        <BookOverview />
        <RelatedBook />
        <RecentBook />
      </div>
    </>
  );
}
