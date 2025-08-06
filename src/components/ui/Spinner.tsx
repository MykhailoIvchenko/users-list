import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const StyledSpinner = styled.div<{ size: number; color: string }>`
  border: ${({ size }) => size / 8}px solid
    ${({ theme }) => theme.colors.surface};
  border-top: ${({ size }) => size / 8}px solid ${({ color }) => color};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} 1s linear infinite;
`;

export const Spinner = memo(({ size = 40, color, className }: SpinnerProps) => {
  return (
    <StyledSpinner
      size={size}
      color={color || ''}
      className={className}
      style={{ color }}
    />
  );
});
