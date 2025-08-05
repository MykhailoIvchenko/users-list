import { API_BASE_URL } from '../utils/consts';
import { ApiEndpoints } from '../utils/enums';
import { IQueryParam } from '../utils/types';

function getApiEndpointUrl(
  pathChunks: (string | number | ApiEndpoints)[],
  queryParams?: IQueryParam[]
): string {
  const normalizedPath = pathChunks
    .map((chunk) =>
      String(chunk)
        .trim()
        .replace(/^\/+|\/+$/g, '')
    )
    .filter(Boolean)
    .join('/');

  const url = new URL(
    `${API_BASE_URL}/${normalizedPath}`,
    'https://dummyjson.com'
  );

  if (queryParams?.length) {
    const params = new URLSearchParams();

    for (const { name, value } of queryParams) {
      params.append(name, String(value));
    }

    url.search = params.toString();
  }

  return url.pathname + url.search;
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
