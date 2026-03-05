import { Category } from "@/types";

export const dippingPowder: Category = {
  title: "Dip Powder",
  description:
    "Experience vibrant, long-lasting color with our Dip Powder Nails. Enjoy 3-4 weeks of flawless, chip-free nails, all without UV light. Choose from a refined range of shades for durable, elegant nails.",
  services: [
    {
      title: "Dip Powder",
      price: 50,
      pricePlus: true,
    },
  ],
  addOns: [
    { title: "Dip Removal", price: 5, bold: true },
    { title: "BIAB Removal", price: 10 },
    { title: "Gel-X Removal", price: 10 },
    { title: "Acrylic Removal", price: 15 },

    { title: "French Tips", price: 10 },
    { title: "Cat Eye", price: 15 },
    { title: "Extension", price: 15 },
    { title: "Ombre", price: 20 },
    { title: "Chrome", price: 20 },
  ],
};
