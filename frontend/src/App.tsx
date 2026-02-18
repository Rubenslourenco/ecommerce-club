import { FunctionComponent, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SingUpPage from "./pages/sing-up/sing-up.page";
import { UserContext } from "./contexts/user.context";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSinningOut = isAuthenticated && !user;
    if (isSinningOut) {
      return logoutUser();
    }

    const inSigninIn = !isAuthenticated && user;
    if (inSigninIn) {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("id", "==", user.uid))
      );

      const userFromFirebasse = querySnapshot.docs[0]?.data();

      return loginUser(userFromFirebasse as any);
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SingUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
