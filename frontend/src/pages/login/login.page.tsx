// import { BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import validator from "validator";

import CustomButton from "../../components/custom-buttom/custom-button.component";
import CustomInput from "../../components/custum-input/custom-input.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message";
import Header from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

interface LoginForms {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForms>();

  const handleSubmitPress = (data: any) => {
    console.log("data", data);
  };

  console.log("errors", errors);

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
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu email"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <InputErrorMessage>Email é obrigatório</InputErrorMessage>
            )}

            {errors?.email?.type === "validate" && (
              <InputErrorMessage>
                Por favor, insira um email válido
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>Sua senha é obrigatória</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
