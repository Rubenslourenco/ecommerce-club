import { FunctionComponent, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutTotal,
  CheckoutProducts,
} from "./checkout.styles";
import CustomButton from "../custom-buttom/custom-button.component";
import CartItem from "../cart-item/cart-item.Component";

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((products) => (
              <CartItem key={products.id} product={products} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton>Finalizar Compra</CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio</p>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
