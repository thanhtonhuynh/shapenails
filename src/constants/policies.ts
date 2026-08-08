import { Banknote, CreditCard } from "lucide-react";
import { SiApplepay, SiCashapp, SiZelle } from "react-icons/si";

export type PolicyPoint = {
  text: string;
  details?: string[];
};

export type Policy = {
  id: string;
  title: string;
  points: PolicyPoint[];
};

export const policiesLastUpdated = "August 2026";

export const paymentMethods: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { title: "Cash", icon: Banknote },
  { title: "Credit / Debit", icon: CreditCard },
  { title: "Apple Pay", icon: SiApplepay },
  { title: "Zelle", icon: SiZelle },
  { title: "Cash App", icon: SiCashapp },
];

/** Nail art is the one clause that asks the client to do something. */
export const nailArtSms = {
  href: "sms:+18579998268",
  label: "Text (857) 999-8268",
};

/** Rendered as numbered clauses, in the order they appear in docs/salon-policy.md. */
export const policies: Policy[] = [
  {
    id: "appointments",
    title: "Appointments",
    points: [
      { text: "We recommend booking in advance to ensure the best service experience." },
      {
        text: "Please arrive on time. Clients arriving more than 10 minutes late may be asked to reschedule or have their service adjusted, depending on the remaining available time.",
      },
      { text: "Walk-in clients are welcome based on salon availability." },
    ],
  },
  {
    id: "deposits",
    title: "Deposits",
    points: [
      {
        text: "A deposit of $50 or 50% of the service total may be required for:",
        details: [
          "Services totaling over $100.",
          "Services that require extended appointment time.",
          "Group appointments.",
        ],
      },
      { text: "Deposits are applied toward your final service balance." },
      {
        text: "Deposits are non-refundable, but may be transferred to another appointment if at least 24 hours’ notice is provided.",
      },
    ],
  },
  {
    id: "cancellations",
    title: "Cancellations & No-Shows",
    points: [
      {
        text: "Please provide at least 24 hours’ notice for any cancellation or appointment change.",
      },
      {
        text: "Last-minute cancellations or no-shows without notice may result in the loss of your deposit.",
      },
      { text: "Repeated no-shows may require full prepayment for future appointments." },
    ],
  },
  {
    id: "group-bookings",
    title: "Group Bookings",
    points: [
      {
        text: "For groups of 3 or more guests, please book in advance to allow proper scheduling of staff and service time.",
      },
      { text: "A $50 deposit or 50% of the total service cost may be required." },
      {
        text: "The person making the reservation is responsible for providing each guest’s service details so we can prepare accordingly.",
      },
      {
        text: "Please provide at least 48 hours’ notice for changes or cancellations to group appointments.",
      },
      {
        text: "Reducing the number of guests or cancelling at the last minute may affect the deposit.",
      },
      {
        text: "All group members are expected to arrive on time. Late arrivals may result in service adjustments based on salon availability.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment",
    points: [{ text: "Payment is due immediately after completion of services." }],
  },
  {
    id: "service-guarantee",
    title: "Service Guarantee",
    points: [
      {
        text: "If you experience any service-related issue, such as lifting, chipping, or a workmanship concern, please contact us within 7 days of your appointment.",
      },
      { text: "Complimentary repairs are provided for workmanship-related issues only." },
      {
        text: "Repairs do not apply to damage caused by accidents, improper use, or other factors beyond our control.",
      },
      { text: "No refunds are issued for completed services." },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    points: [
      {
        text: "Service prices may vary depending on nail length, shape, design complexity, and additional requests.",
      },
      {
        text: "Additional charges may apply for intricate nail art, extra length, nail repairs, or removal of gel or acrylic applied by another salon.",
      },
      {
        text: "Whenever possible, any additional charges will be discussed before the service begins.",
      },
    ],
  },
  {
    id: "nail-art",
    title: "Nail Art (Design)",
    points: [
      {
        text: "Our online booking system lists Nail Art (Design) as a $50 / 1 hour service. That price and time are a placeholder so we know you would like nail art. The final price and appointment length depend on the complexity of the design.",
      },
      {
        text: "Nail art must be booked together with a base service such as Gel Manicure, Builder Gel, Gel-X, Dip, or Acrylic.",
      },
      {
        text: "We do not add nail art to nails done by another salon without performing a new base service first.",
      },
      {
        text: "After booking, text us a photo or description of the design you want. We will review it, give you an estimated price, and adjust your appointment time if needed.",
      },
    ],
  },
  {
    id: "personal-belongings",
    title: "Personal Belongings",
    points: [
      { text: "Please keep your personal belongings with you during your appointment." },
      {
        text: "The salon is not responsible for any lost, stolen, or damaged personal belongings.",
      },
    ],
  },
  {
    id: "respect",
    title: "Respect",
    points: [
      {
        text: "We strive to provide a welcoming, comfortable, and respectful environment for all clients and staff.",
      },
      { text: "Please treat our team and other guests with kindness and respect." },
      {
        text: "We reserve the right to refuse service to anyone displaying abusive, threatening, inappropriate, or disrespectful behavior toward our staff or other guests.",
      },
    ],
  },
];
