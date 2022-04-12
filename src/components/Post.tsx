import React from 'react';
import './Post.css';
import PostLeft from './PostLeft';
import PostRight from './PostRight';
import { PostInter } from '../types';
interface IProps {
  posts: PostInter[];
  title: string;
}
const Post = ({ posts, title }: IProps) => {
  return (
    <div className="post-container">
      <div className="post-title__container">
        <span className="post-title">{title}</span>
      </div>
      <div className="Post dis-flex">
        <PostLeft post={posts[0]}></PostLeft>
        <PostRight posts={posts.slice(1)}></PostRight>
      </div>
    </div>
  );
};

export default Post;
