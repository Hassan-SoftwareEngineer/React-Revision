import Post from "./Post";
import classes from "./PostsList.module.css";
const PostsList = () => {
  return (
   <ul className={classes.Post}>
    <Post title="MAXIMILIAN" content="React.js is Awesome!" />
    <Post title="MANUEL" content="Check Out the full Course!" />
   </ul>
  )
}

export default PostsList;
