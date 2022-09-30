import { Product } from "../../products/types";

export type ProfileCategoryProps = {
  products: Product[];
};

export type User = {
  watchlist: Product[];
  products: Product[];
  username: string;
  joined: string;
};
