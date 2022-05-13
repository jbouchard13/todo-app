import "./style.css";

import Button from "../Button";
import Input from "../Input";

export default function TodoForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "addTodoForm");

  const titleInput = Input("todoTitleInput", "text");

  const dateInput = Input("todoDateInput", "date");

  const addBtn = Button("Add Task", "addTodoBtn");

  const closeBtn = Button("Close", "closeTodoFormBtn");

  form.append(titleInput, dateInput, addBtn, closeBtn);

  return form;
}
