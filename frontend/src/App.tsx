import { FunctionComponent, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SingUpPage from "./pages/sing-up/sing-up.page";
import { UserContext } from "./contexts/user.context";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./converters/firestore.converters";
import Loading from "./components/loading/loading.component";
import ExplorePage from "./pages/explore/explore.page";

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSinningOut = isAuthenticated && !user;
    if (isSinningOut) {
      logoutUser();
      return setIsInitializing(false);
    }

    const inSigninIn = !isAuthenticated && user;
    if (inSigninIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users").withConverter(userConverter),
          where("id", "==", user.uid)
        )
      );

      const userFromFirebasse = querySnapshot.docs[0]?.data();

      loginUser(userFromFirebasse);
      return setIsInitializing(false);
    }
    return setIsInitializing(false);
  });

  if (isInitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SingUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
