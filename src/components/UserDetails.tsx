import { memo } from 'react';
import styled from 'styled-components';
import { Image } from './ui/Image';
import { IUser } from '../utils/types';
import { media } from '../styles/media';
import { InfoRow } from './ui/InfoRow';

interface UserDetailsProps {
  user: IUser;
  className?: string;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)} 0;

  ${media.tablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`;

const Figure = styled.figure`
  margin: 0;
  flex-shrink: 0;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;

    ${media.tablet`
      width: 200px;
      height: 200px;
    `}
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Article = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const UserDetails = memo(({ user, className }: UserDetailsProps) => {
  const { image, firstName, lastName, username, email, phone } = user;

  return (
    <Wrapper className={className}>
      <Figure>
        <Image src={image} alt={`User ${firstName} ${lastName} avatar`} />
      </Figure>

      <Article>
        <InfoRow label='First Name' value={firstName} />
        <InfoRow label='Last Name' value={lastName} />
        <InfoRow label='Username' value={username} />
        <InfoRow label='Email' value={email} />
        <InfoRow label='Phone' value={phone} />
      </Article>
    </Wrapper>
  );
});
