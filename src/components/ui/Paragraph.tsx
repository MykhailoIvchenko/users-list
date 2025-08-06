import { memo, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

type ParagraphVariant = 'normal' | 'muted';

interface ParagraphProps {
  children: ReactNode;
  variant?: ParagraphVariant;
}

const variantStyles = {
  normal: css`
    color: ${({ theme }) => theme.colors.text};
  `,
  muted: css`
    color: ${({ theme }) => theme.colors.secondary};
  `,
};

const StyledParagraph = styled.p<{ variant: ParagraphVariant }>`
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.5;
  margin: 0 0 ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${({ variant }) => variantStyles[variant]}

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `}
  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSizes.base};
  `}
  ${media.laptop`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
  ${media.desktop`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
  ${media.widescreen`
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `}
  ${media.fullHD`
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `}
`;

const ParagraphComponent = ({
  children,
  variant = 'normal',
}: ParagraphProps) => {
  return <StyledParagraph variant={variant}>{children}</StyledParagraph>;
};

export const Paragraph = memo(ParagraphComponent);
