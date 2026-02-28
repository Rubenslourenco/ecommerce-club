import { FunctionComponent, useContext } from "react";

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./cart.styles";

import { CartContext } from "../../contexts/cart.context";
import CustomButton from "../custom-buttom/custom-button.component";
import CartItem from "../cart-item/cart-item.Component";

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products } = useContext(CartContext);
  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}

          <CartTotal>Total: R$999</CartTotal>
          <CustomButton>Ir para o checkout</CustomButton>
        </CartContent>
      </CartContainer>
      ;
    </>
  );
};

export default Cart;
