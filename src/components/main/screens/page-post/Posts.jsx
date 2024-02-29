import React from "react";
import Post from "./Post";

const Posts = ({cropPosts}) => {

  return (
    <section className="posts">
      {cropPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
