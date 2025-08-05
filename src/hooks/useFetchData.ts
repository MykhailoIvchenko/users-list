import { useState } from 'react';

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  const fetchDataFromApi = async <T extends Function>(
    callback: T,
    errorText: string
  ) => {
    try {
      setError('');
      setIsLoading(true);

      await callback();
    } catch {
      setError(errorText);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    fetchDataFromApi,
  };
};
