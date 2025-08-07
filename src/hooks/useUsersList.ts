import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../services/apiService';
import { dtoService } from '../services/dtoService';
import { ApiEndpoints, ApiMethods, SearchParamsKeys } from '../utils/enums';
import {
  AsyncVoidFunctionWithoutArgs,
  IUser,
  IUsersResponse,
} from '../utils/types';
import { useFetchData } from './useFetchData';

export const useUsersList = () => {
  const { isLoading, error, fetchDataFromApi, setError } = useFetchData();

  const [users, setUsers] = useState<IUser[]>([]);
  const [usersToDisplay, setUsersToDisplay] = useState<IUser[]>([]);

  const [searchParams] = useSearchParams();

  const userSearchParam = searchParams.get(SearchParamsKeys.SEARCH);

  const getUsersListAndSet = async () => {
    const apiUrl = apiService.getApiEndpointUrl([ApiEndpoints.USERS]);

    const options = {
      method: ApiMethods.GET,
    };

    const usersResponse = await apiService.apiRequest<IUsersResponse>(
      apiUrl,
      options
    );

    const usersFromApi = usersResponse?.users;

    const usersDtos = dtoService.getUsersDtos(usersFromApi);

    setUsers(usersDtos);
  };

  const getFilteredUsers = (users: IUser[], searchQuery: string | null) => {
    if (!searchQuery) {
      setUsersToDisplay(users);
      return;
    }

    const loweredQuery = searchQuery.toLowerCase();

    const filteredUsers = users.filter(
      (user) =>
        user?.firstName?.toLowerCase().includes(loweredQuery) ||
        user?.lastName?.toLowerCase()?.includes(loweredQuery)
    );

    setUsersToDisplay(filteredUsers);
  };

  useEffect(() => {
    fetchDataFromApi<AsyncVoidFunctionWithoutArgs>(
      getUsersListAndSet,
      'An error occured during users list obtaining'
    );
  }, []);

  useEffect(() => {
    getFilteredUsers(users, userSearchParam);
  }, [users, userSearchParam]);

  return {
    users: usersToDisplay,
    isLoading,
    error,
    setError,
  };
};
