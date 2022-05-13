const buttons = ["Inbox", "Today", "This Week"];

import "./style.css";
import Button from "../Button";
import Input from "../Input";

let projects = [
  // contains project names
  "Test Project",
];

const testLog = (name) => {
  console.log(name);
};

const addProject = (newProject) => {
  // get project name from user input field
};

export default function SideBar() {
  const sideBarContainer = document.createElement("div");
  sideBarContainer.setAttribute("id", "sideBarContainer");

  buttons.map((item) => {
    let button = Button(item, item);
    // add event listener to each button
    // will display info depending on what button is clicked
    button.addEventListener("click", (e) => {
      testLog(e.target.id);
    });
    sideBarContainer.append(button);
  });

  // header to go above the projects container
  const projectsHeader = document.createElement("h2");
  projectsHeader.textContent = "Projects";
  sideBarContainer.appendChild(projectsHeader);

  const projectsContainer = document.createElement("div");
  projectsContainer.setAttribute("id", "projectsContainer");

  // all project names will be appended before the addBtn
  const addBtn = Button("+", "addProject");
  projectsContainer.appendChild(addBtn);

  sideBarContainer.appendChild(projectsContainer);
  return sideBarContainer;
}
