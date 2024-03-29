import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2 className="post-h2">
        <a href="#!">
          {post.id}. {post.name}
        </a>
      </h2>
      <p className="post-p">{post.body}</p>
      <Link className="post-link" to={'/posts/' + post.id}>
        <span>Read more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </Link>
    </div>
  );
};
export default Post;
