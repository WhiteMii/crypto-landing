import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "./CustomLink";
import React, { useState } from "react";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1020px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-bg drop-shadow transition duration-500";

  const gradient =
    "cursor-pointer to-gradient-second from-gradient-first hover:bg-gradient-to-b hover:bg-clip-text  hover:text-transparent duration-500";

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navbarBackground}`}
      >
        <div className="mx-auto w-full max-w-[70%] max-[1200px]:max-w-[90%]">
          <div className={`${flexBetween} w-full`}>
            {/* LEFT SIDE */}
            <Link to="/">
              <span
                className={`cursor-pointer text-3xl font-bold uppercase ${gradient}`}
              >
                coindom
              </span>
            </Link>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`flex w-full justify-center`}>
                <div className={`${flexBetween} ml-auto gap-8`}>
                  <CustomLink page="Home" />
                  <CustomLink page="Market" />
                  <CustomLink page="Choose Us" />
                  <CustomLink page="Join" />
                </div>
                <div className={`${flexBetween} ml-auto gap-8`}>
                  <i
                    className={`fa-brands fa-twitter ${gradient} text-xl `}
                  ></i>
                  <i
                    className={`fa-brands fa-discord ${gradient} text-xl `}
                  ></i>
                </div>
              </div>
            ) : (
              <i
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="fa-solid fa-bars-staggered hamburger-menu text-2xl"
              ></i>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className=" fixed  right-0 bottom-0 z-40 h-full w-[300px] bg-bg  drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <i className="fa-solid fa-xmark text-3xl text-gray-400"></i>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <CustomLink page="Home" />
            <CustomLink page="Market" />
            <CustomLink page="Choose Us" />
            <CustomLink page="Join" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
