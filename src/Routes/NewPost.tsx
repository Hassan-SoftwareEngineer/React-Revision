import React from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, useNavigate, redirect } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <Modal>
        <Form className={classes.form} method="post">
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" name="content" required rows={3} />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="title" required />
          </p>

          <p className={classes.actions}>
            <button onClick={onCancel} type="button">
              {" "}
              Cancel{" "}
            </button>
            <button type="submit"> Submit </button>
          </p>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default NewPost;
export async function action ({request} : {
  request : Request
}) : Promise<Response> {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData.entries());
  await fetch("http://localhost:8080/posts", {
    method : "POST",
    body : JSON.stringify(postData),
    headers : {
      "Content-Type" : "application/json"
    }
  });

  return redirect("/");
}