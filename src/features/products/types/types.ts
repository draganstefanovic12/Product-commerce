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
  reviews: [];
};

export type Review = {
  user: string;
  review: string;
  stars: number;
};
