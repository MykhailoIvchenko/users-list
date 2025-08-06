import styled from 'styled-components';
import { media } from '../../styles/media';

interface MainContentProps {
  children: React.ReactNode;
  className?: string;
}

export const MainContent = styled.main<MainContentProps>`
  margin-left: ${({ theme }) => theme.offset(1)};
  margin-right: ${({ theme }) => theme.offset(1)};

  ${media.tablet`
    margin-left: ${({ theme }) => theme.offset(2)};
    margin-right: ${({ theme }) => theme.offset(2)};
  `}

  ${media.laptop`
    margin-left: ${({ theme }) => theme.offset(3)};
    margin-right: ${({ theme }) => theme.offset(3)};
  `}

  ${media.desktop`
    margin-left: ${({ theme }) => theme.offset(4)};
    margin-right: ${({ theme }) => theme.offset(4)};
  `}

  ${media.widescreen`
    margin-left: ${({ theme }) => theme.offset(6)};
    margin-right: ${({ theme }) => theme.offset(6)};
  `}

  ${media.fullHD`
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  `}
`;
