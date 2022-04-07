import React from 'react';
import './Post.css';
import PostLeft from './PostLeft';
import PostRight from './PostRight';
const Post = () => {
  return (
    <div>
      <div>
        <span className="post-title">Hello</span>
      </div>
      <div className="Post dis-flex">
        <PostLeft></PostLeft>
        <PostRight></PostRight>
      </div>
    </div>
  );
};

export default Post;
