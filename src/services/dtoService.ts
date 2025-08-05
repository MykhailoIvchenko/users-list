import { IUser, IUserFromApi } from '../utils/types';

function getUserDto(userFromApi: IUserFromApi): IUser {
  const { id, firstName, lastName, age, gender, email, phone, username } =
    userFromApi;

  return { id, firstName, lastName, age, gender, email, phone, username };
}

export const dtoService = {
  getUserDto,
};
