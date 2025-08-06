import { memo } from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';
import { AppLink } from './ui/AppLink';
import { INavRoute } from '../utils/types';

interface NavbarProps {
  routes: INavRoute[];
  className?: string;
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  ${media.mobile`
    display: none;
  `}
`;

export const Navbar = memo(({ routes, className }: NavbarProps) => {
  return (
    <Wrapper
      className={className}
      role='navigation'
      aria-label='Main navigation'
    >
      {routes.map(({ label, to }) => (
        <AppLink key={to} to={to}>
          {label}
        </AppLink>
      ))}
    </Wrapper>
  );
});
