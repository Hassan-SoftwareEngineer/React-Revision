import React, { ChangeEvent, useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

type postType = {
  title: string;
  content: string;
};

type PostsListProps = {
  isModalVisible: boolean;
  closeModal: () => void;
};

const PostsList: React.FC<PostsListProps> = ({
  isModalVisible,
  closeModal,
}) => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsFetching(true);
        const response = await fetch("http://localhost:8080/posts");
        const resData = await response.json();
        setPosts(resData.posts);
        setIsFetching(false);
      } catch (error) {
        console.log("Error During Fetching Posts : ", error);
      }
    }

    fetchPosts();
  }, []);
  const setPostHandler = (post: postType) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((prevPost) => [...prevPost, post]);
  };
  return (
    <>
      {isModalVisible && (
        <Modal onClose={closeModal}>
          <NewPost onCancel={closeModal} addPost={setPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((data, index) => (
            <Post key={index} title={data.title} content={data.content} />
          ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1 style={{ margin: "0.5rem" }}> No Posts Added yet.</h1>
          <p> Add Some !</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Please Wait Loading ..... </p>
        </div>
      )}
    </>
  );
};

export default PostsList;
