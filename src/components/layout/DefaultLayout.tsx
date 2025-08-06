import { ReactNode, memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import { INavRoute } from '../../utils/types';
import { AppRoutes } from '../../utils/enums';
import { NavbarMobile } from '../NavbarMobile';

interface DefaultLayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled(MainContent)`
  flex: 1;
`;

const routes: INavRoute[] = [
  { label: 'About', to: AppRoutes.ABOUT },
  { label: 'Users', to: AppRoutes.USERS },
];

export const DefaultLayout = memo(({ children }: DefaultLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        routes={routes}
      />

      {isMobileMenuOpen && (
        <NavbarMobile
          routes={routes}
          onClose={toggleMobileMenu}
          isOpen={isMobileMenuOpen}
        />
      )}

      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
});
