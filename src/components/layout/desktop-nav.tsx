import { navItems } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

export function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button asChild variant={"link"} className="px-3 uppercase">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
