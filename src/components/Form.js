import React, { useState } from "react";

import Button from "../UI/Button";
import Category from "./Category";
import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [category, setCategory] = useState("");

  const addFormHandler = (event) => {
    event.preventDefault();

    props.onSave(enteredTitle, enteredText);
    setEnteredTitle("");
    setEnteredText("");
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const textHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const categoryHandler = (color) => {
    setCategory(color);
    console.log(category);
  };

  return (
    <div className={classes.container}>
      <Category onCategory={categoryHandler} />
      <form onSubmit={addFormHandler}>
        <div >
          <label>Title</label>
          <input
            className={`${classes.title} ${classes.card}`}
            type="text"
            value={enteredTitle}
            onChange={titleHandler}
            placeholder="タイトル"
            style={{ borderColor: `${category}` }}
          ></input>
        </div>
        <label>Text</label>
        <textarea
          className={`${classes.text} ${classes.card}`}
          type="text"
          value={enteredText}
          onChange={textHandler}
          placeholder="本文"
          style={{ borderColor: `${category}` }}
        ></textarea>
        <div className={classes.button_wrapper}>
          <Button type="submit" category={category}>投稿する</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
