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
  addToCart: (product: Product) => void;
  handleCount: (product: Product, type: "increment" | "decrement") => void;
  removeFromCart: (product: Product) => void;
};

type ProviderProps = {
  children: ReactNode;
};

type CartProducts = {
  product: Product;
  count: number;
};

const CartContext = createContext({} as CartContextProps);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<CartProducts[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback(
    (product: Product) => {
      const checkCart = cart.find(
        (currProd) => currProd.product.name === product.name
      );
      //Checking if the product is already in the cart
      if (checkCart) {
        return;
      }
      const newProd = [...cart!, { product: product, count: 1 }];
      setCart(newProd);
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (product: Product) => {
      const filteredProd = cart?.filter(
        (currProd) => currProd.product.name !== product.name
      );
      setCart(filteredProd);
    },
    [cart]
  );

  const handleCount = useCallback(
    (product: Product, type: "increment" | "decrement") => {
      const changedCount = cart.map((currProd) => {
        if (currProd.product.name === product.name) {
          type === "increment"
            ? (currProd.count = currProd.count + 1)
            : (currProd.count = currProd.count - 1);
        } else {
          return currProd;
        }
        return currProd;
      });
      setCart(changedCount);
    },
    [cart]
  );

  useEffect(() => {
    localStorage.setItem("commCart", JSON.stringify(cart));
  }, [addToCart, cart, handleCount, removeFromCart]);

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
