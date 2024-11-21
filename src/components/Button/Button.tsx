import { PropsWithChildren } from "react";
import { StyledButton } from "./Button.styles";
import { Variant } from "./Buttons.types";

interface ButtonProps {
  variant?: Variant;
  testId?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  testId,
  variant = "primary",
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton data-testid={testId} variant={variant} {...rest}>
    {children}
  </StyledButton>
);
