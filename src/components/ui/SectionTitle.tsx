import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const StyledSectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing(3)} 0
    ${({ theme }) => theme.spacing(2)};
  line-height: 1.3;

  font-size: ${({ theme }) => theme.fontSizes.md};

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `}
  ${media.laptop`
    font-size: 1.75rem;
  `}
  ${media.desktop`
    font-size: 2rem;
  `}
  ${media.widescreen`
    font-size: 2.25rem;
  `}
  ${media.fullHD`
    font-size: 2.5rem;
  `}
`;

export const SectionTitle = memo(
  ({ children, className }: SectionTitleProps) => (
    <StyledSectionTitle className={className}>{children}</StyledSectionTitle>
  )
);
