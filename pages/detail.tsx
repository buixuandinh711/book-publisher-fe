import { BreadScumb } from "@/components/BreadCrumb";
import { MainContent } from "@/components/detail/MainContent";

export default function Catalog() {
  return (
    <>
      <BreadScumb />
      <div className="w-full float-left pt-8">
        <MainContent />
      </div>
    </>
  );
}
