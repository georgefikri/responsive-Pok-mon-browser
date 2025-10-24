# Pokémon Browser

A responsive Pokémon browser application built with React, TypeScript, and modern web technologies. Browse and explore Pokémon with two different viewing modes: pagination controls and infinite scroll with load more functionality.

[Live Demo](https://pokemon-browser-nine.vercel.app/)

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query (@tanstack/react-query)** - Data fetching, caching, and state management
- **PokeAPI** - Public Pokémon API for data

## Project Overview

This application demonstrates modern React patterns and best practices:

- **Two List View Variations**:

  - Pagination View - Navigate through pages with prev/next and page number controls
  - Infinite Scroll View - Load more Pokémon dynamically with a "Load More" button

- **Detail Pages** - Click any Pokémon to view detailed information including stats, abilities, types, height, and weight

- **Robust Error Handling** - Error boundaries and user-friendly error messages with retry functionality

- **Loading States** - Skeleton loaders and spinners for better UX

- **Fully Responsive** - Adapts seamlessly across desktop, tablet, and mobile devices

## Architecture

The project follows a clean, modular architecture with clear separation of concerns:

```
src/
├── api/              # API client and response types
├── components/
│   ├── common/       # Reusable UI components (ErrorBoundary, Cards, etc.)
│   ├── layout/       # Layout components (Header, Layout wrapper)
│   └── pokemon/      # Pokemon-specific components (Grid, Pagination, etc.)
├── hooks/            # Custom React Query hooks
├── pages/            # Route-level page components
├── routes/           # React Router configuration
├── types/            # TypeScript domain types
└── utils/            # Constants and helper functions
```

### Key Architectural Decisions

- **React Query** handles all server state, caching, and background synchronization
- **React Suspense** for declarative loading states
- **Error Boundaries** for graceful error handling
- **Custom Hooks** abstract data fetching logic from UI components
- **Type Safety** throughout with TypeScript strict mode
- **Responsive Design** using Tailwind's mobile-first breakpoint system

## How to Run Locally

### Prerequisites

- Node.js 18+ and npm

### Installation & Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd izam-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Two separate list views (Pagination + Load More)
- ✅ Detailed Pokémon information pages
- ✅ Type-safe API integration with PokeAPI
- ✅ Smart caching and data synchronization
- ✅ Error boundaries with retry functionality
- ✅ Loading skeletons and spinners
- ✅ Fully responsive grid layouts
- ✅ Clean, modular code structure
- ✅ No external state management needed (React Query handles it)

## API

This project uses the public [PokeAPI](https://pokeapi.co) with the following endpoints:

- **List Pokémon**: `GET https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
- **Pokémon Details**: `GET https://pokeapi.co/api/v2/pokemon/{id}`

## License

MIT
