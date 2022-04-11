import React from 'react';
import './PostLeft.css';
import PostItem from './PostItem';
import { PostInter } from '../types';
interface IProps {
  posts: PostInter[];
}
const PostLeft = ({ posts }: IProps) => {
  const example = posts[2];
  return (
    <div className="dis-flex PostLeft w-100">
      <PostItem post={example}></PostItem>
    </div>
  );
};

export default PostLeft;
