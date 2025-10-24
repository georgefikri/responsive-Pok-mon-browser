import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '../api/pokemon';

export function usePokemonList(offset: number, limit: number) {
  return useQuery({
    queryKey: ['pokemon', 'list', offset, limit],
    queryFn: () => fetchPokemonList(offset, limit),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}
