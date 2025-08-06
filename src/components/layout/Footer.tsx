import { memo } from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../assets/icons/facebook.svg?react';
import YoutubeIcon from '../../assets/icons/youtube.svg?react';
import XIcon from '../../assets/icons/x.svg?react';

const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.surface};
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
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
          <FacebookIcon />
        </IconLink>
        <IconLink
          href='https://youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <YoutubeIcon />
        </IconLink>
        <IconLink
          href='https://x.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <XIcon />
        </IconLink>
      </Icons>
      <Copyright>
        &copy; {new Date().getFullYear()} UsersApp. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
});
