import React, { memo, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { media } from '../../styles/media';

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
};

interface WrapperProps {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
  error?: boolean;
}

interface StyledInputProps {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}

interface ThemeProps {
  theme: DefaultTheme;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.surface};
  border: 1.5px solid
    ${({ theme, error }: ThemeProps & { error?: boolean }) =>
      error ? theme.colors.error : theme.colors.secondary};
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius};
  padding: 0 ${({ theme }: ThemeProps) => theme.spacing(1)};
  height: 48px;
  gap: ${({ theme }: ThemeProps) => theme.spacing(1)};
  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ theme, error }: ThemeProps & { error?: boolean }) =>
      error ? theme.colors.error : theme.colors.primary};
  }

  ${() => media.mobile`
    height: 40px;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  user-select: none;
`;

const StyledInput = styled.input<StyledInputProps>`
  flex: 1;
  border: none;
  outline: none;
  font-family: ${({ theme }: ThemeProps) => theme.fonts.body};
  font-size: ${({ theme }: ThemeProps) => theme.fontSizes.base};
  color: ${({ theme }: ThemeProps) => theme.colors.text};
  background-color: transparent;
  padding-left: ${({ hasLeftIcon, theme }: StyledInputProps & ThemeProps) =>
    hasLeftIcon ? theme.spacing(1) : '0'};
  padding-right: ${({ hasRightIcon, theme }: StyledInputProps & ThemeProps) =>
    hasRightIcon ? theme.spacing(1) : '0'};

  &::placeholder {
    color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  }

  ${({ theme }: ThemeProps) => media.mobile`
    font-size: ${theme.fontSizes.sm};
  `}

  ${({ theme }: ThemeProps) => media.fullHD`
    font-size: ${theme.fontSizes.md};
  `}
`;

const InputComponent = ({
  leftIcon,
  rightIcon,
  error,
  ...props
}: InputProps) => {
  const hasLeftIcon = Boolean(leftIcon);
  const hasRightIcon = Boolean(rightIcon);

  return (
    <Wrapper
      hasLeftIcon={hasLeftIcon}
      hasRightIcon={hasRightIcon}
      error={!!error}
    >
      {hasLeftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      <StyledInput
        hasLeftIcon={hasLeftIcon}
        hasRightIcon={hasRightIcon}
        aria-invalid={!!error}
        {...props}
      />
      {hasRightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </Wrapper>
  );
};

export const Input = memo(InputComponent);
