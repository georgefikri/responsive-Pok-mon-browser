import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <span className="text-yellow-500">⚡</span>
            Pokédex
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Discover and explore Pokemon with page controls
          </p>
        </div>

        <nav className="flex justify-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`
            }
          >
            Page Controls
          </NavLink>
          <NavLink
            to="/infinite-scroll"
            className={({ isActive }) =>
              `px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`
            }
          >
            Infinite Scroll
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
