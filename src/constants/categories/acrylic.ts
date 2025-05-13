import { Category } from "@/types";

export const acrylic: Category = {
  title: "Acrylic",
  description:
    "Achieve the perfect balance of durability and style with our Acrylic Nails with Regular and Gel Polish service. After creating a strong acrylic base, we apply your choice of either regular nail polish for a classic look or gel polish for a glossy, chip-free finish.\nWith our Acrylic Nails with Powder Color service, we will use the colored powder of your choice to create the acrylic base, eliminating the need for additional polish. This method provides a vibrant and long-lasting color from the start. After finishing, a top coat is applied to seal the nails, giving you a beautiful acrylic set that is chip-free and stays stunning for weeks. We recommend using this service instead of regular or gel polish, as the powder color helps maintain a better shape and lasts longer.",
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
