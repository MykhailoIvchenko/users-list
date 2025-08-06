import styled from 'styled-components';
import { CardsList } from '../components/layout/CardsList';
import { PageTitle } from '../components/ui/PageTitle';
import { Spinner } from '../components/ui/Spinner';
import { UserCard } from '../components/UserCard';
import { useUsersList } from '../hooks/useUsersList';
import { Notification } from '../components/ui/Notification';
import { CenteredWrapper } from '../components/layout/СenteredWrapper';
import { SearchInput } from '../components/SearchInput';
import { ErrorText } from '../components/ui/ErrorText';

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const UsersPage = () => {
  const { users, isLoading, error, setError } = useUsersList();

  return (
    <>
      <HeaderRow>
        <PageTitle>Users List</PageTitle>
        <SearchInput />
      </HeaderRow>

      {isLoading ? (
        <CenteredWrapper>
          <Spinner />
        </CenteredWrapper>
      ) : users.length > 0 ? (
        <CardsList>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </CardsList>
      ) : (
        <ErrorText>There are no users</ErrorText>
      )}

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

export default UsersPage;
