import { FunctionComponent, useContext } from "react";

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./product-item.styles";

import Product from "../../types/product.types";
import CustomButton from "../custom-buttom/custom-button.component";
import { CartContext } from "../../contexts/cart.context";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCar } = useContext(CartContext);

  const handleProductClick = () => {
    addProductToCar(product);
  };
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleProductClick}>
          Adicionar ao Carinho
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductItem;
