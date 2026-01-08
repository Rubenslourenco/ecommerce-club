import { useState } from "react";

import "./categories.styles.scss";
import Category from "../../types/category.types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  return (
    <div className="categories-container">
      <div className="categories-content">
        <h2>Categories Component</h2>
      </div>
    </div>
  );
};
export default Categories;
