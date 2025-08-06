import styled from 'styled-components';
import { memo } from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const Bar = styled.span<{ $isOpen: boolean }>`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 1px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(45deg) translateY(7px)' : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'};
  }
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
        <Bar $isOpen={isOpen} />
        <Bar $isOpen={isOpen} />
        <Bar $isOpen={isOpen} />
      </Button>
    );
  }
);
