import { FunctionComponent, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { categoryConverter } from "../../converters/firestore.converters";
import { db } from "../../config/firebase.config";
import Category from "../../types/category.types";
import Loading from "../loading/loading.component";
import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer,
} from "./category-details.styles";
import ProductItem from "../product-item/product-item.component";
import { useNavigate } from "react-router-dom";

interface CategoryDetailsProps {
  categoryId: string;
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId,
}) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const hadleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchCategory = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "categories").withConverter(categoryConverter),
            where("id", "==", categoryId)
          )
        );
        const category = querySnapshot.docs[0]?.data();

        setCategory(category);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (isLoading) return <Loading />;
  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={hadleBackClick}>
          <p style={{ fontSize: "1.5rem", cursor: "pointer" }}>&lt;</p>
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default CategoryDetails;
