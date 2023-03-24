import React, { useState } from "react";
import Header from "../../UI/Header";
import { useEffect } from "react";
import { getCrypto, getTopCrypto } from "../../../store/crypto/crypto.slice";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import AnchorLink from "react-anchor-link-smooth-scroll";

// TODO refactor before and after elements
type Props = {};
const Hero: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const cryptoState = useAppSelector((state) => state.crypto);
  useEffect(() => {
    dispatch(getTopCrypto());
  }, [dispatch]);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1020px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 620px)");
  // bitcoin
  const before =
    "bounce before:absolute before:-top-[200px] before:-left-[100px] before:w-[50px]  before:content-bitcoin before:scale-[0.15]";
  // ethereum
  const after =
    "bounce  after:absolute after:-top-[200px] after:-right-[40px] after:w-[50px]  after:content-ethereum after:scale-[0.15]";

  return (
    <section
      id="home"
      className="h-full gap-16 bg-gradient-to-t from-[#0f051d]  to-[#130749] "
    >
      {/* Header and top crypto */}
      <div className=" relative mx-auto flex h-[100%] max-w-[70%] flex-col justify-center max-[1200px]:max-w-[90%]">
        {/* HEADER */}
        <Header>
          {isAboveMediumScreens && <div className={`${before} ${after}`}></div>}
          TRACK AND TRADE <br />
          <span className=" bg-gradient-to-l from-[#2600fc]  to-[#ff00ea]  bg-clip-text text-transparent">
            CRYPTO CURRENCIES
          </span>
        </Header>
        {/* CRYPTO */}
        {cryptoState.isLoading ? (
          // TODO Make loading bar
          <div className="flex h-[200px] items-center justify-center">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            {isAboveSmallScreens ? (
              <div className="ga mx-auto mt-10 flex justify-center  gap-x-24 max-[830px]:max-w-[70%] max-[830px]:flex-wrap max-[830px]:gap-y-4 max-[830px]:gap-x-32">
                {cryptoState.topCrypto?.map((cryptoEl) => (
                  <Link
                    to={`/crypto/${cryptoEl.CoinInfo.Name}`}
                    key={cryptoEl.CoinInfo.Id}
                    className="flex select-none flex-col items-center text-center"
                  >
                    <img
                      className="w-[6rem]"
                      src={`https://www.cryptocompare.com${cryptoEl.CoinInfo.ImageUrl}`}
                      alt={cryptoEl?.CoinInfo.Name}
                    />
                    <p className="mt-[10px] font-bold">
                      {cryptoEl?.CoinInfo.Name}
                      <span
                        className={
                          "ml-[10px] font-bold" +
                          (cryptoEl.RAW.USD.CHANGE24HOUR <= 0
                            ? " text-red-500"
                            : " text-green-500")
                        }
                      >
                        {"$ " + cryptoEl?.RAW.USD.CHANGE24HOUR?.toFixed(2)}
                      </span>
                    </p>
                    <p className="font-bold">{cryptoEl.DISPLAY.USD.PRICE}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <AnchorLink
                className=" mx-auto  my-[30px] cursor-pointer rounded-full bg-gradient-to-l from-[#2600fc] to-[#ff00ea] px-[2rem] py-[1rem] text-lg"
                href="#market"
              >
                See Prices ⮟
              </AnchorLink>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
