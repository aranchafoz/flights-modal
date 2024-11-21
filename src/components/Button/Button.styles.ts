import styled, { css } from "styled-components";
import { StyledButtonProps } from "./Buttons.types";

const primaryStyles = css`
  background-color: #2689ef;
  color: #fff;

  &:not(:disabled):hover {
    background-color: #1465ca;
  }
`;

const secondaryStyles = css`
  background-color: #fff;
  color: #2689ef;

  &:not(:disabled):hover {
    background-color: #1465ca;
  }
`;

const variantStyles = {
  primary: primaryStyles,
  secondary: secondaryStyles,
};

const buttonStyles = css`
  // reset
  border: 0;

  // custom
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #f6f6f6;
    color: #606c78;
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles}

  ${({ variant }) => variantStyles[variant]}
`;
