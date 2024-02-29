import React from "react";
import Pagination from "./Pagination";

const Nav = ({ handleChangePage, numberPages, curentPage }) => {
  return (
    <nav className="pagination-nav">
      <div className="container">
        <Pagination
          handleChangePage={handleChangePage}
          numberPages={numberPages}
          curentPage={curentPage}
        />
      </div>
    </nav>
  );
};
export default Nav;
