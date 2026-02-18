// import { BsGoogle } from "react-icons/bs";
import { set, useForm } from "react-hook-form";
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
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../config/firebase.config";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";

interface LoginForms {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForms>();

  const handleSubmitPress = async (data: LoginForms) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User signed in:", userCredentials.user);
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError("password", { type: "mismatch" });
      }

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError("email", { type: "notFound" });
      }
    }
  };

  const handleSignInWithGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(" ")[0];
        const lastName = userCredentials.user.displayName?.split(" ")[1];

        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: "google",
        });
      }
      console.log("User signed in with Google:", user);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton onClick={handleSignInWithGooglePress}>
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

            {errors?.email?.type === "notfound" && (
              <InputErrorMessage>Email não foi encontrado</InputErrorMessage>
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
            {errors?.password?.type === "mismatch" && (
              <InputErrorMessage>Senha digita não existe</InputErrorMessage>
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
