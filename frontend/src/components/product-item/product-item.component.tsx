import { FunctionComponent } from "react";

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./product-item.styles";

import Product from "../../types/product.types";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductItem;
