import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="ConoAkif"
          src="/static/images/avatar/1.jpg"
        />

        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://lh3.googleusercontent.com/proxy/HxdkJk4BSnNsGku05PJnXRuSp7ZjbC-zNGduizgdZeZrse-Wq2JYiSWttnfhIdl4wb1SbDEEHJWHXiFeVvUNNsHc1K4g"
        alt=""
      />

      <h4 className="post__text">
        <strong>Username: </strong>Caption
      </h4>
    </div>
  );
}

export default Post;
