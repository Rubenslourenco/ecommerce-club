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

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext);
  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>

          <CartTotal>Total: R$999</CartTotal>
          <CustomButton>Ir para o checkout</CustomButton>
        </CartContent>
      </CartContainer>
      ;
    </>
  );
};

export default Cart;
