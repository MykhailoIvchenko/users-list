import { memo, ImgHTMLAttributes, useState, useCallback } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const StyledImg = styled.img<
  Pick<ImageProps, 'width' | 'height' | 'borderRadius' | 'objectFit'>
>`
  display: block;
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : width ?? '100%'};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height ?? 'auto'};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ?? theme.borderRadius};
  object-fit: ${({ objectFit }) => objectFit ?? 'cover'};

  ${media.mobile`
    max-width: 100%;
    height: auto;
  `}

  ${media.tablet`
    max-width: 100%;
  `}
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.colors.secondary}22; /* translucent */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  user-select: none;
`;

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  objectFit,
  ...props
}: ImageProps) => {
  const [hasError, setHasError] = useState(false);

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <Placeholder style={{ width, height, borderRadius }}>
        Image not available
      </Placeholder>
    );
  }

  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
      objectFit={objectFit}
      onError={onError}
      {...props}
    />
  );
};

export const Image = memo(ImageComponent);
