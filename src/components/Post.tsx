import React from 'react';
import './Post.css';
import PostLeft from './PostLeft';
import PostRight from './PostRight';
import { PostInter } from '../types';
interface IProps {
  posts: PostInter[];
}
const Post = ({ posts }: IProps) => {
  return (
    <div>
      <div>
        <span className="post-title">Hello</span>
      </div>
      <div className="Post dis-flex">
        <PostLeft posts={posts}></PostLeft>
        <PostRight></PostRight>
      </div>
    </div>
  );
};

export default Post;
