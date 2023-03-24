import React from "react";
import { getPagesArray } from "../utils/pages";

type Props = {
  totalPages: number;
  currentPage: number;
  changePage: (value: number) => void;
};
const styles =
  "w-[35px] h-[35px] text-center py-[6px] rounded-full cursor-pointer";
const Pagination = ({ totalPages, currentPage, changePage }: Props) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="flex justify-center gap-5  pt-[30px] max-[600px]:gap-2">
      {pagesArray.map((page) => (
        <span
          className={
            currentPage === page
              ? "bg-white text-red-500 " + `${styles} `
              : `${styles} bg-gradient-to-r from-[#2600fc] to-[#ff00ea]`
          }
          key={page}
          onClick={() => changePage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
