import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { UserContext } from "../../contexts/user.context";

const Header = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSingUpClick = () => {
    navigate("/sign-up");
  };

  const handleSignOutClick = () => {
    signOut(auth);
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick} className="header-title">
        CLUB CLOTHING
      </HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSingUpClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
        )}
        <HeaderItem>
          {(() => {
            const Icon = BsCart3 as unknown as React.FC<{ size?: number }>;
            return <Icon size={25} />;
          })()}
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
