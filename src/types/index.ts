export type Category = {
  title: string;
  description?: string;
  services: Service[];
  addOns?: AddOn[];
};

export type Service = {
  title: string;
  description?: string;
  price?: number;
  pricePlus?: boolean;
  subServices?: Service[];
  addOns?: AddOn[];
};

export type AddOn = {
  title: string;
  price: number;
  bold?: boolean;
};
