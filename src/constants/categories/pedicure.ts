import { Category } from "@/types";

export const pedicure: Category = {
  title: "Pedicure",
  services: [
    {
      title: "Express Pedicure",
      description:
        "A quick yet refreshing pedicure that includes a warm soak, nail trimming, shaping, cuticle cleaning, moisturizing lotion, and your choice of polish for a clean and polished finish. Perfect for those on the go!",
      price: 32,
      addOns: [
        { title: "Gel Removal", price: 5 },
        { title: "French Tips Gel", price: 10 },
        { title: "Dazzle Dry (Recommended)", price: 10 },
        { title: "Cat Eye", price: 10 },
        { title: "Chrome", price: 15 },
        { title: "Gel Color", price: 15 },
        { title: "Acrylic Removal", price: 25 },
        { title: "Acrylic 2 Big Toes", price: 20 },
        { title: "Full Set Acrylic Toe", price: 60 },
      ],
    },
    {
      title: "Basic Pedicure",
      description:
        "Experience the ultimate in foot care with our Basic Pedicure. This treatment includes a warm soak, nail trimming, shaping, cuticle care, gentle exfoliation, and callus removal to smooth and soften rough, dry heel. A soothing towel wrap and relaxing lotion massage follow, leaving your feet feeling refreshed and smooth. Finally, choose your preferred polish color for a perfectly polished, well-groomed finish.",
      price: 40,
      addOns: [
        { title: "Gel Removal", price: 5 },
        { title: "French Tips Gel", price: 10 },
        { title: "Dazzle Dry (Recommended)", price: 10 },
        { title: "Cat Eye", price: 10 },
        { title: "Chrome", price: 15 },
        { title: "Gel Color", price: 15 },
        { title: "Acrylic Removal", price: 25 },
        { title: "Acrylic 2 Big Toes", price: 20 },
        { title: "Full Set Acrylic Toe", price: 60 },
      ],
    },
    {
      title: "Deluxe Pedicure",
      description:
        "Relax with our luxurious treatment designed for ultimate pampering. Begin with a soothing aromatic soak, followed by expert nail care, cuticle treatment, and gentle exfoliation. A nourishing hydrating mask replenishes moisture, then a warm towel wrap comforts and softens your feet. Enjoy a calming hot stone massage to release tension, finishing with your choice of polish for perfectly rejuvenated feet. With premium products and extra time dedicated to each step, this service offers the perfect spa experience.",
      price: 60,
      addOns: [
        { title: "Gel Removal", price: 5 },
        { title: "French Tips Gel", price: 10 },
        { title: "Dazzle Dry (Recommended)", price: 10 },
        { title: "Cat Eye", price: 10 },
        { title: "Chrome", price: 15 },
        { title: "Gel Color", price: 15 },
        { title: "Acrylic Removal", price: 25 },
        { title: "Acrylic 2 Big Toes", price: 20 },
        { title: "Full Set Acrylic Toe", price: 60 },
      ],
    },
    {
      title: "Premium Pedicure",
      price: 70,
      description:
        "SPECIAL BONUS: Complimentary Dazzle Dry Polish Included.\nElevating the Deluxe Pedicure, our Premium Pedicure delivers an extended, indulgent experience using the finest skincare products and techniques. Enjoy a longer, more soothing massage enhanced with candle massage oil, designed to deeply nourish the skin and calm the senses. This luxurious treatment ensures ultimate relaxation and visibly smoother, healthier feet.",
      pricePlus: true,
      addOns: [
        { title: "French Tips Gel", price: 10 },
        { title: "Cat Eye", price: 10 },
        { title: "Chrome", price: 15 },
        { title: "Gel Color", price: 15 },
        { title: "Acrylic Removal", price: 25 },
        { title: "Acrylic 2 Big Toes", price: 20 },
        { title: "Full Set Acrylic Toe", price: 60 },
      ],
    },
    {
      title: "Toe Polish Refresh",
      description:
        "A fast service to remove old polish and apply a fresh coat of your choice, with optional nail shaping. Perfect for a quick update without a full pedicure.",
      price: 20,
      pricePlus: true,
      addOns: [
        { title: "Gel Removal", price: 3 },
        { title: "French Tips Gel", price: 10 },
        { title: "Dazzle Dry (Recommended)", price: 10 },
        { title: "Cat Eye", price: 10 },
        { title: "Chrome", price: 15 },
        { title: "Gel Color", price: 13 },
        { title: "Acrylic Removal", price: 25 },
        { title: "Acrylic 2 Big Toes", price: 20 },
      ],
    },
    {
      title: "Cutting Toe Nails",
      description: "Keep your toenails clean and neat with our quick trimming service.",
      price: 15,
      pricePlus: true,
    },
  ],
};
