import { Category } from "@/types";

export const acrylic: Category = {
  title: "Acrylic",
  services: [
    {
      title: "Full Set",
      subServices: [
        { title: "Powder Color", price: 70, pricePlus: true },
        { title: "Gel Color", price: 75, pricePlus: true },
      ],
    },
    {
      title: "Refill",
      subServices: [
        { title: "Powder Color", price: 50, pricePlus: true },
        { title: "Gel Color", price: 60, pricePlus: true },
      ],
    },
  ],
  addOns: [
    { title: "Acrylic Removal", price: 10, bold: true },
    { title: "Dip Removal", price: 5 },
    { title: "BIAB Removal", price: 5 },
    { title: "Gel-X Removal", price: 5 },

    { title: "Nail Art (Per Nail)", price: 5 },
    { title: "Repair (Per Nail)", price: 5 },
    { title: "Cat Eye", price: 10 },
    { title: "French Tips", price: 10 },
    { title: "Ombre", price: 15 },
    { title: "Chrome", price: 15 },
  ],
};
