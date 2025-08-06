import { API_BASE_URL } from '../utils/consts';
import { ApiEndpoints } from '../utils/enums';
import { IQueryParam } from '../utils/types';

export function getApiEndpointUrl(
  pathChunks: (string | number | ApiEndpoints)[],
  queryParams?: IQueryParam[]
): string {
  const path = pathChunks.join('/');

  let url = `${API_BASE_URL}/${path}`;

  if (queryParams && queryParams.length > 0) {
    const params = queryParams.map((param) => `${param.name}=${param.value}`);
    const paramsString = `?${params.join('&')}`;

    url += paramsString;
  }

  return url;
}

export const apiRequest = async <T = unknown>(
  url: string = '',
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};

export const apiService = { getApiEndpointUrl, apiRequest };
