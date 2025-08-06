import { PageTitle } from '../components/ui/PageTitle';
import { Spinner } from '../components/ui/Spinner';
import { UserDetails } from '../components/UserDetails';
import { useUserData } from '../hooks/useUserData';
import { Notification } from '../components/ui/Notification';
import { CenteredWrapper } from '../components/layout/СenteredWrapper';

const UserDetailsPage = () => {
  const { user, error, isLoading, setError } = useUserData();
  return (
    <>
      <PageTitle>User Data</PageTitle>

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
