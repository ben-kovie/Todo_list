import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todoList, setTodoList }) {
  let [addtodo, setAddTodo] = useState({ task: "", done: false });
  function HandleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, addtodo]);
    setAddTodo({ task: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={HandleSubmit}>
        <div className={styles.formcontainer}>
          <input
            className={styles.inputField}
            onChange={(e) => setAddTodo({ task: e.target.value, done: false })}
            type="text"
            value={addtodo.task}
            placeholder="Add items"
          />
          <button className={styles.inputButton}>ADD</button>
        </div>
      </form>
    </div>
  );
}
