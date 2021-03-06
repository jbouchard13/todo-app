import "./style.css";

export default function Button(text, id) {
  const buttonEl = document.createElement("div");
  buttonEl.setAttribute("id", id.replaceAll(" ", ""));
  buttonEl.classList.add("button");
  buttonEl.textContent = text;

  return buttonEl;
}
