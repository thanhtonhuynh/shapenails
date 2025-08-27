import { Category } from "@/types";

export const gelX: Category = {
  title: "Gel-X",
  description:
    "Discover endless possibilities with Gel-X, offering a wide range of nail lengths and beautiful shapes to suit your style. From short and natural to long and dramatic, Gel-X allows you to choose the perfect length and shape, including oval, almond, coffin, stiletto, and more. With a flawless, chip-free finish that lasts up to 3-4 weeks, Gel-X ensures your nails look stunning and perfectly shaped for weeks.",
  services: [
    {
      title: "Available sizes",
      subServices: [
        { title: "Extra Short", price: 65 },
        { title: "Short", price: 70 },
        { title: "Medium", price: 75 },
        { title: "Long", price: 90 },
      ],
    },
  ],
  addOns: [
    { title: "Gel-X Removal", price: 5, bold: true },
    { title: "Dip Removal", price: 5 },
    { title: "BIAB Removal", price: 5 },
    { title: "Acrylic Removal", price: 10 },

    { title: "Nail Art (Per Nail)", price: 5 },
    { title: "Repair (Per Nail)", price: 5 },
    { title: "Cat Eye", price: 10 },
    { title: "French Tips", price: 10 },
    { title: "Ombre", price: 15 },
    { title: "Chrome", price: 15 },
  ],
};
