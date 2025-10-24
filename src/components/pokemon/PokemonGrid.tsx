import { PokemonCard } from '../common/PokemonCard';
import type { Pokemon } from '../../types/pokemon';

interface PokemonGridProps {
  pokemon: Pokemon[];
}

export function PokemonGrid({ pokemon }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}
