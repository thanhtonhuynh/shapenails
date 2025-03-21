import { cn } from "@/lib/utils";

type Props = {
  color: string;
  title: string;
  position: "left" | "right";
};

export function ServiceHeading({ color, title, position }: Props) {
  return (
    <h2
      className={cn(
        `bg-${color} inline-flex w-fit px-8 py-4 tracking-wider`,
        position === "left" && "self-start rounded-tl-3xl rounded-br-3xl",
        position === "right" && "self-end rounded-tr-3xl rounded-bl-3xl",
      )}
    >
      {title}
    </h2>
  );
}
