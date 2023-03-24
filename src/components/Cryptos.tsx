import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CryptoState, ICrypto } from "../models/models";
import { RootState } from "../store";

type Props = {
  cryptos: ICrypto[] | null;
};
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const Cryptos = ({ cryptos }: Props) => {
  return (
    <div className="flex min-w-[900px] flex-col  max-[900px]:w-fit">
      {cryptos?.map((item) => (
        <Link
          to={`/crypto/${item.CoinInfo.Name}`}
          className="grid grid-cols-4 items-center border-b-[1px]  p-[10px] text-right hover:bg-[#200840]"
          key={item.CoinInfo.Id}
        >
          <span className="flex items-center gap-5 text-left">
            <img
              className="w-[60px] items-end"
              src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`}
              alt={item.CoinInfo.Name}
            />
            {item.CoinInfo.FullName}
          </span>
          <p>
            {item.DISPLAY === undefined ? "No Info" : item.DISPLAY?.USD.PRICE}
          </p>
          <p
            className={
              "slider-coin__price " +
              (item.RAW?.USD.CHANGE24HOUR >= 0
                ? "text-green-500"
                : "text-red-500")
            }
          >
            {item.DISPLAY == undefined
              ? "No Info"
              : item.DISPLAY?.USD.CHANGE24HOUR}
          </p>
          <p>
            {item.DISPLAY == undefined ? "No Info" : item.DISPLAY?.USD.MKTCAP}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Cryptos;
