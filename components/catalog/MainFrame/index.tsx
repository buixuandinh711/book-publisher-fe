import { MainContainer } from "./MainContainer";
import { SideBar } from "./SideBar";

export function MainFrame() {
  return (
    <section className="w-full float-left pt-8">
      <div className="container">
        <div className="-mx-4">
          <SideBar />
          <MainContainer />
        </div>
      </div>
    </section>
  );
}
