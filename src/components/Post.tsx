import React from 'react';
import classes from "./Post.module.css";
import "../index.css";

type PostProps = {
  title : string;
  content : string;
}

const Post : React.FC <PostProps> = (props) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}> {props.title} </p>
      <p className={classes.text}> {props.content} </p>
    </div>
  )
}

export default Post;
