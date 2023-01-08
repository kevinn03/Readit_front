import React from 'react';
import './Post.css';
import PostLeft from './PostLeft';
import PostRight from './PostRight';
import { PostInter } from '../types';
interface IProps {
  posts: PostInter[];
  title: string;
  idName: string;
}
const Post = ({ posts, title, idName }: IProps) => {
  const revPosts = [...posts];
  revPosts.sort((a, b) => (a.score < b.score ? 1 : -1));
  return (
    <div className="post__container" id={idName}>
      <div className="post-title__container">
        <span className="post-title">{title}</span>
      </div>
      <div className="Post dis-flex">
        <PostLeft post={revPosts[0]}></PostLeft>
        <PostRight posts={revPosts.slice(1)}></PostRight>
      </div>
    </div>
  );
};

export default Post;
