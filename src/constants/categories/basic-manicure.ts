import { Category } from "@/types";

export const basicManicure: Category = {
  title: "Basic Manicure",
  services: [
    {
      title: "Regular Manicure",
      description:
        "A classic manicure including nail shaping, cuticle care, hand soak, and a relaxing massage. Finished with a regular polish color of your choice for a sleek, natural look. Perfect for a quick, elegant finish with a polished touch.",
      price: 25,
      pricePlus: true,
    },
    {
      title: "Dazzle Dry Manicure",
      description:
        "Includes nail shaping, cuticle care, and a relaxing massage.\nDazzle Dry is a revolutionary, non-toxic nail care system that delivers the long-lasting wear of polish without the need for UV/LED lights or soaking removal.\nIt dries completely in 5 minutes, is vegan, cruelty-free, and formulated without harmful chemicals.",
      price: 33,
    },
    {
      title: "Polish Refresh",
      description:
        "A fast service to remove old polish and apply a fresh coat of your choice, with optional nail shaping. Perfect for a quick update without a full manicure.",
      price: 15,
      pricePlus: true,
    },
    {
      title: "Cutting Nails",
      description:
        "A simple and efficient service to trim and shape your nails to your desired length and style. Ideal for maintaining neat, healthy nails.",
      price: 10,
      pricePlus: true,
    },
  ],
  addOns: [
    { title: "Gel Removal", price: 5 },
    { title: "BIAB Removal", price: 15 },
    { title: "Dip Removal", price: 15 },
    { title: "Gel-X Removal", price: 15 },
    { title: "Acrylic Removal", price: 20 },
  ],
};
