import React, { memo, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary}cc;
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
  danger: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.error}cc;
    }
  `,
};

const sizeStyles = {
  sm: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(2)};
  `,
  md: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(4)};
  `,
  lg: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: ${({ theme }) => theme.spacing(3)}
      ${({ theme }) => theme.spacing(6)};
  `,
};

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
}>`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.2s ease;
  user-select: none;

  ${({ variant }) => variantStyles[variant]}
  ${({ size }) => sizeStyles[size]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `}

  ${media.fullHD`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
`;

const ButtonComponent: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export const Button = memo(ButtonComponent);
