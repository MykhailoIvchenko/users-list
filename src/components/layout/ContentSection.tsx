import { memo } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';
import { Image } from '../ui/Image';
import { SectionTitle } from '../ui/SectionTitle';
import { Paragraph } from '../ui/Paragraph';

interface ContentSectionProps {
  title: string;
  imageUrl: string;
  imageAlt?: string;
  paragraphs: string[];
  imagePosition?: 'left' | 'right';
  className?: string;
}

const SectionWrapper = styled.section<{ imagePosition: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(6)} 0;

  ${media.tablet`
    flex-direction: ${({ imagePosition }) =>
      imagePosition === 'left' ? 'row' : 'row-reverse'};
    align-items: flex-start;
  `}
`;

const Figure = styled.figure`
  flex: 1;
  margin: 0;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: ${({ theme }) => theme.borderRadius};
    object-fit: cover;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.article`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContentSection = memo(
  ({
    title,
    imageUrl,
    imageAlt,
    paragraphs,
    imagePosition = 'left',
    className,
  }: ContentSectionProps) => {
    return (
      <SectionWrapper imagePosition={imagePosition} className={className}>
        <Figure>
          <Image src={imageUrl} alt={imageAlt ?? title} />
        </Figure>

        <Content>
          <SectionTitle>{title}</SectionTitle>
          {paragraphs.map((text, idx) => (
            <Paragraph key={idx}>{text}</Paragraph>
          ))}
        </Content>
      </SectionWrapper>
    );
  }
);
