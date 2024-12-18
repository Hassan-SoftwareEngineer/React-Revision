import React, { ChangeEvent, useState } from "react";
import classes from "./NewPost.module.css";

type NewPostProps = {
  onCancel : () => void;
  addPost : (post : {title : string, content : string}) => void;
}

const NewPost : React.FC <NewPostProps> = ({onCancel, addPost}) => {

  const [title , setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (event : ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  
  const onContentChange = (event : ChangeEvent<HTMLTextAreaElement> ) => {
    setContent(event.target.value);
  }

  const onSubmitForm = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addPost({title, content});
    onCancel();
  }

    return (
    <form className={classes.form} onSubmit={onSubmitForm}>
    <p>
      <label htmlFor="body">Text</label>
      <textarea id="body" required rows={3} onChange={onContentChange} />
    </p>
    <p>
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" required onChange={onTitleChange}/>
    </p>

    <p className={classes.actions}>
      <button onClick={onCancel} type="button"> Cancel </button>
      <button type="submit"> Submit </button>
    </p>
  </form>
  )
}

export default NewPost;
