import styled from 'styled-components';
import { AppLink } from '../components/ui/AppLink';
import { PageTitle } from '../components/ui/PageTitle';
import { Paragraph } from '../components/ui/Paragraph';
import { AppRoutes } from '../utils/enums';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  text-align: center;
  gap: 1rem;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <PageTitle>404</PageTitle>
      <Paragraph>Page was not found</Paragraph>
      <AppLink to={AppRoutes.ABOUT}>Go home</AppLink>
    </Wrapper>
  );
};

export default NotFoundPage;
