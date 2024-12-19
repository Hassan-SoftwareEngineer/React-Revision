import { Key } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

type postType = {
  title: string;
  content: string;
  id : string;
};

const PostsList = () => {
  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((data: postType) => (
            <Post key={data.id} id = {data.id} title={data.title} content={data.content} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1 style={{ margin: "0.5rem" }}> No Posts Added yet.</h1>
          <p> Add Some !</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
