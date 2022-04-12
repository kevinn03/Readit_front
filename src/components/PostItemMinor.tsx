import React from 'react';
import './PostItemMinor.css';
import { PostInter } from '../types';
interface IProps {
  post: PostInter;
}
const PostItemMinor = ({ post }: IProps) => {
  const utcSeconds = Number(post?.date);
  const date = new Date(utcSeconds * 1000);

  return (
    <div className="post-item-minor">
      <div className="post-item-minor__title">
        <a target="_blank" href={post?.url} rel="noreferrer">
          {post?.title}
        </a>
      </div>
      <div className="post-item-minor__stat">
        <span className="post-item-minor__data">
          {date.toLocaleString()} |{' '}
          <a
            className="comment"
            href={post?.commentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comments ({post?.comments})
          </a>{' '}
          | Score: {post?.score}
        </span>
      </div>
    </div>
  );
};

export default PostItemMinor;
