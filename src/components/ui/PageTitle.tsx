import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

const StyledPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing(4)} 0
    ${({ theme }) => theme.spacing(3)};
  line-height: 1.2;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.lg};

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `}
  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `}
  ${media.laptop`
    font-size: 2.25rem;
  `}
  ${media.desktop`
    font-size: 2.5rem;
  `}
  ${media.widescreen`
    font-size: 2.75rem;
  `}
  ${media.fullHD`
    font-size: 3rem;
  `}
`;

export const PageTitle = memo(({ children, className }: PageTitleProps) => (
  <StyledPageTitle className={className}>{children}</StyledPageTitle>
));
