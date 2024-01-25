import { useSearchParams } from 'react-router-dom';

export function useQuery() {
  const [searchParams] = useSearchParams();
  return searchParams;
}
