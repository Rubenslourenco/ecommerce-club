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
import { useNavigate } from "react-router-dom";

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };
  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
          {productsCount > 0 && (
            <>
              <CartTotal>Total: R${productsTotalPrice}</CartTotal>
              <CustomButton onClick={handleCheckoutClick}>
                Ir para o checkout
              </CustomButton>
            </>
          )}

          {productsCount === 0 && <p>Seu carrinho está vazio</p>}
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Cart;
