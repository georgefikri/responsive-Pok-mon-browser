import { Link } from 'react-router-dom';
import type { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 capitalize">
          {pokemon.name}
        </h3>
        <p className="text-sm text-gray-500">#{String(pokemon.id).padStart(4, '0')}</p>
      </div>
    </Link>
  );
}
