import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Product } from "../../products/types";

type CartContextProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cart: CartProducts[];
  addToCart: (product: Product | undefined) => void;
  handleCount: (
    product: Product | undefined,
    type: "increment" | "decrement"
  ) => void;
  removeFromCart: (product: Product | undefined) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export type CartProducts = {
  product: Product | undefined;
  count: number;
};

const CartContext = createContext({} as CartContextProps);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<CartProducts[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  console.log(cart);

  const addToCart = useCallback(
    (product: Product | undefined) => {
      const checkCart = cart.find(
        (currProd) => currProd.product!.name === product!.name
      );
      //Checking if the product is already in the cart
      if (checkCart) {
        return;
      }
      const newProd = [...cart!, { product: product, count: 1 }];
      setCart(newProd);
      localStorage.setItem("commCart", JSON.stringify(newProd));
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (product: Product | undefined) => {
      const filteredProd = cart?.filter(
        (currProd) => currProd.product!.name !== product!.name
      );
      setCart(filteredProd);
      localStorage.setItem("commCart", JSON.stringify(filteredProd));
    },
    [cart]
  );

  const handleCount = useCallback(
    (product: Product | undefined, type: "increment" | "decrement") => {
      const changedCount = cart.map((currProd) => {
        if (currProd.product!.name === product!.name) {
          type === "increment"
            ? (currProd.count = currProd.count + 1)
            : (currProd.count = currProd.count - 1);
        } else {
          return currProd;
        }
        return currProd;
      });
      setCart(changedCount);
      localStorage.setItem("commCart", JSON.stringify(changedCount));
    },
    [cart]
  );

  useEffect(() => {
    const cartContent = localStorage.getItem("commCart");
    if (cartContent) {
      setCart(JSON.parse(cartContent));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        handleCount,
        cart,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
