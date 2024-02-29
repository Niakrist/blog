import React from "react";

const PaginationBtn = ({ numberPage, onChangePage, curentPage }) => {
  return (
    <button
      onClick={() => onChangePage(numberPage)}
      className={`pagination-btn ${
        numberPage === curentPage ? "pag-active" : ""
      }`}>
      {numberPage}
    </button>
  );
};

export default PaginationBtn;
