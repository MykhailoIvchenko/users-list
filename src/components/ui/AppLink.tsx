import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

interface AppLinkProps extends NavLinkProps {
  children: ReactNode;
  className?: string;
}

const activeStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: underline;
`;

const inactiveStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    outline: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: color 0.2s ease;
  outline-offset: 2px;

  &.active {
    ${activeStyle}
  }

  &:not(.active) {
    ${inactiveStyle}
  }

  ${media.fullHD`
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `}
`;

const AppLinkComponent = ({ children, ...props }: AppLinkProps) => {
  return <StyledNavLink {...props}>{children}</StyledNavLink>;
};

export const AppLink = memo(AppLinkComponent);
