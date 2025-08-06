import { PageTitle } from '../components/ui/PageTitle';
import { Spinner } from '../components/ui/Spinner';
import { UserDetails } from '../components/UserDetails';
import { useUserData } from '../hooks/useUserData';
import { Notification } from '../components/ui/Notification';
import { CenteredWrapper } from '../components/layout/СenteredWrapper';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { AppRoutes } from '../utils/enums';
import { Button } from '../components/ui/Button';
import { media } from '../styles/media';
import { styled } from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  position: sticky;
  top: ${({ theme }) => theme.sizes.headerHeight};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${media.laptop`
    flex-direction: row;
  `}
`;

const UserDetailsPage = () => {
  const navigate = useNavigate();

  const { user, error, isLoading, setError } = useUserData();

  const handleBackClick = useCallback(() => {
    navigate(AppRoutes.USERS);
  }, []);

  return (
    <>
      <HeaderRow>
        <PageTitle>User Data</PageTitle>

        <Button onClick={handleBackClick}>Back to Users</Button>
      </HeaderRow>

      <CenteredWrapper>
        {isLoading ? <Spinner /> : user && <UserDetails user={user} />}
      </CenteredWrapper>

      {error && (
        <Notification
          type={'error'}
          message={error}
          onClose={() => setError('')}
        />
      )}
    </>
  );
};

export default UserDetailsPage;
