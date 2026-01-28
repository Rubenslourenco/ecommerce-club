import { ReactNode, ButtonHTMLAttributes } from "react";

import { CustomButtonContainer, IconContainer } from "./custom-button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
}

const CustomButton = ({ children, startIcon, ...rest }: Props) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
