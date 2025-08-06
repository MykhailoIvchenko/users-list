import hotel1Img from '../assets/img/hotel1.webp';
import hotel2Img from '../assets/img/hotel2.webp';
import hotel3Img from '../assets/img/hotel3.webp';
import hotel4Img from '../assets/img/hotel4.webp';
import hotel5Img from '../assets/img/hotel5.webp';
import hotel6Img from '../assets/img/hotel6.webp';
import { ContentSection } from '../components/layout/ContentSection';
import { PageTitle } from '../components/ui/PageTitle';

const pageContent = [
  {
    imageUrl: hotel1Img,
    title: 'Lorem ipsum dolor sit amet.',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid similique veritatis autem, dolore voluptates! Itaque distinctio placeat expedita?',
    ],
  },
  {
    imageUrl: hotel2Img,
    title: 'Lorem ipsum dolor sit amet.',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid similique veritatis autem, dolore voluptates! Itaque distinctio placeat expedita?',
    ],
  },
  {
    imageUrl: hotel3Img,
    title: 'Lorem ipsum dolor sit amet.',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid similique veritatis autem, dolore voluptates! Itaque distinctio placeat expedita?',
    ],
  },
  {
    imageUrl: hotel4Img,
    title: 'Lorem ipsum dolor sit amet.',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid similique veritatis autem, dolore voluptates! Itaque distinctio placeat expedita?',
    ],
  },
  {
    imageUrl: hotel5Img,
    title: 'Lorem ipsum dolor sit amet.',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid similique veritatis autem, dolore voluptates! Itaque distinctio placeat expedita?',
    ],
  },
  {
    imageUrl: hotel6Img,
    title: 'Lorem ipsum dolor sit amet.',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis velit iusto vel voluptatum totam non, deleniti laborum nulla quae aliquid similique veritatis autem, dolore voluptates! Itaque distinctio placeat expedita?',
    ],
  },
];

const AboutPage = () => {
  return (
    <>
      <PageTitle>About Us</PageTitle>

      {pageContent.map((item, i) => (
        <ContentSection
          key={i}
          title={item.title}
          imageUrl={item.imageUrl}
          paragraphs={item.paragraphs}
          imagePosition={i % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </>
  );
};

export default AboutPage;
