import React from 'react';
import './Main.css';
import Post from './Post';
import { PostInter } from '../types';
// import '../App.css';
interface IProps {
  posts: PostInter[];
}
const Main = ({ posts }: IProps) => {
  return (
    <div className="Main h-100 border-box">
      <Post posts={posts}></Post>
      <Post posts={posts}></Post>
    </div>
  );
};

export default Main;
