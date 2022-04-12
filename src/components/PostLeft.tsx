import React from 'react';
import './PostLeft.css';
import PostItem from './PostItem';
import { PostInter } from '../types';
interface IProps {
  post: PostInter;
}
const PostLeft = ({ post }: IProps) => {
  return (
    <div className="dis-flex PostLeft w-100">
      <PostItem post={post}></PostItem>
    </div>
  );
};

export default PostLeft;
