import { Category } from "@/types";

export const biabGel: Category = {
  title: "BIAB - Builder in a Bottle",
  description:
    "A high-performance, builder gel designed to reinforce and protect natural nails. BIAB acts as both a strengthening base and a builder, promoting natural nail growth while preventing breakage and peeling. Its self-leveling formula creates a flawless, smooth finish with a natural-looking thickness, making it perfect for clients who prefer a durable yet flexible overlay. BIAB is ideal for those seeking long-lasting, chip-resistant wear with a glossy or matte finish. It can be worn alone for a natural look or as a base for gel polish, ensuring stronger, healthier nails over time.",
  services: [
    {
      title: "BIAB",
      price: 53,
      pricePlus: true,
    },
    {
      title: "Refill",
      price: 43,
      pricePlus: true,
    },
  ],
  addOns: [
    { title: "BIAB Removal", price: 5, bold: true },
    { title: "Dip Removal", price: 5 },
    { title: "Gel-X Removal", price: 5 },
    { title: "Acrylic Removal", price: 10 },

    { title: "Nail Art (Per Nail)", price: 5 },
    { title: "Repair (Per Nail)", price: 5 },
    { title: "Chrome", price: 15 },
    { title: "French Tips", price: 10 },
  ],
};
