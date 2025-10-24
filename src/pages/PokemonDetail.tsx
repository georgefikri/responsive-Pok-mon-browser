import { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

function PokemonDetailContent() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error, refetch } = usePokemonDetail(id!);

  if (error) {
    return <ErrorMessage message="Failed to load Pokemon details" onRetry={() => refetch()} />;
  }

  if (isLoading || !data) {
    return <LoadingSpinner />;
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      grass: 'bg-green-500',
      electric: 'bg-yellow-400',
      psychic: 'bg-pink-500',
      ice: 'bg-cyan-400',
      dragon: 'bg-indigo-600',
      dark: 'bg-gray-800',
      fairy: 'bg-pink-300',
      normal: 'bg-gray-400',
      fighting: 'bg-orange-600',
      flying: 'bg-indigo-300',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      rock: 'bg-yellow-700',
      bug: 'bg-green-400',
      ghost: 'bg-purple-700',
      steel: 'bg-gray-500',
    };
    return colors[type] || 'bg-gray-400';
  };

  const maxStat = 255;

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow mb-6"
      >
        <span>←</span>
        <span className="font-medium">Back to List</span>
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white text-center">
          <h1 className="text-4xl font-bold capitalize flex items-center justify-center gap-2">
            <span>⚡</span>
            {data.name}
          </h1>
          <p className="text-xl mt-2">#{String(data.id).padStart(4, '0')}</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 w-full flex items-center justify-center">
              <img
                src={data.imageUrl}
                alt={data.name}
                className="w-full max-w-sm h-auto"
              />
            </div>

            <div className="mt-6 flex gap-2">
              {data.types.map((type) => (
                <span
                  key={type}
                  className={`px-4 py-2 rounded-full text-white font-semibold capitalize ${getTypeColor(
                    type
                  )}`}
                >
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-8 text-center">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <span>⚖️</span>
                  <span className="text-sm">Height</span>
                </div>
                <p className="text-2xl font-bold">{data.height / 10} m</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <span>🏋️</span>
                  <span className="text-sm">Weight</span>
                </div>
                <p className="text-2xl font-bold">{data.weight / 10} kg</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Base Stats</h2>
            <div className="space-y-4">
              {[
                { label: 'HP', value: data.stats.hp },
                { label: 'Attack', value: data.stats.attack },
                { label: 'Defense', value: data.stats.defense },
                { label: 'Sp. Attack', value: data.stats.specialAttack },
                { label: 'Sp. Defense', value: data.stats.specialDefense },
                { label: 'Speed', value: data.stats.speed },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{stat.label}</span>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(stat.value / maxStat) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Abilities</h2>
              <div className="space-y-2">
                {data.abilities.map((ability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
                  >
                    <span className="font-semibold capitalize">
                      {ability.name.replace('-', ' ')}
                    </span>
                    {ability.isHidden && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        (Hidden)
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-2">Base Experience</h2>
              <p className="text-3xl font-bold text-purple-600">{data.baseExperience} XP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PokemonDetail() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <PokemonDetailContent />
      </Suspense>
    </ErrorBoundary>
  );
}
