import { ReactNode } from "react";
import { InputErrorMessageContainer } from "./input-error-message.styles";

type Props = {
  children: ReactNode;
};

const InputErrorMessage = ({ children }: Props) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
};

export default InputErrorMessage;
