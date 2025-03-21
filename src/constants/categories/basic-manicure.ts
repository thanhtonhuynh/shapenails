import { Category } from "@/types";

export const basicManicure: Category = {
  title: "Basic Manicure",
  services: [
    {
      title: "Regular Manicure",
      description:
        "A classic manicure including nail shaping, cuticle care, hand soak, and a relaxing massage. Finished with a regular polish color of your choice for a sleek, natural look. Perfect for a quick, elegant finish with a polished touch.",
      price: 23,
    },
    {
      title: "Dazzle Dry Manicure",
      description:
        "A fast-drying, long-lasting manicure with Dazzle Dry polish. Includes nail shaping, cuticle care, hand soak, and a relaxing massage. Delivers a shiny, durable finish without UV light, an eco-friendly option. However, the longevity can vary depending on factors like your daily activities and nail care. Simply use a cotton pad with acetone to remove Dazzle Dry, just like regular polish—no need for wraps or nail drilling.",
      price: 33,
    },
    {
      title: "Polish Refresh",
      description:
        "A fast service to remove old polish and apply a fresh coat of your choice, with optional nail shaping. Perfect for a quick update without a full manicure.",
      price: 12,
    },
    {
      title: "Cutting Nails",
      description:
        "A simple and efficient service to trim and shape your nails to your desired length and style. Ideal for maintaining neat, healthy nails.",
      price: 10,
    },
  ],
  addOns: [
    { title: "Gel Removal", price: 5 },
    { title: "BIAB Removal", price: 15 },
    { title: "Dip Removal", price: 15 },
    { title: "Gel-X Removal", price: 15 },
    { title: "Acrylic Removal", price: 20 },
    { title: "French Tips", price: 8 },
  ],
};
