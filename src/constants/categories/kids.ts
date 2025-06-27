import { Category } from "@/types";

export const kidServices: Category = {
  title: "Kids' Services (Under 12)",
  // description: "*Cuticle care is not included in children's services for a gentle experience.",
  services: [
    {
      title: "Manicure",
      subServices: [
        { title: "Regular Color Change", price: 10, pricePlus: true },
        { title: "Gel Color Change", price: 20, pricePlus: true },
        { title: "Regular Manicure", price: 13, pricePlus: true },
        { title: "Gel Manicure", price: 23, pricePlus: true },
      ],
    },
    {
      title: "Pedicure",
      subServices: [
        { title: "Regular Color Change", price: 10, pricePlus: true },
        { title: "Gel Color Change", price: 20, pricePlus: true },
        { title: "Regular Pedicure", price: 30, pricePlus: true },
        { title: "Gel Pedicure", price: 40, pricePlus: true },
      ],
    },
  ],
};
