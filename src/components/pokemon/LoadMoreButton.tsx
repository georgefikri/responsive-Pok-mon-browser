interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

export function LoadMoreButton({ onClick, isLoading, hasMore }: LoadMoreButtonProps) {
  if (!hasMore) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-600 font-medium">
          You've reached the end! All Pokemon loaded.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Loading...
          </>
        ) : (
          'Load More'
        )}
      </button>
    </div>
  );
}
