import "./style.css";

import Todo from "../../Functions/Todo";
import TodoEl from "../TodoEl";
import TodoForm from "../TodoForm";
import Button from "../Button";
import Input from "../Input";

const todoArr = [];

const createNewTodo = (title, date, project) => {};

const todo = new Todo("test", "12/12/12", "project");
todo.logInfo();

todoArr.push(todo);

console.log(todoArr);

// must import todo info from local storage
// use that data to render the todos
// update which todos are displayed depending on which option is chosen in the side bar
// if a new todo is added, send it to storage and render it

export default function TodoContainer() {
  const todoContainerEl = document.createElement("div");
  todoContainerEl.setAttribute("id", "todoContainer");

  todoArr.map((todo) => {
    todoContainerEl.append(TodoEl(todo));
  });

  const todoForm = TodoForm();
  const addBtn = todoForm.children[2];

  addBtn.addEventListener("click", (e) => {
    const titleInput = document.querySelector("#todoTitleInput").value;
    const dateInput = document.querySelector("#todoDateInput").value;
    // will get current project selected, defaults to '' if no project selected
    const project = "";

    const newTask = new Todo(titleInput, dateInput, project);
    todoArr.push(newTask);

    todoContainerEl.append(TodoEl(newTask));
    console.log(todoArr);
  });

  todoContainerEl.prepend(todoForm);

  return todoContainerEl;
}
