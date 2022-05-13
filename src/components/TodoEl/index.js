import "./style.css";

export default function TodoEl(content) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo");

  const title = document.createElement("p");
  title.textContent = content.name;

  const date = document.createElement("p");
  date.textContent = content.date;

  todoEl.append(title, date);

  return todoEl;
}
