import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ICrypto } from "../models/models";
import {
  getCryptoById,
  getCryptoDescription,
} from "../store/crypto/crypto.slice";

type Props = {};

const Crypto = (props: Props) => {
  const { cryptoSymbol } = useParams();

  const dispatch = useAppDispatch();
  const cryptoState = useAppSelector((state) => state.crypto);

  useEffect(() => {
    if (cryptoSymbol) {
      dispatch(getCryptoById(cryptoSymbol));
      dispatch(getCryptoDescription(cryptoSymbol));
    }
  }, [dispatch]);

  const index: string = cryptoSymbol === undefined ? "" : cryptoSymbol;
  const changeHours: number =
    cryptoState.cryptoById?.RAW?.[index]?.USD?.CHANGE24HOUR === undefined
      ? 0
      : cryptoState.cryptoById?.RAW?.[index]?.USD?.CHANGE24HOUR;

  return (
    <>
      <section className="h-full w-full bg-bg">
        <div className="mx-auto flex h-[100%] max-w-[70%] flex-col items-center justify-center max-[1200px]:max-w-[90%]">
          <div
            className="flex gap-10 max-[840px]:flex-col"
            key={cryptoState.description?.[index]?.Name}
          >
            {/* LEFT SIDE */}
            {cryptoState.isLoading || cryptoState.error ? (
              <span className="loader flex"></span>
            ) : (
              <div className="flex w-full min-w-[160px] flex-col items-center gap-4 border-r-2 p-4 font-bold max-[840px]:border-r-0 max-[840px]:border-b-2">
                <img
                  className="w-full max-w-[200px] "
                  src={`https://www.cryptocompare.com${cryptoState.description?.[index]?.ImageUrl}`}
                  alt={cryptoState.description?.[index]?.Name}
                />

                <h2 className="text-center text-3xl ">
                  {cryptoState.description?.[index]?.Name}
                </h2>

                <span className="flex flex-col gap-2 text-center max-[840px]:flex-row">
                  <span>Rating:</span>
                  {cryptoState.description?.[index]?.Rating?.Weiss?.Rating}
                </span>
              </div>
            )}
            {/* RIGHT SIDE */}
            <div className="flex flex-col  justify-center gap-10 ">
              {cryptoState.isLoading || cryptoState.error ? (
                <></>
              ) : (
                <>
                  <div className="flex  justify-between gap-4 text-xl font-bold max-[840px]:flex-wrap max-[840px]:justify-center">
                    <div className="flex gap-2">
                      <span>24h Change:</span>
                      <span
                        className={
                          changeHours >= 0 ? "text-green-500" : "text-red-500"
                        }
                      >
                        {
                          cryptoState.cryptoById?.DISPLAY?.[index]?.USD
                            ?.CHANGE24HOUR
                        }
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span>Price:</span>
                      <span className={"green-text"}>
                        {cryptoState.cryptoById?.DISPLAY?.[index]?.USD?.PRICE}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span>Symbol:</span>
                      <span>{cryptoState.description?.[index]?.Symbol}</span>
                    </div>
                  </div>
                  <div className="max-h-[400px] overflow-auto max-[540px]:h-[300px]">
                    <p className="">
                      {cryptoState.description?.[index]?.Description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crypto;
