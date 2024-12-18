import React, { useState } from "react";
import "./index.css";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
function App() {
  const [isModalVisible , setIsModalVisible] = useState(false);

  const openModal = () =>  {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }
  return (
    <React.Fragment>
      <MainHeader onCreatePost = {openModal} />
      <PostsList isModalVisible = {isModalVisible} closeModal={closeModal} />
    </React.Fragment>
  );
}

export default App;
