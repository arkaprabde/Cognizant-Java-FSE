import React from "react";

const Post = ({ id, title, body }) => {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
