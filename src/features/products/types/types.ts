export type Product = {
  name: string;
  description: string;
  price: string;
  cond: boolean;
  trade: boolean;
  stock: string;
  category: string;
  images?: string[];
  sold?: boolean;
  _id?: string;
  seller: string;
  createdAt: string;
};
