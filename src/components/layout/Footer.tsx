import { memo } from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../assets/icons/facebook.svg?react';
import YoutubeIcon from '../../assets/icons/youtube.svg?react';
import XIcon from '../../assets/icons/x.svg?react';

const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.surface};
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.surface};
`;

export const Footer = memo(() => {
  return (
    <FooterWrapper>
      <Icons>
        <IconLink
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon width={24} height={24} />
        </IconLink>
        <IconLink
          href='https://x.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <XIcon width={36} height={36} />
        </IconLink>
        <IconLink
          href='https://youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <YoutubeIcon width={36} height={36} />
        </IconLink>
      </Icons>
      <Copyright>
        &copy; {new Date().getFullYear()} UsersApp. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
});
