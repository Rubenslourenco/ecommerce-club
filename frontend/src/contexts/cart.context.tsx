import CartProduct from "../types/cart.types";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";

interface ICartContext {
  isVisible: boolean;
  product: CartProduct[];
  toggleCart: () => void;
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  product: [],
  toggleCart: () => {},
});

const CartContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [product] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <CartContext.Provider value={{ isVisible, product, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
