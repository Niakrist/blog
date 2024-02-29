import React from "react";
import Nav from "../../pagination/Nav";
import Posts from "./Posts";
import SideBar from "./SideBar";

const PagePost = ({ cropPosts, handleChangePage, numberPages, curentPage }) => {
  return (
    <>
      <div className="wrapper container">
        <SideBar />
        <article>
          <Posts cropPosts={cropPosts} />
        </article>
      </div>
      <Nav
        handleChangePage={handleChangePage}
        numberPages={numberPages}
        curentPage={curentPage}
      />
    </>
  );
};

export default PagePost;
