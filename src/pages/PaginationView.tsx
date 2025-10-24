import { useState, Suspense } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonGrid } from '../components/pokemon/PokemonGrid';
import { Pagination } from '../components/pokemon/Pagination';
import { PokemonSkeleton } from '../components/pokemon/PokemonSkeleton';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { POKEMON_PER_PAGE } from '../utils/constants';

function PaginationContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * POKEMON_PER_PAGE;

  const { data, isLoading, error, refetch } = usePokemonList(offset, POKEMON_PER_PAGE);

  if (error) {
    return <ErrorMessage message="Failed to load Pokemon" onRetry={() => refetch()} />;
  }

  if (isLoading || !data) {
    return <PokemonSkeleton count={POKEMON_PER_PAGE} />;
  }

  const totalPages = Math.ceil(data.total / POKEMON_PER_PAGE);

  return (
    <div>
      <PokemonGrid pokemon={data.pokemon} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export function PaginationView() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PokemonSkeleton count={POKEMON_PER_PAGE} />}>
        <PaginationContent />
      </Suspense>
    </ErrorBoundary>
  );
}
