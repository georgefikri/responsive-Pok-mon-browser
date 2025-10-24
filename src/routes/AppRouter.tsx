import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PaginationView } from '../pages/PaginationView';
import { LoadMoreView } from '../pages/LoadMoreView';
import { PokemonDetail } from '../pages/PokemonDetail';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PaginationView />} />
          <Route path="/infinite-scroll" element={<LoadMoreView />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
