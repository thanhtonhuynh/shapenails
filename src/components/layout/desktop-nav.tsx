import { navItems } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

export function DesktopNav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex lg:gap-4 xl:gap-8">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button asChild variant={"link"} className="px-2 uppercase lg:px-3">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
