import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/default.css";
import Container from "./components/Container";

const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonsPage = lazy(() => import("./pages/pokemons"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="pokemons" element={<PokemonsPage />} />
          <Route path="pokemon/:id" element={<div>Pokemon</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Suspense>
  );
};

export default App;
