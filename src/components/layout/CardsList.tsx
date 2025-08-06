import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardsListProps {
  children: ReactNode;
  className?: string;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;

export const CardsList = ({ children, className }: CardsListProps) => {
  return <GridWrapper className={className}>{children}</GridWrapper>;
};
