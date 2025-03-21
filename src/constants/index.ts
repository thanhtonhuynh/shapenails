import { Mail, MapPinHouse, PhoneOutgoing } from "lucide-react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

export const freshaUrl =
  "https://www.fresha.com/book-now/shape-nails-bkmzizqs/all-offer?share&pId=2485107";

export const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  // { title: "Gift Cards", href: "/gift-cards" },
  { title: "Contact", href: "/contact" },
];

export const mobileNavItems = [
  {
    title: "Book Now",
    href: freshaUrl,
  },
  ...navItems,
];

export const socialLinks = [
  {
    title: "Shape Nails Medford",
    href: "https://www.facebook.com/profile.php?id=61574177784617",
    icon: FiFacebook,
  },
  {
    title: "shapenailsmedford",
    href: "https://www.instagram.com/shapenailsmedford/",
    icon: FiInstagram,
  },
  {
    title: "shapenailsmedford",
    href: "https://www.tiktok.com/@shapenailsmedford",
    icon: IoLogoTiktok,
  },
];

export const contactLinks = [
  {
    key: "phone",
    title: "+1 (857) 999 - 8268",
    href: "tel:+18579998268",
    icon: PhoneOutgoing,
  },
  {
    key: "email",
    title: "theshapenails@gmail.com",
    href: "mailto:theshapenails@gmail.com",
    icon: Mail,
  },
  {
    key: "address",
    title: "243 Boston Ave, Medford, MA 02155",
    href: "https://maps.app.goo.gl/KXA6y7j7q6aSoRe66",
    icon: MapPinHouse,
  },
];
