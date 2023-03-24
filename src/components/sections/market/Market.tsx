import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getCrypto } from "../../../store/crypto/crypto.slice";
import { getPageCount } from "../../../utils/pages";
import Cryptos from "../../Cryptos";
import Pagination from "../../Pagination";
type Props = {};

const Market = (props: Props) => {
  const cryptoState = useSelector((state: RootState) => state.crypto);
  const dispatch: AppDispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setTotalPages(getPageCount(100, limit));
  }, []);
  useEffect(() => {
    dispatch(getCrypto({ page: `${currentPage}`, limit: `${limit}` }));
  }, [currentPage]);
  const changePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className=" bg-bg" id="market">
      <div className="w-full">
        {/* Container */}
        <div className="mx-auto max-w-[70%] max-[1200px]:max-w-[90%] ">
          {/* Heading */}
          <h1 className="mb-[3rem] text-4xl font-bold">Market Update</h1>
          {/* Market */}

          {cryptoState.isLoading || cryptoState.crypto?.length === 0 ? (
            <div className="flex h-[970px] items-center justify-center">
              <span className="loader"></span>
            </div>
          ) : (
            <div className="overflow-x-auto ">
              <div className="h-[905px]">
                <div className="grid min-w-[900px] grid-cols-4 rounded-md bg-gradient-to-r from-[#2600fc] to-[#ff00ea] p-[1rem]  text-right text-xl font-bold">
                  <p className=" text-left">Coin</p>
                  <p>Price</p>
                  <p>24h Change</p>
                  <p>Market Cap</p>
                </div>
                <Cryptos cryptos={cryptoState.crypto} />
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                changePage={changePage}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Market;
