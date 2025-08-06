import { IUser, IUserFromApi } from '../utils/types';

function getUserDto(userFromApi: IUserFromApi): IUser {
  const {
    id,
    firstName,
    lastName,
    age,
    gender,
    email,
    phone,
    username,
    image,
  } = userFromApi;

  return {
    id,
    firstName,
    lastName,
    age,
    gender,
    email,
    phone,
    username,
    image,
  };
}

function getUsersDtos(usersFromApi: IUserFromApi[]): IUser[] {
  return usersFromApi.map((user) => getUserDto(user));
}

export const dtoService = {
  getUserDto,
  getUsersDtos,
};
