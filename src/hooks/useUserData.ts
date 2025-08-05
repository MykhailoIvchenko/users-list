import { useParams } from 'react-router-dom';
import { useFetchData } from './useFetchData';
import { useEffect, useState } from 'react';
import {
  AsyncVoidFunctionWithoutArgs,
  IUser,
  IUserFromApi,
} from '../utils/types';
import { apiService } from '../services/apiService';
import { ApiEndpoints, ApiMethods } from '../utils/enums';
import { dtoService } from '../services/dtoService';

export const useUserData = () => {
  const { isLoading, error, fetchDataFromApi } = useFetchData();

  const { id } = useParams();

  const [user, setUser] = useState<IUser | null>(null);

  const getUserAndSet = async () => {
    if (!id) {
      throw new Error('There is no id for user data retreiving');
    }

    const apiUrl = apiService.getApiEndpointUrl([ApiEndpoints.USERS, id]);

    const options = {
      method: ApiMethods.GET,
    };

    const userFromApi = await apiService.apiRequest<IUserFromApi>(
      apiUrl,
      options
    );

    const userDto = dtoService.getUserDto(userFromApi);

    setUser(userDto);
  };

  useEffect(() => {
    fetchDataFromApi<AsyncVoidFunctionWithoutArgs>(
      getUserAndSet,
      'An error occured on the user data retreiving'
    );
  }, []);

  return {
    isLoading,
    error,
    user,
  };
};
