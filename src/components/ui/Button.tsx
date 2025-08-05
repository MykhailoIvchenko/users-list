import React, { memo, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

type ButtonVariant = 'primary' | 'secondary' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) =>
        theme.colors.primary}cc; /* slightly transparent */
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondary}cc;
    }
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.error}cc;
    }
  `,
};

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.2s ease;
  user-select: none;

  ${({ variant }) => variantStyles[variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) =>
    theme.spacing(3)};
  `}

  ${media.fullHD`
    font-size: ${({ theme }) => theme.fontSizes.md};
    padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) =>
    theme.spacing(5)};
  `}
`;

const ButtonComponent: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export const Button = memo(ButtonComponent);
