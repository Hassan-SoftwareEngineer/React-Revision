import React from "react";
import classes from "./Post.module.css";
import "../index.css";
import { Link } from "react-router-dom";

type PostProps = {
  title: string;
  content: string;
  id: string;
};

const Post: React.FC<PostProps> = (props) => {
  return (
    <div className={classes.post}>
      <Link to={props.id} className={classes.link}>
        <p className={classes.author}> {props.title} </p>
        <p className={classes.text}> {props.content} </p>
      </Link>
    </div>
  );
};

export default Post;
