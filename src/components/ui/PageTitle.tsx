import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

const StyledPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing(4)} 0
    ${({ theme }) => theme.spacing(3)};
  line-height: 1.2;

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: ${({ theme }) => theme.spacing(3)} 0 ${({ theme }) =>
    theme.spacing(2)};
  `}

  ${media.fullHD`
    font-size: 2.5rem;
  `}
`;

export const PageTitle = memo(({ children, className }: PageTitleProps) => (
  <StyledPageTitle className={className}>{children}</StyledPageTitle>
));
