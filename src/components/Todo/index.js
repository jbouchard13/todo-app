import "./style.css";

export default function Todo(content) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo");

  const title = document.createElement("div");
  title.textContent = content.name;

  const date = document.createElement("div");
  date.textContent = content.date;

  todoEl.append(title, date);

  return todoEl;
}
