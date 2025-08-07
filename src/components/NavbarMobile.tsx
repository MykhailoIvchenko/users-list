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
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
  transition: 0.6s linear;

  ${({ $visible }) =>
    $visible &&
    css`
      transform: translateX(0);
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
        document.body.style.overflow = 'hidden';
        setShouldRender(true);
      } else {
        document.body.style.overflow = '';
        const timeout = setTimeout(() => setShouldRender(false), 400);
        return () => clearTimeout(timeout);
      }

      return () => {
        document.body.style.overflow = '';
      };
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
