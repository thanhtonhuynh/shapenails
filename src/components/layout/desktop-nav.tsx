import { navItems } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

export function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-1">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button asChild variant={"link"}>
              <Link href={item.href} className="text-sm uppercase">
                {item.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
