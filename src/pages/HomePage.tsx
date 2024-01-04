import { Link } from "react-router-dom";
import Pikachu from "../images/Pikachu.png";

const HomePage = () => {
  return (
    <>
      <Content />
      <img src={Pikachu} alt="Pikachu" className="absolute w-[26rem] right-0 top-36 translate-x-10 opacity-75" />
    </>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col m-4">
      <h1 className="text-transparent font-outline-2 font-black text-9xl -mb-4">Pokedex</h1>
      <h2 className="font-medium text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-primary-500/30 to-primary-500/10 mb-6">
        Gotta Catch 'Em All!
      </h2>
      <p className="text-zinc-100/65 text-4xl w-[42rem]">
        Explore information about various Pokemon species, abilities, types, and more.
        <br />
        Start your journey to become a Pokemon Master by discovering and learning about all the Pokemon in the world.
      </p>
      <Buttons />
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="my-4 text-2xl font-semibold text-zinc-100">
      <Link to="/pokemons">
        <button className="bg-primary border-4 border-primary px-8 py-4 uppercase mx-2 rounded-md">
          View Pokemons
        </button>
      </Link>
      <Link to="https://github.com/WolfieLeader/pokedex">
        <button className="bg-transparent border-4 border-zinc-100 px-8 py-4 uppercase mx-2 rounded-md">
          Check Out Github
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
