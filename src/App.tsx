import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/default.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonsPage = lazy(() => import("./pages/pokemons"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pokemons" element={<PokemonsPage />} />
        <Route path="pokemon/:id" element={<div>Pokemon</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
