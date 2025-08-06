import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsKeys } from '../utils/enums';
import { Input } from './ui/Input';
import Search from '@/assets/icons/search.svg?react';

export const SearchInput = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get(SearchParamsKeys.SEARCH) ?? '';

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const newParams = new URLSearchParams(searchParams.toString());

      if (value) {
        newParams.set(SearchParamsKeys.SEARCH, value);
      } else {
        newParams.delete(SearchParamsKeys.SEARCH);
      }

      setSearchParams(newParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return (
    <Input
      type='search'
      value={searchValue}
      onChange={handleChange}
      leftIcon={<Search size={18} />}
      placeholder='Search...'
      aria-label='Search'
    />
  );
});
