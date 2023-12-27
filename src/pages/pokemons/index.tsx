import useAxios from "../../hooks/useAxios";
import useRenderCount from "../../hooks/useRenderCount";

const PokemonsPage = () => {
  useAxios("/pokemon", { params: { limit: 10 } });
  const renderCount = useRenderCount();

  return (
    <div>
      <h1>Pokemons</h1>
      <p>Render count: {renderCount}</p>
    </div>
  );
};

export default PokemonsPage;
