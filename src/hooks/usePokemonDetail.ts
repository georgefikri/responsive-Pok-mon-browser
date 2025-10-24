import { useQuery } from '@tanstack/react-query';
import { fetchPokemonDetail } from '../api/pokemon';

export function usePokemonDetail(id: string | number) {
  return useQuery({
    queryKey: ['pokemon', 'detail', id],
    queryFn: () => fetchPokemonDetail(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}
