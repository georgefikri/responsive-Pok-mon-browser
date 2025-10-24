interface PokemonSkeletonProps {
  count?: number;
}

export function PokemonSkeleton({ count = 20 }: PokemonSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
        >
          <div className="aspect-square bg-gray-200"></div>
          <div className="p-4 space-y-2">
            <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
