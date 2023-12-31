import { NavLink } from "react-router-dom";
import { PokemonIcon, NintendoIcon, BarsIcon } from "./Icons";
import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import useToggle from "../../hooks/useToggle";

const NavBar = () => {
  const webLinks = [
    { title: "Home", href: "/" },
    { title: "Pokemons", href: "/pokemons" },
    { title: "More", href: "/more" },
  ];

  const { windowWidth } = useWindowSize();
  const [isMenuOpen, toggleMenu] = useToggle(false);

  useEffect(() => {
    if (windowWidth > 768) {
      toggleMenu(false);
    }
  }, [toggleMenu, windowWidth]);

  return (
    <header className="z-30 py-3 w-full bg-primary-900/85 text-zinc-100 rounded-none specialMD:rounded-t-3xl flex flex-wrap items-center justify-between">
      <NavLink to="/" className="ml-10">
        <PokemonIcon className="h-12" />
      </NavLink>
      {windowWidth > 768 ? (
        <>
          <ul className="absolute flex items-center left-[50%] translate-x-[-50%] text-lg">
            {webLinks.map((link) => {
              return (
                <li className="mx-3" key={link.title}>
                  <NavLink to={link.href}>{link.title}</NavLink>
                </li>
              );
            })}
          </ul>
          <NintendoIcon className="h-7 mr-10 flex" />
        </>
      ) : (
        <>
          {isMenuOpen && (
            <div className="left-0 top-0 absolute w-full h-svh flex">
              <div className="w-full backdrop-blur-sm bg-zinc-900/25 z-50" onClick={() => toggleMenu(false)}></div>
              <div className="w-96 bg-zinc-900 backdrop-blur-none z-60 flex flex-col justify-between items-center py-8">
                <div className="flex flex-col justify-center items-center">
                  <PokemonIcon className="h-14 mb-10" />
                  <ul className="flex flex-col">
                    {webLinks.map((link) => {
                      return (
                        <li className="text-xl font-bold mb-6" key={link.title}>
                          <NavLink to={link.href}>{link.title}</NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <NintendoIcon className="h-7 flex" />
              </div>
            </div>
          )}

          <button onClick={() => toggleMenu()} className="flex mr-10">
            <BarsIcon className="h-10" />
          </button>
        </>
      )}
    </header>
  );
};

export default NavBar;
