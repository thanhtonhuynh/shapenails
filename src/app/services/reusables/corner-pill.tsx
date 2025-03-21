import { cn } from "@/lib/utils";

type Props = {
  position: "left" | "right";
  color: string;
};

export function CornerPill({ position, color }: Props) {
  return (
    <div
      className={cn(
        "absolute bottom-0 size-10 transition duration-300 group-hover:scale-125",
        position === "right" && "right-0 rounded-tl-3xl rounded-br-3xl",
        position === "left" && "left-0 rounded-tr-3xl rounded-bl-3xl",
        `bg-${color}`,
      )}
    />
  );
}
