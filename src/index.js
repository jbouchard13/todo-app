import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import TodoContainer from "./components/TodoContainer";
import "./style.css";

const CONTENT = document.createElement("div");
CONTENT.setAttribute("id", "content");
document.body.appendChild(CONTENT);

CONTENT.append(NavBar(), SideBar(), TodoContainer());
