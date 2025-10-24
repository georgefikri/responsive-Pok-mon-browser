import { useState, Suspense } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonGrid } from '../components/pokemon/PokemonGrid';
import { LoadMoreButton } from '../components/pokemon/LoadMoreButton';
import { PokemonSkeleton } from '../components/pokemon/PokemonSkeleton';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import type { Pokemon } from '../types/pokemon';
import { POKEMON_PER_PAGE } from '../utils/constants';

function LoadMoreContent() {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);

  const { data, isLoading, error, refetch } = usePokemonList(offset, POKEMON_PER_PAGE);

  if (error) {
    return <ErrorMessage message="Failed to load Pokemon" onRetry={() => refetch()} />;
  }

  if (isLoading && offset === 0) {
    return <PokemonSkeleton count={POKEMON_PER_PAGE} />;
  }

  if (data && data.pokemon.length > 0 && offset === allPokemon.length) {
    const uniqueIds = new Set(allPokemon.map((p) => p.id));
    const newPokemon = data.pokemon.filter((p) => !uniqueIds.has(p.id));
    if (newPokemon.length > 0) {
      setAllPokemon((prev) => [...prev, ...newPokemon]);
    }
  }

  const displayPokemon = allPokemon.length > 0 ? allPokemon : data?.pokemon || [];
  const hasMore = data ? displayPokemon.length < data.total : false;

  const handleLoadMore = () => {
    setOffset(displayPokemon.length);
  };

  return (
    <div>
      <PokemonGrid pokemon={displayPokemon} />
      <LoadMoreButton
        onClick={handleLoadMore}
        isLoading={isLoading && offset > 0}
        hasMore={hasMore}
      />
    </div>
  );
}

export function LoadMoreView() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PokemonSkeleton count={POKEMON_PER_PAGE} />}>
        <LoadMoreContent />
      </Suspense>
    </ErrorBoundary>
  );
}
