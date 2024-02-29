import React from "react";
import PaginationBtn from "./PaginationBtn";

const Pagination = ({ numberPages, curentPage, handleChangePage }) => {
  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={() => handleChangePage(1)}>
        {" "}
        {"<<"}{" "}
      </button>
      {numberPages
        ?.slice(numberPages[curentPage - 7], numberPages[curentPage + 4])
        .map((numberPage) => (
          <PaginationBtn
            key={numberPage}
            numberPage={numberPage}
            onChangePage={handleChangePage}
            curentPage={curentPage}
          />
        ))}
      <button
        className="pagination-btn"
        onClick={() => handleChangePage(numberPages.at(-1))}>
        {" "}
        {">>"}{" "}
      </button>
    </div>
  );
};

export default Pagination;
