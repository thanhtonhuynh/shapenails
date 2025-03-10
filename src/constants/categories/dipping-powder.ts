import { Category } from "@/types";

export const dippingPowder: Category = {
  title: "Dipping Powder",
  description:
    "Experience vibrant, long-lasting color with our Dip Powder Nails. Enjoy 3-4 weeks of flawless, chip-free nails, all without UV light. Choose from a refined range of shades for durable, elegant nails.",
  services: [
    {
      title: "Dipping Powder",
      price: 47,
    },
  ],
  addOns: [
    { title: "Dip Removal", price: 3, bold: true },
    { title: "BIAB Removal", price: 5 },
    { title: "Gel-X Removal", price: 5 },
    { title: "Acrylic Removal", price: 10 },

    { title: "Nail Art (Per Nail)", price: 5 },
    { title: "Repair (Per Nail)", price: 5 },
    { title: "Extension", price: 10 },
    { title: "French Tips", price: 10 },
    { title: "Ombre", price: 15 },
    { title: "Chrome", price: 15 },
  ],
};
