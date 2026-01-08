import React from "react";
import { BsCart3 } from "react-icons/bs";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle className="header-title">CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
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
