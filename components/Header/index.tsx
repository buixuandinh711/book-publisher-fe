import { MainBar } from "./MainBar";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <header className="w-full">
      <MainBar />
      <HeaderMenu />
    </header>
  );
}
