import React from "react";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <h1 className="relative mx-auto text-center text-8xl font-bold uppercase max-[1354px]:text-7xl max-[500px]:text-5xl">
      {children}
    </h1>
  );
};

export default Header;
