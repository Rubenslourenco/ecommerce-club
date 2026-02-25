import CartProduct from "../types/cart.types";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import Product from "../types/product.types";

interface ICartContext {
  isVisible: boolean;
  product: CartProduct[];
  toggleCart: () => void;
  addProductToCar: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  product: [],
  toggleCart: () => {},
  addProductToCar: () => {},
});

const CartContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [product, setProduct] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  };

  const addProductToCar = (product: Product) => {
    setProduct((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  return (
    <CartContext.Provider
      value={{ isVisible, product, toggleCart, addProductToCar }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
