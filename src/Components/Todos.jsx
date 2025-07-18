import styles from "./todo.module.css";

export default function Todos({ items, todoList, setTodoList }) {
  function HandleDelete() {
    setTodoList(todoList.filter((list) => list !== items));
  }
  function handleClick() {
    let newArray = todoList.map((item) =>
      item.task === items.task ? { ...item, done: !item.done } : item
    );

    setTodoList(newArray);
  }

  let changes = items.done ? styles.completed : "";

  return (
    <div className={styles.itemCard}>
      <div className={styles.items}>
        <span onClick={handleClick} className={changes}>
          {items.task}
        </span>
        <span>
          <button className={styles.deleteButton} onClick={HandleDelete}>
            Delete
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
