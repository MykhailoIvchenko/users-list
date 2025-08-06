import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const StyledSectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing(3)} 0
    ${({ theme }) => theme.spacing(2)};
  line-height: 1.3;

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin: ${({ theme }) => theme.spacing(2)} 0 ${({ theme }) =>
    theme.spacing(1)};
  `}

  ${media.fullHD`
    font-size: 1.75rem;
  `}
`;

export const SectionTitle = memo(
  ({ children, className }: SectionTitleProps) => (
    <StyledSectionTitle className={className}>{children}</StyledSectionTitle>
  )
);
