import React from 'react';
import './PostRight.css';
import PostItemMinor from './PostItemMinor';
import { PostInter } from '../types';
interface IProps {
  posts: PostInter[];
}
const PostRight = ({ posts }: IProps) => {
  return (
    <div className="dis-flex PostRight w-100">
      {posts.map((post) => {
        return <PostItemMinor key={post.title} post={post}></PostItemMinor>;
      })}
    </div>
  );
};

export default PostRight;
