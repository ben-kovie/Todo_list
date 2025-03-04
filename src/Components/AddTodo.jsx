import { useState } from "react";

import Form from "./Form";
import Todos from "./Todos";
import Outlined from "./Outlined";
import Header from "./Header";
import Footer from "./Footer";

export default function AddTodo() {
  let [todoList, setTodoList] = useState([]);
  let completedNumbers = todoList.filter((numbers) => numbers.done).length;
  let uncompleteNumbers = todoList.length;
  return (
    <div>
      <Header />
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Outlined todoList={todoList} setTodoList={setTodoList} />
      <Footer total={completedNumbers} uncompleted={uncompleteNumbers} />
    </div>
  );
}
