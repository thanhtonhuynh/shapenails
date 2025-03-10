import { Category } from "@/types";

export const acrylic: Category = {
  title: "Acrylic",
  description:
    "These extensions are strong, durable, and perfect for bold, dramatic shapes. They provide a sturdy base and can last 3-4 weeks with regular refills. Thicker than other options, they offer excellent longevity and versatility in shaping, from natural to more artistic styles. Though they can be harder on natural nails, they are ideal for those seeking a long-lasting, defined look.",
  services: [
    {
      title: "Full Set",
      subServices: [
        { title: "With Regular Color", price: 55, pricePlus: true },
        { title: "With Gel Color", price: 65, pricePlus: true },
      ],
    },
    {
      title: "Refill",
      subServices: [
        { title: "With Regular Color", price: 45, pricePlus: true },
        { title: "With Gel Color", price: 55, pricePlus: true },
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
    { title: "French Tips", price: 10 },
    { title: "Ombre", price: 15 },
    { title: "Chrome", price: 15 },
  ],
};
