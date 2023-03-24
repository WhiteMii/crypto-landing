import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Header from "../../UI/Header";

type Props = {};

const Join = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1020px)");
  // bitcoin
  const before =
    "bounce before:absolute before:-top-[200px] before:-left-[140px] before:w-[50px]  before:content-bitcoin before:scale-[0.15]";
  // ethereum
  const after =
    "bounce  after:absolute after:-top-[200px] after:-right-[80px] after:w-[50px]  after:content-ethereum after:scale-[0.15]";

  return (
    <section id="join" className="bg-bg pt-40 pb-40">
      <div className="relative mx-auto flex h-[100%] max-w-[70%] flex-col justify-center max-[1200px]:max-w-[90%]">
        <div className=" relative flex flex-col items-center justify-center">
          <Header>
            {isAboveMediumScreens && (
              <div className={`${before} ${after}`}></div>
            )}
            join us via <br />
            <span className="bg-gradient-to-l from-[#2600fc] to-[#ff00ea]  bg-clip-text  text-transparent">
              discord
            </span>
          </Header>
          <p className="mt-2 text-center text-xl">
            Invest and manage all your crypto at one place.
          </p>

          <a
            className="mt-10 rounded-full bg-gradient-to-l from-[#2600fc] to-[#ff00ea] px-[2rem] py-[1.2rem] text-center text-lg font-bold"
            rel="noreferrer"
            target="_blank"
            href="https://discord.com/"
          >
            Join via Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default Join;
