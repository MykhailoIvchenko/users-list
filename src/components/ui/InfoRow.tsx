import { memo, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

type Size = 'small' | 'medium' | 'large';

interface InfoRowProps {
  label: string;
  value: ReactNode;
  labelSize?: Size;
  valueSize?: Size;
  className?: string;
}

const fontSizeMap = {
  small: {
    base: '0.8rem',
    mobile: '0.75rem',
    tablet: '0.8rem',
    desktop: '0.9rem',
  },
  medium: {
    base: '1rem',
    mobile: '0.9rem',
    tablet: '1rem',
    desktop: '1.1rem',
  },
  large: {
    base: '1.2rem',
    mobile: '1rem',
    tablet: '1.2rem',
    desktop: '1.3rem',
  },
};

const getFontSizeStyles = (size: Size) => css`
  font-size: ${fontSizeMap[size].base};

  ${media.mobile`
    font-size: ${fontSizeMap[size].mobile};
  `}

  ${media.tablet`
    font-size: ${fontSizeMap[size].tablet};
  `}

  ${media.desktop`
    font-size: ${fontSizeMap[size].desktop};
  `}
`;

const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Label = styled.div<{ size: Size }>`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  min-width: 100px;
  ${({ size }) => getFontSizeStyles(size)}
`;

const Value = styled.div<{ size: Size }>`
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  ${({ size }) => getFontSizeStyles(size)}
`;

export const InfoRow = memo(
  ({
    label,
    value,
    labelSize = 'medium',
    valueSize = 'medium',
    className,
  }: InfoRowProps) => {
    return (
      <Row className={className}>
        <Label size={labelSize}>{label}:</Label>
        <Value size={valueSize}>{value}</Value>
      </Row>
    );
  }
);
