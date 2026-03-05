import { Category } from "@/types";

export const kidServices: Category = {
  title: "Kids' Services (Under 12)",
  // description: "*Cuticle care is not included in children's services for a gentle experience.",
  services: [
    {
      title: "Dazzle Dry (recommended)",
      subServices: [
        { title: "Color Change - Hands", price: 18, pricePlus: true },
        { title: "Color Change - Toes", price: 20, pricePlus: true },
        { title: "Pedicure", price: 40, pricePlus: true },
      ],
    },
    {
      title: "Manicure",
      subServices: [
        { title: "Regular Color Change", price: 13, pricePlus: true },
        { title: "Gel Color Change", price: 25, pricePlus: true },
        { title: "Gel Manicure", price: 33, pricePlus: true },
      ],
    },
    {
      title: "Pedicure",
      subServices: [
        { title: "Regular Color Change", price: 15, pricePlus: true },
        { title: "Gel Color Change", price: 33, pricePlus: true },
        { title: "Regular Pedicure", price: 35, pricePlus: true },
        { title: "Gel Pedicure", price: 47, pricePlus: true },
      ],
    },
  ],
};
