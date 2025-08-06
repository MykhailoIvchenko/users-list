import { memo } from 'react';
import styled from 'styled-components';
import { Image } from '../ui/Image';
import { Button } from '../ui/Button';
import avatarPlaceholder from '../../assets/img/avatar-placeholder.webp';

interface CardProps {
  imageUrl?: string;
  imageAlt?: string;
  additionalInfo?: string;
  onDetailsClick: () => void;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const CardContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    text-align: left;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
    height: 120px;
  }
`;

export const Card = memo(
  ({
    imageUrl = avatarPlaceholder,
    imageAlt,
    children,
    onDetailsClick,
    className,
  }: CardProps) => {
    return (
      <CardContainer className={className}>
        <StyledImage src={imageUrl} alt={imageAlt || 'Card image'} />
        <Content>
          {children}
          <Button onClick={onDetailsClick} aria-label={`Details for card data`}>
            Details
          </Button>
        </Content>
      </CardContainer>
    );
  }
);
