import { FunctionComponent } from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./cart-item.styles";
import CartProduct from "../../types/cart.types";

interface CartItemProps {
  product: CartProduct;
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl}></CartItemImage>

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p style={{ fontSize: "1.5rem" }}>-</p>
        <p>{product.quantity}</p>
        <p style={{ fontSize: "1.5rem" }}>+</p>
        <CartItemQuantity></CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>Remover</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
