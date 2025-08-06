import { CardsList } from '../components/layout/CardsList';
import { PageTitle } from '../components/ui/PageTitle';
import { Spinner } from '../components/ui/Spinner';
import { UserCard } from '../components/UserCard';
import { useUsersList } from '../hooks/useUsersList';
import { Notification } from '../components/ui/Notification';

const UsersPage = () => {
  const { users, isLoading, error, setError } = useUsersList();

  return (
    <>
      <PageTitle>Users List</PageTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <CardsList>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </CardsList>
      )}

      {error && (
        <Notification
          type={'error'}
          message={'Something went wrong on users list loading'}
          onClose={() => setError('')}
        />
      )}
    </>
  );
};

export default UsersPage;
