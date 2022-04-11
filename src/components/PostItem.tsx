import React from 'react';
import './PostItem.css';
import { PostInter } from '../types';
interface IProps {
  post: PostInter;
}
const PostItem = ({ post }: IProps) => {
  return (
    <div className="post-item">
      <div className="post-item__title">
        <a target="_blank" href={post?.url} rel="noreferrer">
          {post?.title}
        </a>
      </div>
      <div className="post-item__stat">Date</div>
    </div>
  );
};

export default PostItem;
