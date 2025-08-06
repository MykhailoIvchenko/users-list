import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { AppLink } from './ui/AppLink';
import { INavRoute } from '../utils/types';
import { media } from '../styles/media';

interface NavbarMobileProps {
  isOpen: boolean;
  routes: INavRoute[];
  onClose: () => void;
  className?: string;
}

const MobileWrapper = styled.nav<{ $visible: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 999;
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${({ $visible }) =>
    $visible &&
    css`
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    `}

  ${media.tablet`
    display: none;
  `}
`;

export const NavbarMobile = memo(
  ({ isOpen, routes, onClose, className }: NavbarMobileProps) => {
    const [shouldRender, setShouldRender] = useState(isOpen);

    useEffect(() => {
      if (isOpen) {
        setShouldRender(true);
      } else {
        const timeout = setTimeout(() => setShouldRender(false), 300);
        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
      <MobileWrapper
        className={className}
        $visible={isOpen}
        role='navigation'
        aria-label='Mobile navigation'
      >
        {routes.map(({ label, to }) => (
          <AppLink key={to} to={to} onClick={onClose}>
            {label}
          </AppLink>
        ))}
      </MobileWrapper>
    );
  }
);
