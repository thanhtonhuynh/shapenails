import { Category } from "@/types";

export const gelManicure: Category = {
  title: "Gel Manicure",
  services: [
    {
      title: "Gel Manicure",
      description:
        "Treat your nails to a flawless, long-lasting gel manicure! Enjoy a smooth, cured under UV or LED light for a glossy finish that stays perfect for up to 2-3 weeks. This service includes nail shaping, cuticle care, and a soothing hand massage, giving your nails the love they deserve!",
      price: 37,
      pricePlus: true,
    },
    {
      title: "Gel Polish Refresh",
      description:
        "Refresh your look with a quick gel color change! This service includes removing your old gel polish and applying a fresh, vibrant color of your choice. Perfect for those who want to switch things up without a full manicure.",
      price: 25,
      pricePlus: true,
    },
  ],
  addOns: [
    { title: "BIAB Removal", price: 13 },
    { title: "Dip Removal", price: 13 },
    { title: "Gel-X Removal", price: 13 },
    { title: "Acrylic Removal", price: 18 },

    { title: "Nail Art (Per Nail)", price: 5 },
    { title: "Cat Eye", price: 5 },
    { title: "French Tips", price: 10 },
    { title: "Chrome", price: 15 },
  ],
};
