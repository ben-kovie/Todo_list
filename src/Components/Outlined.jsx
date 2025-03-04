import Todos from "./Todos";
import styles from "./outlined.module.css";
export default function Outlined({ todoList, setTodoList }) {
  let sortedList = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedList.map((todo) => (
        <Todos
          items={todo}
          key={todo.task}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
