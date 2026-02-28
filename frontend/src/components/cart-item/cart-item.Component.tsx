import { FunctionComponent, useContext } from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./cart-item.styles";
import CartProduct from "../../types/cart.types";
import { CartContext } from "../../contexts/cart.context";

interface CartItemProps {
  product: CartProduct;
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useContext(CartContext);

  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
  };

  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleDecreaseClick = () => {
    decreaseProductQuantity(product.id);
  };
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl}></CartItemImage>

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p style={{ fontSize: "1.5rem" }} onClick={handleDecreaseClick}>
          -
        </p>
        <p>{product.quantity}</p>
        <p style={{ fontSize: "1.5rem" }} onClick={handleIncreaseClick}>
          +
        </p>
        <CartItemQuantity></CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveProduct}>Remover</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
