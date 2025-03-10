import Link from "next/link";

export function Logo() {
  return (
    <Link className="font-playfair-display flex flex-row items-center text-xl uppercase" href="/">
      <span className="border-deepespresso -rotate-90 rounded-l-3xl rounded-r-[100px] border border-dashed px-1.5 py-1 text-sm font-medium">
        the
      </span>
      <span className="font-bold tracking-tighter">Shape Nails</span>
    </Link>
  );
}
