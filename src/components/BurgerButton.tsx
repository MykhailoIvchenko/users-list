import styled from 'styled-components';
import { memo } from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }
`;

const Bar = styled.span<{ $isOpen: boolean; $index: number }>`
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 1px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${({ $isOpen, $index }) => {
    switch ($index) {
      case 0:
        return $isOpen
          ? `transform: rotate(45deg);`
          : `transform: translateY(-8px);`;
      case 1:
        return $isOpen
          ? `opacity: 0; transform: translateY(0);`
          : `transform: translateY(0);`;
      case 2:
        return $isOpen
          ? `transform: rotate(-45deg);`
          : `transform: translateY(8px);`;
    }
  }}
`;

export const BurgerButton = memo(
  ({ isOpen, onClick, className }: BurgerButtonProps) => {
    return (
      <Button
        onClick={onClick}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className={className}
      >
        <Bar $isOpen={isOpen} $index={0} />
        <Bar $isOpen={isOpen} $index={1} />
        <Bar $isOpen={isOpen} $index={2} />
      </Button>
    );
  }
);
