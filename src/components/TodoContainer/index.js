import "./style.css";

import Todo from "../Todo";

const testArr = [
  {
    name: "test",
    date: "12/01/1994",
  },
  {
    name: "tedsdst",
    date: "12/01/1992",
  },
  {
    name: "asdf",
    date: "12/01/1994",
  },
];

// must import todo info from local storage
// use that data to render the todos
// update which todos are displayed depending on which option is chosen in the side bar
// if a new todo is added, send it to storage and render it

export default function TodoContainer() {
  const todoContainerEl = document.createElement("div");
  todoContainerEl.setAttribute("id", "todoContainer");

  testArr.map((todo) => {
    todoContainerEl.append(Todo(todo));
  });

  return todoContainerEl;
}
