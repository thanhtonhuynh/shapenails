import { Category } from "@/types";

export const kidServices: Category = {
  title: "Kids' Services (Under 12)",
  description: "*Cuticle care is not included in children's services for a gentle experience.",
  services: [
    {
      title: "Manicure",
      subServices: [
        { title: "Regular Color Change", price: 10 },
        { title: "Gel Color Change", price: 20 },
        { title: "Regular Manicure", price: 13 },
        { title: "Gel Manicure", price: 23 },
      ],
    },
    {
      title: "Pedicure",
      subServices: [
        { title: "Regular Color Change", price: 10 },
        { title: "Gel Color Change", price: 20 },
        { title: "Regular Pedicure", price: 22 },
        { title: "Gel Pedicure", price: 32 },
      ],
    },
  ],
};
