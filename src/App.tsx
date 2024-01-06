import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/Container";

const Home = lazy(() => import("@/pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Suspense>
  );
};

export default App;
