import React from 'react';
import './PostRight.css';
import PostItemMinor from './PostItemMinor';
import { PostInter } from '../types';
interface IProps {
  posts: PostInter[];
}
const PostRight = ({ posts }: IProps) => {
  const revPosts = posts.slice(0, 4);
  return (
    <div className="dis-flex PostRight w-100">
      {revPosts.map((post) => {
        return <PostItemMinor key={post.title} post={post}></PostItemMinor>;
      })}
    </div>
  );
};

export default PostRight;
