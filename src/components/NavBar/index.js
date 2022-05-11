import "./style.css";

export default function NavBar() {
  const navContainer = document.createElement("div");
  navContainer.setAttribute("id", "navContainer");

  const titleEl = document.createElement("h1");
  titleEl.textContent = "Todo App";

  navContainer.append(titleEl);

  return navContainer;
}
