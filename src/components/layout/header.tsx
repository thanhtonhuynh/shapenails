import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-claybrown sticky top-5 z-50 m-4 flex h-16 items-center justify-between rounded-xl border p-4 shadow-sm">
      <Logo />
      <DesktopNav />
    </header>
  );
}
