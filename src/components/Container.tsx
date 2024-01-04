import React from "react";
import PokeballImage from "../images/PokeballsBackground.jpg";
import NavBar from "./NavBar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-svh">
      <Background />
      <div className="relative h-svh min-[770px]:h-[calc(100svh-5rem)] z-10 m-0 min-[770px]:my-10 min-[770px]:mx-20 lg:mx-28 bg-zinc-900/85 rounded-none min-[770px]:rounded-3xl">
        <NavBar />
        <main className="px-8 py-2">{children}</main>
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <>
      <img
        src={PokeballImage}
        alt="pokeball"
        className="absolute top-0 left-0 w-full h-full -z-20 object-cover object-right min-[770px]:object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-zinc-900/90"></div>
    </>
  );
};

export default Container;
