import React from 'react';
import './PostItem.css';
import { PostInter } from '../types';
interface IProps {
  post: PostInter;
}
const PostItem = ({ post }: IProps) => {
  const utcSeconds = Number(post?.date);
  const date = new Date(utcSeconds * 1000);

  const getImage = () => {
    if (post?.image.length > 0) {
      return (
        <div className="post-item__image-container">
          <img className="post-item__image" src={post.image}></img>
        </div>
      );
    }
    return;
  };

  return (
    <div className="post-item">
      {getImage()}
      <div className="post-item__title">
        <a target="_blank" href={post?.url} rel="noreferrer">
          {post?.title}
        </a>
      </div>
      <div className="post-item__stat">
        <span className="post-item__data">
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

export default PostItem;
