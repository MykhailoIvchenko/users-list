import styled from 'styled-components';
import { media } from '../../styles/media';

interface MainContentProps {
  children: React.ReactNode;
  className?: string;
}

export const MainContent = styled.main<MainContentProps>`
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(2)};

  ${media.tablet`
    margin-left: ${({ theme }) => theme.spacing(3)};
    margin-right: ${({ theme }) => theme.spacing(3)};
  `}

  ${media.laptop`
    margin-left: ${({ theme }) => theme.spacing(4)};
    margin-right: ${({ theme }) => theme.spacing(4)};
  `}

  ${media.desktop`
    margin-left: ${({ theme }) => theme.spacing(5)};
    margin-right: ${({ theme }) => theme.spacing(5)};
  `}

  ${media.widescreen`
    margin-left: ${({ theme }) => theme.spacing(6)};
    margin-right: ${({ theme }) => theme.spacing(6)};
  `}

  ${media.fullHD`
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  `}
`;
