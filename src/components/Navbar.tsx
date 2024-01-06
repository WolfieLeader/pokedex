import useToggle from "@/hooks/useToggle";
import useWindowSize from "@/hooks/useWindowSize";
import { NavLink } from "react-router-dom";
import { PokemonIcon, NintendoIcon, BarsIcon } from "./Icons";
import { Separator } from "@/components/ui/separator";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const { windowWidth } = useWindowSize();
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <header className="py-3 px-2 md:px-8 w-full bg-primary-900/85 text-foreground rounded-none min-[770px]:rounded-t-3xl flex flex-wrap items-center justify-between">
      <Logo />
      {windowWidth > 768 && <Links />}
      {windowWidth > 768 ? <NintendoIcon className="h-7" /> : <MenuBar toggleMenu={toggleMenu} />}
      {windowWidth < 768 && isMenuOpen && <SideMenu closeSideMenu={() => toggleMenu(false)} />}
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <NavLink to="/">
      <PokemonIcon className={twMerge("h-12", className)} />
    </NavLink>
  );
};

const MenuBar = ({ toggleMenu, className }: { toggleMenu: () => void; className?: string }) => {
  return (
    <button onClick={() => toggleMenu()}>
      <BarsIcon className={twMerge("h-10", className)} />
    </button>
  );
};

const Links = () => {
  const webLinks = [
    { title: "Home", href: "/" },
    { title: "Pokemons", href: "/pokemons" },
    { title: "More", href: "/more" },
  ];
  return (
    <ul className="relative md:absolute flex flex-col md:flex-row items-start md:items-center left-0 md:left-[50%] translate-x-0 md:translate-x-[-50%] text-xl md:text-lg font-semibold px-12 md:px-0">
      {webLinks.map((link) => {
        return (
          <li className="my-4 md:my-0 mx-0 md:mx-3" key={link.title}>
            <NavLink to={link.href}>{link.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

const SideMenu = ({ closeSideMenu }: { closeSideMenu: () => void }) => {
  return (
    <div className="left-0 top-0 absolute w-full h-svh flex">
      <div className="w-full backdrop-blur-sm bg-background/25 z-50" onClick={() => closeSideMenu()}></div>
      <div className="w-[30rem] bg-background border-l-2 border-muted backdrop-blur-none z-60 flex flex-col justify-between items-center py-8">
        <Logo className="h-16" />
        <Separator className="my-4" orientation="horizontal" />
        <div className="flex flex-col  w-full h-full">
          <Links />
        </div>
        <NintendoIcon className="h-10" />
      </div>
    </div>
  );
};

export default Navbar;
