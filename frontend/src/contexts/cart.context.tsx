import CartProduct from "../types/cart.types";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import Product from "../types/product.types";
import { set } from "react-hook-form";

interface ICartContext {
  isVisible: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCar: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCar: () => {},
  removeProductFromCart: () => {},
});

const CartContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProduct] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  };

  const addProductToCar = (product: Product) => {
    const productIsAlreadyCart = products.some(
      (item) => item.id === product.id
    );

    if (productIsAlreadyCart) {
      return setProduct((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }

    setProduct((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const removeProductFromCart = (productId: string) => {
    setProduct((prevState) =>
      prevState.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCar,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
