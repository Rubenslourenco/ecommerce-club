import { useEffect, useState } from "react";
import axios from "axios";
import env from "../../config/env.config";

// import "./categories.styles.scss";

import Category from "../../types/category.types";
import CategoryItem from "../category-item/category-item.component";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  console.log("Categories:", categories);
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/categories`);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
