import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Category from "../types/category.types";
import { collection, getDocs } from "firebase/firestore";
import { categoryConverter } from "../converters/firestore.converters";
import { db } from "../config/firebase.config";
import { set } from "react-hook-form";

interface ICategoryContext {
  categories: Category[];
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve(),
});

const CategoryContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const categoriesFromFireStore: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc) => {
        categoriesFromFireStore.push(doc.data());
      });

      setCategories(categoriesFromFireStore);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
