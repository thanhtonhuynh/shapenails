import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-claybrown bg-ivory/75 sticky top-4 z-50 m-4 flex h-16 items-center justify-between rounded-xl border p-4 shadow-sm backdrop-blur-sm">
      <Logo />
      <DesktopNav />
    </header>
  );
}
