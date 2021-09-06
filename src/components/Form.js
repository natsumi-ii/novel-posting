import React, { useState } from "react";

import Button from "./Bntton";
import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const addFormHandler = (event) => {
    event.preventDefault();

    props.onSave(enteredTitle, enteredText);
    setEnteredTitle('');
    setEnteredText('');
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const textHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={addFormHandler}>
        <label>Title</label>
        <input
          className={`${classes.title} ${classes.card}`}
          type="text"
          value={enteredTitle}
          onChange={titleHandler}
          placeholder="タイトル"
        ></input>

        <label>Text</label>
        <textarea
          className={`${classes.text} ${classes.card}`}
          type="text"
          value={enteredText}
          onChange={textHandler}
          placeholder="本文"
        ></textarea>
        <div className={classes.button_wrapper}>
      <Button type="submit">投稿する</Button>
      </div>
      </form>
    </div>
  );
};

export default Form;
