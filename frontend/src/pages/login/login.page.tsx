// import { BsGoogle } from "react-icons/bs";

import CustomButton from "../../components/custom-buttom/custom-button.component";
import CustomInput from "../../components/custum-input/custom-input.component";
import Header from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

const LoginPage = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton
          // startIcon={
          //   <span>
          //     <BsGoogle size={25} />
          //   </span>
          // }
          >
            Entrar com Google
          </CustomButton>

          <LoginSubtitle>ou entre com seu email</LoginSubtitle>

          <LoginInputContainer>
            <CustomInput placeholder="Digite seu email" />
          </LoginInputContainer>

          <LoginInputContainer>
            <CustomInput placeholder="Digite sua senha" type="password" />
          </LoginInputContainer>

          <CustomButton>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
