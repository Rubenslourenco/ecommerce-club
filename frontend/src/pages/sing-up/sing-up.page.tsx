import { use } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

import CustomButton from "../../components/custom-buttom/custom-button.component";
import CustomInput from "../../components/custum-input/custom-input.component";
import Header from "../../components/header/header.component";

import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./sing-up.styles";
import InputErrorMessage from "../../components/input-error-message/input-error-message";

interface SingUpForms {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SingUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SingUpForms>();

  const watchPassword = watch("password");

  const handleSubmitPress = (data: SingUpForms) => {
    console.log({ data });
  };
  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <InputErrorMessage>O campo nome e obrigatorio</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName?.type === "required" && (
              <InputErrorMessage>
                O campo sobrenome e obrigatorio
              </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Email</p>
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
              <InputErrorMessage>O campo email e obrigatorio</InputErrorMessage>
            )}
            {errors?.email?.type === "validate" && (
              <InputErrorMessage>inserir email valido </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>O campo senha e obrigatorio</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Confirmação de Senha</p>
            <CustomInput
              hasError={!!errors?.confirmPassword}
              placeholder="Digite sua senha novamente"
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
            />
            {errors?.confirmPassword?.type === "required" && (
              <InputErrorMessage>
                O campo confirmação de senha e obrigatorio
              </InputErrorMessage>
            )}
            {errors?.confirmPassword?.type === "validate" && (
              <InputErrorMessage>
                A confirmação de senha precisa ser igual a senha{" "}
              </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SingUpPage;
