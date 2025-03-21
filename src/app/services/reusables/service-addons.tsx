import { cn } from "@/lib/utils";
import { AddOn } from "@/types";

type Props = {
  addOns: AddOn[] | undefined;
  color: string;
};

export function ServiceAddOns({ addOns, color }: Props) {
  return (
    <div className="mt-2 space-y-3">
      <h6 className={`border-${color} border-b font-bold uppercase`}>Add-ons</h6>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4">
        {addOns &&
          addOns.map((item, i) => (
            <div key={i} className="flex justify-between gap-4 text-sm">
              <span className={cn("font-medium", item.bold && "font-bold")}>{item.title}</span>
              <span>$ {item.price}+</span>
            </div>
          ))}
      </div>
    </div>
  );
}
