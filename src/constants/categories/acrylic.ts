import { Category } from "@/types";

export const acrylic: Category = {
  title: "Acrylic",
  services: [
    {
      title: "Full Set",
      subServices: [{ title: "Gel Color", price: 80, pricePlus: true }],
    },
    {
      title: "Refill",
      subServices: [{ title: "Gel Color", price: 70, pricePlus: true }],
    },
  ],
  addOns: [
    { title: "Acrylic Removal", price: 10, bold: true },
    { title: "Dip Removal", price: 5 },
    { title: "BIAB Removal", price: 5 },
    { title: "Gel-X Removal", price: 5 },

    { title: "Cat Eye", price: 10 },
    { title: "French Tips", price: 15 },
    { title: "Chrome", price: 15 },
    { title: "Ombre", price: 20 },
  ],
};
