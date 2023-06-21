import { MainBar } from "./MainBar";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <header className="float-left w-full">
      <MainBar />
      <HeaderMenu />
    </header>
  );
}
