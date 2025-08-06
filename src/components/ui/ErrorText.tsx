import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface ErrorTextProps {
  children: ReactNode;
  className?: string;
}

const StyledErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: ${({ theme }) => theme.spacing(2)} 0;
  text-align: center;

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.md};
    padding: ${({ theme }) => theme.spacing(1.5)};
  `}

  ${media.fullHD`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    padding: ${({ theme }) => theme.spacing(3)};
  `}
`;

export const ErrorText = memo(({ children, className }: ErrorTextProps) => (
  <StyledErrorText className={className}>{children}</StyledErrorText>
));
