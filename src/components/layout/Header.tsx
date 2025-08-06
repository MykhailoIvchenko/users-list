import { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles/media';
import { AppRoutes } from '../../utils/enums';
import { BurgerButton } from '../BurgetButton';
import { Navbar } from '../Navbar';
import { INavRoute } from '../../utils/types';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  routes: INavRoute[];
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  z-index: 10;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const BurgerWrapper = styled.div`
  display: flex;

  ${media.tablet`
    display: none;
  `}
`;

const NavbarWrapper = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
  `}
`;

export const Header = memo(
  ({ isMobileMenuOpen, onToggleMobileMenu, routes }: HeaderProps) => {
    return (
      <HeaderWrapper>
        <Logo to={AppRoutes.HOME}>MyApp</Logo>

        <BurgerWrapper>
          <BurgerButton
            isOpen={isMobileMenuOpen}
            onClick={onToggleMobileMenu}
          />
        </BurgerWrapper>

        <NavbarWrapper>
          <Navbar routes={routes} />
        </NavbarWrapper>
      </HeaderWrapper>
    );
  }
);
